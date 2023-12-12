
const BannerItems = (props) => {

    return (
			<>
				<div className='Banner__items'>
					<h1 className='Baneer__title'>{props.title}</h1>
					<p className='Baneer__desc'>{props.description}</p>
				</div>
				
			</>
		)
}
 
export default BannerItems;