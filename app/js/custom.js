window.onscroll = function (e) {
    //console.log(window.scrollY); // Value of scroll Y in px
    var x = window.scrollY;
    if(x >= 53) {
        $('h1.logo').addClass('small');
    }else {
        $('h1.logo').removeClass('small');
    }
};