$("#statistica").click(function () {
    $("#dashboardPanel").css("display", "none");
    $("#statisticaPanel").css("display", "");
    $("#predictiePanel").css("display", "none");
    $("#statistica").addClass("active");
    $("#dashboard").removeClass("active");
    console.log("ce plm " ,$("#dashboard"));
    $("#predictie").removeClass("active");
})

$("#dashboard").click(function () {
    $("#statisticaPanel").css("display", "none");
    $("#dashboardPanel").css("display", "");
    $("#predictiePanel").css("display", "none");
    $("#statistica").removeClass("active");
    $("#dashboard").addClass("active");
    $("#predictie").removeClass("active");
})

$("#predictie").click(function () {
    $("#statisticaPanel").css("display", "none");
    $("#dashboardPanel").css("display", "none");
    $("#predictiePanel").css("display", "");
    $("#statistica").removeClass("active");
    $("#dashboard").removeClass("active");
    $("#predictie").addClass("active");

})