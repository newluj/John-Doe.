$(document).ready(function(){

    $('.slider :first').before($('.slider .wrapper:last'));       
    $('#rightarrow img').click(function()
    {
        var item_width = $('.slider primary').outerWidth() -320;
        var left_indent = parseInt($('.slider').css('left')) - 320;
        $('.slider:not(:animated)').animate({'left' : left_indent},500,function()
        {
            $('.slider .wrapper:last').after($('.slider .wrapper:first')); 
            $('.slider').css({'left' : '-210px'});
        }); 
    });
    $('#leftarrow img').click(function()
    {
        var item_width = $('.slider primary').outerWidth() + 320;
        var left_indent = parseInt($('.slider').css('left')) + 320;
        $('.slider:not(:animated)').animate({'left' : left_indent},500,function()
        {         
            $('.slider .wrapper:first').before($('.slider .wrapper:last')); 
            $('.slider').css({'left' : '-210px'});
        });    
    });


    $(".secondary").hide();
    $("#img1, #img2, #img3, #img4, #img5").click(function(){
        $(".open").hide('slide', {direction: 'right'}, 500);
        $(".secondary").animate({'width': 'toggle'}, 300);
    });
        $(".button1, .button2, .button3, .button4, .button05").click(function(){
        $(".open").animate('slide', {direction: 'right'}, 500);
        $(".open").show('slide', {direction: 'right'}, 500);
        $(".secondary").animate({'width': 'toggle'}, 300);
    });

    $('.main .wrapper').click(function() {
        $(".main .wrapper").toggleClass('active');
        $(this).siblings().toggleClass('hide');
    });
});



    