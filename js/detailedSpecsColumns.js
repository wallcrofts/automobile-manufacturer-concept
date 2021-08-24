$("document").ready(function(){
    $(".specs-content-items").hide();
    $(".specs-content-items:first").show();
});
  
$(".specs-options-nav li").click(function() {
    $(".specs-content-items").hide();
    var activeTab = $(this).attr("rel");
    $("#"+activeTab).fadeIn();
    $(".specs-options-nav li").removeClass("active");
    $(this).addClass("active");
});
  