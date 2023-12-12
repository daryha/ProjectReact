import imgCar from './../../../Img/Register__icon/car_reg.png'

const RegisterBanner = () => {
	return (
		<>
			<div className='Logo__window'>
				<img src={imgCar} alt='car' className='car__img'></img>

				<p className='title__logo__window'>Бесплатная доставка</p>
				<p className='desc__logo__window'>
					Бесплатная доставка при заказе <br></br> от <span>1990₸</span>
				</p>
			</div>
		</>
	)
}

export default RegisterBanner
