
import LoginForm from '../components/LoginForm'

function setToken(userToken){
  sessionStorage.setItem('token', JSON.stringify(userToken));
}


function getToken(){
  
}

function login() {
const token = getToken();

if(!token){
  return ( 
  <div className="grid h-screen">
  <LoginForm setToken={setToken} />
   </div>
   )
 
}
  return (
    <div className="grid h-screen">
     <h1>asd</h1>
    </div>
  );
}

export default login;
