import './Intro.css'
import '../main.css'




import imgCar from './../../Img/Car_img.png'

const Intro = () => {
    return (
			<div className='Intro__container'>
				<div className='Intro__content'>
					<p className='Intro__content-text'>
						Быстро, вкусно, удобно – <br />
						ваш заказ, наш приоритет!
					</p>

					<button className='Button__intro sing__up'>Заказать!</button>
				</div>

				<img className='intro__img' src={imgCar} alt='imgCar'></img>
			</div>
		)
}
 
export default Intro;