import axios from 'axios'
import React, { createContext, useState, useEffect, useContext } from 'react'

const AuthContext = createContext(null)

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null)

const login = userData => {
	setUser(userData)
	localStorage.setItem('token', userData.token) // Предполагается, что userData содержит токен
}


const logout = () => {
	setUser(null)
	localStorage.removeItem('token') // Удаление токена из localStorage
}


	const checkUserLoggedIn = async () => {
		const token = localStorage.getItem('token')
		if (token) {
			try {
				const response = await axios.get(
					'http://localhost:8000/api/user/profile/',
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
				localStorage.removeItem('token')
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
