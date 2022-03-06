$(function () {

    $('.thetoglor').click(function () {

        $('.navbar').fadeToggle("slow")
    })
    
        // Smoothly Scroll To Elment
    $(".header ul li a").click(function (e) {

        e.preventDefault()
        
        $('.navbar').fadeToggle("slow")
        
        document.querySelector($(this).data("section")).scrollIntoView({

            behavior: "smooth"

        })

    })
    
      // slider
    $(".bullets li:first-of-type").click(function () {

        $(this).addClass("active").siblings().removeClass("active");

        $(".slider .img1").fadeIn("slow").addClass("active").siblings().fadeOut("slow").removeClass("active")
    })


    $(".bullets li:nth-of-type(2)").click(function () {

        $(this).addClass("active").siblings().removeClass("active");

        $(".slider .img2").fadeIn("slow").addClass("active").siblings().fadeOut("slow").removeClass("active")
    })

    $(".bullets li:nth-of-type(3)").click(function () {

        $(this).addClass("active").siblings().removeClass("active");

        $(".slider .img3").fadeIn("slow").addClass("active").siblings().fadeOut("slow").removeClass("active")
    })

    $(".bullets li:nth-of-type(4)").click(function () {

        $(this).addClass("active").siblings().removeClass("active");

        $(".slider .img4").fadeIn("slow").addClass("active").siblings().fadeOut("slow").removeClass("active")
    })
    
      $(".bullets li:last-of-type").click(function () {

        $(this).addClass("active").siblings().removeClass("active");

        $(".slider .img5").fadeIn("slow").addClass("active").siblings().fadeOut("slow").removeClass("active")
    })

    
       $(window).scroll(function () {

        // Show The Arrow-up If Window scrollY Is >= 700
        if (this.scrollY >= 400) {

            $(".fa-arrow-up").fadeIn("slow")

        } else {
            $(".fa-arrow-up").fadeOut("slow")
        }
    })

    // Click To Go Up
    $(".fa-arrow-up").click(function () {

        $(window).scrollTop(0)
    })
})
