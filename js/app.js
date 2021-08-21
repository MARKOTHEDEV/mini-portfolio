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