import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { SoupeItems } from '../components/data/SoupeData'
import { SalladItems } from '../components/data/SalladData'
import { SmoothieItems } from '../components/data/SmothieData'
import { tillbehorItems } from '../components/data/TillbehorData'
import { HuvudItems } from '../components/data/HuvudData'
import { DessertItems } from '../components/data/DessertData'
import { DrinkItems } from '../components/data/DrinkData'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'

const SearchResults = () => {
  const navigate = useNavigate()

  const [searchedRecipes, setSearchedRecipes] = useState([])
  const [word, setWord] = useState('')
  let params = useParams()

  const getSearch = (searchword) => {
    setWord(searchword)

  }

  useEffect(() => {
    getSearch(params.searchword)
  }, [params.searchword])
  
  const showRecipe = (title, image, ingredients, description) => {
    localStorage.setItem('title', title)
    localStorage.setItem('image', image)
    localStorage.setItem('ingredients', JSON.stringify(ingredients))
    localStorage.setItem('description', description)
    navigate('/recipe')
  }

  return (
    <div>
      <Headline>Sökresultat för "{params.searchword}":</Headline>
     
        <Wrapper>
         {SoupeItems.filter(soupe =>
          soupe.title.toLowerCase().includes(word.toLowerCase())).map(item => (
            <Card key={item.title}>
            <img src={item.image} alt=""/>
     
            <p>{item.title}</p>
            <Button onClick={() =>showRecipe(item.title, item.image, item.ingredients, item.desc)}>Recept</Button>
          
            <Gradient/>
        </Card>
          ))}
          {SalladItems.filter(salad =>
            salad.title.toLowerCase().includes(word.toLowerCase())).map(item => (
              <Card key={item.title}>
            <img src={item.image} alt=""/>
     
            <p>{item.title}</p>
            <Button onClick={() =>showRecipe(item.title, item.image, item.ingredients, item.desc)}>Recept</Button>
          
            <Gradient/>
        </Card>
            ))}
          {SmoothieItems.filter(smoothie =>
            smoothie.title.toLowerCase().includes(word.toLowerCase())).map(item => (
              <Card key={item.title}>
            <img src={item.image} alt=""/>
     
            <p>{item.title}</p>
            <Button onClick={() =>showRecipe(item.title, item.image, item.ingredients, item.desc)}>Recept</Button>
          
            <Gradient/>
        </Card>
            ))}
          
          {tillbehorItems.filter(tillbehor =>
            tillbehor.title.toLowerCase().includes(word.toLowerCase())).map(item => (
              <Card key={item.title}>
            <img src={item.image} alt=""/>
     
            <p>{item.title}</p>
            <Button onClick={() =>showRecipe(item.title, item.image, item.ingredients, item.desc)}>Recept</Button>
          
            <Gradient/>
        </Card>
            ))}
        
          {HuvudItems.filter(tillbehor =>
            tillbehor.title.toLowerCase().includes(word.toLowerCase())).map(item => (
              <Card key={item.title}>
            <img src={item.image} alt=""/>
     
            <p>{item.title}</p>
            <Button onClick={() =>showRecipe(item.title, item.image, item.ingredients, item.desc)}>Recept</Button>
          
            <Gradient/>
        </Card>
            ))}
          {DessertItems.filter(tillbehor =>
            tillbehor.title.toLowerCase().includes(word.toLowerCase())).map(item => (
              <Card key={item.title}>
            <img src={item.image} alt=""/>
     
            <p>{item.title}</p>
            <Button onClick={() =>showRecipe(item.title, item.image, item.ingredients, item.desc)}>Recept</Button>
          
            <Gradient/>
        </Card>
            ))}
         
          {DrinkItems.filter(tillbehor =>
            tillbehor.title.toLowerCase().includes(word.toLowerCase())).map(item => (
              <Card key={item.title}>
            <img src={item.image} alt=""/>
     
            <p>{item.title}</p>
            <Button onClick={() =>showRecipe(item.title, item.image, item.ingredients, item.desc)}>Recept</Button>
          
            <Gradient/>
        </Card>
            ))}

      </Wrapper>
    </div>
  )
}



const Wrapper = styled.div`
  display: flex;  
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;


`

const Headline = styled.p`
  margin-top: 200px;
  font-family: 'Open Sans';
  font-size: 20px;
  letter-spacing: 1.5px;
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
  margin-bottom: 40px;

  img {
    position: absolute;
    left: 3%;
    top: 10%;
    width: 45%;
    height: 145px;
    object-fit: fill;
    border-radius: 10px;
    z-index: 9;
 
  }

  p {
    color: black;
    width: 180px;
    position: absolute;
    bottom: 60%;
    right: 5.5%;
    z-index: 3;
    font-family: "Open Sans";
    letter-spacing: 2px;
    
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

  :hover {
    opacity: 0.5;
  }
`

export default SearchResults