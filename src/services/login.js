import showSequenceToast from '../utils/show-sequence-toast.js';
import VerifyFields from '../utils/validation.js'
import { url_api } from '../config/url_api.js'
import Toast from '../utils/toast.js'
const axiosClient = axios

const url_login = url_api + "/login"

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
         const serverMessage = err.response?.data?.message || "Erro ao logar";
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

window.addEventListener("load", () => {
  const navEntries = performance.getEntriesByType("navigation");
  if (navEntries.length > 0 && navEntries[0].type === "back_forward") {
    
   localStorage.removeItem("token")
   localStorage.removeItem("role")
  }
});

const loginButton = document.getElementById('login-button')
   loginButton.addEventListener('click', async () => {
   
   let tokenLocal = localStorage.getItem("token");
   let roleLocal = localStorage.getItem("role")
   const page = 'login'
   const statusGl = 200

   if(!tokenLocal && !roleLocal) {
      const res = await userLogin();
      
      const token = res.data.token;
      const role = res.data.role;
      const statusCode = res.status;

      await showSequenceToast(statusCode, role, page)
      role === "user" 
         ? window.location.href = "profile-user.html"
         : window.location.href = "list-users.html"
       
      if (token && role) {
         localStorage.setItem("token", token);
         localStorage.setItem("role", role)
   
      } 
   } else {
         const role = localStorage.getItem("role")

         await showSequenceToast(statusGl, role, page)
         role === "user" 
            ? window.location.href = "profile-user.html"
            : window.location.href = "list-users.html"
      }

})
