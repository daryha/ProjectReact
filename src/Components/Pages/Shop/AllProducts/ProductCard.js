import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './AllProucts.css'





const ProductCard = (products) => {




	const [notification, setNotification] = useState({
		show: false,
		text: '',
	})

	const [isAuthenticated, setIsAuthenticated] = useState(false)

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
				setIsAuthenticated(false)
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

			setIsAuthenticated(true)
			console.log(response.data)
		} catch (error) {
			console.error('Ошибка доступа к защищенному маршруту', error)
			setIsAuthenticated(false)
		}
	}

	useEffect(() => {
		fetchUserProfile()
	}, [])

	const showAuthenticationError = () => {
		showNotification('Вы должны войти в систему, чтобы выполнить это действие.')
	}

	const handleToggleCartItem = async () => {
		if (!isAuthenticated) {
			showAuthenticationError()
			return
		}

		try {
			const token = localStorage.getItem('token')
			if (!token) {
				showNotification('Вы не авторизованы')
				return
			}

			let response
			if (!isAdded) {
				// Добавление товара в корзину
				response = await axios.post(
					`http://127.0.0.1:8000/api/cart/add/${id}/`,
					{},
					{
						headers: {
							Authorization: `Token ${token}`,
						},
					}
				)
			} else {
				// Удаление товара из корзины
				response = await axios.delete(
					`http://127.0.0.1:8000/api/cart/remove/${id}/`,
					{
						headers: {
							Authorization: `Token ${token}`,
						},
					}
				)
			}

			if (response.status === 200 || response.status === 204) {
				const action = isAdded ? 'удален из' : 'добавлен в'
				showNotification(`${products.name} ${action} корзину!`)
				setIsAdded(!isAdded) // Обновляем состояние на противоположное
			} else {
				console.error('Ошибка при изменении корзины')
			}
		} catch (error) {
			console.error('Ошибка при отправке запроса:', error)
			showNotification('Произошла ошибка при изменении корзины.')
		}
	}

	const toggleLike = () => {
		if (!isAuthenticated) {
			showAuthenticationError()
			return
		} else
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
							onClick={handleToggleCartItem}
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
