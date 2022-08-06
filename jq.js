
   $(document).ready(function(){
    $(window).scroll(function(){
      if($(this).scrollTop()>200)
    {
      $(".scrollUp").fadeIn();
    }
    else{
      $(".scrollUp").fadeOut();
    }
    })
    $(".scrollUp").click(function(){
     $("html,body").animate({
       scrollTop:0
     },600);
 
    });
        
  });
 
 
  $(".btn").on("click",function(){
    $('.menu').toggleClass("show");
  });
  $(document).ready(function(){
   $("#more").hide();
  $("#btn").click(function(){
    $("#more").toggle(1500);
  });
    
  });

$(document).ready(function(){
  $(".list").click(function(){
    var value=$(this).attr('data-filter');
    if(value=='all')
    {
      $(".itembox").show(1500);
    }
    else{
      $(".itembox").not('.'+value).hide(1500);
      $(".itembox").filter('.'+value).show(1500);
    
    }
  });
});
$(document).ready(function(){
 
  $("#submit").click(function(){
    var name=$("#name").val();
    var email=$("#email").val();
    var text=$("#textarea").val();
    if(!(name==""||email==""||textarea==""))
    {
      $(".display").text('Successfully Send')
    }
name='';
email='';
textarea='';


  });
});

  AOS.init();
