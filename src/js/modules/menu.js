function menu(){
    const buttonMenu = document.querySelector('.nav__button_main')
    const menuBlock = document.querySelector('.menu')

    buttonMenu.addEventListener('click', () =>{
        menuBlock.classList.toggle('show')
    })

}

export default menu;