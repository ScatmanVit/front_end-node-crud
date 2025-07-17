import Toast from "./toast.js"

async function showSequenceToast(res) {
  if (res && (res.status === 201 || res.status === 200)) {
    await Toast({
      message: `${res.status === 201 ? "Cadastro" : "Login"} efetuado com sucesso!`,
      color1: "#00b072ff",
      color2: "#96c93d",
      position: "center",
      duration: 2000,
    });
    await Toast({
      message: `Estamos te redirecionando para o ${res.status === 201 ? "Login" : "seu perfil"}...`,
      color1: "#00b072ff",
      color2: "#96c93d",
      position: "center",
      duration: 2000,
    });
    window.location.href = "login.html";
  }
}

export default showSequenceToast;