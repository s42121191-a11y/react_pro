import card_pic from './assets/1746051.jpg'
function Card(){
   
    return(
        <div className="card">
            <img className="card_img" src={card_pic}></img>
        <h2 className="card_title">card name</h2>
        <p className="card_des"> iam just trying ,  hope it work</p>
</div>
    );
    
}

export default Card;