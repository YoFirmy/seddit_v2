import './Header.css';

import dropDownImg from '../../images/drop-down.svg'
import headerLogo from '../../images/headerLogo.svg'

export default function Header() {
  return (
    <header>
      <div className="logo">
        <img className="header-logo" src={headerLogo} alt="Seddit Logo" />
      </div>
      <input className="search-bar" type="text" placeholder='Search Seddit' />
      <div className="right-side-buttons">
        <button className='btn btn-primary'>Log in</button>
        <button className='btn btn-secondary'>Sign up</button>
        <button className="btn-drop-down">
          <img className="drop-down-image" src={dropDownImg} alt="drop down menu" />
        </button>
      </div>
    </header>
  )
}
