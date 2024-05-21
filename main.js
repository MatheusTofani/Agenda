$(document).ready(function () {
    var flag = false;
    $('#start').click(function () {
        $('.add').slideDown();
        $('header').slideUp();
    });

    $('#form1').on('submit', function (e) {
        e.preventDefault();
        const nameValue = $('#name').val();
        $('.box').slideDown();
        $('#form2').before(`<h2 id='title'>${nameValue}</h2>`);
        $(".add").css("display", "none");
        $('#form2').slideDown();
    });

    $('#form2').on('submit', function (e) {
        e.preventDefault();
        const nameValue2 = $('#task').val();
        $('ul').append(`<li>${nameValue2}</li>`);
        $('#task').val('');
    });

    const textD = $(this).css("text-decoration", "line-through");

    $('ul').on('click', 'li', function () {

        if (flag) {
            $(this).css("text-decoration", "");
            flag = false;
        } else {
            flag = true;
            $(this).css("text-decoration", "line-through");
        }
    });
});

