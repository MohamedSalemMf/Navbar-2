// window.alert("Hello")    //Test

/* -------------------------------------------------------------------------- */
/* navbar1 */
$("#menu").click(function(){ 
    $(".navBox .navRight ul").animate( {top:'0'} , 200);
});
$("#closes").click(function(){
    $(".navBox .navRight ul").animate( {top:'-100%'} , 200);
});

/* -------------------------------------------------------------------------- */
/* navbar2 */
$(".menu2").click(function(){ 
    $(".nav-menu2").show(1000);	
});
$(".menu2").click(function(){ 
    $(".menu2").hide(0);	
    $(".closes2").show(0);	
    
});
$(".closes2").click(function(){ 
    $(".nav-menu2").hide(1000);	
    $(".closes2").fadeOut(0);	
    $(".menu2").show(0);	
});



