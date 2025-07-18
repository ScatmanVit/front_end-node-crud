// import askUserToChooseBoolean from '../utils/choose-modal.js';
import { url_api } from '../config/url_api.js';
import Toast from '../utils/toast.js'
const axiosClient = axios
/* insertAdjacentHTML serve para adcionar
 um novo elemento na dom via JS */
/* ele utilza de posições para saber 
em qual lugar dentro de uma div ele tem que por */

let url_API = url_api + "/delete/user/"

/**/
const updateUser = () => {
   // mudar o user, seja o campo que for, AQUI
}

/* Deletar do banco com chamada a api e uso do token jwt*/
const deleteUser = async (email) => {

   if (!email) {
      Toast({
         message: "Nenhum email recebido",
         color1: "#9B2A2A",
         color2: "#ED8B53",
         position: "right"
      })
      return
   }

   try {
      const res = await axiosClient.delete(`${url_API}6866e53c1a3253dff890979d`, {
         headers: {
            'Content-Type': 'application/json',
            'Authorization': `${token}` // falta salvar o token no login, recuperar ele e colocar aqui
         }
      });

      console.log(res.data)
      return res
   } catch (err) {
      console.error(err)
      const serverMessage = err.response?.data?.message || "Erro ao deletar";
      Toast({
         message: serverMessage,
         color1: "#9B2A2A",
         color2: "#ED8B53",
         position: "right"
      });
      return null
   }
}



/* Deletar um item da lista*/
const buttonTrash = document.querySelectorAll('.fa-trash')
buttonTrash.forEach(button => {
   button.addEventListener('click', async () => {
      const userButtonTrash = button.getAttribute('user-object')
      const userEmail = document.getElementById(userButtonTrash)

      userEmail.style.display = "none"
      const res = await deleteUser(userEmail.id)

      if (res && res.status === 200) {
         Toast({
            message: "Usuário deletado com sucesso",
            color1: "#9B2A2A",
            color2: "#ED8B53",
            position: "center"
         });
         setTimeout(() => {
            userEmail.style.display = "none"
         }, 1500)
      }


   })

});

