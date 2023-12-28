// Products.js
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './ProductCard'

const Products = ({ selectedCategory }) => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				// Изначально устанавливаем URL для загрузки всех продуктов
				let url = 'https://myserverapp-a354f8daf7d4.herokuapp.com/api/products/'
				// Если выбрана категория, модифицируем URL для фильтрации
				if (selectedCategory) {
					url += `?category=${selectedCategory}`
				}
				const response = await axios.get(url)
				setProducts(response.data)
			} catch (error) {
				console.error('Ошибка при получении данных о продуктах:', error)
			}
		}

		// Вызываем fetchProducts при монтировании и при изменении selectedCategory
		fetchProducts()
	}, [selectedCategory])

	return (
		<div className='Product__container'>
			<p className='count__product'>
				<span className='Count__product'>{products.length}</span> товаров
			</p>
			<div className='Product__container__wrapper'>
				{products.map(product => (
					<ProductCard key={product.id} {...product}  />
				))}
			</div>
		</div>
	)
}

export default Products
