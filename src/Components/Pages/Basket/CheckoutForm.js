import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Basket.css'
import CartProduct from './CartProduct'



const CheckoutForm = () => {
	// Состояния для хранения данных корзины и формы
	const [cartItems, setCartItems] = useState([])
	const [totalPrice, setTotalPrice] = useState(0)

	// При монтировании компонента, загружаем данные корзины
	useEffect(() => {
		fetchCartItems()
	}, [])

	// Функция для загрузки элементов корзины
	const fetchCartItems = async () => {
		const token = localStorage.getItem('token')
		try {
			const response = await axios.get('http://127.0.0.1:8000/api/cart/', {
				headers: {
					Authorization: `Token ${token}`,
				},
			})
			setCartItems(response.data.items)
		} catch (error) {
			console.error('Ошибка при получении данных корзины:', error)
		}
	}

	// Функция для удаления элемента из корзины
	const handleRemoveProduct = async cartItemId => {
		const token = localStorage.getItem('token')
		try {
			const response = await axios.delete(
				`http://127.0.0.1:8000/api/cart/remove/${cartItemId}/`,
				{
					headers: {
						Authorization: `Token ${token}`,
					},
				}
			)
			if (response.status === 204) {
				setCartItems(currentItems =>
					currentItems.filter(item => item.id !== cartItemId)
				)
			}
		} catch (error) {
			console.error('Ошибка при удалении продукта из корзины:', error)
		}
	}

	const handleRemoveProductAll = async cartItemId => {
		const token = localStorage.getItem('token')
		try {
			await axios.delete(
				`http://127.0.0.1:8000/api/cart/remove/${cartItemId}/`,
				{
					headers: {
						Authorization: `Token ${token}`,
					},
				}
			)
		} catch (error) {
			console.error('Ошибка при удалении продукта из корзины:', error)
		}
	}

	const handleQuantityChange = (productId, newQuantity) => {
		const updatedCartItems = cartItems.map(item => {
			if (item.product.id === productId) {
				return { ...item, quantity: newQuantity }
			}
			return item
		})
		setCartItems(updatedCartItems)
	}

	useEffect(() => {
		const newTotalPrice = cartItems.reduce((total, item) => {
			return total + item.product.price * item.quantity
		}, 0)
		setTotalPrice(newTotalPrice) // Make sure this is a number
	}, [cartItems])

	const calculateTotalItems = items => {
		return items.reduce((total, item) => total + parseInt(item.quantity, 10), 0)
	}

	const totalItems = calculateTotalItems(cartItems)

	const handleSubmit = async event => {
		event.preventDefault()

		// Получаем данные из формы
		const formData = new FormData(event.target)
		const formProps = Object.fromEntries(formData)

		// Обновляем ключ 'phone' на 'phone_number', если это необходимо
		formProps.phone_number = formProps.phone
		delete formProps.phone

		// Подготавливаем данные о заказываемых товарах
		const orderItems = cartItems.map(item => ({
			product: item.product.id,
			quantity: item.quantity,
			price: item.product.price,
		}))

		// Собираем данные для отправки
		const orderData = {
			...formProps,
			order_items: orderItems,
		}

		console.log(JSON.stringify(orderData))

		const token = localStorage.getItem('token')
		try {
			const response = await axios.post(
				'http://127.0.0.1:8000/api/create-order/',
				JSON.stringify(orderData), // Сериализуем объект данных в строку JSON
				{
					headers: {
						'Content-Type': 'application/json',
						Authorization: `Token ${token}`,
					},
				}
			)

			// Обработка успешного ответа
			if (response.status === 201) {
				console.log('Заказ успешно создан:', response.data)
				setCartItems([])
				console.log('После setCartItems: ', cartItems) // Добавьте лог для диагностики

				localStorage.removeItem('cart')
				console.log(
					'LocalStorage после очистки: ',
					localStorage.getItem('cart')
				) // Добавьте лог для диагностики

				window.location.href = '/ConfirmOrder'
			}
		} catch (error) {
			console.error(
				'Ошибка при создании заказа:',
				error.response ? error.response.data : error
			)
		}
	}

	return (
		<div className='Wrapper'>
			<div className='basket'>
				<div className='checkout'>
					<div className='checkout'>
						<form className='checkout-form' onSubmit={handleSubmit}>
							<div className='contact-information'>
								<h2>Contact information</h2>
								<input
									name='phone_num' // вместо name='phone'
									type='tel'
									placeholder='Mobile phone number'
									className='Basket_input_style'
								/>
							</div>

							<div className='shipping-address'>
								<h2 className='Shipping_address'>Shipping address</h2>
								<div className='input__Container'>
									<input
										name='first_name'
										type='text'
										placeholder='First name (optional)'
										className='Form__style'
									/>

									<input
										name='last_name'
										type='text'
										placeholder='Last name'
										className='Form__style'
									/>
								</div>
								<input
									name='address'
									type='text'
									placeholder='Address'
									className='Form__style'
								/>
								<input
									name='city'
									type='text'
									placeholder='City'
									className='Form__style'
								/>
								<input
									name='postal_code'
									type='text'
									placeholder='Postal code'
									className='Form__style'
								/>
							</div>

							<button type='submit'>Заказать</button>
						</form>
					</div>

					<div className='order-summary'>
						<h2>Order Summary</h2>
						<div name='order_items'>
							{cartItems.map(item => (
								<CartProduct
									key={item.id}
									product={item.product}
									onRemove={() => handleRemoveProduct(item.id)}
									onQuantityChange={handleQuantityChange}
								/>
							))}
						</div>
						<div className='totals'>
							<div className='total'>
								<span>Всего продуктов: </span>
								<span>{totalItems} шт.</span>
							</div>
							<div className='total'>
								<span>Итого : </span>
								<span>{totalPrice} ₸</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CheckoutForm
