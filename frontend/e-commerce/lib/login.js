import axios from "axios";

export const loginUser = async (email, password) => {
  const { data } = await axios.post("http://localhost:4000/auth/login", {
    email,
    password,
  });
  if (data.data.seller) {
    localStorage.setItem("seller", JSON.stringify(data.data.seller));
    console.log(data);
    return 
  } 
  /*
  if (data.data.user) {
    localStorage.setItem("user", JSON.stringify(data.data.user));
    console.log(data);
    return 
  } 
  console.log('error')
  //error de codigo
*/
};
