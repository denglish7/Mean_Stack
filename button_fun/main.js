$(document).ready(function(){
    $("div.mybutton").click(function(){
        $("button").toggle();
    })
    $("button").hover(function(){
        $(this).css("color", "green");
    }, function(){
        $(this).css("color", "blue");
    })
});
