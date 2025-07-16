import VerifyFields from '../utils/validation.js'
import Toast from '../utils/toast.js'
const axiosClient = axios

 
const url_login = "http://localhost:3000/login"

const userLogin = async () => {
   const email = document.getElementById('email').value
   const password = document.getElementById('password').value

   const firstWordDefault = email.split("@")[0].split(/[\._\s]/)[0];
   const name = firstWordDefault

   if(VerifyFields({ name, email, password })) {
      Toast({
         message: "Preencha todos os campos.",
         color1: "#9B2A2A",
         color2: "#ED8B53",
         position: "right"
      });
      return
   } else {
      try {
         const res = await axiosClient.post(url_login, { email, password }, {
            headers: {
               'Content-Type': 'application/json'
            }})
         console.log(res)
         return res
      } catch (err) {
         const serverMessage = err.response?.data?.message || "Erro ao cadastrar";
         Toast({
            message: serverMessage,
            color1: "#9B2A2A",
            color2: "#ED8B53",
            position: "right"
         });
         return null
      }
   }
}


const loginButton = document.getElementById('login-button')
loginButton.addEventListener('click', async () => {
   const res = await userLogin()
   
   if(res && res.status === 200){
      Toast({
         message: "Login efetuado com sucesso!",
         color1: "#00b072ff",
         color2: "#96c93d",
         position: "center",
      });
      setTimeout(() => {
         Toast({
            message: "Estamos te redirecionando para a Home...",
            color1: "#00b072ff",
            color2: "#96c93d",
            position: "center"
         });
      }, 2500);
   }
})
