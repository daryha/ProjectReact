import './Register.css'
import RegisterForgotPassword from './RegisterForgotPassword'
import RegisterBanner from './RegisterBanner'
import imgLogo from './../../../Img/Logo.png'

import { NavLink } from 'react-router-dom'

const ForgotPassword = () => {
	return (
		<>
			<div className='Register__container'>
				<NavLink to='/'>
					<img className='Logo_reg' src={imgLogo} alt='logo'></img>
				</NavLink>
				<RegisterForgotPassword />
			</div>
			<RegisterBanner />
		</>
	)
}

export default ForgotPassword
