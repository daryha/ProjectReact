import './Register.css'
import RegisterLogIn from './RegisterLogIn';
import RegisterBanner from './RegisterBanner';
import imgLogo from './../../../Img/Logo.png'

import { NavLink } from 'react-router-dom';

const LogIn = () => {
    return (
			<>
				<div className='Register__container'>
					<NavLink to='/' >
						<img className='Logo_reg' src={imgLogo} alt='logo'></img>
					</NavLink>
					<RegisterLogIn />
				</div>
				<RegisterBanner />
			</>
		)
}
 
export default LogIn;