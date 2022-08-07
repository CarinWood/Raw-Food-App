import { useNavigate } from 'react-router-dom'
import { tillbehorItems } from '../components/data/TillbehorData'

import { Wrapper, Card, Button, Gradient } from './PagesStyles'

const Tillbehor = () => {
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
    {tillbehorItems.map((item) => (
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



export default Tillbehor