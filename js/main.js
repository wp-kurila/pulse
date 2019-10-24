$(document).ready(() => {

    let menuElem = $('.menu-elem');
    
    menuElem.on('click', (e) => {
        menuElem.removeClass('active');
        $('.content').children('div').hide();
        $(e.target).parent('.menu-elem').addClass('active');
        let activeBlock = $(e.target).text();
        $('#' + activeBlock).show();

    });


});