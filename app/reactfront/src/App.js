import './App.css';
import CompShowBlogs from './blog/ShowBlog.js';
// import CompCreateBlog from './blog/CreateBlog.js';
// import CompEditBlog from './blog/EditBlog.js';
import Login from './blog/Login.js';
import Grupo from './blog/Grupo.js';
import Admin from './blog/Admin.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Admin />} /> 
          <Route path="/iniciar" element={<Login />} /> 
         <Route path="/grupo" element={<Grupo />} />
         <Route path="*" element={<Login />} /> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
