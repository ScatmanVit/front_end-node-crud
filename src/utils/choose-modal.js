const askUserToChooseBoolean = () => {
   return new Promise((resolve) => {
      const modalChoose = document.getElementById('modal-choose-name')
      const buttonYes = document.getElementById('button-choose-yes')
      const buttonNot = document.getElementById('button-choose-not')
      const buttonClose = document.getElementById('close-modal')

      modalChoose.showModal()

      const onYes = () => {
         modalChoose.close()
         cleanup()
         resolve(true) 
      }

      const onNot = () => {
         modalChoose.close()
         cleanup()
         resolve(false) 
      }


      const cleanup = () => {
         buttonYes.removeEventListener('click', onYes)
         buttonNot.removeEventListener('click', onNot)
      }

      buttonYes.addEventListener('click', onYes)
      buttonNot.addEventListener('click', onNot)
      buttonClose.addEventListener('click', onNot)
   })
}

export default askUserToChooseBoolean