import getRandomFromArr from "../utils/getRandomFromArr"
import phrases from '../utils/phrases.json'
import arrPhotos from '../utils/photos.json'



const Button = ({setQuoteRandom, setPhotoRandom}) => {

    const hondleOterPhrase = () => {

        setQuoteRandom(getRandomFromArr(phrases))
        setPhotoRandom(getRandomFromArr(arrPhotos))
    }


  return (
    <button className="app__btn" onClick={hondleOterPhrase}>Ver otro</button>
  )
}

export default Button