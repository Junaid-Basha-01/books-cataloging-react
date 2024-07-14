import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import classicWorks from './RecommendationFiles/classics.json'
import loveWorks from './RecommendationFiles/love.json'
import thrillerWorks from './RecommendationFiles/thrillers.json'
import kidsWorks from './RecommendationFiles/kids.json'

function HomePageRecommendations() {

  const [love, setLove] = useState(loveWorks.map(book=>book.title))
  const [classics, setClassics] = useState(classicWorks.map(book=>book.title))
  const [kids, setKids] = useState(kidsWorks.map(book=>book.title))
  const [thrillers, setThrillers] = useState(thrillerWorks.map(book=>book.title))
  const forTesting = loveWorks.filter((book, idx) => {idx < 3})
    return (
    <>
      <p className="text-3xl">Romance Novels</p>
      <ul className='list-disc'>{love.map((book, idx)=><li key={idx}>{book}</li>)}</ul>

      <p className="text-3xl">Classic Novels</p>
      <ul className='list-disc'>{classics.map((book, idx)=><li key={idx}>{book}</li>)}</ul>

      <p className="text-3xl">Kids Books</p>
      <ul className='list-disc'>{kids.map((book, idx)=><li key={idx}>{book}</li>)}</ul>
      
      <p className="text-3xl">Thriller Novels</p>
      <ul className='list-disc'>{thrillers.map((book, idx)=><li key={idx}>{book}</li>)}</ul>           

      
      <div className='flex justify-evenly bg-cyan-100	'>
        
        <div className=''>
          <div className="size-8/12">
            <img className='p-0' src='https://covers.openlibrary.org/b/id/12818862-L.jpg' alt='wuthring heights'/>
            <div className="flex justify-center">
              <span>Wuthering Heights</span>
            </div>
          </div>
        </div>

        <div className=''>
          <div className="size-8/12">
            <img className='' src='https://covers.openlibrary.org/b/id/10590366-L.jpg' alt='wuthring heights'/>
            <div className="flex justify-center">
              <span>Wuthering Heights</span>
            </div>
          </div>
        </div>

        <div className=''>
          <div className="size-8/12">
            <img className='' src='https://covers.openlibrary.org/b/id/8257991-L.jpg' alt='wuthring heights'/>
            <div className="flex justify-center">
              <span>Wuthering Heights</span>
            </div>
          </div>
        </div>

        <div className=''>
          <div className="size-8/12">
            <img className='' src='https://covers.openlibrary.org/b/id/12818862-L.jpg' alt='wuthring heights'/>
            <div className="flex justify-center">
              <span>Wuthering Heights</span>
            </div>
          </div>
        </div>

        <div className=''>
          <div className="size-8/12">
            <img className='' src='https://covers.openlibrary.org/b/id/10590366-L.jpg' alt='wuthring heights'/>
            <div className="flex justify-center">
              <span>Wuthering Heights</span>
            </div>
          </div>
        </div>

        <div className=''>
          <div className="size-8/12">
            <img className='' src='https://covers.openlibrary.org/b/id/8257991-L.jpg' alt='wuthring heights'/>
            <div className="flex justify-center">
              <span>Wuthering Heights</span>
            </div>
          </div>
        </div>
        
      </div>
      
    </>
  )
}

export default HomePageRecommendations