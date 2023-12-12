import './banner.css'
import BannerItems from './BannerItems';


const Banner = () => {

	const bannerData = [
		
		{
			title: 'Быстро',
			description: 'Ценим ваше время: выбор без ожидания, доставка без задержек.',
		},

		{
			title: 'Вкусно',
			description: 'Настоящее наслаждение в каждом блюде.',
		},

		{
			title: 'Удобно',
			description: 'Простота заказа, комфорт оплаты, забота о каждом клиенте.',
		},
	]





    return (
			<div className='Banner__container'>
				<div className='Banner__wrapper'>
				
					<BannerItems
						title={bannerData[0].title}
						description={bannerData[0].description}
					/>

					<BannerItems
						title={bannerData[1].title}
						description={bannerData[1].description}
					/>

					<BannerItems
						title={bannerData[2].title}
						description={bannerData[2].description}
					/>
					
				</div>
			</div>
		)
}
 
export default Banner;