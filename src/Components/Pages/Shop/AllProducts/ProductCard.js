import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './AllProucts.css'
import Like from './../../../../Img/OrdersCard/Like.png'
import ActiveLike from './../../../../Img/OrdersCard/Like__active.png'




const ProductCard = products => {
	const [notification, setNotification] = useState({
		show: false,
		text: '',
	})

	const showNotification = text => {
		setNotification({ show: true, text })
		setTimeout(() => setNotification({ show: false, text: '' }), 3000)
	}

	const id = products.id

	const [isAdded, setIsAdded] = useState(() => {
		const addedItems = JSON.parse(localStorage.getItem('addedItems')) || {}
		return addedItems[id] || false
	})

	const [isLiked, setIsLiked] = useState(() => {
		const likedItems = JSON.parse(localStorage.getItem('likedItems')) || {}
		return likedItems[id] || false
	})


    const fetchUserProfile = async () => {
			try {
				const token = localStorage.getItem('token') // Получение токена из localStorage
				if (!token) {
					console.error('Токен аутентификации не найден')
					return
				}
				const response = await axios.get(
					'http://127.0.0.1:8000/api/user/profile/',
					{
						headers: {
							Authorization: `Token ${token}`,
						},
					}
				)

				// Обработка данных профиля пользователя
				console.log(response.data)
			} catch (error) {
				console.error('Ошибка доступа к защищенному маршруту', error)
			}
		}

		// Вызываем функцию при монтировании компонента, если нужно получить профиль сразу
		useEffect(() => {
			fetchUserProfile()
		}, [])

	const addToCart = async () => {
		try {
			const response = await fetch(`http://127.0.0.1:8000/api/cart/add/${products.id}/`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Token ${localStorage.getItem('token')}`,
				},
			})

			if (response.ok) {
				setIsAdded(true)
				showNotification(`${products.name} добавлен в корзину!`)
			} else {
				// Обработка ошибок, если запрос не удался
				console.error('Ошибка при добавлении товара в корзину')
			}
		} catch (error) {
			console.error('Ошибка при отправке запроса:', error)
		}
	}

	const toggleItem = () => {
		setIsAdded(current => {
			const newState = !current
			showNotification(
				newState
					? `${products.name} добавлен в корзину!`
					: `${products.name} удален из корзины!`
			)
			const addedItems = JSON.parse(localStorage.getItem('addedItems')) || {}
			addedItems[id] = newState
			localStorage.setItem('addedItems', JSON.stringify(addedItems))
			return newState
		})
		if (!isAdded) {
			addToCart()
		}
	}

	const toggleLike = () => {
		setIsLiked(current => {
			const newState = !current
			showNotification(
				newState
					? `${products.name} добавлен в любимые товары!`
					: `${products.name} удален из любимых товаров!`
			)
			const likedItems = JSON.parse(localStorage.getItem('likedItems')) || {}
			likedItems[id] = newState
			localStorage.setItem('likedItems', JSON.stringify(likedItems))
			return newState
		})
	}

	return (
		<>
			<div className='Product Oreder__card'>
				<div className='content__Wrapper'>
					<div className='Like__container' onClick={toggleLike}>
						<img
							className='ImgLike'
							src={isLiked ? ActiveLike : Like}
							alt='Like'
						/>
					</div>

					<div className='Img__Container'>
						<img
							className='Product__img Img__item'
							src={products.image}
							alt='#'
						></img>
					</div>
					<div className='container__Title__item'>
						<p className='Product__title title__item'>{products.name}</p>
						<div className='container__info'>
							<p className='Product__weight Product__unit'>{products.weight}</p>
							<p className='Product__unit'>{products.unit}</p>
						</div>
					</div>

					<div className='price__container'>
						<p className='price__item'>{products.price} ₸</p>
						<div
							className={`container__plus ${isAdded ? 'checked' : ''}`}
							onClick={toggleItem}
						></div>
					</div>
				</div>
			</div>

			<div className={`notification ${notification.show ? 'show' : ''}`}>
				{notification.text}
			</div>
		</>
	)
}

export default ProductCard
