import './ShopCardContainer.css'
import ShopCard from './ShopCard'
import React, { useState, useEffect } from 'react'
import axios from 'axios'


const AllShop = () => {
	const [shops, setShops] = useState([])

	useEffect(() => {
		const fetchShops = async () => {
			try {
				const response = await axios.get(
					'https://myserverapp-a354f8daf7d4.herokuapp.com/api/stores/'
				)
				setShops(response.data)
			} catch (error) {
				console.error('Ошибка при получении данных о магазина:', error)
			}
		}

		fetchShops()
	}, [])

	const CreateCardsShop = () => {
		return shops.map((item, index) => (
			<ShopCard
				key={index}
				id={item.id}
				image={item.image}
				store_type={item.store_type}
				name={item.name}
				delivery_time={item.delivery_time}
				rating={item.rating}
				path_shop={item.path_shop}
				slug={item.slug}
			/>
		))
	}

	return (
		<>
			<div className='Wrapper'>
				<h1 className='title__produst__web'>Все магазины</h1>
				<div className='Product__web__content'>
				{CreateCardsShop()}</div>
			</div>
		</>
	)
}

export default AllShop
