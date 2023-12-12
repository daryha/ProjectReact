import Comments from "./Comments";
import './coments.css'

import AlekseyImg from './../../../Img/Aleksey.jpg'
import Banan from './../../../Img/Banan.png'

const CommentMother = () => {

    
	const TopOrdersData = [
		{
			id: 33,
			img: AlekseyImg,
			name: 'Алексей Шевцов',
			comment:
				'Ваш сайт представляет собой отличный образец чистого и пользовательского дизайна. Цветовая палитра и минималистичный стиль делают навигацию интуитивной и приятной. Рекомендуется проверить читаемость текстов на разных устройствах и добавить интерактивные элементы для улучшения взаимодействия с пользователем.',
			likes: 231,
		},

		{
			id: 22,
			img: Banan,
			name: 'Сергей Соколов',
			comment:
				'Сайт впечатляет своим инновационным и энергичным дизайном, который вызывает яркие эмоции и демонстрирует глубокую приверженность к качеству и пользовательскому опыту. В то время как некоторые элементы могут нуждаться в доработке, общее впечатление положительное, и сайт заслуживает признания за свои уникальные особенности и современный подход.',
			likes: 234,
		},
	]


    const RenderComment = () =>{
        return TopOrdersData.map((item, index) =>{
            return (
							<Comments
								id={item.id}
								key={index}
								img={item.img}
								name={item.name}
								comment={item.comment}
								likes={item.likes}
							/>
						)
        })
    }

    return (
			<>
				<h1 className='title__Comment title'>Отзывы</h1>
				<div className='Comments__wrapper'>{RenderComment()}</div>
			</>
		)
}
 
export default CommentMother;