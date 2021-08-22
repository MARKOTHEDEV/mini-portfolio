console.log("hello world!!")


// this code is for the navlinks -->it makes sure there is some kind of hover or click event on the nav
const navlinks= document.querySelector(".navlinks");
//this just mimics hoverstate on laptop but in a Mobilerstate
navlinks.addEventListener('click',(e)=>{
    // console.log((e.target.className))
    if(e.target.parentElement.className ==='navlink'){
       
        e.target.classList.add("a_tag_hover_state")

        setTimeout(()=>{
        e.target.classList.remove("a_tag_hover_state")

        },1000)

    }
    })



// code for ham buger and sliding the nav bar
const nav = document.querySelector("nav");
const ham = document.querySelector(".ham");

ham.addEventListener('click',e=>{
    nav.classList.toggle('show');
    ham.classList.toggle('close');
})


// the code below handles any flaoting form
const hire_me_btn_open = document.querySelector('#hire_me_btn_open');
const hire_me_btn_close = document.querySelector('#hire_me_btn_close');
const hire_me_form = document.querySelector('#hire_me_form')

hire_me_btn_open.addEventListener('click',()=>{
    hire_me_form.classList.add('visible')

})

hire_me_btn_close.addEventListener('click',()=>{
    hire_me_form.classList.remove('visible')

})