import axios from 'axios'
import React, { createContext, useState, useEffect, useContext } from 'react'
import Cookies from 'js-cookie'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)

	const login = userData => {
		setUser(userData)
		Cookies.set('token', userData.token, { expires: 7 }) // Сохраняем токен в cookies
	}

	const logout = () => {
		setUser(null)
		Cookies.remove('token') // Удаляем токен из cookies
	}

	const checkUserLoggedIn = async () => {
		const token = Cookies.get('token')
		if (token) {
			try {
				const response = await axios.get(
					'https://backendtasty-291f2f48a6f8.herokuapp.com/api/user/profile/',
					{
						headers: {
							Authorization: `Token ${token}`,
						},
					}
				)
				setUser({
					username: response.data.username,
					email: response.data.email,
				})
			} catch (error) {
				console.error('Ошибка при получении данных пользователя', error)
				Cookies.remove('token')
				setUser(null)
			}
		}
	}

	useEffect(() => {
		checkUserLoggedIn()
	}, [])

	return (
		<AuthContext.Provider value={{ user, login, logout }}>
			{children}
		</AuthContext.Provider>
	)
}

export const useAuth = () => useContext(AuthContext)
