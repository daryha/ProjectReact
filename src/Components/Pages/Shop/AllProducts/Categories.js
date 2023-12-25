// Categories.js
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import CatigoriesCard from './CatigoriesCard'

const Categories = ({ onCategorySelect }) => {
	const [categories, setCategories] = useState([])

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const response = await axios.get('http://localhost:8000/api/category/')
				setCategories(response.data)
			} catch (error) {
				console.error('Ошибка при получении данных о категории:', error)
			}
		}

		fetchCategories()
	}, [])

	return (
	<div className='Categories__container'>
		<p className='title__categories'>Категории <span>товаров</span>:</p>
		<div>
			{categories.map((item, index) => ( // Используйте item для доступа к свойствам объекта категории
				<CatigoriesCard
					key={item.id}
					id={item.id}
					image={item.image}
					name={item.name}
					onClick={() => onCategorySelect(item.id)} // Используйте item.id здесь
				/>
			))}
		</div>
	</div>
)
}

export default Categories
