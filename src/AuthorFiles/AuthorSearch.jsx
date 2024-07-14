import React,{useState, useEffect} from 'react'
import Booksbyauthor from './Booksbyauthor';
import { Link, useParams } from 'react-router-dom';

function AuthorSearch() {

    const {id} = useParams()

    const [bookItems, setBookItems] = useState([]);
    const [imgsrc, setimgsrc] = useState();
    const [authorName, setAuthorName] = useState(id);


    useEffect(()=>{

        async function getPhoto(idList){
            let imageId = "";
            for(let i=0; i<idList.length; i++)
            {
                //API call for the author info
                const authorInfoCall = await fetch(`https://openlibrary.org/authors/${idList[i].key}.json`);
                const authorInfoJson = await authorInfoCall.json();
                if(authorInfoJson.hasOwnProperty('photos'))
                {
                    imageId = authorInfoJson;
                    break;
                }
            }
            return imageId;
        }

        async function getAuthorInfo(){
            //MAKING A CALL TO GET AUTHOR'S UNIQUE KEY FROM HIS/HER NAME
            
            try{
                const keyApiCall = await fetch(`https://openlibrary.org/search/authors.json?q=${id}`);
                const firstResponse = await keyApiCall.json();

                if(firstResponse.numFound === 0){
                    throw new Error("Author Not Found")
                }

                const idList = firstResponse.docs;
                let selectedId = await getPhoto(idList)
                if(selectedId !== ''){
                    const source = selectedId.photos[0];
                    setimgsrc(`https://covers.openlibrary.org/a/id/${source}-M.jpg`);
                }
                else{
                    setimgsrc('')
                    selectedId = firstResponse.docs[0];
                }
                
                console.log(selectedId.key)
                setAuthorName(selectedId.name)
                //MAKING A CALL USING HIS/HER UNIQUE KEY TO GET BOOKS
                let workCall = selectedId.key;
                if(selectedId.key.indexOf('/authors/') === -1){
                    workCall = '/authors/' + selectedId.key;
                }
                const bookApiCall = await fetch(`https://openlibrary.org${workCall}/works.json`);
                const thirdResponse = await bookApiCall.json();
                console.log(thirdResponse);
                const items = thirdResponse.entries;
                setBookItems(items.map((ele,idx)=><li key={idx}><Link to={ele.key}>{ele.title}</Link></li>))
            }
            catch(error){
                console.log(error)
            }
        }
        getAuthorInfo()
    },[id]);
    


  return (
    <div>
        <div className='flex justify-around'>
            <img src={imgsrc}/>
            <div className='flex items-center'>
                <p className='text-2xl font-bold'>{authorName}</p>
            </div>
        </div>
        <Booksbyauthor items={bookItems}/>
    </div>
  )
}


export default AuthorSearch