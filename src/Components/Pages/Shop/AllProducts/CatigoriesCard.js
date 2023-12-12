import './AllProucts.css'

const CatigoriesCard  = (props) => {

    return (
			<div className='Categories__card'>
				<p className='title__categories__card'>{props.name}</p>
				<img src={props.img} alt='CategoriesImg'></img>
			</div>
		)
}
 
export default CatigoriesCard;