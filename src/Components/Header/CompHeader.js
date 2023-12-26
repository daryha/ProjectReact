import './CompHeader.css'
import { useAuth } from '../Pages/Register/AuthContext'
import { NavLink, useNavigate } from 'react-router-dom'

import imgLogo from '../../Img/Logo.png'
import BasketIcon from './../../Img/Basket-ico.png'
import FavoriteIcon from './../../Img/Favorite-ico.png'

const CompHeader = () => {
	
	const { user, logout } = useAuth()
	const navigate = useNavigate()

    const handleLogout = () => {
			logout() // Функция для обновления состояния аутентификации
			localStorage.removeItem('token') // Удаление токена из localStorage
			navigate('/')
		}
	  const userLoggedIn = (
		
			<div className='LogIn__container'>
				<img className='Favorite_icon icon' src={FavoriteIcon} alt='Headr_icon'></img>
				<img className='Basket_icon icon' src={BasketIcon} alt='Headr_icon'></img>
				<span className='UserName'>{user ? user.username : 'Гость'}</span>{' '}

				<button onClick={handleLogout} className='logout sing__up'>
					Выйти
				</button>
			</div>
		)
		const userLogOut = (
			<>
				<NavLink to='/LogIn'>
					<button className='login'>Войти</button>
				</NavLink>
				<NavLink to='/Register'>
					<button className='sing__up'>Зарегистрироваться</button>
				</NavLink>
			</>
		)


	


    return (
			<>
				<div className='Header__container'>
					<div className='Header__logo'>
						<NavLink to='/'>
							<img src={imgLogo} alt='logo'></img>
						</NavLink>
					</div>

					<NavLink to='/' className='Header__title'>
						<h2>TastyPriority</h2>
					</NavLink>

					<ul className='Header__list'>
						<li className='Header__items'>
							<a
								href='https://www.youtube.com/watch?v=jtHDIIveW4U'
								className='Header__links'
							>
								Магазины
							</a>
						</li>
						<li className='Header__items'>
							<a
								href='https://www.youtube.com/watch?v=jtHDIIveW4U'
								className='Header__links'
							>
								Рестораны
							</a>
						</li>
						<li className='Header__items'>
							<a
								href='https://www.youtube.com/watch?v=jtHDIIveW4U'
								className='Header__links'
							>
								Акции
							</a>
						</li>
						<li className='Header__items'>
							<a
								href='https://www.youtube.com/watch?v=jtHDIIveW4U'
								className='Header__links'
							>
								Контакты
							</a>
						</li>
					</ul>

					<div className='header__button-container'>
						{user ? userLoggedIn : userLogOut}{' '}
					</div>
				</div>
			</>
		)
}
 
export default CompHeader;