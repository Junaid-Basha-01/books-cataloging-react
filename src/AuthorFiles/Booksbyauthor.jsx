import { useState, useEffect } from "react"

function Booksbyauthor({items}) {

    const [buttonList, setButtonList] = useState([]);
    const [bookList, setBookList] = useState();


    function changePage(e){
        //Set the books according to the buttons
        let tempForBookList = [];
        let start = (parseInt(e.target.textContent)-1) * 10;
        let end = start + 10;
        for(let i=start; i<end; i++)
        {
            if(items[i])
                tempForBookList.push(items[i])
        }    
        setBookList(tempForBookList);
    }

    useEffect(()=>{
        let tempForBookList = [];
        for(let i=0; i<10; i++)
        {
            if(items[i])
                tempForBookList.push(items[i]);
        }
        setBookList(tempForBookList);
    }, [items])

    useEffect(()=>{
        //Set the number of buttons first
        let rem = items.length%10 === 0 ? 0 : 1;
        let countOfButtons = Math.floor(items.length/10) + rem;
        let tempForButtons = []
        for(let i=0; i<countOfButtons; i++)
            tempForButtons.push(<li key={i} onClick={changePage}><button className="border-4 mx-2">{i+1}</button></li>)
        setButtonList(tempForButtons);
    }, [items])

  return (
    <>
        <div className="flex justify-end">
            <ul className="mr-48 leading-7">{bookList}</ul>
        </div>
        <div className="flex justify-center list-none">{buttonList}</div>
    </>
  )
}

export default Booksbyauthor