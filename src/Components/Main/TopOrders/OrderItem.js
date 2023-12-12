import React, {useState} from 'react'


import './OrderItem.css'

import Like from './../../../Img/OrdersCard/Like.png'
import ActiveLike from './../../../Img/OrdersCard/Like__active.png'


    const OrederItem = (props) => {

        const [notification, setNotification] = useState({
					show: false,
					text: '',
				})

        const showNotification = text => {
					setNotification({ show: true, text })
					setTimeout(() => setNotification({ show: false, text: '' }), 3000) 
				}



    const id = props.id

    const [isAdded, setIsAdded] = useState(() => {
			const addedItems = JSON.parse(localStorage.getItem('addedItems')) || {}
			return addedItems[id] || false
		})

		const [isLiked, setIsLiked] = useState(() => {
			const likedItems = JSON.parse(localStorage.getItem('likedItems')) || {}
			return likedItems[id] || false
		})

		const toggleItem = () => {
			setIsAdded(current => {
				const newState = !current
                 showNotification(newState ? `${props.name} добавлен в корзину!` : `${props.name} удален из корзины!`);
				const addedItems = JSON.parse(localStorage.getItem('addedItems')) || {}
				addedItems[id] = newState
				localStorage.setItem('addedItems', JSON.stringify(addedItems))
				return newState
			})
		}

		const toggleLike = () => {
			setIsLiked(current => {
				const newState = !current
                showNotification(newState ? `${props.name} добавлен в любимые товары!` : `${props.name} удален из любимых товаров!`);
				const likedItems = JSON.parse(localStorage.getItem('likedItems')) || {}
				likedItems[id] = newState
				localStorage.setItem('likedItems', JSON.stringify(likedItems))
				return newState
			})
		}



    return (
			<>
				<div className='Oreder__card'>
					<div className='content__Wrapper'>
						<div className='Like__container' onClick={toggleLike}>
							<img
								className='ImgLike'
								src={isLiked ? ActiveLike : Like}
								alt='Like'
							/>
						</div>

						<div className='Img__Container'>
							<img className='Img__item' src={props.img} alt='#'></img>
						</div>
						<div className='container__Title__item'>
							<h1 className='title__item'>{props.name}</h1>
						</div>

						<div className='price__container'>
							<p className='price__item'>{props.price}₸</p>
							<div
								className={`container__plus ${isAdded ? 'checked' : ''}`}
								onClick={toggleItem}
							></div>
						</div>
					</div>
				</div>

				<div
					className={`Bonus notification ${notification.show ? 'show' : ''}`}
				>
					{notification.text}
				</div>
			</>
		)
}
 
export default OrederItem;