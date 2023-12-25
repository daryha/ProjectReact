import  './Basket.css'

const CheckoutForm = () => {
	return (
		<>
			<div className='Wrapper'>
				<div className='basket'>
					<div className='checkout'>
						<div className='checkout-form'>
							<div className='breadcrumb'></div>

							<section className='contact-information'>
								<h2>Contact information</h2>
								<input
									type='text'
									placeholder='Mobile phone number'
									className='Basket_input_style'
								/>
								<label>
									<input type='checkbox' />
									Email me with news and offers
								</label>
							</section>

							<section className='shipping-address'>
								<h2 className='Shipping_address'>Shipping address</h2>
								<div className='input__Container'>
									<input
										type='text'
										placeholder='First name (optional)'
										className='Form__styele'
									/>
									<input
										type='text'
										placeholder='Last name'
										className='Form__styele'
									/>
								</div>
								<input
									type='text'
									placeholder='Address'
									className='Form__styele'
								/>
								<input
									type='text'
									placeholder='Apartment, suite, etc. (optional)'
									className='Form__styele'
								/>
								<div className='input__Container'>
									<input
										type='text'
										placeholder='City'
										className='Form__styele'
									/>
									<select>
										<option value='india'>India</option>
										{/* Add other country options here */}
									</select>
								</div>
								<input type='text' placeholder='Postal code' />
								<label>
									<input type='checkbox' />
									Save this information for next time
								</label>
							</section>

							<button type='button'>Continue to Shipping</button>
							<button type='button'>Return to cart</button>
						</div>

						<div className='order-summary'>
							<h2>Order Summary</h2>
							{/* List items here */}
							<div className='order-item'>
								<span>Fresh-whole-fish</span>
								<span>£65.00</span>
							</div>
							{/* Repeat for other items */}

							<div className='discount-code'>
								<input type='text' placeholder='Gift card or discount code' />
								<button type='button'>Apply</button>
							</div>

							<div className='totals'>
								<div className='subtotal'>
									<span>Subtotal</span>
									<span>£860.00</span>
								</div>
								<div className='shipping'>
									<span>Shipping</span>
									<span>Calculated at next step</span>
								</div>
								<div className='total'>
									<span>Total</span>
									<span>£860.00</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default CheckoutForm
