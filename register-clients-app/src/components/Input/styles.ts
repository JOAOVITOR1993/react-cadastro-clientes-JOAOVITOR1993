import styled from "styled-components";

export const StyledInput = styled.fieldset`
   border: transparent;

   label{
    font-size: var(--font-size-4);
    font-weight: 400;
   }

   input{
    width: 100%;
    padding: 0.62rem 1rem;
    margin: 1rem 0 1.62rem 0;
    border: solid 1px transparent;
    border-radius: var(--radius);
    background-color: var(--color-grey-2);
    cursor: text;
   }

    input::placeholder{
        font-size: var(--font-size-2);
        color: var(--color-grey-1);
    }
`