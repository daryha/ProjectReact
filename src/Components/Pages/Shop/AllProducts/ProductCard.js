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
					'https://myserverapp-a354f8daf7d4.herokuapp.com/api/user/profile/',
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
			showNotification(
				'Вы должны войти в систему, чтобы выполнить это действие.'
			)
		}
	
 

const toggleItem = async () => {

	if (!isAuthenticated) {
		showAuthenticationError()
		return
	}

	// Если товар уже добавлен (isAdded === true), возможно, вы захотите удалить его из корзины.
	// В противном случае, добавьте его в корзину.
	if (!isAdded) {
		try {
			const token = localStorage.getItem('token') 
			const response = await axios.post(
				`https://myserverapp-a354f8daf7d4.herokuapp.com/cart/add/${id}/`,
				{},
				{
					headers: {
						Authorization: `Token ${token}`,
					},
				}
			)

			if (response.status === 200) {
				showNotification(`${products.name} добавлен в корзину!`)
				setIsAdded(true) // Обновляем состояние только после успешного запроса
			} else {
				// Возможно, здесь вам стоит показать сообщение об ошибке из response.data
				console.error('Ошибка при добавлении товара в корзину')
			}
		} catch (error) {
			console.error('Ошибка при отправке запроса:', error)
			showNotification('Произошла ошибка при добавлении товара в корзину.')
		}
	} else {
		// Логика для удаления товара из корзины, если isAdded === true
		showNotification(`${products.name} удален из корзины!`)
		setIsAdded(false)
	}
}

	const toggleLike = () => {

		if (!isAuthenticated) {
			showAuthenticationError()
			return
		}else

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
