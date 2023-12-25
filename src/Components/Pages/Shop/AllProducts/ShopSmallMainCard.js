import React, { useState } from 'react'

import './ShopBaner.css'


	
import Favorit from './../../../../Img/ShopCard/Favorit.png'

const ShopSmallMainCard = shopDetails => {
	const id = shopDetails.id

	const [isActive, setIsActive] = useState(() => {
		const favs = JSON.parse(localStorage.getItem('favorites')) || {}
		// Проверяем только состояние текущего магазина
		return favs[id] || false
	})


	const ClickEvent = () => {
		setIsActive(current => {
			const newState = !current
			const favs = JSON.parse(localStorage.getItem('favorites')) || {}
			// Здесь используем id магазина как ключ
			favs[id] = newState
			localStorage.setItem('favorites', JSON.stringify(favs))
			return newState
		})
	}

	const buttonColor = isActive ? { background: '#fad773' } : {}

	return (
		<>
			<div className='big_shop_card Shop__Card'>
				<div>
					<img
						className='big_shop_card_img Shop__Card__Img'
						src={shopDetails.image}
						alt='SmallImg'
					></img>
				</div>
				<div className='Big_Shop__Card__info__container Shop__Card__info__container'>
					<div className='Big__Shop__Card__title Shop__Card__title'>
						<h1>{shopDetails.name}</h1>
					</div>

					<div
						className='Big__Shop__Card__info__img-favorites Shop__Card__info__img-favorites'
						onClick={ClickEvent}
						style={buttonColor}
					>
						<img className='FavoritLogo' src={Favorit} alt='Favori'></img>
					</div>
				</div>
			</div>
		</>
	)
}

export default ShopSmallMainCard
