import styled from 'styled-components'

const Wrapper = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  box-shadow: var(--shadow-1);
  background-color: var(--clr-white);
  .nav-center {
    display: flex;
    align-items: center;
    justify-content:space-between;
    height: 4rem;
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
    
  }



`

export default Wrapper