import { useState } from "react";
import './card.css'


function Card(){
    const {count, setCount} = useState({});
    const IRD = {
        id : '1',
        img : "https://th.bing.com/th/id/R.9a3b4ceb3c2722f841020cd4e4ff6ea5?rik=OnFFOInfUsv9qw&pid=ImgRaw&r=0",
        pid : '2412421421afdsfd4',
        ua : '41221421sadfa'
    }

    return (
        <div className="div">
        <img src={IRD.img} alt={IRD.id} className="img"/>
            
            <article key={IRD.id} >
                <h2>{IRD.id}</h2>
            <h1>{IRD.pid}</h1>
            <h1>{IRD.ua}</h1>
            
        
            <a className="button">Acessar</a>
          </article>
        
            

        </div>
    );
}

export default Card;