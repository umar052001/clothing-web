import { takeLatest, put, call, all } from "typed-redux-saga/macro";

import { USER_ACTION_TYPE } from "./user.types";

import {
  signInSuccess,
  signInFailure,
  signOutFailed,
  signUpFailed,
  EmailSignInStart,
  SignUpStart,
  signUpSuccess,
  signOutSuccess,
  SignUpSuccess,
} from "./user.action";
import {
  AdditionalInformation,
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
  getCurrentUser,
  signInAuthUserWithEmailAndPassword,
  signInWithGooglePopup,
  signOutUser,
} from "../../utils/firebase/firebase.utils";
import { User } from "firebase/auth";

export function* getSnapshotFromUserAuth(
  userAuth: User,
  additionalInformation?: AdditionalInformation
) {
  try {
    const userSnapshot = yield* call(
      createUserDocumentFromAuth,
      userAuth,
      additionalInformation
    );

    if (userSnapshot) {
      yield* put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() }));
    }
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

export function* signInWithGoogle() {
  try {
    const { user } = yield* call(signInWithGooglePopup);
    yield* call(getSnapshotFromUserAuth, user);
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}
export function* signInWithEmail({ payload: { email, password } }:EmailSignInStart) {
  try {
    const userCredentials = yield* call(
      signInAuthUserWithEmailAndPassword,
      email,
      password
    );
      if(userCredentials)
      {
        const {user} = userCredentials
        yield* call(getSnapshotFromUserAuth, user);
      }

  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

export function* isUserAuthenticated() {
  try {
    const userAuth = yield* call(getCurrentUser);
    if (!userAuth) return;
    yield* call(getSnapshotFromUserAuth, userAuth);
  } catch (error) {
    yield* put(signInFailure(error as Error));
  }
}

export function* signUp({ payload: { email, password, displayName } }:SignUpStart) {
  try {
    const userCredentials = yield* call(
      createAuthUserWithEmailAndPassword,
      email,
      password
    );
      if (userCredentials) {
        const {user} = userCredentials
        yield* put(signUpSuccess(user, {displayName}));
      }

  } catch (error) {
    yield* put(signUpFailed(error as Error));
  }
}

export function* signOut() {
  try {
    yield* call(signOutUser);
    yield* put(signOutSuccess());
  } catch (error) {
    yield* put(signOutFailed(error as Error));
  }
}

export function* signInAfterSignUp({ payload: { user, additionalDetails } }:SignUpSuccess) {
  yield* call(getSnapshotFromUserAuth, user, additionalDetails);
}

export function* onGoogleSignInStart() {
  yield* takeLatest(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* onCheckUserSession() {
  yield* takeLatest(USER_ACTION_TYPE.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onEmailSignInStart() {
  yield* takeLatest(USER_ACTION_TYPE.EMAIL_SIGN_IN_START, signInWithEmail);
}

export function* onSignUpStart() {
  yield* takeLatest(USER_ACTION_TYPE.SIGN_UP_START, signUp);
}

export function* onSignUpSuccess() {
  yield* takeLatest(USER_ACTION_TYPE.SIGN_UP_SUCCESS, signInAfterSignUp);
}

export function* onSignOutStart() {
  yield* takeLatest(USER_ACTION_TYPE.SIGN_OUT_START, signOut);
}

export function* userSaga() {
  yield* all([
    call(onCheckUserSession),
    call(onGoogleSignInStart),
    call(onEmailSignInStart),
    call(onSignUpStart),
    call(onSignUpSuccess),
    call(onSignOutStart),
  ]);
}
