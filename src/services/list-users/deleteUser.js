import Toast from "../../utils/toast";
const axiosClient = axios

const deleteUser = async (email, token, url_API) => {

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

export default deleteUser;

