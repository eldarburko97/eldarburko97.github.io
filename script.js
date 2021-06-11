$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 10) {
            $('.section-intro').addClass("section-intro-padding");
        } else {
            $('.section-intro').removeClass("section-intro-padding");
            $(".collapse").collapse('hide');
        }
    })

    $("#navbarMenu").on("hidden.bs.collapse", function () {
        console.log("Sakriven content");
        $("#navbarMenu").css('background-color','');
    });

    $("#navbarMenu").on("show.bs.collapse", function () {     
        console.log("Otkriven content");
         $("#navbarMenu").css("background-color","#1C1C1C");
         $(".navbar").css("padding","0");
        $("#navbarMenu").css("padding","0");
        $("#navbarMenu").css("text-align","center");
    });


    var i = 0;
    var j = 0;
    var z = 0;
    var txt1 = "Hello, my name is";
    var txt2 = "Eldar Burko";
    var txt3 = "And I'm a software developer";
    var speed = 150;
    var typeCount = speed * txt1.length;
    var type2Count = speed * txt2.length;

    function type() {
        document.getElementById("text-1").innerHTML+= txt1.charAt(i);
        i++;
        if(i === txt1.length){
            return;
        }     
        setTimeout(type,speed);
        // 2850ms is the execution of this function
      
    }

    function type2() {
        document.getElementById("text-2").innerHTML+= txt2.charAt(j);
        j++;
        if(j === txt2.length){
            return;
        }            
        setTimeout(type2,speed);
        // 1650ms is the execution of this function
    }

    function type3() {
        document.getElementById("text-3").innerHTML+= txt3.charAt(z);
        z++;
        if(z === txt3.length){
            return;
        }    
        setTimeout(type3,speed);
    }

    type();
    setTimeout(type2,3000);
    setTimeout(type3,4600);

    const toTop = document.querySelector(".to-top");
    window.addEventListener("scroll", () => {
        if(window.pageYOffset > 100){
            toTop.classList.add("active");
        } else {
            toTop.classList.remove("active");
        }
    })
   
});