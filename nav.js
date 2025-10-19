let menuButton = document.querySelector(`.menuButton`);
let menuList = document.querySelector(`.menuList`);

let menuOnOff = false;

menuButton.addEventListener(`click`, ()=>{
    if(!menuOnOff){
        menuList.style.display=`block`;
        menuOnOff = true;
    }else{
        menuList.style.display=`none`;
        menuOnOff = false;
    }
}
    
)