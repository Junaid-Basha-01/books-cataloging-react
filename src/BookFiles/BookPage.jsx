import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

const BookPage = ()=>{
    const {id, subId} = useParams()
    const [title, setTitle] = useState('')
    const [imgSrc, setImgSrc] = useState('https://cdn.britannica.com/83/78183-004-345353F4/Stack-books.jpg')
    const [synopsis, setSynopsis] = useState('')

    useEffect(()=>{
        console.log(id)

        function getImg(covers){
            function testImage(url){
                let tester = new Image()
                tester.addEventListener('load', ()=>{
                    setImgSrc(url)
                })
                tester.addEventListener('error', ()=>{
                    setImgSrc('https://cdn.britannica.com/83/78183-004-345353F4/Stack-books.jpg')
                })
                tester.src = url
            }

            let coverSize = covers.length
            testImage(`https://covers.openlibrary.org/b/id/${covers[0]}-L.jpg`)
        }

        async function getDetails(){
            try{
                const url = await fetch(`https://openlibrary.org/${id}/${subId}.json`)
                const response = await url.json()
                console.log(response)
                setTitle(response.title)
                if(response.hasOwnProperty('covers'))
                    getImg(response.covers)
                if(response.hasOwnProperty('description')){
                    const str = response.description;
                    setSynopsis(typeof(str) === 'object'? str.value : str);
                }
            }
            catch(error){
                console.log(error)
            }
           
        }
        getDetails()
    }, [subId])

    const handleError = ()=>{
        setImgSrc('https://cdn.britannica.com/83/78183-004-345353F4/Stack-books.jpg')
    }
    return(
        <>
        <div>
            <p className="font-bold">{title}</p>
        </div>
           <img src={imgSrc} onError={handleError} alt='Book Cover'/>
           <div>
            {synopsis}
           </div>
        </>
    )
}

export default BookPage