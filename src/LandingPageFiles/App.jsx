import React from 'react'
import AuthorSearch from '../AuthorFiles/AuthorSearch'
import {Route, Routes, Link} from 'react-router-dom'
import { useState } from 'react';
import About from '../About';
import ContactMe from '../ContactMe'
import HomePageRecommendations from './RecommendationFiles/HomePageRecommendations';
import Works from '../BookFiles/Works'
import BookPage from '../BookFiles/BookPage';

function App() {

  const [linkName, setLinkName] = useState('author');
  const [text, setText] = useState("");


  function changeLink(event){
    if(event.target.id === 'author')
      setLinkName('author');
    else
      setLinkName('works');
  }

  function changeText(event){
    setText(event.target.value)
  }

  return (
    <>

      <nav className="navbar justify-content: space-between custom-bg-color">

        <Link to='/' className='heading fs-4'><img src='src\LandingPageFiles\book-svgrepo-com.svg' width="38" height="32"/>The Reading Room</Link>

        <ul className='nav justify-content-end flex-nowrap fs-5 custom-text-color'>

          <li className='nav-item'>
            <Link className="nav-link active" to='/about' >About Page</Link>
          </li>

          <li className='nav-item'>
            <Link className="nav-link active" to='/contactme' >Contact Me</Link>
          </li>

          <li className='nav-item'>
            <div className="input-group mb-3">
              <button className="fs-5 btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">{linkName === 'works'? 'books': 'author'}</button>

              <ul className="dropdown-menu">
                <li><span className="dropdown-item" id='author' onClick={changeLink}>Author</span></li>
                <li><span className="dropdown-item" id='book' onClick={changeLink}>Books</span></li>
              </ul>

              <input type="text" className="form-control" placeholder={"Enter "+ linkName + " name"} onChange={changeText}/>
              <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                <Link to={'/'+ linkName+'/'+text} className='fs-5 see'>Search 🔍</Link>
              </button>
            </div>
          </li>
        </ul>
      </nav>
      


      <Routes>
        <Route path='/' element={<HomePageRecommendations/>}/>
        <Route path='/author/:id' element={<AuthorSearch/>}/>
        <Route path='/works/:id' element={<Works/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path='/contactme' element={<ContactMe/>}/>
        <Route path='/book/:id/:subId' element={<BookPage/>}/>
      </Routes>
    </>
  )
}

// path="/works/:id" the colon means that anything can be put after it
export default App


 {/* <select onChange={changeLink} id="bookorauthor">
            <option value='author'>Author</option>
            <option value='book'>Book</option>
        </select>
        <input type="text"placeholder={"Enter "+linkName+" name"} onChange={(e)=>setText(e.target.value)}></input>


        <button><Link to={'/'+linkName+'/'+text}>Search 🔍</Link></button> */}