import './CompFooter.css'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Logo  from './../../Img/Logo.png'
import Media1 from './../../Img/Media_1.png'
import Media2 from './../../Img/Media_2.png'
import Media3 from './../../Img/Media_3.png'
import Media4 from './../../Img/Media_4.png'


import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const useScrollToTop = () => {
	const location = useLocation()

	useEffect(() => {
		window.scrollTo(0, 0)
	}, [location])
}



const CoompFooter = () => {
	useScrollToTop()
	

	
	const [modalOpen, setModalOpen] = useState(false)

	const openModal = () => {
		setModalOpen(true)
	}

	const closeModal = () => {
		setModalOpen(false)
	}



	const Modal = ({ isOpen, onClose, children }) => {
		if (!isOpen) return null

		return (
			<div className='modal'>
				<div className='modal-content'>
					<span className='close' onClick={onClose}>
						&times;
					</span>
					{children}
				</div>
			</div>
		)
	}




    return (
			<>
				<div className='Footer__container'>
					<div className='Wrapper__footre'>
						<div className='Logo__container'>
							<img className='Logo__footer' src={Logo} alt='Logo'></img>
							<NavLink to='/' className='Logo__title'>
								<div>TastyPriority</div>
							</NavLink>
						</div>

						<hr className='HR'></hr>

						<div className='down__block'>
							<NavLink to='/Policy' className='Politica'>
								<p>политика конфиденциальности</p>
							</NavLink>

							<div className='Social__media__container'>
								<img
									className='Logo__footer'
									src={Media1}
									alt='Media Icon'
									onClick={openModal}
								></img>
								<img
									className='Logo__footer'
									src={Media2}
									alt='Media Icon'
									onClick={openModal}
								></img>
								<img
									className='Logo__footer'
									src={Media3}
									alt='Media Icon'
									onClick={openModal}
								></img>
								<img
									className='Logo__footer'
									src={Media4}
									alt='Media Icon'
									onClick={openModal}
								></img>
							</div>
						</div>
					</div>
				</div>

				<Modal isOpen={modalOpen} onClose={closeModal}>
					<p>
						<strong className='Srong__pragraph'>
							Прошу прощения за неудобства.
						</strong>{' '}
						В настоящее время <strong>социальные сети не задействованы</strong>,
						поскольку данный проект является демонстрационным и создан
						студентами в целях представления их профессиональных навыков и
						компетенций.
					</p>
				</Modal>
			</>
		)
}
 
export default CoompFooter;