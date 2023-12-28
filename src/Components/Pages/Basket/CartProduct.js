import React, { useState } from 'react'
import './ProductCardCart.css' // Путь к вашему CSS-файлу для стилей
import corss from './../../../Img/cross.png'

const CartProduct = ({ product, onRemove, onQuantityChange }) => {
	const [quantity, setQuantity] = useState(1)

	const handleQuantityChange = change => {
		const newQuantity = quantity + change
		if (newQuantity >= 1) {
			setQuantity(newQuantity)
			onQuantityChange(product.id, newQuantity) 
		}
	}

	const handleDecreaseQuantity = () => {
		const newQuantity = quantity - 1
		setQuantity(newQuantity)
		onQuantityChange(product.id, newQuantity)
	}

	const handleIncreaseQuantity = () => {
		const newQuantity = quantity + 1
		setQuantity(newQuantity)
		onQuantityChange(product.id, newQuantity)
	}

	return (
		<>
			<div className='product-card'>
				<div className='product-image'>
					<img
						src={`http://localhost:8000${product.image}`}
						alt={product.name}
					/>
				</div>
				<div className='product-info'>
					<h3 className='product-name'>{product.name}</h3>
					<div className='product-quantity'>
						<button onClick={handleDecreaseQuantity} disabled={quantity <= 1}>
							-
						</button>
						<span className='shtucak'>{quantity} Шт</span>
						<button onClick={handleIncreaseQuantity}>+</button>
					</div>
					<div className='product-pricing'>
						<div className='conteiner__total__price'>
							<p>Цена:</p>
							<span className='product-total-price'>
								<span className='product-price'>{product.price}₸</span>
							</span>
						</div>

						<div className='conteiner__total__price'>
							<p>Итого:</p>
							<span className='product-total-price'>
								{product.price * quantity}.00₸
							</span>
						</div>
					</div>
				</div>
				<div className='Container__Remove'>
					<div
						className='product-remove-btn'
						onClick={() => onRemove(product.cart_id)}
					>
						<img className='corss' src={corss} alt='Cross'></img>
					</div>
				</div>
			</div>
		</>
	)
}

export default CartProduct
