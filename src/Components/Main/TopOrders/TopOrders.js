import './TopOrders.css'

import OrederItem from './OrderItem';

import Burger from './../../../Img/OrdersCard/Food Image-4.png'
import BocksMaster from './../../../Img/OrdersCard/Food Image-3.png'
import Wopper from './../../../Img/OrdersCard/Food Image-2.png'
import Jun from './../../../Img/OrdersCard/Food Image-1.png'
import Duble from './../../../Img/OrdersCard/Food Image.png'



const TopOredes = () => {

	const TopOrdersData = [
		{
			id: 123,
			img: Burger,
			name: 'ШЕФБУРГЕР',
			price: 1440,
		},

		{
			id: 113,
			img: BocksMaster,
			name: 'БОКСМАСТЕР КОМБО',
			price: 2990,
		},

		{
			id: 513,
			img: Wopper,
			name: 'ВОППЕР КОМБО ',
			price: 2490,
		},

		{
			id: 333,
			img: Jun,
			name: 'ДЖУНИОР КОМБО',
			price: 2490,
		},

		{
			id: 222,
			img: Duble,
			name: 'ДАБЛ ГРИН БУРГЕР',
			price: 1990,
		},
	]

	const OrederRender = (start, end) =>{
		return TopOrdersData.slice(start, end).map((item, index) =>{
			return <OrederItem
						id={item.id}
						key={index}
						img={item.img}
						name={item.name}
						price={item.price}
					/>
		})
	}



    return (
			<>
				<div className='Oreders__container' id='TopOrder'>
					<h1 className='Oreders__title'>
						Топ <span>заказов</span>{' '}
					</h1>
					<div className='Oreders__wrapper'>{OrederRender()}</div>
				</div>
			</>
		)
}
 
export default TopOredes;