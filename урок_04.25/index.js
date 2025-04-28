
$(document).ready(function() {
    $(function(){
        $('#date').datepicker();
    })



    //2

    let arrLang = {
        'en': {
            'title' : 'Chapter One, in which we meet Winnie the Pooh and some bees',
            'MainText' : 'Winnie the Pooh followed his friend Christopher Robin down the stairs, head down, counting the steps with the back of his head: boom-boom-boom. He doesn’t yet know any other way to get down the stairs. Sometimes, however, it seems to him that some other way could be found, if only he could stop babbling for a minute and concentrate properly. But alas, he has no time to concentrate.'
        },
        'ru': {
            'title' : 'Глава первая, в который мы знакомимся с Винни-Пухом и несколькими пчелами',
            'MainText' : 'Винни-Пух спускался по лестнице вслед за своим другом Кристофером Робином, головой вниз, пересчитывая ступеньки собственным затылком: бум-бум-бум. Другого способа сходить с лестницы он пока не знает. Иногда ему, правда, кажется, что можно бы найти какой-то другой способ, если бы он только мог на минутку перестать бумкать и как следует сосредоточиться. Но увы - сосредоточиться-то ему и некогда.'
        }

        
    }



    $(function (){
        $('.translate').click(function () {
            let lang = $(this).attr('id');
            $('.lang').each(function () {
                $(this).text(arrLang[lang][$(this).attr('key')]);
            })
        })
    })


    // let tab = document.querySelectorAll('.tab');

    //         init();

    //         tab.forEach(function (element) {
    //             element.onclick = showTabs;
    //         });

    //         function init(){
    //             console.log('1234556')
    //             let tabBody = document.querySelectorAll('.tab-body');
    //             for (let i = 1; i < tabBody.length; i++){
    //                 tabBody[i].style.display = 'none';
    //             }
    //         }


        let tab = document.querySelectorAll('.tab');
 
        init();

        tab.forEach(function (element) {
        element.onclick = showTabs;});

        function init() {
            let tabBody = document.querySelectorAll('.tab-body');
            for (let i = 1; i < tabBody.length; i++) {
                tabBody[i].style.display = 'none';
            }
            }


            function showTabs() {
                let data = this.getAttribute('data');
                let tabBody = document.querySelectorAll('.tab-body');
                for (let i = 0; i < tabBody.length; i++) {
                    tabBody[i].style.display = 'none';
                }
                document.querySelector(`.tab-body[data="${data}"]`).style.display = 'block';
            }
            // function showTabs() {
            //     console.log('ShowTabs')
            //     let data = this.getAttribute('data');
            //     let tabBody = document.querySelectorAll('.tab-body');
            //     for (let i = 0; i < tabBody.length; i++){
            //         tabBody[i].style.display = 'none';
            //     }
            //     //document.querySelector(`.tab-body[data="${data}"]`).style.display = 'block';
            //     document.querySelector(`.tab-body[data="${data}"]`).style.display = 'block';
            // }

        $('.tabs li').mouseover(function () {
            $(this).css(
                {'font-weight': 'bold',}
            )
        });

        $('.tabs li').mouseout(function(){
            $(this).css(
                {'font-weight': 'normal',}
            )
        });


})




