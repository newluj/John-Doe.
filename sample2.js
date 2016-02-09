$(document).ready(function(){

     $('.slider .wrapper:first').before($('.slider .wrapper:last'));     
            $('#rightarrow img').click(function(){
            var carwidth = $('.slider .wrapper').outerWidth();
            var carousel = parseInt($('.slider').css('left')) - carwidth;
            $('.slider').animate({'left' : carousel},500,function(){    
            $('.slider .wrapper:last').after($('.slider .wrapper:first')); 
            $('.slider').css({'left' : '-210px'});

            }); 
        });
     $('#leftarrow img').click(function(){

      var carwidth = $(".wrapper").width();
      var carousel = $(".slider");
      carousel.animate({"margin-left":0},300,function(){
      carousel.prepend($('.wrapper:last()')).css({"margin-left":carwidth});
});
      });

      
/*var item_width = $('.slider wrapper').outerWidth() + 320;
       var left_indent = parseInt($('.slider').css('left')) + item_width;
       $('.slider').animate({'left' : left_indent},500,function()
       {         
           $('.slider .wrapper:first').before($('.slider .wrapper:last')); 
                       $('.slider').css({'left' : '-210px'});

       });  

$carousel = $(".slider");

       function moveLeft(carwidth){
          $carousel.prepend($carousel.last()).css("margin-left":carwidth).animate({"margin-left":0}),300);
       }

*/
   $(".secondary").hide();
   $("#img1, #img2, #img3, #img4, #img5").click(function(){
       $(".open").hide('slide', {direction: 'right'}, 300);
       $(".secondary").animate({'width': 'toggle'}, 300);

   });


       $("button").click(function(){
        var indexi = $(this).index();
        console.log(indexi);
         $(".slider .wrapper:nth-child(" + (parseInt(indexi) + 1) + ")").show();
       $(".open").animate('slide', {direction: 'right'}, 500);
       $(".open").show('slide', {direction: 'right'}, 500);
       $(".secondary").animate({'width': 'toggle'}, 300);
       $(this).insertBefore($('.slider .wrapper:nth-child('+(indexi)+')'));

   }); 
       /*$(".wrapper").on("click", function()
   {
       var index = $(this).index();
       console.log(index);
       $(".wrapper:nth-child(" + (parseInt(index) + 1) + ")").show();
       $(this).insertBefore( $( ".wrapper:nth-child(1)" ) );
       $('.wrapper').css({'margin-left' : '330px'}); 
   });*/

  
   
/*$(document).ready(function() {
       $(".wrapper").on("click", function() {
           var index = $(this).index();
           console.log(index);
           $(".slider .primedary:nth-child(" + (parseInt(index) + 1) + ")").show();
    });
});*/
});
