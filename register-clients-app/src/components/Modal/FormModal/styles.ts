import styled from "styled-components";

export const StyledFormRegisterContactModal = styled.form`
  padding: 2.0625rem 2.3125rem;
  border-radius: 0 0 4px 4px;
  background-color: var(--color-grey-3);

  .divOverflow{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;
    max-height: 15rem;
    overflow: auto;
  }

  .divOverflow::-webkit-scrollbar {
    width: 10px;               
  }

  .divOverflow::-webkit-scrollbar-track {
  background: transparent;    
}

  .divOverflow::-webkit-scrollbar-thumb {
  background-color: var(--color-grey-1);  
  border-radius: 4px;       
}

.divButton{
  display: flex;
  justify-content: end;
}

  
`

export const StyledFormEditProfileModal= styled.form`
  padding: 2.0625rem 2.3125rem;
  border-radius: 0 0 4px 4px;
  background-color: var(--color-grey-3);

  .divOverflow{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 1rem;
    max-height: 15rem;
    overflow: auto;
  }

  .divOverflow::-webkit-scrollbar {
    width: 10px;               
  }

  .divOverflow::-webkit-scrollbar-track {
  background: transparent;    
}

  .divOverflow::-webkit-scrollbar-thumb {
  background-color: var(--color-grey-1);  
  border-radius: 4px;       
}

.divButton{
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
}
`

export const StyledFormDeleteContactModal = styled.form`
  padding: 2.0625rem 2.3125rem;
  border-radius: 0 0 4px 4px;
  background-color: var(--color-grey-3);

h1 {
  text-align: center;
  font-size: var(--font-size-1);
}

h1 span {
  color: var(--color-primary);
}

.divButton{
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  gap: 1rem;
}

  
`