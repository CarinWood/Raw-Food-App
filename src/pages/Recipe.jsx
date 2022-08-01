import { useState, useEffect } from 'react'
import styled from 'styled-components'

const Recipe = () => {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [ingredients, setIngredients] = useState([])
    const [description, setDescription] = useState('')
   

    useEffect(() => {
       setTitle(localStorage.getItem("title"))
       setImage(localStorage.getItem("image"))
       setIngredients(JSON.parse(localStorage.getItem("ingredients")))
       setDescription(localStorage.getItem("description"))
    }, [])
  return (
    <Wrapper>
            <Title>{title}</Title>
            <Top>
           
            <List>
            <Ingredients>Ingredienser:</Ingredients>
                {ingredients.map((item) => {
                    return (
                        <ul>
                        <li>{item}</li>
                        </ul>
                    )
                })}
            </List>
            <ImageWrapper>
            <img src={image} alt={title} />
            </ImageWrapper>
            </Top>
            <Bottom>
                <Steps>Gör så här:</Steps>
                <Desc>{description.replace(/"/g,'')}</Desc>
            </Bottom>
    </Wrapper>
  )
}

const Bottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-top: 60px;
    padding-bottom: 50px;

`

const Desc = styled.div`
    width: 800px;
    font-family: "Open Sans";
    letter-spacing: 1.2px;
    font-size: 12px;
    text-align: center;
    line-height: 25px;

    @media (max-width: 811px) {
        width: 80%;
        font-size: 15px;
    }


`

const Steps = styled.div`
    font-family: 'Cormorant SC';
    font-size: 17px;
    font-weight: 400;
    letter-spacing: 3px;
    margin-bottom: 20px;

    
      
`

const Ingredients = styled.p`
    font-family: 'Open Sans';
    font-size: 17px;
    font-weight: 400;
    letter-spacing: 3px;
    margin-bottom: 20px;
    margin-top: 10px;  
    font-family: 'Cormorant SC';

`

const Top = styled.div`
    width: 90%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; 
`

const ImageWrapper = styled.div`
    width: 400px;
    height: 250px;
    overflow: hidden;
    border-radius: 20px;

    @media (max-width: 811px) {
        width: 220px;
        height: 190px;
    }

    img {
    width: 100%;
    height: 100%;
    object-fit: cover;

   

    }
`

const Title = styled.div`
    margin-top: 160px;
    font-family: 'Cormorant SC';
    color: black;
    font-size: 25px;
    letter-spacing: 2px;
    word-spacing: 5px;
    margin-bottom: 80px;

    @media (max-width: 811px) {
        font-size: 20px;
    }
`

const List = styled.div`
    ul {
        list-style: none;
    }

    li {
        font-family: "Open Sans";
        letter-spacing: 1.2px;
        margin-bottom: 10px;
        text-align: center;
        font-size: 12px;

        @media (max-width: 811px) {
            font-size: 15px;
        }
    }
`

export default Recipe