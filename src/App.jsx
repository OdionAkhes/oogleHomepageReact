import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Languages from './Components/Languages';
import SearchSection from './Components/SearchSection'
import './App.css'

function App() {
const [search, setSearch] = useState('')

  
  const handleSubmit = (e) => {
   setSearch(e.target.value);
    e.preventDefault();
    e.target.value = ""


  }
  return (
    <div className="App">
      <Header />
      <div className='main'>
        <SearchSection handleSubmit={handleSubmit} search={search} />
        <Languages />
        <div>
          {search && (
            <p>
              Search Result- <strong>{search}</strong>
            </p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App
