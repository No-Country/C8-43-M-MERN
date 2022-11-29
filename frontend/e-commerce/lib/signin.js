import axios from 'axios'

export const signUser = async (name, lastname, email, password, role, sex) => {
    const {data} = await axios.post('http://localhost:4000/auth', {name, lastname, email, password, role, sex })
    console.log(data)
}