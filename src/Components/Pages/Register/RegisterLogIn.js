import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'
import Eyeimg from './../../../Img/Register__icon/iconmonstr-eye-thin.svg'
import EyeimgOff from './../../../Img/Register__icon/iconmonstr-eye-off-thin.svg'
import './Register.css'
import { NavLink } from 'react-router-dom'
import RegisterGoogle from './RegisterGoogle'


const RegisterLogIn = () => {
	const [username, setUsername] = useState('') 
	const [password, setPassword] = useState('')
	const [errors, setErrors] = useState({})
	const { login } = useAuth()
	const navigate = useNavigate()
	const [isPasswordShown, setIsPasswordShown] = useState(false)

	

	const togglePasswordVisibility = () => {
		setIsPasswordShown(!isPasswordShown)
	}

	const validateUserName = userName => {
		const re = /^[a-zA-Z0-9]{4,24}$/
		return re.test(userName)
	}

	const validatePassword = password => {
		const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*[А-Яа-я]).{8,}$/
		return re.test(password)
	}

	const handleUserNameBlur = e => {
		const userNameValue = e.target.value

		if (!validateUserName(userNameValue)) {
			setErrors(prev => ({
				...prev,
				userName:
					'Логин должен быть от 4 до 24 символов и содержать только буквы и цифры.',
			}))
		}
	}	

	const handlePasswordBlur = e => {
		const passwordValue = e.target.value

		if (!validatePassword(passwordValue)) {
			setErrors(prev => ({
				...prev,
				password:
					'Пароль Должен содержать по крайней мере одно число, одну заглавную и строчную буквы, а также не менее 8 и более символов.',
			}))
		}
	}	

	  const handleGoogleLoginSuccess = googleData => {
			// Здесь вы можете обработать вход через Google
			login(googleData)
			localStorage.setItem('token', googleData.token)
			navigate('/')
		}



	const handleLogin = async e => {
		e.preventDefault()

		const isUsernameValid = validateUserName(username)
		const isPasswordValid = validatePassword(password)

		setErrors({
			username: isUsernameValid
				? ''
				: 'Неверный Логин. Повторите попытку или нажмите на ссылку "Забыли пароль?".',
			password: isPasswordValid
				? ''
				: 'Неверный пароль. Повторите попытку или нажмите на ссылку "Забыли пароль?", чтобы сбросить его.',
		})

		if (!isUsernameValid || !isPasswordValid) {
			return
		}

		try {
			// Попытка входа в систему
			const response = await axios.post(
				'https://backendtasty-291f2f48a6f8.herokuapp.com/api/accounts/login/',
				{
					username: username,
					password: password,
				}
			)

			// Сохранение токена в localStorage
			const token = response.data.token
			localStorage.setItem('token', token)

			// Вызов функции login, предполагается, что она обновит состояние аутентификации в контексте
			login({ username: username, token: token })

			// Перенаправление пользователя на домашнюю страницу
			navigate('/')
		} catch (error) {
			// Обработка ошибок, например, показ сообщения пользователю
			console.error('Ошибка при входе:', error)
			alert(
				'Ошибка при входе: ' + (error.response && error.response.data.detail)
			)
		}
	}

	return (
		<div className='Register__window'>
			<h3 className='Register__title'>
				Войти в <span>TastyPriority</span>
			</h3>
			<RegisterGoogle onLoginSuccess={handleGoogleLoginSuccess}  />
			<p className='Register__or'>ИЛИ</p>
			<form onSubmit={handleLogin}>
				<div className='Container__input'>
					<div className='Input__wrapper'>
						<input
							className={`User__input ${errors.username ? 'input-error' : ''}`}
							placeholder='Имя пользователя'
							value={username}
							onChange={e => setUsername(e.target.value)}
							onBlur={handleUserNameBlur}
						/>
						{errors.username && <div className='error'>{errors.username}</div>}
					</div>
					<div className='Input__wrapper'>
						<input
							className={`Password__input ${
								errors.username ? 'input-error' : ''
							}`}
							placeholder='Пароль'
							type={isPasswordShown ? 'text' : 'password'}
							value={password}
							onChange={e => setPassword(e.target.value)}
							onBlur={handlePasswordBlur}
						/>
						{errors.password && <div className='error'>{errors.password}</div>}
						<NavLink to={'/ForgotPassword'}>
							<p className={`Password__refresh ${errors ? 'trans' : ''}`}>
								Забыли пароль?
							</p>
						</NavLink>
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
				<button type='submit' className='LogIn sing__up__register sing__up'>
					Войти
				</button>
			</form>
			<p className='Frogot__password'>
				Создать новый аккаунт?{' '}
				<NavLink to='/Register' className='Frogot__password Logo__title'>
					Зарегистрироваться
				</NavLink>
			</p>
			<NavLink to='/Policy' className='Politic Frogot__password'>
				<p className='Politic'>политика конфиденциальности</p>
			</NavLink>
		</div>
	)
}

export default RegisterLogIn
