import phrases from '../phrases.json'
import React, { useState } from 'react';




const QuoteBox = () => {
    const colors = ["red", "yellow", "blue", "green", "orange", "gray", "purple"]
    const randomIndex = Math.floor(Math.random() * phrases.length)

    const [index, setIndex] = useState(randomIndex)

    const changeIndex = () =>{
        const randomIndex = Math.floor(Math.random() * phrases.length)
        setIndex(randomIndex)
    }

    const randomColors = Math.floor(Math.random() * colors.length)
    document.body.style = `background: ${colors[randomColors]}`
    

    return (
        <div className='container-1'>

            <div className='container-2' style={{color: colors[randomColors]}}>
                <div className='quote'><i class="fa-solid fa-quote-right"></i></div> 
                <h2 className='phrase-1'>{phrases[index].quote}</h2>
            </div>

            <h3 className='author-1'style={{color: colors[randomColors]}}>{phrases[index].author}</h3>
            <div className='button-finish'>
            <button className='button-1' onClick={changeIndex} style={{background: colors[randomColors]}}><i class="fa-solid fa-chevron-right"></i></button>
            
            </div>
        </div>
    );
};

export default QuoteBox;