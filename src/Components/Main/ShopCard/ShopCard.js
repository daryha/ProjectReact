
import { NavLink } from 'react-router-dom'

import './ShopCard.css'

import Star from './../../../Img/ShopCard/Star.png'



const ShopCard = (props) => {

	const content = (
		<div className='Shop__Card'>
			<div>
				<img className='Shop__Card__Img' src={props.img} alt='SmallImg'></img>
			</div>
			<div className='Shop__Card__info__container'>
				<div className='Shop__Card__type'>
					<p>{props.type}</p>
				</div>
				<div className='Shop__Card__title'>
					<h1>{props.name}</h1>
				</div>

				<div className='Shop__Card__Container'>
					<div className='Shop__Card__info-time'>{props.time} •</div>
					<div className='Shop__Card__info__img-star'>
						<img className='Shop__Card__star' src={Star} alt='Star'></img>
					</div>
					<div className='Shop__Card__info-Rate'>{props.rate}</div>
				</div>
			</div>
		</div>
	)


	


	return (
		<NavLink to={props.path} style={{ textDecoration: 'none', color: 'inherit' }}>
			{content}
		</NavLink>
	);



	
}
 
export default ShopCard;

