import styled from "styled-components";

export const StyledAddModal = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: var(--color-background-modal);
  position: fixed;
  inset: 0;
  padding: 1rem;

  >div{
    width: 100%;
    border-radius: 4px;
  }

  >div >div{
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 4px 4px 0 0;
    padding: 0.75rem 2.3125rem;
    background-color: var(--color-grey-2);
  }

  >div >div h1{
    font-size: var(--font-size-3);
    color: var(--color-grey-0);
  }

  @media (min-width: 768px) {
    align-items: center;

    >div{
    width: 25.625rem;
    max-width: 48.5625rem;
  }
  
  }
`
