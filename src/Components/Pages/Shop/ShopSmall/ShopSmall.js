
	import ShopSmallMainCard from '../../Shop/AllProducts/ShopSmallMainCard';
	import SmallCardImg from './../../../../Img/ShopCard/BigSamll.png'
	import Products from '../AllProducts/Products';
	import Categories from './../AllProducts/Categories'

	import './../AllProducts/AllProucts.css'




	const ShopSmall = () => {

		const ShopCardData = [
			{
				id: 1,
				img: SmallCardImg,
				type: 'Shop',
				name: 'Сеть магазинов SMALL',
				time: '24min',
				rate: 4.8,
			},
		]







			const CreateSmallCard = ()=> {
					return ShopCardData.map((item, index) => (
						<ShopSmallMainCard
							id={item.id}
							img={item.img}
							name={item.name}
							rate={item.rate}
						/>
					))
				}
		



		return (
			<div className='Wrapper'>
				{CreateSmallCard()}
				<>
					<div className='Allproducts__container'>
						<p className='AllProduct__desc'>small / все товары </p>

						<div className='All_products_content'>
							<Categories categories={'shop'} />
							<Products store={'small'} />
						</div>
					</div>
				</>
			</div>
		)
	}
	
	export default ShopSmall;