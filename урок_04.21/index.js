
// $(function(){
//     alert($('.task-one h1').text());
// })

// $(function(){
//     $('.task-one h1').text('dom и jquery на javascript');
// })

// $(function(){
//     $('.task-one').hide(8000);
//     $('.task-one').show(8000);
// })

// $(function(){
//     $('.but').click(function(){
//         $('.task-one').toggle(8000);
//         $('.task-one').toggle(8000);
//     })
    
// })

//$('.task-one').slideUp(1000).slideDown(1000);

// $(function(){
//     $('.but').click(function(){
//         $('.icons-img>img').fadeOut(5000).fadeIn(5000);
//     })
    
// })

// $(function(){
//     $('.but').click(function(){
//         let w = $('.but').width();
//         let h = $('.but').height();
//         console.log(w,h)
//         console.log(Math.ceil(w), Math.ceil(h))
//     })
    
// })


// $(function(){
//     $('.but').click(function(){
//         let w = $('.but').width();
//         let h = $('.but').height();
//         console.log(w,h);
//         console.log(Math.ceil(w), Math.ceil(h));
//         $('.but').width(300);
//         $('.but').height(100);
//     })
    
// })


// $(function(){
//     $('.but').click(function(){
//         let w = $('.h1').width();
//         let h = $('.h1').height();
//         console.log('h1',w,h);
//         console.log('h1',Math.ceil(w), Math.ceil(h));

//         let w2 = $('.h2').width();
//         let h2 = $('.h2').height();

//         console.log('h2',w2,h2);
//         console.log('h2',Math.ceil(w2), Math.ceil(h2));
        
//     })
    
// })

// $(function(){
//         $('.but').click(function(){
//             $('.task-one h1').animate({
//                 'font-size': '24pt',
//             },3000).animate({
//                 'font-size': '14pt',
//             }, 3000);
            
//         })
        
//     })
        


// $('.but').click(function start(){
//     $('.icons-img>img')
//     .animate({
//         opacity: 0.4,
//         marginLeft: "50%"
//     }, 1000)
//     .animate({
//         opacity: 1,
//         marginLeft: "0%"
//     }, 1000, start)
    
// });

$('.but').click(function start(){
    $('.icons-img>img')
    .animate({
        opacity: 0.4,
        marginLeft: "10%"
    }, 2000)
    .animate({
        opacity: 0.4,
        marginTop: "10%"
    }, 2000)
    .animate({
        opacity: 0.4,
        marginLeft: "0%",
    }, 2000)
    .animate({
        opacity: 1,
        marginTop: "0%"
    }, 2000, start)
    
});



// Анимация для заголовка h1
$('h1').animate({
    'font-size': '36px',
    'color': '#2c3e50',
    'letter-spacing': '2px',
    'margin-top': '30px'
}, 2000, function() {
    // Функция обратного вызова после завершения анимации
    console.log('Анимация h1 завершена');
});

// Анимация для подзаголовка h2
$('h2').animate({
    'font-size': '24px',
    'color': '#e74c3c',
    'padding': '15px',
    'border-left': '5px solid #3498db'
}, 2500, 'swing', function() {
    console.log('Анимация h2 завершена');
});


