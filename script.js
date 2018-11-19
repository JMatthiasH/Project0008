$(document).ready(function() {
    $(".heading").hover(function() {
        $(this).css("color", "red");
    }, function() {
        $(this).css("color", "black");
    });
});

$(document).ready(function() {
    $(".paragraph").click(function() {
        $(this).text("jQuery is a fast, JavaScript library that makes many tasks easier and simpler to accomplish. A JavaScript library contains pre-written JavaScript which makes developing applications a bit easier for the developer. This means jQuery is not a language, but an extension of JavaScript. It takes many lines of JavaScript code, which we would have had to write ourselves before jQuery, and compresses it.");
    });
});

$(document).ready(function() {
    $("#javaS").dblclick(function() {
        $(this).hide();
    });
});

$(document).ready(function() {
    $("#cPlus").dblclick(function() {
        $(this).hide();
    });
});

$(document).ready(function() {
    $("#javaLang").dblclick(function() {
        $(this).hide();
    });
});

$(document).ready(function() {
    $("#ruby").dblclick(function() {
        $(this).hide();
    });
});

$(document).ready(function() {
    $("#python").dblclick(function() {
        $(this).hide();
    });
});

$(document).ready(function() {
    $("input").keydown(function() {
        $(this).toggleClass("input");
    });
});