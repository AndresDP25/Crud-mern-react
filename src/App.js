import logo from './logo.svg';
import './App.css';
import CompShowBlogs from './blog/ShowBlog';
import CompShowBlog from './blog/Blog';
import CompCreateBlog from './blog/CreateBlog';
import CompEditBlog from './blog/EditBlog';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <CompShowBlogs />} />
          <Route path='/:id' element={ <CompShowBlog />} />
          <Route path='/create' element={ <CompCreateBlog />} />
          <Route path='/edit/:id' element={ <CompEditBlog />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
