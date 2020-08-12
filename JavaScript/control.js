$(document).ready(function(){
  $("#icon-navbar").click(function() {
        $("#span-btn").toggleClass('fa-times');
        $("#span-btn").toggleClass('fa-bars');
    });

    $("#btn-mess").click(function() {
      $("#chat").toggle();
    });

    $("#close-btn").click(function() {
        $("#chat").hide();
      });

    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    })

  $('.fb-content').slick({
    centerMode: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed : 2000,
    pauseOnFocus: true,
    pauseOnHover: true,
    prevArrow: $('.next-left'),
    nextArrow: $('.next-right'),
    
    responsive: [
      {
        breakpoint: 980,
        settings: {
        slidesToShow: 1,
        slidesToScroll: 1
        }
      }
    ]
  });
});
