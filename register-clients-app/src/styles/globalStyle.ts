import { createGlobalStyle } from "styled-components";
import "react-toastify/dist/ReactToastify.css"

export const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
}

:root {
  --color-grey-4: #121214;
  --color-grey-3: #212529;
  --color-grey-2: #343B41;
  --color-grey-1: #868E96;
  --color-grey-0: #F8F9FA;
  --color-primary:#4aa6c9;
  --color-primary-focus: #2e677c;
  --color-primary-negative: #183742;
  --color-negative: #E83F5B;
  --color-negative-1: #9b2337;
  --color-sucess: #3FE864;
  --color-background-modal: rgba(0, 0, 0, 0.5);
  
  --font-size-0: 1.62rem;
  --font-size-1: 1.12rem;
  --font-size-2: 1rem;
  --font-size-3: 0.87rem;
  --font-size-4: 0.75rem;

  --radius: 4px;
}

h1, h2, h3, h4, h5, p, a, span, button, input, label, select{
    font-family: 'Inter', sans-serif;
    color: var(--color-grey-0);
}

body{
  background-color: var(--color-grey-4);
}

.container{
  max-width: 50rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
}

.alertErrors{
  text-align: center;
  color: var(--color-negative);
}

.buttonPrimary {
  margin: 1.25rem 0 0.5rem 0;
  background-color: var(--color-primary);
  transition: 0.6s
}

.buttonPrimary:hover {
  background-color: var(--color-primary-focus);
  transition: 0.6s
}

.buttonGrey2 {
  margin: 1.25rem 0 0.5rem 0;
  background-color: var(--color-grey-1);
    transition: 0.6s
}

.buttonGrey2:hover{
  background-color: var(--color-grey-2);
  transition: 0.6s
}

.buttonRed {
  margin: 1.25rem 0 0.5rem 0;
  background-color: var(--color-negative);
  transition: 0.6s
}

.buttonRed:hover{
  background-color:var(--color-negative-1);
  transition: 0.6s
}

`