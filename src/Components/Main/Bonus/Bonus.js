import React, { useState } from 'react'
import './Bonus.css' // Убедитесь, что путь к вашему CSS файлу указан правильно

const Bonus = () => {

	const [notification, setNotification] = useState({
				show: false,
				text: '',
			})
	
    const showNotification = text => {
				setNotification({ show: true, text })
				setTimeout(() => setNotification({ show: false, text: '' }), 3000)
			}




	const [email, setEmail] = useState('')
	const [message, setMessage] = useState(null) 

	const handleInputChange = event => {
		setEmail(event.target.value)
	}

	const handleSubmit = async event => {
		event.preventDefault()
		try {
			const response = await fetch(
				'https://servertastypriority-ca7a9e5aec14.herokuapp.com/email_app/send_email/',
				{
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({ email: email }),
				}
			)
			const data = await response.json()
			if (response.ok) {
				showNotification(
					'Ваш запрос на получение освежающей Coca-Cola был успешно обработан!'
				)
			} else {
				showNotification("YEESS") // Установка сообщения об ошибке
			}
		} catch (error) {
			setMessage('Ошибка сети: ' + error.message) // Установка сообщения о сетевой ошибке
		}
	}

	return (
		<>
			<div className='Bonus__container'>
				<div className='Bonus__title'>мы открылись!</div>
				<div className='Bonus__desc'>
					coca-cola в <span>подарок</span>
				</div>
				{message && <div className='Bonus__message'>{message}</div>}{' '}
				<div className='form-container'>
					<form onSubmit={handleSubmit}>
						<input
							type='email'
							name='email'
							placeholder=' Ваш Email Address'
							value={email}
							onChange={handleInputChange}
							className='input-style'
							required
							autocomplete='email'
						/>
						<input type='submit' className='button-style' value='Получить' />
					</form>
					<div className={`notification ${notification.show ? 'show' : ''}`}>
						{notification.text}
					</div>
				</div>
			</div>
		</>
	)
}

export default Bonus
