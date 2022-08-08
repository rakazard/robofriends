import Card from './Card.js';
import {useEffect} from 'react';


function CardList({ robots}){

    //Enable to check error boundary in action
    if(false){
        throw new Error('From CardList!!!!!');
    }


const cardList = robots.map((robo) => {
    return  <Card key={robo.id} id={robo.id} name={robo.name}/>
    });


    return (
        <div>
         {cardList}
        </div>
    )
}

export default CardList;