$(document).ready(function () {
    $('#start').click(function () {
        $('.box').slideDown();
        $('header').slideUp();
    });

    $('#form1').on('submit', function(e){
        e.preventDefault();
        const nameValue = $('#name').val();
        $('#form2').before(`<h2 id='title'>${nameValue}</h2>`);
        $('form').slideUp();
        $('#form2').slideDown();
    });

        $('#form2').on('submit', function(e) {
            e.preventDefault();
            const nameValue2 = $('#task').val();
            $('ul').append(`<li>${nameValue2}</li>`);
            $('#task').val('') ;
        });
    });
    
