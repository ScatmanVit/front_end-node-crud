// import askUserToChooseBoolean from '../utils/choose-modal.js';
import deleteUser from './deleteUser.js';
import { url_api } from '../../config/url_api.js';
import Toast from '../../utils/toast.js'
const axiosClient = axios
/* insertAdjacentHTML serve para adcionar
 um novo elemento na dom via JS */
/* ele utilza de posições para saber 
em qual lugar dentro de uma div ele tem que por */

let url_API = url_api + "/delete/user/"






/* Deletar um item da lista*/
const buttonTrash = document.querySelectorAll('.fa-trash')
buttonTrash.forEach(button => {
   button.addEventListener('click', async () => {
      const userButtonTrash = button.getAttribute('user-object')
      const userEmail = document.getElementById(userButtonTrash)

      userEmail.style.display = "none"
      const res = await deleteUser(userEmail.id, token, url_API)

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

