import ShopSmallMainCard from '../../Shop/AllProducts/ShopSmallMainCard'
import HARD from './../../../../Img/ShopCard/HARDBIG.png'
import Products from '../AllProducts/Products'
import Categories from '../AllProducts/Categories'
import './../AllProducts/AllProucts.css'

const RestHardees = props => {
	const ShopCardData = [
		{
			id: 2,
			img: HARD,
			name: 'Сеть магазинов galmart',
			time: '24min',
			rate: 4.2,
		},
	]

	const CreateSmallCard = () => {
		return ShopCardData.map((item, index) => (
			<ShopSmallMainCard
				key={index}
				id={item.id}
				img={item.img}
				name={item.name}
				rate={item.rate}
			/>
		))
	}

	return (
		<>
			<div className='Wrapper'>
				{CreateSmallCard()}
				<>
					<div className='Allproducts__container'>
						<p className='AllProduct__desc'>Galmart / все товары </p>

						<div className='All_products_content'>
							<Categories categories={'HARD'} />
							<Products store={'RestHard'} />
						</div>
					</div>
				</>
			</div>
		</>
	)
}

export default RestHardees
