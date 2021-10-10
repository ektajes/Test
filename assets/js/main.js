
    $(window).on("load", function(){
      owlcarouselfun();
    })
       function owlcarouselfun(){

        var OwlSliderOne= $('#sliderone');
     
        var prevNav= '<';
        var nextNav= '>';

      
        if(OwlSliderOne.length){
          OwlSliderOne.owlCarousel({
            loop:true,
            margin:10,
            nav:true,
            dots:true,
            navText:[prevNav, nextNav],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:3
                },
                1000:{
                    items:5
                }
              }
        })
      
        
        }

        }
       
   