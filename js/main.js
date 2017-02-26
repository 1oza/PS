$(document).ready(function(){

    /*Menu*/
    $("#sandwich").on("click", function(){
        $("header nav ul").toggleClass("open");
    });
    /*End menu*/

    /*Burger*/
    $("#sandwich, .menu_item").click(function() {
        $("#sandwich").toggleClass("active");
    });
    /*End burger*/

    /*Serch focus*/
    $(".search").on("click", function() {
        $(".search input").css("display", "block");
        $("#searchInput").focus();
        $(".search input").focusout(function(){
            $(this).css("display", "none");
        });
    });
    /*End focus*/
        // $(".bob-say").fadeIn(7000);
        // $(".mary-say").fadeIn(9000);
        // $("#get-started").fadeIn(11000);

});


$("#slideshow > div:gt(0)").hide();

setInterval(function() {
    $('#slideshow > div:first')
        .fadeOut(3000)
        .next()
        .fadeIn(3000)
        .end()
        .appendTo('#slideshow');
},  3000);

$('video').on('ended', function () {
    this.load();
    this.play();
});

if($(".carousel-indicators>li").hasClass("active")) {
    (function move() {
        var elem = document.getElementById("myBar");
        var width = 0;
        var id = setInterval(frame, 50);

        function frame() {
            if (width >= 100) {
                clearInterval(id);
            } else {
                width++;
                elem.style.width = width + '%';
            }
        }
    })();
}

document.addEventListener('DOMContentLoaded',function(event){
    // array with texts to type in typewriter
    var dataText = [ "We copy your terabytes before", "your coffee gets cold."];

    // type one text in the typwriter
    // keeps calling itself until the text is finished
    function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
            // add next character to h1
            if(text == dataText[0]){
                document.getElementById("str-type-1").innerHTML = "";
                document.getElementById("str-type").innerHTML = text.substring(0, i+1);
            }else{
                document.getElementById("str-type-1").innerHTML = text.substring(0, i+1);
            }
            // wait for a while and call this function again for next character
            setTimeout(function() {
                typeWriter(text, i + 1, fnCallback)
            }, 100);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
            // call callback after timeout
            setTimeout(fnCallback, 700);
        }
    }
    // start a typewriter animation for a text in the dataText array
    function StartTextAnimation(i) {
        if (typeof dataText[i] == 'undefined'){
            setTimeout(function() {
                StartTextAnimation(0);
            }, 20000);
        }
        // check if dataText[i] exists
        if (i < dataText[i].length) {
            // text exists! start typewriter animation
            typeWriter(dataText[i], 0, function(){
                // after callback (and whole text has been animated), start next text
                StartTextAnimation(i + 1);
            });
        }
    }
    // start the text animation
    StartTextAnimation(0);
});
