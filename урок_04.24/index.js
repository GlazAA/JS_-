$(document).ready(function(){


    // $('.small-img a').click(function(e){
    //     e.preventDefault();

    //     if($('.big-img img').attr('src') != $(this).attr('href')){
    //         $('.big-img img').hide().attr('src', $(this).attr('href')).fadeIn(1000).css({
    //             width: '100%',
    //             height: '100%',
    //         })
    //     }
    // })


    $('.btn').click(function(){
        $('.gallery').slideToggle();
        if($('.btn').text() == '+'){
            $('.btn').text('-')
        }
        else {
            $('.btn').text('+')
        }
    })

    $('.small-img a img').mouseover(function(){
        $(this).fadeTo(600, 0.6).css({border: '1px dotted red',})
    })

    $('.small-img a img').mouseout(function(){
        $(this).fadeTo(600, 1).css({border: 'none',})
    })


    //модальное окно
    $('.modal-container.button').click(function () {
        $('.overlay').fadeIn();
    })

    $(document).mouseup(function () {
        $('.overlay').fadeOut();
    })





})