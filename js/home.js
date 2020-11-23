// --------------- SIDE NAVBAR-------------
var barContent = document.querySelector('.toggle_outer');

function showbar(){
    barContent.classList.add('nav-link');
    barContent.classList.remove('close-link')
}
function hidebar(){
barContent.classList.remove('nav-link')
barContent.classList.add('close-link')
}

// -------------- SMALL DEVICE NAVBAR ------------
var menubar = document.getElementById('small_header_ul');
var menuIcon = document.getElementById('menuIcon');
var closeIcon = document.getElementById('closeIcon');
menubar.style.maxHeight = '0px';


function shownav(){
menuIcon.style.display = 'none';
closeIcon.style.display = 'block';

if(menubar.style.maxHeight == '0px'){
    menubar.style.maxHeight = '350px';
}else{
    menubar.style.maxHeight = '0px';
}
}

var closeArrow = document.querySelectorAll('.closeArrow');
var groupList = document.querySelectorAll('.groupList');

closeIcon.addEventListener('click',function(){
    menuIcon.style.display = 'block';
    closeIcon.style.display = 'none';
    menubar.style.maxHeight = '0px';
    menubar.style.transition = 'max-height 0.3s ease';

    for(let i=0;i<closeArrow.length;i++){
        closeArrow[i].style.transform = 'rotate(0deg)';
        groupList[i].style.maxHeight= '0px'
    }
})

// ------------ HOME LINK ------------------
var smallUL = document.querySelector('.small_header_click_ul')
var arrow = document.querySelector('.side_arrow');
 smallUL.style.maxHeight ='0px';

 function displaySmallUL(){
    arrow.style.transform = 'rotate(90deg)';
     arrow.style.transition = 'transform 0.4s ease';
     if( smallUL.style.maxHeight =='0px'){
         smallUL.style.maxHeight= '300px'
         menubar.style.maxHeight = '500px';
     }else{
         arrow.style.transform = 'rotate(0deg)';
        smallUL.style.maxHeight ='0px';
        menubar.style.maxHeight = '300px';
    }
 }

// -------------- LIFESTYLE LINK --------------
var lifestyleUL = document.querySelector('.lifestyle_click_ul')
var lifestylearrow = document.querySelector('.lifestyle_arrow');
lifestyleUL.style.maxHeight ='0px';

 function displayLifestyle(){
    lifestylearrow.style.transform = 'rotate(90deg)';
    lifestylearrow.style.transition = 'transform 0.4s ease';

     if( lifestyleUL.style.maxHeight =='0px'){
        lifestyleUL.style.maxHeight= '300px'
         menubar.style.maxHeight = '500px';
     }else{
        lifestylearrow.style.transform = 'rotate(0deg)';
        lifestyleUL.style.maxHeight ='0px';
        menubar.style.maxHeight = '300px';
    }
 }

// ----------------------WORLD LINKS -------------
var worldUL = document.querySelector('.world_click_ul')
var worldArrow = document.querySelector('.world_arrow');
worldUL.style.maxHeight ='0px';

 function displayWorld(){
    worldArrow.style.transform = 'rotate(90deg)';
    worldArrow.style.transition = 'transform 0.4s ease';

     if( worldUL.style.maxHeight =='0px'){
        worldUL.style.maxHeight= '300px'
         menubar.style.maxHeight = '500px';
     }else{
        worldArrow.style.transform = 'rotate(0deg)';
        worldUL.style.maxHeight ='0px';
        menubar.style.maxHeight = '300px';
    }
 }

// ----------------- FEATURE LINKS ---------------
var featureUL = document.querySelector('.feature_click_ul')
var featureArrow = document.querySelector('.feature_arrow');
featureUL.style.maxHeight ='0px';

 function displayFeatureLinks(){
    featureArrow.style.transform = 'rotate(90deg)';
    featureArrow.style.transition = 'transform 0.4s ease';

     if( featureUL.style.maxHeight =='0px'){
        featureUL.style.maxHeight= '300px'
         menubar.style.maxHeight = '500px';
     }else{
        featureArrow.style.transform = 'rotate(0deg)';
        featureUL.style.maxHeight ='0px';
        menubar.style.maxHeight = '300px';
    }
 }

// ------------ ACTIVE UL-LIST --------------
// var ulList = document.getElementsByClassName('activelist');

// for(let i=0;i<ulList.length;i++){
//     ulList[i].addEventListener('click',()=>{
//         if(ulList[i].className === 'activenav'){
//             ulList[i].classList.remove('activenav');
//         }
//             ulList[i].classList.add('activenav');
//     })
// }

// window.addEventListener('click',()=>{
//     for(let i=0;i<ulList.length;i++){
//         ulList[i].classList.remove('activenav');
//         }
// })




