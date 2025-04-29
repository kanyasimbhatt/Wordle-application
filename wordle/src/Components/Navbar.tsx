import WordleLogo from '../assets/download.png';
import './Navbar.css';

export default function Navbar() {
  return (
    <>
    <nav className = "navbar-div">
        <div className = 'wordle-logo-wrapper'>
            <img src={WordleLogo} alt='Wordle application logo' className='wordle-logo'/>
        </div>
        <h2>Wordle</h2>
    </nav>
    
    </>
  )
}
