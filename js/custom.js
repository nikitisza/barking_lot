$(document).ready(function() {
    $("h1 #welcome").text("Hello Niki");
    $("body").append("<ul id='list'><li>First item</li></ul>");
    $("#list").append("<li>Second item</li>");

    var numberOfItems = $("#holiday li").length;
    console.log(numberOfItems);
});