import React, {useState} from 'react'


import './OrderItem.css'





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



		



    return (
			<>
				<div className='Oreder__card'>
					<div className='content__Wrapper'>
						
						<div className='Img__Container'>
							<img className='Img__item' src={props.img} alt='#'></img>
						</div>
						<div className='container__Title__item'>
							<h1 className='title__item'>{props.name}</h1>
						</div>

						<div className='price__container'>
							<p className='price__item'>{props.price}₸</p>
						
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