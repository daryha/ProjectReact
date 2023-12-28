import React, { useState } from 'react'
import axios from 'axios'

const RegisterForgotPassword = () => {
	const [email, setEmail] = useState('')
	const [code, setCode] = useState('')
	const [newPassword, setNewPassword] = useState('')
	const [confirmPassword, setConfirmPassword] = useState('')
	const [message, setMessage] = useState('')
	const [showResetForm, setShowResetForm] = useState(false)

	const handleEmailChange = e => setEmail(e.target.value)
	const handleCodeChange = e => setCode(e.target.value)
	const handleNewPasswordChange = e => setNewPassword(e.target.value)
	const handleConfirmPasswordChange = e => setConfirmPassword(e.target.value)

	const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)

	const handlePasswordResetRequest = () => {
		if (!validateEmail(email)) {
			setMessage('Пожалуйста, введите действительный адрес электронной почты.')
			return
		}

		axios
			.post('http://127.0.0.1:8000/api/accounts/password-reset-request/', {
				email,
			})
			.then(response => {
				setMessage(
					<p className='Password__confirm__masege'>Письмо для сброса пароля отправлено. Пожалуйста, проверьте вашу почту.</p>
				)
				setShowResetForm(true) // Показать форму сброса пароля
			})
			.catch(error => {
				setMessage('Произошла ошибка при отправке запроса на сброс пароля.')
				setShowResetForm(false)
			})
	}

	const handlePasswordChangeRequest = () => {
		if (newPassword !== confirmPassword) {
			setMessage('Пароли не совпадают.')
			return
		}

		axios
			.post('http://127.0.0.1:8000/api/accounts/reset-password-confirm/', {
				code,
				email,
				newPassword,
			})
			.then(response => setMessage('Пароль успешно изменен.'))
			.catch(error => setMessage('Ошибка при изменении пароля.'))
	}

	return (
		<div className='Password__forgot Register__window'>
			{!showResetForm && (
				<>
					<p className='Frgot__title'>Забыли пароль</p>
					<p className='Frgot__desc'>Введите свою почту для сброса</p>
					<input
						className='Email__input'
						placeholder='Введите вашу почту'
						value={email}
						onChange={handleEmailChange}
					/>
					<button
						className='ForgotPasswordButton sing__up'
						onClick={handlePasswordResetRequest}
					>
						Отправить письмо
					</button>
				</>
			)}
			{showResetForm && (
				<>
					<input
						className='Code__input Password__input'
						placeholder='Введите код подтверждения'
						value={code}
						onChange={handleCodeChange}
					/>
					<input
						className='Password__input'
						type='password'
						placeholder='Введите новый пароль'
						value={newPassword}
						onChange={handleNewPasswordChange}
					/>
					<input
						className='ConfirmPassword__input  Password__input'
						type='password'
						placeholder='Подтвердите новый пароль'
						value={confirmPassword}
						onChange={handleConfirmPasswordChange}
					/>
					<button
						className='ChangePasswordButton sing__up'
						onClick={handlePasswordChangeRequest}
					>
						Изменить пароль
					</button>
				</>
			)}
			{message && <p>{message}</p>}
		</div>
	)
}

export default RegisterForgotPassword
