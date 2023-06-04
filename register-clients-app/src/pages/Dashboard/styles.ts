import styled from "styled-components";

export const StyledDashBoard = styled.div`

section:nth-child(2) {
    margin-top: 1rem;
}

section:nth-child(3) {
    display: flex;
    justify-content: end;
}

section:nth-child(3) div {
    display: flex;
    gap: 1rem;
    width: 50%;
}

section:nth-child(4) {
    margin-top: 1rem;
    background-color: var(--color-grey-2);
    width: 100%;
    border-radius: var(--radius);
    padding: 0.62rem 1rem;
}

section:nth-child(4) ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    gap: 1rem;
    margin-top: 1rem;
    overflow-x: auto;
    max-height: 30rem;
}
section:nth-child(4) ul::-webkit-scrollbar {
    width: 10px;               
}

section:nth-child(4) ul::-webkit-scrollbar-track {
  background: transparent;    
}

section:nth-child(4) ul::-webkit-scrollbar-thumb {
  background-color: var(--color-grey-1);  
  border-radius: 4px;       
}

@media (max-width: 769px) {
    max-width: 100%;
    padding: 0 1rem;

    section:nth-child(3) div {
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
    }

    section:nth-child(4) ul {
        flex-direction: column;
        flex-wrap: nowrap;
        height: 20rem;
    }
}

`