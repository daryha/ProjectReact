import './ShopCardContainer.css'
import ShopCard from './ShopCard';


import SmallCardImg from './../../../Img/ShopCard/BigSamll.png'
import magnum from './../../../Img/ShopCard/MagnumBig.png'
import galmart from './../../../Img/ShopCard/GalmartBig.png'
import KFC from './../../../Img/ShopCard/KfC.png'
import BK from './../../../Img/ShopCard/BKBIG.png'
import Hardis from './../../../Img/ShopCard/Hardis.png'



import vector from './../../../Img/ShopCard/Vector.png'






const ShopCardContainer = () => {

	const ShopCardData = [
		{
			id: 1,
			img: SmallCardImg,
			type: 'Shop',
			name: 'Сеть магазинов SMALL',
			time: '24min',
			rate: 4.8,
			path: '/ShopSmall',
		},

		{
			id: 2,
			img: magnum,
			type: 'Shop',
			name: 'Сеть магазинов magnum',
			time: '24min',
			rate: 4.9,
			path: '/ShopMagnum',
		},

		{
			id: 3,
			img: galmart,
			type: 'Shop',
			name: 'Сеть магазинов galmart',
			time: '24min',
			rate: 4.8,
			path: '/ShopGalmart',
		},

		{
			id: 4,
			img: KFC,
			type: 'fast food',
			name: 'KFC',
			time: '24min',
			rate: 4.8,
			path: '/RestKFC',
		},

		{
			id: 5,
			img: BK,
			type: 'fast food',
			name: 'Burger King',
			time: '24min',
			rate: 4.9,
			path: '/RestBK',
		},

		{
			id: 6,
			img: Hardis,
			type: 'fast food',
			name: 'Hardees',
			time: '24min',
			rate: 4.8,
			path: '/RestHardees',
		},
	]
	
	const CreateCards = (start, end) => {
		return ShopCardData.slice(start, end).map((item, index) =>(
			<ShopCard 
			key={index}
			id={item.id}
			img={item.img}
			type={item.type}
			name={item.name}
			time={item.time}
			rate={item.rate}
			path={item.path}				
			/>
		))
}
	


	const CardSection = ({ title, start, end }) => {
		return (
			<div className='ShopCardContainer'>
				<h1 className='Shop__title'>{title}</h1>
				<div className='Card__Wrapper'>{CreateCards(start, end)}</div>

				<div className='Vector__container'>
					<p>View All</p>
					<img src={vector} alt="vector" className='Vector__img'></img>
				</div>
			</div>
		)
	}


    return (
			<div>
				<CardSection title='Магазины' start={0} end={3} />
				<CardSection title='Рестораны' start={3} end={6} />
			</div>
		)
}
 
export default ShopCardContainer;