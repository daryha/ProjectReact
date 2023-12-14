// GoogleLogin.js
import React from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import GoogleLogo from './../../../Img/G.png'

const RegisterGoogle = ({ onLoginSuccess }) => {
	const handleLogin = useGoogleLogin({
		onSuccess: async tokenResponse => {
			const userInfoResponse = await axios.get(
				'https://www.googleapis.com/oauth2/v3/userinfo',
				{
					headers: {
						Authorization: `Bearer ${tokenResponse.access_token}`,
					},
				}
			)

			onLoginSuccess({
				username: userInfoResponse.data.name,
				token: tokenResponse.access_token,
			})
		},
		onError: error => {
			console.error('Ошибка входа через Google:', error)
		},
	})

	return (
		<button onClick={handleLogin} className='Sing__to__google'>
			<img src={GoogleLogo} alt='Google' />
		</button>
	)
}

export default RegisterGoogle
