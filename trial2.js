  $(document).ready(function() {
            $('#rightarrow img').click(function(){
            var carwidth = $('.slider .wrapper').outerWidth();
            var carousel = parseInt($('.slider').css('left')) - carwidth;
            $('.slider').animate({'left' : carousel},500,function(){    
            $('.slider').append($('.slider .wrapper:first')); 
            $('.slider').css({'left' : 0});

            }); 
        });
        $('#leftarrow img').click(function(){
            var slide = $('.slider .wrapper:first').outerWidth();
            console.log(slide);
            $('.slider').css({'left' : -slide}); 
            $('.slider').prepend($('.slider .wrapper:last'));
            $('.slider').animate({'left' : 0},500,function(){ 
            $('.slider').css({'left' :0 }); 
            });
        });
    $(".secondary").hide();
    $("#img1, #img2, #img3, #img4, #img5").click(function(){
        $(".open").hide('slide', {direction: 'right'}, 500);
        $(".secondary").animate({'width': 'toggle'}, 300);
    }),

    $(".wrapper").click(function(){
        var index = $(this).index();
        var wrapper = $('wrapper').width();
        var primary = $('.primary').width();
        var secondary = $('.secondary').width();
        var count = (wrapper*index)*3;
        console.log(count);
        $('.slider .wrapper:last').after($('.slider .wrapper:lt('+index+')')); 
        $('.slider').animate({'left' : -count});
        $('.slider').css({'left' : '0'});
    }),

    $(".button1, .button2, .button3, .button4, .button5").click(function(){ 
        $(".open").animate('slide', {direction: 'right'}, 500);
        $(".open").show('slide', {direction: 'right'}, 500);
        $(".secondary").animate({'width': 'toggle'}, 300);
    }); 

});