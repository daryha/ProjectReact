import './Register.css'
import { NavLink } from 'react-router-dom'



import imgLogo from './../../../Img/Logo.png'

import RegisterBanner from './RegisterBanner'

import RegisterSingUp from './RegisterSingUp'



const Register = () => {



    return (
			<>
				<div className='Register__container'>
					<NavLink to='/'>
						<img className='Logo_reg' src={imgLogo} alt='logo'></img>
					</NavLink>
					<RegisterSingUp />
				</div>

				<RegisterBanner />
			</>
		)

 
}
export default Register;