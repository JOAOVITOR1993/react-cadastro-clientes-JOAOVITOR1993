import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai"

export const StyledButton = styled.button`
    width: 100%;
    padding: 0.62rem 1rem;
    border: solid 1px transparent;
    border-radius: var(--radius);
    font-size: var(--font-size-2);
    font-weight: 500;
    cursor: pointer;
    
`
export const StyledButtonCloseModal = styled.button`
    cursor: pointer;
    border: none;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
`

export const IconClose = styled(AiFillCloseCircle)`
    color: var(--color-negative);
    width: 1.5rem;
    height: 1.5rem;
    transition: 0.6s;

    :hover {
        color: var(--color-negative-1);
        transition: 0.6s
    }
`