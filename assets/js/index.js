$(document).ready(function () {
    $(window).scroll(function () {
        var header = $("header");
        header.toggleClass("fixed_header", $(window).scrollTop() > 0);
    });
});