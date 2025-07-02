import axios from "axios"
const BASE_URL = "https://coolndeadly-api.onrender.com"

 export const axiosPublic = axios.create({
	baseURL : BASE_URL,
	headers: {
		"Content-Type" : "application/jason"
	}
	
 })

 export default axiosPublic