import './AllProucts.css'
import img from '../../../../Img/Carigorias/Image.png'
import img1 from './../../../../Img/Carigorias/Image-1.png'
import img2 from './../../../../Img/Carigorias/Image-2.png'
import img3 from './../../../../Img/Carigorias/Image-3.png'
import img4 from './../../../../Img/Carigorias/Image-4.png'
import img5 from './../../../../Img/Carigorias/Image-5.png'

import ImgKfc from './../../../../Img/Carigorias/KFC/Image.png'
import ImgKfc1 from './../../../../Img/Carigorias/KFC/Image-1.png'
import ImgKfc2 from './../../../../Img/Carigorias/KFC/Image-2.png'
import ImgKfc3 from './../../../../Img/Carigorias/KFC/Image-3.png'
import ImgKfc4 from './../../../../Img/Carigorias/KFC/Image-4.png'
import ImgKfc5 from './../../../../Img/Carigorias/KFC/Image-5.png'
import ImgKfc6 from './../../../../Img/Carigorias/KFC/Image-6.png'
import ImgKfc7 from './../../../../Img/Carigorias/KFC/Image-7.png'
import ImgKfc8 from './../../../../Img/Carigorias/KFC/Image-8.png'
import ImgKfc9 from './../../../../Img/Carigorias/KFC/Image-9.png'

import ImgBK from './../../../../Img/Carigorias/BK/Image.png'
import ImgBK2 from './../../../../Img/Carigorias/BK/Image-1.png'
import ImgBK1 from './../../../../Img/Carigorias/BK/Image-2.png'
import ImgBK3 from './../../../../Img/Carigorias/BK/Image-3.png'
import ImgBK4 from './../../../../Img/Carigorias/BK/Image-4.png'
import ImgBK5 from './../../../../Img/Carigorias/BK/Image-5.png'

import ImgHARD from './../../../../Img/Carigorias/HARD/Image.png'
import ImgHARD2 from './../../../../Img/Carigorias/HARD/Image-1.png'
import ImgHARD1 from './../../../../Img/Carigorias/HARD/Image-2.png'
import ImgHARD3 from './../../../../Img/Carigorias/HARD/Image-3.png'
import ImgHARD4 from './../../../../Img/Carigorias/HARD/Image-4.png'
import ImgHARD5 from './../../../../Img/Carigorias/HARD/Image-5.png'




import CatigoriesCard from './CatigoriesCard'





const Categories = ({ categories }) => {
	const catigoriesCardData = {
		shop: [
			{
				img: img,
				name: 'Овощи и Фрукты',
			},

			{
				img: img1,
				name: 'Мясо',
			},

			{
				img: img2,
				name: 'Напитки',
			},

			{
				img: img3,
				name: 'Молочные продукты',
			},

			{
				img: img4,
				name: 'Овшщи и Фрукты',
			},

			{
				img: img5,
				name: 'Овшщи и Фрукты',
			},
		],

		KFC: [
			{
				img: ImgKfc,
				name: 'Овощи и Фрукты',
			},

			{
				img: ImgKfc1,
				name: 'Мясо',
			},

			{
				img: ImgKfc2,
				name: 'Напитки',
			},

			{
				img: ImgKfc3,
				name: 'Молочные продукты',
			},

			{
				img: ImgKfc4,
				name: 'Овшщи и Фрукты',
			},

			{
				img: ImgKfc5,
				name: 'Овшщи и Фрукты',
			},

			{
				img: ImgKfc6,
				name: 'Овшщи и Фрукты',
			},

			{
				img: ImgKfc7,
				name: 'Овшщи и Фрукты',
			},

			{
				img: ImgKfc8,
				name: 'Овшщи и Фрукты',
			},

			{
				img: ImgKfc9,
				name: 'Овшщи и Фрукты',
			},
		],

		BK: [
			{
				img: ImgBK,
				name: 'Овшщи и Фрукты',
			},

			{
				img: ImgBK1,
				name: 'Овшщи и Фрукты',
			},

			{
				img: ImgBK2,
				name: 'Овшщи и Фрукты',
			},

			{
				img: ImgBK3,
				name: 'Овшщи и Фрукты',
			},
			{
				img: ImgBK4,
				name: 'Овшщи и Фрукты',
			},
			{
				img: ImgBK5,
				name: 'Овшщи и Фрукты',
			},
		],

		HARD: [
			{
				img: ImgHARD,
				name: 'Овшщи и Фрукты',
			},

			{
				img: ImgHARD1,
				name: 'Овшщи и Фрукты',
			},

			{
				img: ImgHARD2,
				name: 'Овшщи и Фрукты',
			},

			{
				img: ImgHARD3,
				name: 'Овшщи и Фрукты',
			},
			{
				img: ImgHARD4,
				name: 'Овшщи и Фрукты',
			},
			{
				img: ImgHARD5,
				name: 'Овшщи и Фрукты',
			},
		],
	}

	const selectedCatigoriesCardData = catigoriesCardData[categories] || []

	const catigoriesCardRender = () => {
		return selectedCatigoriesCardData.map((item, index) => {
			return <CatigoriesCard img={item.img} key={index} name={item.name} />
		})
	}

	return (
		<>
			<div className='Categories__container'>
				<p className='title__categories'>
					Категории <span>товаров</span>:
				</p>

				{catigoriesCardRender()}
			</div>
		</>
	)
}
 
export default Categories;