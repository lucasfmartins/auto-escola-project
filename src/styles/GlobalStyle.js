import {createGlobalStyle} from 'styled-components';

import {BreakpointSizes, BreakAt} from "./Breakpoints";

const GlobalStyle = createGlobalStyle`   
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700&display=swap');
    html{
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: 100%; //padrão 16px
        color: #212121;
        box-sizing: border-box; //para que os navegaores entendão que os elementos tem o tamanho do padding
    }

    *, *:before, *:after{
      box-sizing: inherit;
    }

    body {
      margin: 0;
    }

    h1, h2, h3, h4, h5, h6 {
      line-height: 1.3;
      font-weight: 700;
      letter-spacing: 2px;

      strong{
      color: #ffc107;
    }
    }

    h1{
      //mobile first
      font-size: 2.5rem; // 16 * 2.5 = 40px 

      ${BreakAt(BreakpointSizes.lg)}{
        font-size: 3.75rem;       
      }
    }

    h2 {
      font-size: 2rem;

      ${BreakAt(BreakpointSizes.lg)}{
        font-size: 3.125rem;
      }
    }

    h3 {
      font-size: 1.9rem;

      ${BreakAt(BreakpointSizes.lg)}{
        font-size: 2.5rem;
      }
    }

    h4 {
      font-size: 1.3rem;
      font-weight: 600;

      ${BreakAt(BreakpointSizes.lg)}{
        font-size: 2.125rem;
      }
    }

    h5 {
      font-size: 1.2rem;
      font-weight: 300;

      ${BreakAt(BreakpointSizes.lg)}{
        font-size: 1.5rem;
      }
    }

    
    h6 {
      font-size: 1.1rem;
      font-weight: 600;

        ${BreakAt(BreakpointSizes.lg)}{
          font-size: 1.25rem;
      }
    }
`;


export default GlobalStyle
