import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import ShopSmallMainCard from '../AllProducts/ShopSmallMainCard'
import ProductCard from '../AllProducts/ProductCard' // Предположим, что у вас есть такой компонент
import CatigoriesCard from '../AllProducts/CatigoriesCard'

import './../AllProducts/AllProucts.css' // Путь к CSS файлу вашего компонента

const MarketPage = () => {
	const { slug } = useParams()
	const [sortOrder, setSortOrder] = useState('');


	const [shopDetails, setShopDetails] = useState(null)
	const [categories, setCategories] = useState([])
	const [products, setProducts] = useState([])
	const [selectedCategory, setSelectedCategory] = useState(null)


	const handleCategorySelect = categoryId => {
		setSelectedCategory(categoryId)
	}
	const handleResetCategories = () => {
		setSelectedCategory(null)
		setSortOrder(null)
	}

	const countProductsInCategory = categoryId => {
		return products.filter(product => product.category === categoryId).length
	}



	


		const renderProductCountHeader = () => {
			if (selectedCategory) {
				const count = countProductsInCategory(selectedCategory)
				const categoryName =
					categories.find(cat => cat.id === selectedCategory)?.name ||
					'Выбранная категория'
				return `товаров в категории - ${categoryName}: ${count} `
			}
			return `количество всех товаров: ${products.length} `
		}





	useEffect(() => {
		const fetchShopDetails = async () => {
			try {
				const storeResponse = await axios.get(
					`https://myserverapp-a354f8daf7d4.herokuapp.com/api/stores/${slug}/`
				)
				if (storeResponse.data) {
					setShopDetails(storeResponse.data)

					const categoriesResponse = await axios.get(
						`https://myserverapp-a354f8daf7d4.herokuapp.com/api/category/?store_slug=${slug}`
					)
					setCategories(categoriesResponse.data)

					const productsResponse = await axios.get(
						`https://myserverapp-a354f8daf7d4.herokuapp.com/api/products/?store_slug=${slug}`
					)
					setProducts(productsResponse.data)
				}
			} catch (error) {
				console.error('Ошибка при получении данных:', error)
			}
		}

		fetchShopDetails()
	}, [slug])


	const sortProducts = products => {
		if (sortOrder === 'price_asc') {
			return [...products].sort((a, b) => a.price - b.price)
		} else if (sortOrder === 'price_desc') {
			return [...products].sort((a, b) => b.price - a.price)
		}
		return products
	}




	const renderCategories = () => {
		return categories.length > 0 ? (
			categories.map(category => (
				<CatigoriesCard
					key={category.id}
					name={category.name}
					image={category.image}
					onClick={() => handleCategorySelect(category.id)}
				/>
			))
		) : (
			<p>Категории не найдены.</p>
		)
	}



	const renderProducts = () => {
		 const sortedProducts = sortProducts(products);
    	 const filteredProducts = selectedCategory
			? sortedProducts.filter(product => product.category === selectedCategory)
			: sortedProducts;



		return filteredProducts.length > 0 ? (
			filteredProducts.map((product) => (
				<ProductCard
					key={product.id}
					id={product.id}
					name={product.name}
					image={product.image}
					price={product.price}
					weight = {product.weight}
					unit = {product.unit}
				/>
			))
		) : (
			<p>Продукты в этой категории не найдены.</p>
		);
		};

	return (
		<div className='Wrapper'>
			{shopDetails && (
				<ShopSmallMainCard
					id={shopDetails.id}
					image={shopDetails.image}
					store_type={shopDetails.store_type}
					name={shopDetails.name}
					delivery_time={shopDetails.delivery_time}
					rating={shopDetails.rating}
					slug={shopDetails.slug}
				/>
			)}
			<div className='Allproducts__container'>
				<p className='AllProduct__desc'>
					{shopDetails?.name || 'Магазин'} / все товары
				</p>
				<div className='All_products_content'>
					<div className='Categories__container'>
						<p className='title__categories'>
							Категории <span>товаров</span>:
						</p>
						<div>{renderCategories()}</div>
					</div>

					<div className='Product__container'>
						<p className='count__product'>
							<span className='Count__products'>
								{renderProductCountHeader()}
							</span>{' '}

							<button
								className='Reset__button sing__up'
								onClick={handleResetCategories}
							>
								Reset
							</button>

								
								<select
									id='sortOrder'
									className='sortOrder'
									value={sortOrder}
									onChange={e => setSortOrder(e.target.value)}
								>

									<option value=''>Выберите сортировку</option>
									<option value='price_asc'>По возрастанию цены</option>
									<option value='price_desc'>По убыванию цены</option>
								</select>
						</p>
						<div className='Product__container__wrapper'>
							{renderProducts()}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MarketPage
