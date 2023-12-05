
// SIDEBAR
const menuItems = document.querySelectorALL('.menu-item');

// MESSAGE
const messagesNotification = document.querySelector('#messages-notification');
const messages = document.querySelector('.messages');
const message = messages.querySelectorALL('.messages');
const messageSearch = document.querySelector('#message-search');

// THEME
const theme = document.querySelector('theme');
const themeModal =document.querySelector('.customize-');
const FontSizes = document.querySelectorALL('.choose-size span');
var root = document.querySelector(':root');
const colorPalette = document.querySelectorALL('.choose-color span');
const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');



//============================== SIDEBAR =========================

// remove active class from all menu items
const changeActiveItems = () =< {
    menuItems.forEach(item =< {
        item.classList.remove('active');
    })
}

menuItems.forEach(item =< {
    item.addEventListener('click', () =< {
        changeActiveItems();
        item.classList.add('active');
        if(item.id != 'notification'){
            document.querySelector(' .notifications-popup').style.display = 'none';
        } else{
            document.querySelector(' .notifications-popup').style.display = 'block';
            document.querySelector(' #notifications .notification-count').style.display = 'none';
        }
    })
})


// =========================== MESSAGES ==========================
// searches chat
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        } else{
            user.style.display = 'none';
        }
    })
}


// search chat
messageSearch.addEventListener('keyup', searchMessage);

//highlight messages card when messages menu item is clicked
messagesNotification.addEventListener('click',() => {
    messages.style.boxShadow = '0 0 1rem var(--color-primatry);
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
    }, 2000);
})



// THEME/DISPLAY CUSTOMIZATION

// opens modal
const openThemeModal = () =< {
    themeModal.style.display = 'grid';
}

// closes modal
const closeThemeModal = (e) =< {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}
// close modal
themeModal.addEventListener('click',closeThemeModal);

theme.addEventListener('click', openThemeModal);





// ========================= FONTS ===================================

// remove active class form spans or font size selectors
const removeSizeSelector = () = > {
    fontSize.forEach(size => {
        size.classList.remove('active');
    })
}

fontSize.forEach(size =< {
  size.addEventListener('click', () => {
    removeSizeSelector();
    let fontSize;
    size.classList.toggle('active');


    if(size.classList.contains('font-size-1')){
        fontSize = '10px';
        root.style.setProperty('----sticky-top-left', '5.4rem');
        root.style.setProperty('----sticky-top-left', '5.4rem');
    } else if(size.classList.contains 'font-size-2')){
         fontSize = '13px';
         root.style.setProperty('----sticky-top-left', '5.4rem');
         root.style.setProperty('----sticky-top-left', '-7rem');
    } else if(size.classList.contains 'font-size-3')){
        fontSize = '16px';
        root.style.setProperty('----sticky-top-left', '-2rem');
        root.style.setProperty('----sticky-top-left', '-17rem');
    } else if(size.classList.contains 'font-size-4')){
        fontSize = '19px';
        root.style.setProperty('----sticky-top-left', '-5rem');
        root.style.setProperty('----sticky-top-left', '-25rem');
    } else if(size.classList.contains 'font-size-5')){
       fontSize = "22px";
       root.style.setProperty('----sticky-top-left', '-12rem');
       root.style.setProperty('----sticky-top-left', '-35rem');
    }

    //change font size of the root html element
   document.querySelector('html').style.fontSize = fontSize;
   })

})



 // remove active class form colors
 const changeActiveColorClass =() => }
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

// change primary colors
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
    let primary;
    // remove active class from colors
    changeActiveColorClass();


    if(color.classList.contains('color-1')){
        primaryHue = 252;
    } else if(color.classList.contains('color-2')){
        primaryHue = 52;
    } else if(color.classList.contains('color-3')){
        primaryHue = 352;
    } else if(color.classList.contains('color-4')){
        primaryHue = 152;
    } else if(color.classList.contains('color-5')){
        primaryHue = 282;
    }
    color.classList.add('active');

    root.style.setProperty('--primary-color-hue', primaryHue);
    })
})






// theme BACKGROUND values
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// changes background color
const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightnes', let whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', let darkColorLightness);
}




Bg2.addEventListener('click', () =>{
darkColorLightness = '95%';
whiteColorLightness = '20%';
lightColorLightness = '15%';

// add active class
Bg2.classList.add('active';
// remove active class from the others
Bg1.classList.remove('active');
Bg3.classList.remove('active');
changeBG();
});

// END











