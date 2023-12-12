import ShopSmallMainCard from '../../Shop/AllProducts/ShopSmallMainCard'
import MagnumCardImg from './../../../../Img/ShopCard/MagnumBig.png'
import Products from '../AllProducts/Products'
import Categories from '../AllProducts/Categories'
import './../AllProducts/AllProucts.css'

const ShopMagnum = props => {
	const ShopCardData = [
		{
			id: 2,
			img: MagnumCardImg,
			name: 'Сеть магазинов Magnum',
			time: '24min',
			rate: 4.8,
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
						<p className='AllProduct__desc'>magnum / все товары </p>

						<div className='All_products_content'>
							<Categories categories={'shop'} />
							<Products store={'magnum'} />
						</div>
					</div>
				</>
			</div>
		</>
	)
}

export default ShopMagnum
