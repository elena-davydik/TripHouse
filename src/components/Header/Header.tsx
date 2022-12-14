import {
  HeaderContainer,
  StyledHeader,
  StyledLogo,
  HeaderContent,
  StyledNav,
  StyledToggle,
  StyledUser,
  StyledLink,
  StyledMenuBurger,
} from "./styles";
import { TopSection } from "../TopSection";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderContainer>
      <StyledHeader className="container block">
        <StyledLogo />
        <HeaderContent>
          <StyledNav>
            <StyledLink to="/stays" className="nav__link">
              Stays
            </StyledLink>
            <StyledLink to="/stays" className="nav__link">
              Atractions
            </StyledLink>
          </StyledNav>
          <StyledToggle />
          <Link to="/sing-in">
            <StyledUser />
          </Link>
          <StyledMenuBurger />
        </HeaderContent>
      </StyledHeader>
      <TopSection />
    </HeaderContainer>
  );
};
