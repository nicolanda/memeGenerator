import trollface from '../images_src/Troll_Face.png'

export const Header = () => {
  
  return(
    <header className='header-all-section h-section'>
      <div className='image_header'>
        <img
        src={trollface}
        alt='troll-face-icon'/>
      </div>
      <h2>Meme Generator</h2>
      <p>React course - Project 3</p>
    </header>
)}