import React, { useEffect, useState } from "react";
import axios from "axios";
import { useWpAuth } from "../context/wp-auth-context";

function LoginForm() {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [success, setSuccess] = useState("");

	const { setWpAuthToken, wpAuthToken } = useWpAuth();


	const getUserInfo = async (token) => {

		token ? console.log("Token:", token) : console.log("Token not found.");
		try {
			const response = await axios.get('https://bereketlimetal.com/wp-json/wp/v1/users/me', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			console.log('User Info:', response.data);
		} catch (error) {
			console.error('Error fetching user info:', error.response?.data);
		}
	};



	useEffect(() => { if (wpAuthToken) { getUserInfo(wpAuthToken); } }, [wpAuthToken]);





	const handleLogin = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");
		setSuccess("");

		try {
			const response = await axios.post('https://bereketlimetal.com/wp-json/jwt-auth/v1/token', {
				username: username,
				password: password,
			});

			const token = response.data.token;
			
			localStorage.setItem('wpAuthToken', token);

			setSuccess("Login successful!");
			setWpAuthToken(token);

			// Başarı durumunda işlemler yapabilirsin (örn. token'ı saklama)
		} catch (err) {
			setError("Login failed. Please check your credentials.");
			console.error(err.response?.data);
		}

		setLoading(false);

	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-gray-100">
			<div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
				<h2 className="text-2xl font-bold text-center text-gray-900">Login</h2>
				<form className="space-y-4" onSubmit={handleLogin}>
					<div>
						<label htmlFor="username" className="block text-sm font-medium text-gray-700">
							Username
						</label>
						<input
							type="text"
							id="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
							required
						/>
					</div>
					<div>
						<label htmlFor="password" className="block text-sm font-medium text-gray-700">
							Password
						</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
							required
						/>
					</div>
					{error && <div className="text-red-500 text-sm">{error}</div>}
					{success && <div className="text-green-500 text-sm">{success}</div>}
					<button
						type="submit"
						disabled={loading}
						className="w-full py-2 text-white bg-indigo-600 rounded-md hover:bg-indigo-700 disabled:bg-gray-400"
					>
						{loading ? "Logging in..." : "Login"}
					</button>
				</form>
			</div>
		</div>
	);
}

export default LoginForm;
