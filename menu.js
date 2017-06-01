$("#statistica").click(function(){
    $("#dashboardPanel").css("display","none");
    $("#statisticaPanel").css("display","");
    console.log($("#statistica"));
    $("#statistica").removeClass("active");
    $("#dashboard").addClass("active");
})

$("#dashboard").click(function(){
    $("#statisticaPanel").css("display","none");
    $("#dashboardPanel").css("display","");
    console.log($("#statistica"));

     $("#statistica").removeClass("active");
    $("#dashboard").addClass("active");
})