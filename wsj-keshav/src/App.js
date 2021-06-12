import logo from './logo.svg';
import './App.css';
import 'G:/crypto/wsj_keshav/wsj-keshav/node_modules/bootstrap/dist/css/bootstrap.min.css';
import SearchIcon from '@material-ui/icons/Search';
import {NewsContextProvider}  from './News';
import Screen from './Screen';




function App() {
  return (
    <div className="App">
      <header className="Wsj_keshav_Agrawal"></header>
      
      <div className="ss">
          
          <a className="sub" href = '/'>Subscribe</a> | <a className="su" href = '/'>Sign In</a>
          
        </div >
        <h1 className ="he">THE WALL STREET JOURNAL</h1>
        <div className="container">
      <nav className = "navbar">
      
       
        
        <ul className="inline">
          <li className = "inc"><a className="a" href = '/'>Home</a></li>
          <li className = "inc"><a className="a" href = '/'>World</a></li>
          <li className = "inc"><a className="a" href = '/'>U.S</a></li>
          <li className = "inc"><a className="a" href ='/'>Politics</a></li>
          <li className = "inc"><a className="a" href = '/'>Economy</a></li>
          <li className = "inc"><a className="a" href = '/'>Bussiness</a></li>
          <li className = "inc"><a className="a" href = '/'>Tech</a></li>
          <li className = "inc"><a className="a" href = '/'>Markets</a></li>
          <li className = "inc"><a className="a" href = '/'>Opinon</a></li>
          <li className = "inc"><a className="a" href = '/'>Life & Arts</a></li>
          <li className = "inc"><a className="a" href = '/'>Real Estate</a></li>
          <li className = "inc"><a className="a" href = '/'>WSJ. Magazine</a></li>
          <li className = "inc"><a className="a" href = '/'>Sports</a></li>
          

        </ul>
     
        
        
      </nav>
      
      </div>
      <div className ="sea">
      <li className = "ink"><a className="search" href = '<SearchIcon>'> Search <SearchIcon /></a></li>
      </div>
      
      <hr />
      <hr className="hr" />
      
        
          <NewsContextProvider>
            <Screen />
          </NewsContextProvider>

      
      
    </div>
  );
}

export default App;
