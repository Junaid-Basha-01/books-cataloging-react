import React, { useState, useEffect } from 'react'
import kidWorks from './kids.json'
import {Link} from 'react-router-dom'

function Kids() {

    const [kids, setKids] = useState(kidWorks.filter((__, idx) => idx<6))
    const [carouselNo, SetCarouselNo] = useState(0)
    const [books, setBooks] = useState([])

    useEffect(()=>{
        setBooks(kids.map((ele)=>{
            return (
                <Link to={'/book'+ele['key']}>
                    <div className='inline-block border-black m-3 border-4'>
                        <div className=" h-48 w-44">
                            <div className="flex justify-center border-black border-b-2">
                                <img className='size-9/12' src='https://cdn-icons-png.flaticon.com/512/85/85522.png' alt='wuthring heights'/>
                            </div>
                            <div className="flex justify-center"> 
                                <span className='text-center'>{ele.title}</span>
                            </div>
                        </div>
                    </div>
                </Link>)
        }))
    },[kids])

    function leftClick(){
        if(carouselNo === 1){
            SetCarouselNo(0)
            setKids(kidWorks.filter((__, idx)=> idx < 6))
        }
            
    }

    function rightClick(){
        if(carouselNo === 0){
            SetCarouselNo(1)
            setKids(kidWorks.filter((__, idx)=>{return idx >= 6 && idx < 12}))
        } 
    }

    return (
        <>
            <div className='flex justify-between bg-cyan-100 my-3' id='container-kids'>
            
                <button className='border-2 rounded-full hover:bg-rose-800' onClick={leftClick}>&larr;</button>
        
                {books}
                
                <button className='border-2 rounded-full hover:bg-rose-800' onClick={rightClick}>&rarr;</button>  
    
            </div>
        
      </>
    )
}

export default Kids