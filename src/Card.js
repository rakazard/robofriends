

function Card(props){
    return (
        <div className="bg-light-green dib pa3 ma2 grow tc">
            <img alt="somethins" src=  {`https://robohash.org/something${props.id}?size=200x200`} /> 
            <h1> {props.name} </h1>
            <p> { `${props.name}@gmail.com`}</p>
        </div>
    );
}

export default Card;