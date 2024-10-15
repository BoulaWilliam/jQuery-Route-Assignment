// Home Section JS 
$(".togglerBtn").on("click", function () {
    $(".sideNav").animate({ width: "250px" }, 500, function () {
        $(".homeContent").css({ margin: '0px 250px' }, 800)
    });
})
$(".closeBtn").on("click", function () {
    $(".sideNav").animate({ width: "0px" }, 500, function () {
        $(".homeContent").css({ margin: '0px' }, 800)
    });
})
// Cards Section JS
$(document).ready(function () {
    $('.card h1').on('click', function () {
        var $card = $(this).parent();
        // Toggle the visibility of the paragraph in the clicked card
        $card.find('p').slideToggle();
        // Add 'active' class to the card, and remove it from others
        $card.toggleClass('active');
    });
});
// CountDown Section JS
$(document).ready(function () {
    // Set the target date for the countdown
    var targetDate = new Date("December 31, 2024 23:59:59").getTime();

    // Update the countdown every 1 second
    var countdownFunction = setInterval(function () {
        // Get current time
        var now = new Date().getTime();

        // Calculate the remaining time
        var timeRemaining = targetDate - now;

        // Time calculations for days, hours, minutes, and seconds
        var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        // Display the result in the respective elements using jQuery
        $('#days').text(days < 10 ? "0" + days : days);
        $('#hours').text(hours < 10 ? "0" + hours : hours);
        $('#minutes').text(minutes < 10 ? "0" + minutes : minutes);
        $('#seconds').text(seconds < 10 ? "0" + seconds : seconds);

        // If the countdown is over, display "Event Started!"
        if (timeRemaining < 0) {
            clearInterval(countdownFunction);
            $('.count-overlay').html('<h1>Event Started!</h1>');
        }
    }, 1000);
});
// Contact Section JS
function Counter(){
    const maxChars = 100;
    const message = document.querySelector('.Message');
    const charCounter = document.querySelector('.chars');
    
    const remainingChars = maxChars - message.value.length;
    // Update the span with remaining characters and the current message content
    charCounter.innerHTML = remainingChars  
    // If message length exceeds maxChars, truncate the text
    if (message.value.length > maxChars) {
        message.value = message.value.substring(0, maxChars);
        window.alert("Max Chars Only 100 Chars !!")
    }
}
// Scroll To Top Btn
// Get the button
let mybutton = document.getElementById("scrollToTopBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function () {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}