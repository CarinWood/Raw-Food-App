import React from 'react'
import styled from 'styled-components'
import { SalladItems } from '../components/data/SalladData'
import { useNavigate } from 'react-router-dom'

const Salads = () => {
  const navigate = useNavigate()

  const showRecipe = (title, image, ingredients, description) => {
    localStorage.setItem("title", title);
    localStorage.setItem("image", image);
    localStorage.setItem("ingredients", JSON.stringify(ingredients));
    localStorage.setItem("description", JSON.stringify(description));
    navigate("/recipe");
  }
  
  return (
    <Wrapper>
        {SalladItems.map((item) => (
          <Card key={item.title}>
              <img src={item.image} alt=""/>
       
              <p>{item.title}</p>
              <Button onClick={() =>showRecipe(item.title, item.image, item.ingredients, item.desc)}>Recept</Button>
            
              <Gradient/>
          </Card>
        ))}

    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;  
  justify-content: flex-start;
  align-items: center;
  margin-top: 150px;
  padding-left: 40px;
  padding-right: 40px;
  flex-wrap: wrap;

  @media (max-width: 811px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 429px) {
    padding: 0px;
    margin-top: 100px;
  }

`

const Card = styled.div`
  width: 480px;
  height: 180px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 8px 5px rgba(0, 0, 0, 0.2);
  margin-bottom: 30px;
  margin-right: 20px;

  @media (max-width: 429px) {
    width: 320px;
    height: 120px;
    margin-right: 0px;
  }

  img {
    position: absolute;
    left: 3%;
    top: 10%;
    width: 45%;
    height: 145px;
    object-fit: cover;
    border-radius: 10px;
    z-index: 9;

    @media (max-width: 429px) {
      height: 90px;
    }
 
  }

  p {
    color: black;
    width: 180px;
    position: absolute;
    bottom: 60%;
    right: 6%;
    font-size: 14px;
    z-index: 3;
    font-family: "Open Sans";
    letter-spacing: 2px;
    font-size: 14px;

    @media (max-width: 429px) {
      font-size: 11px;
      width: 125px;
      font-weight: 400;
    }
    
  }
`

const Gradient = styled.div`
position: absolute;
width: 100%;
height: 280px;
top: 0;
left: 0;
background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.2));
`

const Button = styled.div`
  z-index: 4;
  color: black;
  border: 1px solid black;
  background-color: transparent;
  padding: 5px 10px;
  position: absolute;
  bottom: 25%;
  width: 120px;
  right: 15%;
  cursor: pointer;
  font-family: "Open Sans";
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  transition: 0.2s ease-in-out;

  @media (max-width: 429px) {
    font-size: 11px;
    width: 80px;
    right: 13%;
    bottom: 22%;
  }

  :hover {
    opacity: 0.5;
  }
`

export default Salads