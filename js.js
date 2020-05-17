// Creating variables start
let mainWindow              = document.getElementById('mainWindow');
//Variables for modal windows start
let modalWindow             = document.getElementById('modal');

let modalWindowMyself       = document.getElementById('modalContentForMyself')  
let myselfBtn               = document.getElementById('myselfBtn');
let closeBtnMyself          = document.getElementById('closeBtnMyself');

let modalWindowMovies       = document.getElementById('modalContentForMovies')
let moviesBtn               = document.getElementById('moviesBtn');
let closeBtnMovies          = document.getElementById('closeBtnMovies');

let modalWindowProgramming  = document.getElementById('modalContentForProgramming');
let programmingBtn          = document.getElementById('programmingBtn');
let closeBtnProgramming     = document.getElementById('closeBtnProgramming');

let modalWindowHobbies      = document.getElementById('modalContentForHobbies');
let hobbiesBtn              = document.getElementById('hobbiesBtn');
let closeBtnHobbies         = document.getElementById('closeBtnHobbies');


let modalWindowSettings     = document.getElementById('modalContentForSettings');
let settingsBtn             = document.getElementById('settingsBtn');
let closeBtnSettings        = document.getElementById('closeBtnSettings');
//Variables for modal windows end

//Variables for settings functional start
let btnChangeMode           = document.getElementById("btnChangeMode");


//Variables for settings functional end

//Variables for reverse style start
let headerHeadline          = document.getElementById('headerHeadline');
let imgContainer            = document.getElementById('imgContainer');
let nameBlock               = document.getElementById('nameBlock');
let lightbulb               = document.getElementById('lightbulb');
let modalMyselfHeader       = document.getElementById('modalMyselfHeader');
let modalMoviesHeader       = document.getElementById('modalMoviesHeader');
let modalProgrammingHeader  = document.getElementById('modalProgrammingHeader');
let modalHobbiesHeader      = document.getElementById('modalHobbiesHeader');

//Variables for reverse style end

//Variables for slider  start
let btnPrev            = document.querySelector(".slider .buttons .prevBtn");
let btnNext            = document.querySelector(".slider .buttons .nextBtn");
let imgSliderContainer = document.getElementById('imgSliderContainer');

let images = document.querySelectorAll(".slider .images img");
let i = 0;
//Variables for slider  end




// Creating function for modals start


// Myself button
myselfBtn.onclick   = function () {
    modalWindow.style.display = "block";
    modalWindowMyself.style.display = "block";
    modalWindowMyself.classList.add('blockAnim');
    
}

closeBtnMyself.onclick = function () {
    modalWindow.style.display = "none";
    modalWindowMyself.style.display = "none";
}

// Movies button
moviesBtn.onclick   = function () {
    modalWindow.style.display = "block";
    modalWindowMovies.style.display = "block";
    modalWindowMovies.classList.add('blockAnim');
}

// Slider functionalitty start

btnPrev.onclick = function () {
    images[i].className = "";
    i--;

    if (i < 0) {
        i = images.length - 1;
    }

    images[i].className = 'showImg';
}

btnNext.onclick = function () {
    images[i].className = "";

    i++;

    if (i >= images.length) {
        i = 0;
    }
    images[i].className = "showImg";

}

imgSliderContainer.onmouseover = function () {
    btnPrev.classList.add('showBtn');
    btnNext.classList.add('showBtn');

}

imgSliderContainer.onmouseout = function () {
    btnPrev.classList.remove('showBtn');
    btnNext.classList.remove('showBtn');

}


window.onload = function () {
    imgSliderContainer.classList.add('showContainer');
}
// Slider functionalitty end

closeBtnMovies.onclick = function () {
    modalWindow.style.display = "none";
    modalWindowMovies.style.display = "none";
}

// Programming button
programmingBtn.onclick = function () {
    modalWindow.style.display = "block";
    modalWindowProgramming.style.display = "block";
    modalWindowProgramming.classList.add('blockAnim');
}

closeBtnProgramming.onclick = function () {
    modalWindow.style.display = "none";
    modalWindowProgramming.style.display = "none";
}

// Hobbies button
hobbiesBtn.onclick = function () {
    modalWindow.style.display = "block";
    modalWindowHobbies.style.display = "block";
    modalWindowHobbies.classList.add('blockAnim');
}

closeBtnHobbies.onclick = function () {
    modalWindow.style.display = "none";
    modalWindowHobbies.style.display = "none";
}

// Settigs button
// settingsBtn.onclick = function () {
//     modalWindow.style.display = "block";
//     modalWindowSettings.style.display = "block";
//     modalWindowSettings.classList.add('blockAnim');
// }

// closeBtnSettings.onclick = function () {
//     modalWindow.style.display = "none";
//     modalWindowSettings.style.display = "none";
// }
// Creating function for modals end

// Creation function for additional functionality start
let testSwitcher = true;

btnChangeMode.onclick = function () {
    if (testSwitcher == true) {
        mainWindow.classList.add('bodyStyleReverse');
        headerHeadline.classList.add('headerHeadlineStyleReverse');
        // settingsBtn.classList.add('settingsBtnStyleReverse');
        myselfBtn.classList.add('blockStyleReverse');
        moviesBtn.classList.add('blockStyleReverse');
        programmingBtn.classList.add('blockStyleReverse');
        hobbiesBtn.classList.add('blockStyleReverse');
        imgContainer.classList.add('imgContainerStyleReverse');
        nameBlock.classList.add('nameBlockStyleReverse');
        btnChangeMode.classList.add('btnChangeModeStyleReverse');
        lightbulb.classList.add('lightbulbStyleReverse');
        
        modalWindowMyself.classList.add('modalContentForMyselfStyleReverse');
        modalWindowHobbies.classList.add('modalContentForHobbiesStyleReverse');
        modalWindowMovies.classList.add('modalContentForMoviesStyleReverse');
        modalWindowProgramming.classList.add('modalContentForProgrammingStyleReverse');
        modalMyselfHeader.classList.add('modalHeadersStyleReverse');
        modalMoviesHeader.classList.add('modalHeadersStyleReverse');
        modalProgrammingHeader.classList.add('modalHeadersStyleReverse');
        modalHobbiesHeader.classList.add('modalHeadersStyleReverse');    
        imgSliderContainer.classList.add('imagesStyleReverse');
        btnPrev.classList.add('btnsStyleReverse');
        btnNext.classList.add('btnsStyleReverse');
        
        testSwitcher = false;
    } else {
        mainWindow.classList.remove('bodyStyleReverse');
        headerHeadline.classList.remove('headerHeadlineStyleReverse');
        // settingsBtn.classList.remove('settingsBtnStyleReverse');
        myselfBtn.classList.remove('blockStyleReverse');
        moviesBtn.classList.remove('blockStyleReverse');
        programmingBtn.classList.remove('blockStyleReverse');
        hobbiesBtn.classList.remove('blockStyleReverse');
        imgContainer.classList.remove('imgContainerStyleReverse');
        nameBlock.classList.remove('nameBlockStyleReverse');
        btnChangeMode.classList.remove('btnChangeModeStyleReverse');
        lightbulb.classList.remove('lightbulbStyleReverse');

        modalWindowMyself.classList.remove('modalContentForMyselfStyleReverse');
        modalWindowHobbies.classList.remove('modalContentForHobbiesStyleReverse');
        modalWindowMovies.classList.remove('modalContentForMoviesStyleReverse');
        modalWindowProgramming.classList.remove('modalContentForProgrammingStyleReverse');
        modalMyselfHeader.classList.remove('modalHeadersStyleReverse');
        modalMoviesHeader.classList.remove('modalHeadersStyleReverse');
        modalProgrammingHeader.classList.remove('modalHeadersStyleReverse');
        modalHobbiesHeader.classList.remove('modalHeadersStyleReverse');
        imgSliderContainer.classList.remove('imagesStyleReverse');
        btnPrev.classList.remove('btnsStyleReverse');
        btnNext.classList.remove('btnsStyleReverse');
        testSwitcher = true;
    }
}
// Creation function for additional functionality end



// Closing modal windows
window.onclick = function (e) {
    if (e.target == modal) {
        modalWindow.style.display = "none";
        modalWindowMyself.style.display      = "none";
        modalWindowMovies.style.display      = "none";
        modalWindowProgramming.style.display = "none";
        modalWindowHobbies.style.display     = "none";
        modalWindowSettings.style.display    = "none";
    }
}

