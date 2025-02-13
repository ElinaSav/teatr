(function(){
    const closeItem = document.querySelector(".popup__close__subscrib");
    const popup = document.querySelector(".popup__screen");
    console.log(closeItem)
    closeItem.addEventListener("click", () =>{
        console.log(closeItem)
        popup.classList.add("popup__screen_active");
    });
  }())