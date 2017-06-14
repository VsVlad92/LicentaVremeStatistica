function ChartPred1(data) {
    console.log("ce i aici  ", data);
    var chartpred1 = AmCharts.makeChart("chartdivpred", {
        "type": "serial",
        "theme": "light",
        "startDuration":1,
        "marginRight": 40,
        "marginLeft": 40,
        "autoMarginOffset": 20,
        "mouseWheelZoomEnabled": true,
        "dataDateFormat": "yyyy",
        "valueAxes": [{
            "id": "v2",
            "axisAlpha": 0,
            "position": "left",
            "ignoreAxisWidth": true
        }],
        "balloon": {
            "borderThickness": 1,
            "shadowAlpha": 0
        },
        "graphs": [{
            "id": "g2",
            "balloon": {
                "drop": true,
                "adjustBorderColor": false,
                "color": "#ffffff"
            },
            "bullet": "round",
            "bulletBorderAlpha": 1,
            "bulletColor": "#FFFFFF",
            "bulletSize": 5,
            "hideBulletsCount": 50,
            "lineColor": "#d1655d",
            "lineThickness": 2,
            "negativeLineColor": "#637bb6",
            "title": "red line",
            "useLineColorForBulletBorder": true,
            "valueField": "value",
            "balloonText": "<span style='font-size:18px;'>[[name]] : [[value]]</span>"
        }],
        "chartScrollbar": {
            "graph": "g2",
            "oppositeAxis": false,
            "offset": 30,
            "scrollbarHeight": 80,
            "backgroundAlpha": 0,
            "selectedBackgroundAlpha": 0.1,
            "selectedBackgroundColor": "#888888",
            "graphFillAlpha": 0,
            "graphLineAlpha": 0.5,
            "selectedGraphFillAlpha": 0,
            "selectedGraphLineAlpha": 1,
            "autoGridCount": true,
            "color": "#AAAAAA"
        },
        "chartCursor": {
            "pan": true,
            "valueLineEnabled": true,
            "valueLineBalloonEnabled": true,
            "cursorAlpha": 1,
            "cursorColor": "#258cbb",
            "limitToGraph": "g2",
            "valueLineAlpha": 0.2,
            "valueZoomable": true
        },
        "valueScrollbar": {
            "oppositeAxis": false,
            "offset": 50,
            "scrollbarHeight": 10
        },
        "categoryField": "date",
        "categoryAxis": {
            "parseDates": false,
            "dashLength": 1,
            "minorGridEnabled": true
        },
        "export": {
            "enabled": true
        },
        "dataProvider": data

    });


    chartpred1.addListener("rendered", zoomChart);

    zoomChart();
    function playAnimation(effect, duration) {
        console.log("clicked animation");
        // chart1.startEffect = effect;
        // chart1.startDuration = duration;
        // chart1.sequencedAnimation = document.getElementById("sequenced").checked;
        // chart1.animateAgain();

        chartpred1.startEffect = effect;
        chartpred1.startDuration = duration;
        //chartpred1.sequencedAnimation = document.getElementById("sequenced").checked;
        chartpred1.animateAgain();
    }

    playAnimation('bounce', 1)

    function zoomChart() {
        chartpred1.zoomToIndexes(chartpred1.dataProvider.length - 40, chartpred1.dataProvider.length - 1);
    }
}