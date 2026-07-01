
function Card(props){
   
    return(
        <div className="card">
            <p>Name:{props.name}</p>
            <p>AGE:{props.age}</p>
            <p>STUDENT:{props.student}</p>          
</div>
    );
    
}

export default Card;