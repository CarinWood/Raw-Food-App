import { useNavigate } from 'react-router-dom'
import { HuvudItems } from '../components/data/HuvudData'

import { Wrapper, Card, Button, Gradient } from './PagesStyles'


const Huvudratter = () => {

    let navigate = useNavigate()

    const showRecipe = (title, image, ingredients, description) => {
      localStorage.setItem("title", title);
      localStorage.setItem("image", image);
      localStorage.setItem("ingredients", JSON.stringify(ingredients));
      localStorage.setItem("description", JSON.stringify(description));
      navigate("/recipe");
    }
  return (
    <Wrapper>
    {HuvudItems.map((item) => (
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



export default Huvudratter