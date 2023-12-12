import React from 'react'
import './AllProucts.css'
import ProductCard from './ProductCard'

// Импорты изображений для товаров...
// import Burger from './../../../../Img/OrdersCard/Food Image-1.png'
// import BocksMaster from './../../../../Img/OrdersCard/Food Image-1.png'
// import Wopper from './../../../../Img/OrdersCard/Food Image-1.png'
// import Jun from './../../../../Img/OrdersCard/Food Image-1.png'
// import Duble from './../../../../Img/OrdersCard/Food Image-1.png'

	import img from './../../../../Img/Small Img/Food Image.png'
	import img1 from './../../../../Img/Small Img/Food Image-1.png'
	import img2 from './../../../../Img/Small Img/Food Image-2.png'
	import img3 from './../../../../Img/Small Img/Food Image-3.png'
	import img4 from './../../../../Img/Small Img/Food Image-4.png'
	import img5 from './../../../../Img/Small Img/Food Image-5.png'
	import img6 from './../../../../Img/Small Img/Food Image-6.png'

	import GalmartImg from './../../../../Img/Galmart img/Food Image.png'
	import GalmartImg1 from './../../../../Img/Galmart img/Food Image-1.png'
	import GalmartImg2 from './../../../../Img/Galmart img/Food Image-2.png'
	import GalmartImg3 from './../../../../Img/Galmart img/Food Image-3.png'
	import GalmartImg4 from './../../../../Img/Galmart img/Food Image-4.png'
	import GalmartImg5 from './../../../../Img/Galmart img/Food Image-5.png'
	import GalmartImg6 from './../../../../Img/Galmart img/Food Image-6.png'
	import GalmartImg7 from './../../../../Img/Galmart img/Food Image-7.png'
	import GalmartImg8 from './../../../../Img/Galmart img/Food Image-8.png'
	import GalmartImg9 from './../../../../Img/Galmart img/Food Image-9.png'
	import GalmartImg10 from './../../../../Img/Galmart img/Food Image-10.png'
	import GalmartImg11 from './../../../../Img/Galmart img/Food Image-11.png'
	import GalmartImg12 from './../../../../Img/Galmart img/Food Image-12.png'

	import Burger from './../../../../Img/OrdersCard/Food Image-4.png'
	import BocksMaster from './../../../../Img/OrdersCard/Food Image-3.png'
	import Wopper from './../../../../Img/OrdersCard/Food Image-2.png'
	import Jun from './../../../../Img/OrdersCard/Food Image-1.png'
	import Duble from './../../../../Img/OrdersCard/Food Image.png'


	
	import BK1 from './../../../../Img/BK-IMG/Food Image.png'
	import BK2 from './../../../../Img/BK-IMG/Food Image-1.png'
	import BK3 from './../../../../Img/BK-IMG/Food Image-2.png'
	import BK4 from './../../../../Img/BK-IMG/Food Image-3.png'
	import BK5 from './../../../../Img/BK-IMG/Food Image-4.png'
	import BK6 from './../../../../Img/BK-IMG/Food Image-5.png'

	import HARD1 from './../../../../Img/HARD-IMG/Food Image.png'
	import HARD2 from './../../../../Img/HARD-IMG/Food Image-1.png'
	import HARD3 from './../../../../Img/HARD-IMG/Food Image-2.png'
	import HARD4 from './../../../../Img/HARD-IMG/Food Image-3.png'
	import HARD5 from './../../../../Img/HARD-IMG/Food Image-4.png'
	import HARD6 from './../../../../Img/HARD-IMG/Food Image-5.png'
	import HARD7 from './../../../../Img/HARD-IMG/Food Image-6.png'
	import HARD8 from './../../../../Img/HARD-IMG/Food Image-7.png'



	


const Products = ({ store }) => {
	const storeData = {
		magnum: [
			{
				id: 876,
				img: GalmartImg9,
				name: 'ПРОДУКТ',
				price: 1440,
			},

			{
				id: 866,
				img: GalmartImg12,
				name: 'ПРОДУКТ',
				price: 1440,
			},

			{
				id: 767,
				img: GalmartImg5,
				name: 'ПРОДУКТ',
				price: 2990,
			},

			{
				id: 457,
				img: GalmartImg9,
				name: 'ПРОДУКТ ',
				price: 2490,
			},

			{
				id: 679,
				img: GalmartImg1,
				name: 'ПРОДУКТ',
				price: 2490,
			},

			{
				id: 517,
				img: GalmartImg2,
				name: 'ПРОДУКТР',
				price: 1990,
			},

			{
				id: 527,
				img: GalmartImg3,
				name: 'ПРОДУКТ',
				price: 1990,
			},
			{
				id: 367,
				img: GalmartImg11,
				name: 'ПРОДУКТ',
				price: 1990,
			},
		],

		small: [
			{
				id: 876,
				img: img,
				name: 'ПРОДУКТ',
				price: 1440,
			},

			{
				id: 561,
				img: img1,
				name: ' ПРОДУКТ',
				price: 2990,
			},

			{
				id: 457,
				img: img2,
				name: 'ПРОДУКТ  ',
				price: 2490,
			},

			{
				id: 679,
				img: img3,
				name: 'ПРОДУКТ ',
				price: 2490,
			},

			{
				id: 167,
				img: img4,
				name: 'ПРОДУКТ',
				price: 1990,
			},

			{
				id: 967,
				img: img5,
				name: 'ПРОДУКТ',
				price: 1990,
			},

			{
				id: 497,
				img: img6,
				name: 'ПРОДУКТ',
				price: 1990,
			},
		],

		galmard: [
			{
				id: 8276,
				img: GalmartImg,
				name: 'ПРОДУКТ',
				price: 1440,
			},

			{
				id: 5261,
				img: GalmartImg1,
				name: 'ПРОДУКТ',
				price: 2990,
			},

			{
				id: 4257,
				img: GalmartImg2,
				name: 'ПРОДУКТ ',
				price: 2490,
			},

			{
				id: 6279,
				img: GalmartImg3,
				name: 'ПРОДУКТ',
				price: 2490,
			},

			{
				id: 1267,
				img: GalmartImg4,
				name: 'ПРОДУКТ',
				price: 1990,
			},

			{
				id: 9267,
				img: GalmartImg5,
				name: 'ПРОДУКТ',
				price: 1990,
			},
			{
				id: 9267,
				img: GalmartImg6,
				name: 'ПРОДУКТ',
				price: 1990,
			},

			{
				id: 4297,
				img: GalmartImg7,
				name: 'ПРОДУКТ',
				price: 1990,
			},

			{
				id: 4297,
				img: GalmartImg8,
				name: 'ПРОДУКТ',
				price: 1990,
			},
			{
				id: 4297,
				img: GalmartImg9,
				name: 'ПРОДУКТ',
				price: 1990,
			},
			{
				id: 4297,
				img: GalmartImg10,
				name: 'ПРОДУКТ',
				price: 1990,
			},
			{
				id: 4297,
				img: GalmartImg11,
				name: 'ПРОДУКТ',
				price: 1990,
			},
			{
				id: 4297,
				img: GalmartImg12,
				name: 'ПРОДУКТ',
				price: 1990,
			},
		],

		RestKFC: [
			{
				id: 92267,
				img: Burger,
				name: 'ПРОДУКТ',
				price: 1990,
			},
			{
				id: 92267,
				img: BocksMaster,
				name: 'ПРОДУКТ',
				price: 1990,
			},

			{
				id: 43297,
				img: Wopper,
				name: 'ПРОДУКТ',
				price: 1990,
			},

			{
				id: 43297,
				img: Jun,
				name: 'ПРОДУКТ',
				price: 1990,
			},
			{
				id: 43297,
				img: Duble,
				name: 'ПРОДУКТ',
				price: 1990,
			},
		],

		RestBK: [
			{
				id: 92267,
				img: BK1,
				name: 'ПРОДУКТ',
				price: 1990,
			},
			{
				id: 92267,
				img: BK2,
				name: 'ПРОДУКТ',
				price: 1990,
			},

			{
				id: 43297,
				img: BK3,
				name: 'ПРОДУКТ',
				price: 1990,
			},

			{
				id: 43297,
				img: BK4,
				name: 'ПРОДУКТ',
				price: 1990,
			},
			{
				id: 43297,
				img: BK5,
				name: 'ПРОДУКТ',
				price: 1990,
			},

			{
				id: 43297,
				img: BK6,
				name: 'ПРОДУКТ',
				price: 1990,
			},
		],

		RestHard: [
			{
				id: 92267,
				img: HARD1,
				name: 'ПРОДУКТ',
				price: 1990,
			},
			{
				id: 92267,
				img: HARD2,
				name: 'ПРОДУКТ',
				price: 1990,
			},

			{
				id: 43297,
				img: HARD3,
				name: 'ПРОДУКТ',
				price: 1990,
			},

			{
				id: 43297,
				img: HARD4,
				name: 'ПРОДУКТ',
				price: 1990,
			},
			{
				id: 43297,
				img: HARD5,
				name: 'ПРОДУКТ',
				price: 1990,
			},

			{
				id: 43297,
				img: HARD6,
				name: 'ПРОДУКТ',
				price: 1990,
			},

			{
				id: 43297,
				img: HARD7,
				name: 'ПРОДУКТ',
				price: 1990,
			},

			{
				id: 43297,
				img: HARD8,
				name: 'ПРОДУКТ',
				price: 1990,
			},


		],
	}

	const selectedStoreData = storeData[store] || []

	return (
		<div className='Product__container'>
			<p className='count__product'>
				<span className='Count__product'>{selectedStoreData.length}</span>{' '}
				товаров
			</p>
			<div className='Product__container__wrapper'>
				{selectedStoreData.map(item => (
					<ProductCard
						key={item.id}
						id={item.id}
						img={item.img}
						name={item.name}
						price={item.price}
					/>
				))}
			</div>
		</div>

	)
}

export default Products

