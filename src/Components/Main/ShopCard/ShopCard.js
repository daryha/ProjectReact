
import { Link } from 'react-router-dom'

import './ShopCard.css'

import Star from './../../../Img/ShopCard/Star.png'



const ShopCard = (props) => {

	const LinkReset = {textDecoration:0}


	return (
		<>
			<Link to={`/stores/${props.slug}`} style={LinkReset}>
				<div className='Shop__Card'>
					<div>
						<img
							className='Shop__Card__Img'
							src={props.image}
							alt='SmallImg'
						></img>
					</div>
					<div className='Shop__Card__info__container'>
						<div className='Shop__Card__type'>
							<p>{props.store_type || props.rest_type}</p>
						</div>
						<div className='Shop__Card__title'>
							<h1>{props.name}</h1>
						</div>

						<div className='Shop__Card__Container'>
							<div className='Shop__Card__info-time'>
								{props.delivery_time} min •
							</div>
							<div className='Shop__Card__info__img-star'>
								<img className='Shop__Card__star' src={Star} alt='Star'></img>
							</div>
							<div className='Shop__Card__info-Rate'>{props.rating}</div>
						</div>
					</div>
				</div>
			</Link>
		</>
	)



	
}
 
export default ShopCard;

