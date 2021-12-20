import '../styles/Header.css';

export default function Header() {
  return (
    <header>
      <div className="logo">seddit</div>
      <input type="text" placeholder='Search Seddit' />
      <div className="right-side-buttons">
        <button className='btn btn-primary'>Log in</button>
        <button className='btn btn-secondary'>Sign up</button>
        <button>drop-down</button>
      </div>
    </header>
  )
}
