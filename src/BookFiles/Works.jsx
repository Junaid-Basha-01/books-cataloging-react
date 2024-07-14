import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

const Works = ()=>{
    const {id} = useParams()
    const [workList, setWorkList] = useState()
    console.log(workList)
    useEffect(()=>{
        async function getWorks(){
            try{
                const url = await fetch(`https://openlibrary.org/search.json?title=${id}`)
                const response = await url.json()
                console.log(response)
                const worksArr = response.docs
                console.log(worksArr)
                setWorkList(worksArr.filter(ele=>ele.hasOwnProperty('want_to_read_count') && ele['want_to_read_count'] > 5)
                .map((ele,idx)=><li key={idx}><Link to={'/book'+ele['key']}>{ele.title}</Link></li>))
            }
            catch(error){
                console.log(error)
            }
        }

        getWorks()
    }, [id])
    
    return(
        <>
            <div>
                <ul>
                    {workList}
                </ul>
            </div>
        </>
    )
}

export default Works