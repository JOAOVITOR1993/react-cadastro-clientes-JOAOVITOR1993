import styled from "styled-components";

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