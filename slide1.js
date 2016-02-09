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
        $("div.slider .secondary:last").animate({'width': 'toggle'}, 1000)

        $(".slider .primary").click(function () {
            $(".open").animate({'width': 'toggle'}, 200);
            $("secondary").css("float", "left");
            $(this).next(".secondary").animate({'width': 'toggle'}, 1000);
    });
        $(".secondary").hide();
        $("button").click(function(){
            $(".open").animate('slide', {direction: 'right'}, 200);
            $(".open").show('slide', {direction: 'right'}, 300);
            $(".secondary").hide('slide', {'width': 'toggle'}, 500);
        });
});