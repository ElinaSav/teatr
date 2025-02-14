(function(){
    const closeItem = document.querySelector(".popup__close__subscrib");
    const popup = document.querySelector(".popup__screen");
    closeItem.addEventListener("click", () =>{
        popup.classList.add("popup__screen_active");
    });
  }())