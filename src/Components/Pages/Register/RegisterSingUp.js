import React, { useState } from 'react'
import axios from 'axios'
import { NavLink, useNavigate } from 'react-router-dom'
import GoogleLogo from './../../../Img/G.png'
import Eyeimg from './../../../Img/Register__icon/iconmonstr-eye-thin.svg'
import EyeimgOff from './../../../Img/Register__icon/iconmonstr-eye-off-thin.svg'

import './Register.css'

const RegisterSingUp = () => {
	const [userName, setUserName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [isPasswordShown, setIsPasswordShown] = useState(false)
	const navigate = useNavigate()
	const [errors, setErrors] = useState({})

	const togglePasswordVisibility = () => {
		setIsPasswordShown(!isPasswordShown)
	}

	const validateUserName = userName => /^[a-zA-Z0-9]{4,24}$/.test(userName)

	const validatePassword = password =>
		/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password)

	const validateEmail = email =>
		/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
			String(email).toLowerCase()
		)

	const handleUserNameBlur = e => {
		const userNameValue = e.target.value
		if (!validateUserName(userNameValue)) {
			setErrors(prev => ({
				...prev,
				userName:
					'Логин должен быть от 4 до 24 символов и содержать только буквы и цифры.',
			}))
		} else {
			setErrors(prev => ({ ...prev, userName: '' }))
		}
	}

	const handleEmailBlur = e => {
		const emailValue = e.target.value
		if (!validateEmail(emailValue)) {
			setErrors(prev => ({
				...prev,
				email: 'Введите действительный адрес электронной почты.',
			}))
		} else {
			setErrors(prev => ({ ...prev, email: '' }))
		}
	}

	const handlePasswordBlur = e => {
		const passwordValue = e.target.value
		if (!validatePassword(passwordValue)) {
			setErrors(prev => ({
				...prev,
				password:
					'Пароль должен быть не менее 8 символов и содержать хотя бы одну заглавную букву и одну цифру.',
			}))
		} else {
			setErrors(prev => ({ ...prev, password: '' }))
		}
	}

	const handleRegister = async e => {
		e.preventDefault()

		if (
			!validateUserName(userName) ||
			!validateEmail(email) ||
			!validatePassword(password)
		) {
			return 
		}

		try {
			const response = await axios.post(
				'https://servertastypriority-ca7a9e5aec14.herokuapp.com/api/accounts/register/',
				{
					username: userName,
					email: email,
					password: password,
				}
			)
			console.log(response.data)
			navigate('/login')
		} catch (error) {
			if (error.response && error.response.data) {
				setErrors({ ...errors, ...error.response.data })
			} else {
				console.error('Произошла неизвестная ошибка', error)
				alert('Произошла неизвестная ошибка')
			}
		}
	}

	return (
		<div className='Register__window'>
			<h3 className='Register__title'>
				Зарегистрироваться в <span>TastyPriority</span>
			</h3>
			<button className='Sing__to__google'>
				<img src={GoogleLogo} alt='Google' />
			</button>
			<p className='Register__or'>ИЛИ</p>
			<form onSubmit={handleRegister}>
				<div className='Container__input'>
					<div className='Input__wrapper'>
						<input
							className={`User__input ${errors.userName ? 'input-error' : ''}`}
							placeholder='Имя пользователя'
							value={userName}
							onChange={e => setUserName(e.target.value)}
							onBlur={handleUserNameBlur}
						/>
						{errors.userName && <div className='error'>{errors.userName}</div>}
					</div>
					<div className='Input__wrapper'>
						<input
							className={`Email__input ${errors.email ? 'input-error' : ''}`}
							placeholder='Почта'
							value={email}
							onChange={e => setEmail(e.target.value)}
							onBlur={handleEmailBlur}
						/>
						{errors.email && <div className='error'>{errors.email}</div>}
					</div>
					<div className='Input__wrapper'>
						<input
							className={`Password__input ${
								errors.password ? 'input-error' : ''
							}`}
							placeholder='Пароль'
							type={isPasswordShown ? 'text' : 'password'}
							value={password}
							onChange={e => setPassword(e.target.value)}
							onBlur={handlePasswordBlur}
						/>
						{errors.password && <div className='error'>{errors.password}</div>}
						<button
							type='button'
							onClick={togglePasswordVisibility}
							className='Password__toggle'
						>
							{isPasswordShown ? (
								<img src={Eyeimg} alt='Show password' />
							) : (
								<img src={EyeimgOff} alt='Hide password' />
							)}
						</button>
					</div>
				</div>
				<button type='submit' className='sing__up__register sing__up'>
					зарегистрироваться
				</button>
			</form>
			<p className='Frogot__password'>
				У вас уже есть учетная запись?{' '}
				<NavLink to='/LogIn' className='Frogot__password Logo__title'>
					<span>Авторизоваться</span>
				</NavLink>
			</p>
			<NavLink to='/Policy' className='Politic Frogot__password'>
				<p className='Politic'>политика конфиденциальности</p>
			</NavLink>
		</div>
	)
}

export default RegisterSingUp
