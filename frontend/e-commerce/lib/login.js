import axios from 'axios'

export const loginUser = async (email, password) => {
    const {data} = await axios.post('http://localhost:4000/auth/login', {email, password})
    console.log(data)
}
