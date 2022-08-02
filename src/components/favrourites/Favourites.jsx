import { FavItems } from '../data/FavData'
import './favourites.css'
import { Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';
import { useNavigate } from 'react-router-dom'


const Favourites = () => {
  const navigate = useNavigate()

  const recipeFunction = (title, image, ingredients, description) => {
      localStorage.setItem("title", title);
      localStorage.setItem("image", image);
      localStorage.setItem("ingredients", JSON.stringify(ingredients));
      localStorage.setItem("description", JSON.stringify(description));
      navigate("/recipe");
  }

  return (
    <div className='favourites-div'>
      <Splide className='splide' options={{ perPage: 3, pagination: false }}>
      {FavItems.map((item, i) => (
          <SplideSlide>
              <div key={i} className="fav-card" onClick={() => recipeFunction(item.title, item.image, item.ingredients, item.desc)}>
                  <img className='fav-image' src={item.image} alt={item.title} />
                  <p className='fav-image-text'>{item.title}</p>
                  <div className='gradient'></div>
              </div>
          </SplideSlide>
      ))}
     
      </Splide>

    </div>
  )
}

export default Favourites