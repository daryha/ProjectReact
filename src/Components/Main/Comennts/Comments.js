import React, { useState } from 'react'
import './coments.css'
import Like from './../../../Img/OrdersCard/Like.png'
import LikeActive from './../../../Img/OrdersCard/Like__active.png'


const Comments = props => {
	const [isReadMore, setIsReadMore] = useState(true)

	const toggleReadMore = () => {
		setIsReadMore(!isReadMore)
	}

	const shortComment =
		props.comment.length > 100
			? props.comment.substring(0, 100) + '...'
			: props.comment

	const [isExpanded, setIsExpanded] = useState(false)
	const ScaleReadMore = () => {
		setIsExpanded(!isExpanded)
	}

	const [isAdded, setIsAdded] = useState(false)	

	const toggleAdded = () =>{
		setIsAdded(!isAdded)
	}

	const [likesCount, setLikesCount] = useState(props.likes);
  	const [isLiked, setIsLiked] = useState(false);

	const handleLike = () => {
			setLikesCount(isLiked ? likesCount - 1 : likesCount + 1)
			setIsLiked(!isLiked)
	}


	const handleReadMoreText = () => {
		toggleReadMore()
		ScaleReadMore()
		toggleAdded()
	}

	return (
		<>
			<div className='Coments__container'>
				<div className='Card__wrapper'>
					<div className={`Card__comment ${isAdded ? 'expanded' : ''}`}>
						<div className='Card__User__container'>
							<img src={props.img} className='User__Img' alt='User'></img>
							<div className='User__Name'>{props.name}</div>
						</div>

						<p className={`User__comment ${isExpanded ? 'expanded' : ''}`}>
							{isReadMore ? shortComment : props.comment}

							{props.comment.length > 100 && (
								<button
									onClick={handleReadMoreText}
									className='read-more-button'
								>
									{isReadMore ? 'Читать дальше' : 'Скрыть'}
								</button>
							)}
						</p>

						<div className='Like__container'>
							<img className='LikeImg' src={isLiked ? LikeActive: Like} alt='Like' onClick={handleLike}></img>
							<p className='User__likes'>{likesCount}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Comments
