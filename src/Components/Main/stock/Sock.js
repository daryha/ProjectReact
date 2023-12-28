import './Stock.css'
import ImgStock from './../../../Img/Car_img.png'

const Stock = () => {
    return (
			<>
				<div className='Stock__container'>
					<h1 className='title' id='TopOrder2'>
						Акции
					</h1>

					<div className='Stock__card'>
						<p className='Card__Desc'>
							Бесплатная доставка при <br></br>заказе от <span>1990₸</span>
						</p>

						<img src={ImgStock} alt='Stock' className='StockImg'></img>
					</div>
				</div>
			</>
		)
}
 
export default Stock;