import './ShopCardContainer.css'
import ShopCard from './ShopCard';


import vector from './../../../Img/ShopCard/Vector.png'

import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import axios from 'axios'





const ShopCardContainer = () => {
	const [shops, setShops] = useState([])
	useEffect(() => {
			const fetchShops = async () => {
				try {
					
					const response = await axios.get(
						'https://backendtasty-291f2f48a6f8.herokuapp.com/api/stores/'
					)
					setShops(response.data)
				} catch (error) {
					console.error('Ошибка при получении данных о магазинах:', error)
				}
			}

			fetchShops()
	}, [])

	
	const CreateCardsShop = (start, end) => {
		return shops
			.slice(start, end)
			.map((item, index) => (
				<ShopCard
					key={index}
					id={item.id}
					image={item.image}
					store_type={item.store_type}
					name={item.name}
					delivery_time={item.delivery_time}
					rating={item.rating}
					slug={item.slug}
				/>
			))
}


	const CardSection = ({start, end }) => {
		return (
			<>
				<div className='ShopCardContainer'>
					<h1 className='Shop__title'>Магазины</h1>
					<div className='Card__Wrapper'>{CreateCardsShop(start, end)}</div>
					<div className='Vector__container'>
						<NavLink to='/AllShop' className='underLineNone'>
							<p>View All</p>
						</NavLink>
						<img src={vector} alt='vector' className='Vector__img'></img>
					</div>
				</div>
			</>
		)
	}


    return (
			<div>
				<CardSection title='Магазины' start={0} end={3} />
			</div>
		)
}
 
export default ShopCardContainer;