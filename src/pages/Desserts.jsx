import { useNavigate } from 'react-router-dom'
import { DessertItems } from '../components/data/DessertData'

import { Wrapper, Card, Button, Gradient } from './PagesStyles'

const Desserts = () => {
    let navigate = useNavigate()

    const showRecipe = (title, image, ingredients, description) => {
      localStorage.setItem('title', title)
      localStorage.setItem('image', image)
      localStorage.setItem('ingredients', JSON.stringify(ingredients))
      localStorage.setItem('description', description)
      navigate('/recipe')
    }
  
  return (
    <Wrapper>
        {DessertItems.map((item) => (
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



export default Desserts