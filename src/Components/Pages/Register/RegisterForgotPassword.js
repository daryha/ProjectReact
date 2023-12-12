import './Register.css'

import Eyeimg from './../../../Img/Register__icon/iconmonstr-eye-thin.svg'
import EyeimgOff from './../../../Img/Register__icon/iconmonstr-eye-off-thin.svg'

import { useState } from 'react'
import { NavLink } from 'react-router-dom'

const RegisterForgotPassword = () => {
	const [isPasswordShown, setIsPasswordShown] = useState(false)

	const togglePasswordVisibility = () => {
		setIsPasswordShown(!isPasswordShown)
	}

	return (
		<>
			<div className='Register__window'>
				<h3 className='Frgot__title'>Забыли пароль?</h3>
				<p className='Frgot__desc'>Введите свою почту для сброса</p>

				<div className='Container__input'>
					<div className='Input__wrapper'>
						<input className='Email__input' placeholder='Почта' />
						<span className='Input__icon Email__icon'></span>
					</div>
					<div className='Input__wrapper'></div>
				</div>

				<button className='Frgot sing__up__register sing__up '>отправить</button>
			</div>
		</>
	)
}

export default RegisterForgotPassword
