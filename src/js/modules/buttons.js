function acitveButtons(){
    const buttons = document.querySelectorAll('.sixthSection__grid-button')

    buttons.forEach(item => {
        item.addEventListener('click', (e) => {
            item.classList.toggle('green')
        })
    })
}

export default acitveButtons