import styled from 'styled-components'

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 40px;
  width: 100%;
  .book{
    width: 100%;
    padding-bottom: 10px;
  }
  .book:nth-child(odd){
    background-color: var(--clr-grey-10);
  }
  .image-container{
    width: 200px;
    height:300px;
    img{
      width: 100%;
      object-fit: cover;
      display: block;
      object-position: top left;
    }
  }
  .book-info{
    position: relative;
    display: flex;
    flex-direction: column;
    .title{
      font-size: 14px;
      font-weight: 600;
      letter-spacing: 1px;
    }
    .author{
      font-size: 12px;
    }
    .price{
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 1px;
    }
    .button{
      font-size: 12px;
      cursor: pointer;
      color: var(--clr-primary-5);
    }
  }
  .buttons{
    display: flex;
    gap: 10px;
  }
  .summary{
    margin-top: 20px;
    width: 100%;
    position: relative;
    bottom: 0;
    right: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 50px;
    .total{
      font-size: 20px;
    }
  }
  .check-out-total{
    font-size: 16px;
    padding: 2px 10px;
    color: white;
    background-color: var(--clr-primary-5);
  }

@media (min-width: 776px) {
  .book{
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
  }
  .buttons{
    position: absolute;
    top: -50px;
    right: 0;

  }
  .summary{
    margin-top: 20px;
    margin: 40px auto;
    position: relative;
    bottom: 0;
    right: 10px;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 20px;
    .total{
      font-size: 20px;
    }
  }
  
}
`

export default Wrapper