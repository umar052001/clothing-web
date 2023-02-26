import {
  LoaderBar,
  LoaderBarGreen,
  LoaderBarRed,
  LoaderContainer,
} from "./spinner.styles";

const Spinner = () => {
  return (
    <LoaderContainer>
      <LoaderBarRed />
      <LoaderBar />
      <LoaderBarGreen />
    </LoaderContainer>
  );
};

export default Spinner;
