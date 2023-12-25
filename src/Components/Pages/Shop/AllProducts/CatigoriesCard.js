import './AllProucts.css'
const CatigoriesCard = categories => {

	return (
		<div className='Categories__card' onClick={categories.onClick}>
			<p className='title__categories__card'>{categories.name}</p>
			<img src={categories.image} alt='CategoriesImg'></img>
		</div>
	)
}

export default CatigoriesCard
