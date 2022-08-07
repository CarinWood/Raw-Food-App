import { SmoothieItems } from '../components/data/SmothieData'
import { useNavigate } from 'react-router-dom'

import { Wrapper, Card, Button, Gradient } from './PagesStyles'

const Smoothies = () => {
  const navigate = useNavigate()

  const showRecipe = (title, image, ingredients, description) => {
    localStorage.setItem('title', title)
    localStorage.setItem('image', image)
    localStorage.setItem('ingredients', JSON.stringify(ingredients))
    localStorage.setItem('description', description)
    navigate('/recipe')
  }
  return (
    <Wrapper>
        {SmoothieItems.map((item) => (
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



export default Smoothies