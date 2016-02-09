/*$('.slider :first').before($('.slider .wrapper:last'));       
    $('#rightarrow img').click(function()
    {
        var item_width = $('.slider primary').outerWidth() -320;
        var left_indent = parseInt($('.slider').css('left')) - 320;
        $('.slider:not(:animated)').animate({'left' : left_indent},500,function()
        {
            $('.slider .wrapper:last').after($('.slider .wrapper:first')); 
            $('.slider').css({'left' : '-210px'});
        }); 
    });*/
$(function ()
{
    $('.accordion :first').before($('.accordion .primedary:last'));       
    $('#rightArrow img').click(function()
    {
        var item_width = $('.accordion primary').outerWidth() - 320;
        var left_indent = parseInt($('.accordion').css('left')) - 320;
        $('.accordion:not(:animated)').animate({'left' : left_indent},500,function()
        {
            $('.accordion .primedary:last').after($('.accordion .primedary:first')); 
            $('.accordion').css({'left' : '-210px'});
        }); 
    });
    
    $('#leftArrow img').click(function()
    {
        var item_width = $('.accordion primary').outerWidth() + 320;
        var left_indent = parseInt($('.accordion').css('left')) + item_width;
        $('.accordion:not(:animated)').animate({'left' : left_indent},500,function()
        {         
            $('.accordion .primedary:first').before($('.accordion .primedary:last')); 
            $('.accordion').css({'left' : '-210px'});
        });    
    });
});


$(document).ready(function(){
    $(".secondary").hide();
    $("#divimg_01, #divimg_02, #divimg_03, #divimg_04, #divimg_05").click(function(){
        $(".open").hide('slide', {direction: 'right'}, 500);
        $(".secondary").animate({'width': 'toggle'}, 300);
    });
        $(".button_01, .button_02, .button_03, .button_04, .button_05").click(function(){
        $(".open").animate('slide', {direction: 'right'}, 500);
        $(".open").show('slide', {direction: 'right'}, 500);
        $(".secondary").animate({'width': 'toggle'}, 300);
    });
});
$(document).ready(function(){
    $('.bodyCarousel .primedary').click(function() {
        $(".bodyCarousel .primedary").toggleClass('active');
        $(this).siblings().toggleClass('hide');
    });
});





$(".wrapper").click(function(){
                var primedary_width = $('.slider').outerWidth();
                $( ".slider").after( $( ".slider:first" ) );
                   e.preventDefault();
                   $('.slider').css({'margin-left' : '-210px'}); 
                   $(this).parent().prepend(this);
        });   
                /*$(this).before($('.slider .wrapper:nth-child(2)'));
                $(this).get(index);
                $('.slider').css({'left' : '-210px'});


            });
//'.slider .wrapper:first'
            $("button").click(function() {
                //$('.slider .wrapper:eq(0)').before($('.slider .wrapper:nth-child(3n+2)'));
                //$('.slider .wrapper:first').before($('.slider .wrapper:nth-child(2)'));
                $('.slider').css({'left' : '-210px'});
            });*/
    