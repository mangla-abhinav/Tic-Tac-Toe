var mode = "normal";

var squares = $(".square");

$("#developer").on("click", function () {
    mode = "developer";
    $("#developer").addClass("selected");
    $("#normal").removeClass("selected");
    $(".blue-border i").remove();
    $("#player-one").append("<i class='fab fa-github sample'></i>");
    $("#player-two").append("<i class='fab fa-stack-overflow sample'></i>");
});

$("#normal").on("click", function () {
    reset();
});

$("#reset").on("click", function(){
    reset();
});

function reset(){
    mode = "normal";
    $("#normal").addClass("selected");
    $("#developer").removeClass("selected");
    $(".blue-border i").remove();
    $("#player-one").append("<i class='far fa-circle sample'></i>");
    $("#player-two").append("<i class='fas fa-times sample'></i>");
};