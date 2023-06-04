import styled from "styled-components";
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export const StyleRegister = styled.div`
  max-width: 23.12rem;
  width: 100%;
  margin: 0 auto;

  header {
    margin-bottom: 2rem;
  }

  header nav{
    padding: 0;
  }

  @media (max-width: 769px) {
    max-width: 100%;
    padding: 0 1rem;

    header {
      margin-bottom: 0;
    }

    .container {
      padding: 0;
    }
  }
`;

export const StyledDivBackLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-background-modal);
  position: fixed;
  inset: 0;
`

export const IconLoading = styled(AiOutlineLoading3Quarters)`
  color: var(--color-primary);
  width: 5rem;
  height: 5rem;
  animation: is-loading 1s infinite;
  position: absolute;


  @keyframes is-loading {
    to{
      transform: rotate(1turn);
    };
  }
  `