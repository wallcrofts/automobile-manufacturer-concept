$("document").ready(function(){
    $(".tab-slider--body").hide();
    $(".tab-slider--body:first").show();
  });
  
  
  $(".specs-options-nav li").click(function() {

    $(".tab-slider--body").hide();
    var activeTab = $(this).attr("rel");
    $("#"+activeTab).fadeIn();
      if($(this).attr("rel") == "tab2"){
          $('#specs-options-nav-items').addClass('slide');
      }else{
          $('#specs-options-nav-items').removeClass('slide');
      }

    $(".specs-options-nav li").removeClass("active");

    $(this).addClass("active");
  });
  