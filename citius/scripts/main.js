window.onload = () => {
    const downBtn = document.querySelector('.down__btn')
    const secondP = document.querySelector('.second__p')
    let handler = true
    let lastScrollTop = 0;
    //let count = 0
    //console.dir(SECOND)


    document.addEventListener('scroll', async ev => {
        if (!handler) return
        let st = window.pageYOffset || document.documentElement.scrollTop
        document.body.style.overflow = "hidden"
        // handler = false
        if (st > lastScrollTop) {
            await moveSection('#second')
            $(".second__p").addClass("animate__animated animate__fadeIn animate__delay-500ms animate__slower")
            $("#logo2").addClass("animate__animated animate__fadeIn animate__delay-1s animate__slower")
            $("#icon-link1").addClass("animate__animated animate__fadeIn animate__delay-1s animate__slower")
            $("#icon-link2").addClass("animate__animated animate__fadeIn animate__delay-1s animate__slower")
        }
        else {
            await moveSection('#first')
        }
        lastScrollTop = st <= 0 ? 0 : st
    })

    downBtn.addEventListener('click', async ev => {
        await moveSection('#second')
    })

    async function moveSection(name) {
        if (!handler) return
        function start() {
            handler = false
            $('html, body').animate({
                    scrollTop: $(name).offset().top
                }, 1000, "linear", function (){
                  //  console.log(count++)
                    handler = true
                    document.body.style.overflow = "auto"
                }
            )
        }
        await start()
    }

}