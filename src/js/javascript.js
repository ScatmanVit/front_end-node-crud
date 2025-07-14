import VerifyFields from '.././utils/validation.js'
import Toast from '.././utils/toast.js'
const axiosClient = axios


const url_register = "http://localhost:3000/register"


const postUser = async () => {
   const name = document.getElementById('name').value
   const email = document.getElementById('email').value
   const password = document.getElementById('password').value

   const data = {
      name,
      email,
      password
   }
   if (VerifyFields(data)) {
      Toast({
         message: "Preencha todos os campos.",
         color1: "#9B2A2A",
         color2: "#ED8B53",
         position: "right"
      });
      return
   } else {
      try {
         const res = await axiosClient.post(url_register, data, {
            headers: {
               'Content-Type': 'application/json'
            }
         })
         console.log(res.data)
         return res
      } catch (err) {
         console.error(err)
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

const buttonRegister = document.getElementById('register-button');
buttonRegister.addEventListener('click', async (e) => {
   const res = await postUser()

   if (res && res.status == 201) {
      Toast({
         message: "Cadastrado efetuado com sucesso!",
         color1: "#00b072ff",
         color2: "#96c93d",
         position: "center",
      });
      setTimeout(() => {
         Toast({
            message: "Estamos te redirecionando para o login...",
            color1: "#00b072ff",
            color2: "#96c93d",
            position: "center"
         });
      }, 2500);
   }
})

