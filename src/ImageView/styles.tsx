import styled from "styled-components";

export const Container = styled.div`
   padding: 3rem
`

export const ImageRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 4px;
  @media screen and (max-width: 600px) {
    flex: 100%;
    max-width: 100%;
    }
`

export const ImageColumn = styled.div`
  flex: 25%;
  max-width: 25%;
  padding: 0 4px;
  
  @media screen and (max-width: 800px) {
    flex: 50%;
    max-width: 50%;
    }
`

export const Image = styled.img`
    margin-top: 8px;
  vertical-align: middle;
  width: 100%;
  border-radius: 1rem;
`