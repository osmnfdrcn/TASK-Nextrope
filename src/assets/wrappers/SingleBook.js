import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  display  : flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  opacity: 0.8;
  .book-image{
    width: 100%;
    img {
      width: 100%;
      display: block;
      object-fit: cover;
      object-position: top left;
      height: 600px;
    }
  }
  :hover{
    opacity: 1;
    border-radius: 50%;
    transition: var(--transition);
  }

  footer{
    position: absolute;
    background-color: black;
    color: white;
    opacity: .6;
    padding: 10px 20px ;
    width: 100%;
    :hover{
      transition: var(--transition);
      background-color: white;
      color: black;
      opacity: .8;

    }
  }
  .price{
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 10px 10px 0px 10px;
    background-color: var(--clr-primary-4);
    color: var(--clr-white);
    font-size:10px;
  }

`

export default Wrapper