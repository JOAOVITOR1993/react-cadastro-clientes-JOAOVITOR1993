import styled from "styled-components";
import { GoPerson } from "react-icons/go";

export const StyleLogin = styled.div`
  max-width: 23.12rem;
  width: 100%;
  margin: 0 auto;

  header{
    padding: 4.81rem 0 2.18rem 0;
    width: 100%;
  }

  header figure{
   display: flex;
   gap: 1rem;
   align-items: center;
   justify-content: center;
  }

  header figure h1 span{
    color: var(--color-primary);
  }

  .pRegister {
    margin-top: 1.37rem;
    margin-bottom: 0.5rem;
    text-align: center;
    color: var(--color-grey-1);
  }

  @media (max-width: 769px) {
    max-width: 100%;
    padding: 0 1rem;
  }
`;

export const IconLogo = styled(GoPerson)`
    color: var(--color-primary);
    width: 2.5rem;
    height: 2.5rem;
`