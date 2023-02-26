import { User } from "firebase/auth";
import {
  AdditionalInformation,
  UserData,
} from "../../utils/firebase/firebase.utils";
import {
  Action,
  ActionWithPayLoad,
  createAction,
  withMatcher,
} from "../../utils/reducer/reducer";
import { USER_ACTION_TYPE } from "./user.types";

export type CheckUserSession = Action<USER_ACTION_TYPE.CHECK_USER_SESSION>;

export type SetCurrentUser = ActionWithPayLoad<
  USER_ACTION_TYPE.SET_CURRENT_USER,
  UserData
>;
export type GoogleSignInStart = Action<USER_ACTION_TYPE.GOOGLE_SIGN_IN_START>;
export type EmailSignInStart = ActionWithPayLoad<
  USER_ACTION_TYPE.EMAIL_SIGN_IN_START,
  { email: string; password: string }
>;
export type SignInSuccess = ActionWithPayLoad<
  USER_ACTION_TYPE.SIGN_IN_SUCCESS,
  UserData
>;

export type SignInFaliure = ActionWithPayLoad<
  USER_ACTION_TYPE.SIGN_IN_FAILURE,
  Error
>;
export const checkUserSession = withMatcher(
  (): CheckUserSession => createAction(USER_ACTION_TYPE.CHECK_USER_SESSION)
);

export type SignUpStart = ActionWithPayLoad<
  USER_ACTION_TYPE.SIGN_UP_START,
  { email: string; password: string; displayName: string }
>;
export type SignOutSuccess = Action<USER_ACTION_TYPE.SIGN_OUT_SUCCESS>;

export type SignUpFailed = ActionWithPayLoad<
  USER_ACTION_TYPE.SIGN_UP_FAILED,
  Error
>;
export type SignUpSuccess = ActionWithPayLoad<
  USER_ACTION_TYPE.SIGN_UP_SUCCESS,
  { user: User; additionalDetails: AdditionalInformation }
>;
export type SignOutStart = Action<USER_ACTION_TYPE.SIGN_OUT_START>;
export type SignOutFailed = ActionWithPayLoad<
  USER_ACTION_TYPE.SIGN_OUT_FAILED,
  Error
>;

export const setCurrentUser = withMatcher(
  (user: UserData): SetCurrentUser =>
    createAction(USER_ACTION_TYPE.SET_CURRENT_USER, user)
);

export const googleSignInStart = withMatcher(
  (): GoogleSignInStart => createAction(USER_ACTION_TYPE.GOOGLE_SIGN_IN_START)
);

export const emailSignInStart = withMatcher(
  (email: string, password: string): EmailSignInStart =>
    createAction(USER_ACTION_TYPE.EMAIL_SIGN_IN_START, { email, password })
);
export const signInSuccess = withMatcher(
  (user: UserData & {id:string}): SignInSuccess =>
    createAction(USER_ACTION_TYPE.SIGN_IN_SUCCESS, user)
);
export const signInFailure = withMatcher(
  (error: Error): SignInFaliure =>
    createAction(USER_ACTION_TYPE.SIGN_IN_FAILURE, error)
);

export const signUpStart = withMatcher(
  (email: string, password: string, displayName: string): SignUpStart =>
    createAction(USER_ACTION_TYPE.SIGN_UP_START, {
      email,
      password,
      displayName,
    })
);

export const signUpSuccess = withMatcher(
  (user: User, additionalDetails: AdditionalInformation): SignUpSuccess =>
    createAction(USER_ACTION_TYPE.SIGN_UP_SUCCESS, { user, additionalDetails })
);

export const signUpFailed = withMatcher((error: Error) =>
  createAction(USER_ACTION_TYPE.SIGN_UP_FAILED, error)
);
export const signOutStart = withMatcher(
  (): SignOutStart => createAction(USER_ACTION_TYPE.SIGN_OUT_START)
);
export const signOutSuccess = withMatcher(
  (): SignOutSuccess => createAction(USER_ACTION_TYPE.SIGN_OUT_SUCCESS)
);
export const signOutFailed = withMatcher(
  (error: Error): SignOutFailed =>
    createAction(USER_ACTION_TYPE.SIGN_OUT_FAILED, error)
);
