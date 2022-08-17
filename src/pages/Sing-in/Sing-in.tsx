import { HeaderForPages } from "../../components/UI/HeaderForPages";
import { SingInForm } from "../../components/Forms/SingInForm";
import { StyledSingIn } from "./styles";

export const SingIn = () => {
  return (
    <StyledSingIn>
      <HeaderForPages />
      <SingInForm />
    </StyledSingIn>
  );
};
