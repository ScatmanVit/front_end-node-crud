const Toast = (data) => {
   Toastify({
      text: data.message,
      duration: 2000,
      style: {
         background: `linear-gradient(to right, ${data.color1}, ${data.color2})`
      },
      position: data.position,
      callback: setInterval(() => {
                  window.location.href = data.onclose ? data.onclose : "index.html"
               }, 2500)
   }).showToast();
}

 
export default Toast