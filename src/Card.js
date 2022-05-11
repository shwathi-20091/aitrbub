import './Card.css';
import star from './Star .png'
export default function Card(props){
    console.log(typeof props.img)
    return(
        <div className='card'>
            <img className="card-image" src={props.img} alt="display"/>
        <div cardName="card-status">
            <img src={star} alt="" className='star'/>
            <span >....</span>

            <span className='num'>{props.rating}</span>

            <span className='num1'>{props.review}.</span>
            <span className='num1'>{props.country}</span>
       
         
        <p >L{props.title}</p>
<p className='second'><span className='num'>From ${props.price}</span> / person
</p>
</div>
        </div>
    )
}