import { FavItems } from '../data/FavData'
import './favourites.css'
import { Splide, SplideSlide} from '@splidejs/react-splide'
import '@splidejs/react-splide/css';


const Favourites = () => {
  return (
    <div className='favourites-div'>
      <Splide options={{ perPage: 3, pagination: false }}>
      {FavItems.map((item, i) => (
          <SplideSlide>
              <div key={i} className="fav-card">
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