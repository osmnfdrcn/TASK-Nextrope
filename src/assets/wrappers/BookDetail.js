import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  .image-container{
    width: 400px;
  }
  .book-info{
    width: 400px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    margin-bottom:20px;

  }
  span{

      font-size: 14px;
    }

  .price{
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 1px;
  }
  .buttons{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export default Wrapper