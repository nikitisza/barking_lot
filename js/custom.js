$(document).ready(function() {
    $("h1 #welcome").text("Hello Niki");
    $("body").append("<ul id='list'><li>First item</li></ul>");
    $("#list").append("<li>Second item</li>");

    var numberOfItems = $("#holiday li").length;
    console.log(numberOfItems);

    $(".book").on('click', function() {
         var message = $("<span>Better call Saul!</span>");
            $(this).after(message);
            //$("body").css("background-color", "red");
            $(this).remove();
        }
    )

    $("#read").on('click', function() {
        $.get('niki.txt', function(x) {$("#result").html(x);});
    })

    $("#doggies").on("click", "button", function() {
        $(".photos").slideToggle();
    });
});