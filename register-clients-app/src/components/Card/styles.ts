import styled from "styled-components";

export const StyledCard = styled.li`
    background-color: var(--color-grey-3);
    width: 48%;
    border-radius: var(--radius);
    padding: 0.62rem 1rem;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
        gap: 1rem;
    }

    > p {
        margin-bottom: 1rem;
    }

    @media (max-width: 769px) {
        width: 100%;
    }
`