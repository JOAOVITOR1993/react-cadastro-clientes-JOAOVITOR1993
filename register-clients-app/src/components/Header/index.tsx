import { IconLogo } from "../../pages/Login/styles";
import { StyledHeader } from "./styles";
import { Link } from "react-router-dom";

interface iPropsHeader {
  to: string;
  name: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}

export const Header = ({ to, name, onClick }: iPropsHeader) => {
  return (
    <StyledHeader>
      <nav>
        <figure>
          <IconLogo />
          <h1>
            Register <span>Clients</span>
          </h1>
        </figure>
        <Link to={to} onClick={onClick}>
          {name}
        </Link>
      </nav>
    </StyledHeader>
  );
};
