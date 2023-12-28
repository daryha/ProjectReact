import React from 'react'
import './Basket.css'

const ConfirmOrder = () => {

    const marginTitle = {marginTop: 20, marginBottom: 20 }

	return (
		<div className='confirm-order-box'>
			<div className='confirm-order-checkmark'>
				<svg
					className='checkmark'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 52 52'
				>
					<circle
						className='checkmark-circle'
						cx='26'
						cy='26'
						r='25'
						fill='none'
					/>
					<path
						className='checkmark-check'
						fill='none'
						d='M14.1 27.2l7.1 7.2 16.7-16.8'
					/>
				</svg>
			</div>
			<h1 style={marginTitle}>Ваш заказ успешно отправлен!</h1>
			<p>Спасибо за покупку, доставка уже в пути! </p>
			<button
				className='confirm-order-button'
				onClick={() => (window.location.href = '/')}
			>
				OK
			</button>
		</div>
	)
}

export default ConfirmOrder
