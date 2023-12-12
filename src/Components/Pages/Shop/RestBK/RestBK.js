import ShopSmallMainCard from '../../Shop/AllProducts/ShopSmallMainCard'
import BK from './../../../../Img/ShopCard/BKBIG.png'
import Products from '../AllProducts/Products'
import Categories from '../AllProducts/Categories'
import './../AllProducts/AllProucts.css'

const RestBK = props => {
	const ShopCardData = [
		{
			id: 2,
			img: BK,
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
							<Categories categories={'BK'} />
							<Products store={'RestBK'} />
						</div>
					</div>
				</>
			</div>
		</>
	)
}

export default RestBK
