import '../styles/Header.css';

import dropDownImg from '../images/drop-down.svg'
import headerLogo from '../images/headerLogo.svg'

export default function Header() {
  return (
    <header>
      <div id="logo">
        <img id="header-logo" src={headerLogo} alt="Seddit Logo" />
      </div>
      <input id="search-bar" type="text" placeholder='Search Seddit' />
      <div id="right-side-buttons">
        <button className='btn btn-primary'>Log in</button>
        <button className='btn btn-secondary'>Sign up</button>
        <button id="btn-drop-down"><img id="drop-down-image" src={dropDownImg} alt="drop down menu" /></button>
      </div>
    </header>
  )
}
