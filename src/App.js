import './App.css';

import DisplayPosts from './components/DisplayPosts/DisplayPosts';
import Header from './components/Header/Header';

export default function App() {
  return (
    <>
      <Header />
      <div className='app-page' >
        <DisplayPosts />
      </div>
    </>
  );
}
