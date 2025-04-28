$(document).ready(function(){

  // Grid View and List View on Collection page
  $(document).on('click','.collection_main_views .collection_view .sub_div',function(){
    $('.collection_view').removeClass('active');
    $(this).parent().addClass('active');
    var select_view = $(this).data('view');
    if(select_view == 'grid'){
      $('#ProductGridContainer').removeClass('pro_list_view');
      $('#ProductGridContainer').addClass('pro_grid_view');
    }else{
      $('#ProductGridContainer').removeClass('pro_grid_view');
      $('#ProductGridContainer').addClass('pro_list_view');
    }
  });
  
  $(document).on('click','.mega_menu_main .mobile_title',function(){
    $('.mega_menu_sub').removeClass('active');
    $('.mega_menu_sub .menu_links').removeClass('active');
    $('.mega_menu_sub .mobile_title').removeClass('active');
    if($(this).parents('.mega_menu_sub').hasClass('active')){
      $(this).parents('.mega_menu_sub').removeClass('active');
      $(this).removeClass('active');
      $(this).parent().parent().find('.menu_links').removeClass('active');
    }else{
      $(this).parents('.mega_menu_sub').addClass('active');
      $(this).addClass('active');
      $(this).parent().parent().find('.menu_links').addClass('active'); 
    }
  });

  // Tab collection

  $('.tab_content .product-list').slick({
    arrows: true,
    dots: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  
  $(".tab-container .tab_content").hide();
  // $(".tab-container .tab_content:first").show();
  $('.tab-container').each(function(k,v){
  $(v).find('.tab_content:first').show();
  });
  
  /* if in tab mode */
  $("ul.tabs li").click(function() {
    var parent = $(this).parents('.tab-container');
  
    $(parent).find(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $(parent).find("#"+activeTab).fadeIn();
  
    $(parent).find("ul.tabs li").removeClass("active");
    $(this).addClass("active");
  
    $(parent).find(".tab_drawer_heading").removeClass("d_active");
    $(parent).find(".tab_drawer_heading[rel^='"+activeTab+"']").addClass("d_active");
  
    $('.tab_content .product-list').slick('refresh');
  });
  /* if in drawer mode */
  $(".tab_drawer_heading").click(function() {
    var parent = $(this).parents('.tab-container');
  
    $(parent).find(".tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    $(parent).find("#"+d_activeTab).fadeIn();
  
    $(parent).find(".tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");
  
    $(parent).find("ul.tabs li").removeClass("active");
    $(parent).find("ul.tabs li[rel^='"+d_activeTab+"']").addClass("active");
    
    $('.tab_content .product-list').slick('refresh');
  });
  
  /* Extra class "tab_last"
     to add border to right side
     of last tab */
  $('ul.tabs li').last().addClass("tab_last");

  // addon add to cart
  
  $('.add').click(function () {
    $(this).prev().val(+$(this).prev().val() + 1);
  });
  $('.sub').click(function () {
    if ($(this).next().val() > 1) {
    if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
    }
  });
  
  //Hover Mega Menu 

  let items = document.querySelector(".header__inline-menu").querySelectorAll("details");
    items.forEach(item => {
      item.addEventListener("mouseover", () => {
        item.setAttribute("open", true);
        item.querySelector("ul").addEventListener("mouseleave", () => {
          item.removeAttribute("open");
        });
      item.addEventListener("mouseleave", () => {
        item.removeAttribute("open");
      });
    });
  });
});