let day_slide = new Swiper('.day_data',{
    slidesPerView: 7,
    pagination:{
        el:'.swiper-pagination'
    },  
    navigation:{
        nextEl:'.day_data .swiper-button-next',
        prevEl:'.day_data .swiper-button-prev',
    }

})
let banner_slide = new Swiper('.content_box',{
    slidesPerView: 1,
    pagination:{
        el:'.swiper-pagination'
    },  
    navigation:{
        nextEl:'.content_box .swiper-button-next',
        prevEl:'.content_box .swiper-button-prev',
    }

})







const menu_sub = document.querySelector('.menu_sub')
const menu_btn = document.querySelector('.menu_btn')
let menu_result = true
menu_sub.style.transform = "translateX(-1000px)"
menu_btn.addEventListener('click',(e)=>{
menu_result = !menu_result
    if(menu_result ==false){
        menu_sub.style.transform = "translateX(0)"
        menu_sub.style.transition = "0.5s"
        menu_btn.style.backgroundImage = "url('./images/index_img/close_icon.png')"
    }else{
        menu_sub.style.transform = "translateX(-1000px)"
        menu_sub.style.transition = "0.5s"
        menu_btn.style.backgroundImage = "url('./images/index_img/menu_icon.png')"
    }
})


