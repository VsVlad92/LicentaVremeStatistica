$(function () {
    var suma = 0;
    var sumaani = 0;
    var sumax2 = 0;
    var xy = 0;
    var temp1 = 0;
    var tMed = 0;
    var tMedMin = 0; var tMedR = 0;
    var tMedMaxR = 0;
    var tMedMinR = 0;
    var tMedMax = 0;
    var tMedC = 0;
    var trend = 0;

    var Ocna = []; var OcnaChart = [];


    var Botosani = []; var BotosaniChart = []; var Iasi = []; var IasiChart = []; var Ceahlau = []; var CeahlauChart = [];
    var Cluj = []; var Bacau = []; var ClujChart = []; var BacauChart = [];
    var Miercurea = []; var MiercureaChart = []; var Arad = []; var AradChart = []; var Deva = []; var DevaChart = []; var Sibiu = []; var SibiuChart = [];
    var Varfu = []; var VarfuChart = [];
    var Caransebes = []; var CaransebesChart = [];
    var Galati = []; var GalatiChart = [];
    var Tulcea = []; var TulceaChart = [];
    var Ramnicu = []; var RamnicuChart = [];
    var Buzau = []; var BuzauChart = [];
    var Sulina = []; var SulinaChart = [];
    var Drobeta = []; var DrobetaChart = [];
    var Bucuresti = []; var BucurestiChart = [];
    var Craiova = []; var CraiovaChart = [];
    var Calarasi = []; var CalarasiChart = [];
    var Rosiorii = []; var RosioriiChart = [];
    var Constanta = []; var ConstantaChart = [];
    var Tmed = [{
    }];
    $("#selectOptionPrediction").change(function () {
        suma = 0;
        xy = 0;
        temp1 = 0;
        tMed = 0;
        tMedMin = 0;
        tMedMax = 0;
        TabelPredictie($("#selectOptionPrediction").val());
        $('#tableslim2').slimScroll({
            height: '350px'
        });
        ChartSelectpred($("#selectOptionPrediction").val())
    })

    TmedAn();
    ChartPred1(OcnaChart);
    TabelPredictie("Ocna");
    $('#tableslim2').slimScroll({
        height: '350px'
    });
    $('#tableslim3').slimScroll({
        height: '350px'
    });
    $('#tableslim4').slimScroll({
        height: '350px'
    });

    function ChartSelectpred(data) {
        switch (data) {
            case "Ocna":
                ChartPred1(OcnaChart)
                console.log(OcnaChart)
                MetodaModificariiProcentuale(OcnaChart);
                MetodaNivelariiexponentiale(OcnaChart);
                MetodaBrown(OcnaChart);
                MetodaHolt(OcnaChart);
                Graph(OcnaChart);
                break;
            case "Botosani":
                ChartPred1(BotosaniChart)
                MetodaModificariiProcentuale(BotosaniChart);
                MetodaNivelariiexponentiale(BotosaniChart);
                MetodaBrown(BotosaniChart);
                MetodaHolt(BotosaniChart);
                Graph(BotosaniChart);
                break;
            case "Iasi":
                ChartPred1(IasiChart)
                MetodaModificariiProcentuale(IasiChart);
                MetodaNivelariiexponentiale(IasiChart);
                MetodaBrown(IasiChart);
                MetodaHolt(IasiChart);
                Graph(IasiChart);
                break;
            case "Ceahlau":
                ChartPred1(CeahlauChart)
                MetodaModificariiProcentuale(CeahlauChart);
                MetodaNivelariiexponentiale(CeahlauChart);
                MetodaBrown(CeahlauChart);
                MetodaHolt(CeahlauChart);
                Graph(CeahlauChart);
                break;
            case "Cluj":
                ChartPred1(ClujChart)
                MetodaModificariiProcentuale(ClujChart);
                MetodaNivelariiexponentiale(ClujChart);
                MetodaBrown(ClujChart);
                MetodaHolt(ClujChart);
                Graph(ClujChart);
                break;
            case "Bacau":
                ChartPred1(BacauChart)
                MetodaModificariiProcentuale(BacauChart);
                MetodaNivelariiexponentiale(BacauChart);
                MetodaBrown(BacauChart);
                MetodaHolt(BacauChart);
                Graph(BacauChart);
                break;
            case "Miercurea":
                ChartPred1(MiercureaChart)
                MetodaModificariiProcentuale(MiercureaChart);
                MetodaNivelariiexponentiale(MiercureaChart);
                MetodaBrown(MiercureaChart);
                MetodaHolt(MiercureaChart);
                Graph(MiercureaChart);
                break;
            case "Deva":
                ChartPred1(DevaChart)
                MetodaModificariiProcentuale(DevaChart);
                MetodaNivelariiexponentiale(DevaChart);
                MetodaBrown(DevaChart);
                MetodaHolt(DevaChart);
                Graph(DevaChart);
                break;
            case "Sibiu":
                ChartPred1(SibiuChart)
                MetodaModificariiProcentuale(SibiuChart);
                MetodaNivelariiexponentiale(SibiuChart);
                MetodaBrown(SibiuChart);
                MetodaHolt(SibiuChart);
                Graph(SibiuChart);
                break;
            case "Varfu":
                ChartPred1(VarfuChart)
                MetodaModificariiProcentuale(VarfuChart);
                MetodaNivelariiexponentiale(VarfuChart);
                MetodaBrown(VarfuChart);
                MetodaHolt(VarfuChart);
                Graph(VarfuChart);
                break;
            case "Caransebes":
                ChartPred1(CaransebesChart)
                MetodaModificariiProcentuale(CaransebesChart);
                MetodaNivelariiexponentiale(CaransebesChart);
                MetodaBrown(CaransebesChart);
                MetodaHolt(CaransebesChart);
                Graph(CaransebesChart);
                break;
            case "Galati":
                ChartPred1(GalatiChart)
                MetodaModificariiProcentuale(GalatiChart);
                MetodaNivelariiexponentiale(GalatiChart);
                MetodaBrown(GalatiChart);
                MetodaHolt(GalatiChart);
                Graph(GalatiChart);
                break;
            case "Tulcea":
                ChartPred1(TulceaChart)
                MetodaModificariiProcentuale(TulceaChart);
                MetodaNivelariiexponentiale(TulceaChart);
                MetodaBrown(TulceaChart);
                MetodaHolt(TulceaChart);
                Graph(TulceaChart);
                break;
            case "Ramnicu":
                ChartPred1(RamnicuChart)
                MetodaModificariiProcentuale(RamnicuChart);
                MetodaNivelariiexponentiale(RamnicuChart);
                MetodaBrown(RamnicuChart);
                MetodaHolt(RamnicuChart);
                Graph(RamnicuChart);
                break;
            case "Buzau":
                ChartPred1(BuzauChart)
                MetodaModificariiProcentuale(BuzauChart);
                MetodaNivelariiexponentiale(BuzauChart);
                MetodaBrown(BuzauChart);
                MetodaHolt(BuzauChart);
                Graph(BuzauChart);
                break;
            case "Sulina":
                ChartPred1(SulinaChart)
                MetodaModificariiProcentuale(SulinaChart);
                MetodaNivelariiexponentiale(SulinaChart);
                MetodaBrown(SulinaChart);
                MetodaHolt(SulinaChart);
                Graph(SulinaChart);
                break;
            case "Drobeta":
                ChartPred1(DrobetaChart)
                MetodaModificariiProcentuale(DrobetaChart);
                MetodaNivelariiexponentiale(DrobetaChart);
                MetodaBrown(DrobetaChart);
                MetodaHolt(DrobetaChart);
                Graph(DrobetaChart);
                break;
            case "Bucuresti":
                ChartPred1(BucurestiChart)
                MetodaModificariiProcentuale(BucurestiChart);
                MetodaNivelariiexponentiale(BucurestiChart);
                MetodaBrown(BucurestiChart);
                MetodaHolt(BucurestiChart);
                Graph(BucurestiChart);
                break;
            case "Craiova":
                ChartPred1(CraiovaChart)
                MetodaModificariiProcentuale(CraiovaChart);
                MetodaNivelariiexponentiale(CraiovaChart);
                MetodaBrown(CraiovaChart);
                MetodaHolt(CraiovaChart);
                Graph(CraiovaChart);
                break;
            case "Calarasi":
                ChartPred1(CalarasiChart)
                MetodaModificariiProcentuale(CalarasiChart);
                MetodaNivelariiexponentiale(CalarasiChart);
                MetodaBrown(CalarasiChart);
                MetodaHolt(CalarasiChart);
                Graph(CalarasiChart);
                break;
            case "Rosiorii":
                ChartPred1(RosioriiChart)
                MetodaModificariiProcentuale(RosioriiChart);
                MetodaNivelariiexponentiale(RosioriiChart);
                MetodaBrown(RosioriiChart);
                MetodaHolt(RosioriiChart);
                Graph(RosioriiChart);
                break;
            case "Constanta":
                ChartPred1(ConstantaChart)
                MetodaModificariiProcentuale(ConstantaChart);
                MetodaNivelariiexponentiale(ConstantaChart);
                MetodaBrown(ConstantaChart);
                MetodaHolt(ConstantaChart);
                Graph(ConstantaChart);
                break;
            case "Arad":
                ChartPred1(AradChart)
                MetodaModificariiProcentuale(AradChart);
                MetodaNivelariiexponentiale(AradChart);
                MetodaBrown(AradChart);
                MetodaHolt(AradChart);
                Graph(AradChart);
                break;
        }
    };

    TmedAn();
    function TabelPredictie(dataMedii) {
        switch (dataMedii) {
            case "Ocna":
                dataMedii = Ocna
                RunPredictie(dataMedii)
                break;
            case "Botosani":
                dataMedii = Botosani
                RunPredictie(dataMedii)
                break;
            case "Iasi":
                dataMedii = Iasi
                RunPredictie(dataMedii)
                break;
            case "Iasi":
                dataMedii = Iasi
                RunPredictie(dataMedii)
                break;
            case "Ceahlau":
                dataMedii = Ceahlau
                RunPredictie(dataMedii)
                break;
            case "Cluj":
                dataMedii = Cluj
                RunPredictie(dataMedii)
                break;
            case "Bacau":
                dataMedii = Bacau
                RunPredictie(dataMedii)
                break;
            case "Miercurea":
                dataMedii = Miercurea
                RunPredictie(dataMedii)
                break;
            case "Deva":
                dataMedii = Deva
                RunPredictie(dataMedii)
                break;
            case "Sibiu":
                dataMedii = Sibiu
                RunPredictie(dataMedii)
                break;
            case "Varfu":
                dataMedii = Varfu
                RunPredictie(dataMedii)
                break;
            case "Caransebes":
                dataMedii = Caransebes
                RunPredictie(dataMedii)
                break;
            case "Galati":
                dataMedii = Galati
                RunPredictie(dataMedii)
                break;
            case "Tulcea":
                dataMedii = Tulcea
                RunPredictie(dataMedii)
                break;
            case "Ramnicu":
                dataMedii = Ramnicu
                RunPredictie(dataMedii)
                break;
            case "Buzau":
                dataMedii = Buzau
                RunPredictie(dataMedii)
                break;
            case "Sulina":
                dataMedii = Sulina
                RunPredictie(dataMedii)
                break;
            case "Drobeta":
                dataMedii = Drobeta
                RunPredictie(dataMedii)
                break;
            case "Bucuresti":
                dataMedii = Bucuresti
                RunPredictie(dataMedii)
                break;
            case "Craiova":
                dataMedii = Craiova
                RunPredictie(dataMedii)
                break;
            case "Calarasi":
                dataMedii = Calarasi
                RunPredictie(dataMedii)
                break;
            case "Rosiorii":
                dataMedii = Rosiorii
                RunPredictie(dataMedii)
                break;
            case "Constanta":
                dataMedii = Constanta
                RunPredictie(dataMedii)
                break;
        }

        function RunPredictie(dataMedii) {
            console.log(dataMedii);
            $("#tabel2").remove();
            $("#tab2").append("<tbody id=tabel2></tbody>");
            var x = -25;
            xy = 0;
            temp1 = 0;
            sumaani = 0
            sumax2 = 0;
            suma = 0;
            dataMedii[1980] = {
                TemperaturaMedie: 200
            }
            for (i = 1961; i < dataMedii.length; i++) {
                if (i == 1984 || i == 1991 || i == 2015 || i == 2000 || i == 2009) { i++ }
                temp1 = (dataMedii[i].TemperaturaMedie / 365).toFixed(4) + " ℃";
                // var temp3 = (dataMedii[i].TemperaturaMedieMinima) + " ℃";
                xy = x * (dataMedii[i].TemperaturaMedie / 365).toFixed(4);
                suma = suma + xy;
                sumax2 = sumax2 + x * x;
                sumaani = sumaani + (dataMedii[i].TemperaturaMedie / 365).toFixed(4);
                $("#tabel2").append("<tr>" + "<td>" + i + "</td>" + "<td>" + temp1 + "</td>" + "<td>" + x + "</td>" + "<td>" + xy + "</td>" + "</tr>");
                x++;
            }
        }
        trend = suma / sumax2;
        $("#trend").val(trend)
        console.log("Suma aia xy ", suma, "suma ani : ", sumaani, "suma x2 ", sumax2, "trend : ", trend);

    }

    function TmedAn() {
        tMed = 0;
        tMedMin = 0;
        tMedMax = 0;

        for (var i = 1961; i <= 2016; i++) {
            tMed = 0;
            tMedMin = 0;
            tMedMax = 0;
            var tMedO = 0; var tMedMaxO = 0; var tMedMinO = 0;
            var tMedB = 0; var tMedMaxB = 0; var tMedMinB = 0;
            var tMedi = 0; var tMedMaxi = 0; var tMedMini = 0;
            var tMedc = 0; var tMedMaxc = 0; var tMedMinc = 0;
            var tMedcl = 0; var tMedMaxcl = 0; var tMedMincl = 0;
            var tMedba = 0; var tMedMaxba = 0; var tMedMinba = 0;
            var tMedmi = 0; var tMedMaxmi = 0; var tMedMinmi = 0;
            var tMedA = 0; var tMedMaxA = 0; var tMedMinA = 0;
            var tMedD = 0; var tMedMaxD = 0; var tMedMinD = 0;
            var tMedS = 0; var tMedMaxS = 0; var tMedMinS = 0;
            var tMedV = 0; var tMedMaxV = 0; var tMedMinV = 0;
            var tMedC = 0; var tMedMaxC = 0; var tMedMinC = 0;
            var tMedG = 0; var tMedMaxG = 0; var tMedMinG = 0;
            var tMedT = 0; var tMedMaxT = 0; var tMedMinT = 0;
            var tMedR = 0; var tMedMaxR = 0; var tMedMinR = 0;
            var tMedbu = 0; var tMedMaxbu = 0; var tMedMinbu = 0;
            var tMedsu = 0; var tMedMaxsu = 0; var tMedMinsu = 0;
            var tMeddr = 0; var tMedMaxdr = 0; var tMedMindr = 0;
            var tMedbb = 0; var tMedMaxbb = 0; var tMedMinbb = 0;
            var tMedcr = 0; var tMedMaxcr = 0; var tMedMincr = 0;
            var tMedca = 0; var tMedMaxca = 0; var tMedMinca = 0;
            for (var j = 0; j < bigData[i].length; j++) {
                switch (bigData[i][j].CODST) {
                    case "Ocna Sugatag":
                        if (isInt(bigData[i][j].TMED) && (bigData[i][j].TMED != " .0")) {
                            tMedO = tMedO + parseInt(bigData[i][j].TMED);
                        }

                        if (isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX != " .0")) {
                            tMedMaxO = tMedMaxO + parseInt(bigData[i][j].TMAX);
                        }
                        if (isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN != " .0")) {
                            tMedMinO = tMedMinO + parseInt(bigData[i][j].TMIN);
                        }
                        Ocna[i] = {
                            Statia: "Ocna",
                            TemperaturaMedie: tMedO,
                            TemperaturaMedieMaxima: tMedMaxO,
                            TemperaturaMedieMinima: tMedMinO
                        }

                        var an = i.toString();
                        z = i - 1961
                        if (z == 22 || z == 29 || z == 38 || z == 53 || z == 18 || z == 47) {
                            OcnaChart[z] = {
                                "name": "Ocna ",
                                "date": an,
                                "value": tMedO.toString()
                            }
                            OcnaChart[z + 1] = {
                                "name": "Ocna ",
                                "date": an,
                                "value": ""
                            }
                        } else {
                            OcnaChart[z] = {
                                "name": "Ocna ",
                                "date": an,
                                "value": tMedO.toString()
                            }
                        }
                        break;
                    case "Botosani":
                        if (isInt(bigData[i][j].TMED) && (bigData[i][j].TMED != " .0")) {
                            tMedB = tMedB + parseInt(bigData[i][j].TMED);
                        }
                        if (isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX != " .0")) {
                            tMedMaxB = tMedMaxB + parseInt(bigData[i][j].TMAX);
                        }
                        if (isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN != " .0")) {
                            tMedMinB = tMedMinB + parseInt(bigData[i][j].TMIN);
                        }
                        Botosani[i] = {
                            Statia: "Botosani",
                            TemperaturaMedie: (tMedB / 365).toFixed(4),
                            TemperaturaMedieMaxima: tMedMaxB,
                            TemperaturaMedieMinima: tMedMinB
                        }

                        var an = i.toString();
                        z = i - 1961
                        if (z == 22 || z == 29 || z == 38 || z == 53 || z == 18 || z == 47) {
                            BotosaniChart[z] = {
                                "name": "Botosani ",
                                "date": an,
                                "value": tMedB.toString()
                            }
                            BotosaniChart[z + 1] = {
                                "name": "Botosani ",
                                "date": an,
                                "value": ""
                            }
                        } else {
                            BotosaniChart[z] = {
                                "name": "Botosani ",
                                "date": an,
                                "value": tMedB.toString()
                            }
                        }
                        break;
                    case "Iasi":
                        if (isInt(bigData[i][j].TMED) && (bigData[i][j].TMED != " .0")) {
                            tMedi = tMedi + parseInt(bigData[i][j].TMED);
                        }
                        if (isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX != " .0")) {
                            tMedMaxi = tMedMaxi + parseInt(bigData[i][j].TMAX);
                        }
                        if (isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN != " .0")) {
                            tMedMini = tMedMini + parseInt(bigData[i][j].TMIN);
                        }
                        Iasi[i] = {
                            Statia: "Iasi",
                            TemperaturaMedie: tMedi,
                            TemperaturaMedieMaxima: tMedMaxi,
                            TemperaturaMedieMinima: tMedMini
                        }

                        var an = i.toString();
                        z = i - 1961
                        if (z == 22 || z == 29 || z == 38 || z == 53 || z == 18 || z == 47) {
                            IasiChart[z] = {
                                "name": "Iasi ",
                                "date": an,
                                "value": tMedi.toString()
                            }
                            IasiChart[z + 1] = {
                                "name": "Iasi ",
                                "date": an,
                                "value": ""
                            }
                        } else {
                            IasiChart[z] = {
                                "name": "Iasi ",
                                "date": an,
                                "value": tMedi.toString()
                            }
                        }
                        break;
                    case "Ceahlau Toaca":
                        if (isInt(bigData[i][j].TMED) && (bigData[i][j].TMED != " .0")) {
                            tMedc = tMedc + parseInt(bigData[i][j].TMED);
                        }
                        if (isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX != " .0")) {
                            tMedMaxc = tMedMaxc + parseInt(bigData[i][j].TMAX);
                        }
                        if (isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN != " .0")) {
                            tMedMinc = tMedMinc + parseInt(bigData[i][j].TMIN);
                        }
                        Ceahlau[i] = {
                            Statia: "Ceahlau",
                            TemperaturaMedie: tMedc,
                            TemperaturaMedieMaxima: tMedMaxc,
                            TemperaturaMedieMinima: tMedMinc
                        }

                        var an = i.toString();
                        z = i - 1961
                        if (z == 22 || z == 29 || z == 38 || z == 53 || z == 18 || z == 47) {
                            CeahlauChart[z] = {
                                "name": "Ceahlau ",
                                "date": an,
                                "value": tMedc.toString()
                            }
                            CeahlauChart[z + 1] = {
                                "name": "Ceahlau ",
                                "date": an,
                                "value": ""
                            }
                        } else {
                            CeahlauChart[z] = {
                                "name": "Ceahlau ",
                                "date": an,
                                "value": tMedc.toString()
                            }
                        }
                        break;
                    case "Cluj-Napoca":
                        if (isInt(bigData[i][j].TMED) && (bigData[i][j].TMED != " .0")) {
                            tMedcl = tMedcl + parseInt(bigData[i][j].TMED);
                        }
                        if (isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX != " .0")) {
                            tMedMaxcl = tMedMaxcl + parseInt(bigData[i][j].TMAX);
                        }
                        if (isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN != " .0")) {
                            tMedMincl = tMedMincl + parseInt(bigData[i][j].TMIN);
                        }
                        Cluj[i] = {
                            Statia: "Cluj",
                            TemperaturaMedie: tMedcl,
                            TemperaturaMedieMaxima: tMedMaxcl,
                            TemperaturaMedieMinima: tMedMincl
                        }

                        var an = i.toString();
                        z = i - 1961
                        if (z == 22 || z == 29 || z == 38 || z == 53 || z == 18 || z == 47) {
                            ClujChart[z] = {
                                "name": "Cluj ",
                                "date": an,
                                "value": tMedcl.toString()
                            }
                            ClujChart[z + 1] = {
                                "name": "Cluj ",
                                "date": an,
                                "value": ""
                            }
                        } else {
                            ClujChart[z] = {
                                "name": "Cluj ",
                                "date": an,
                                "value": tMedcl.toString()
                            }
                        }
                        break;
                    case "Bacau":
                        if (isInt(bigData[i][j].TMED) && (bigData[i][j].TMED != " .0")) {
                            tMedba = tMedba + parseInt(bigData[i][j].TMED);
                        }
                        if (isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX != " .0")) {
                            tMedMaxba = tMedMaxba + parseInt(bigData[i][j].TMAX);
                        }
                        if (isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN != " .0")) {
                            tMedMinba = tMedMinba + parseInt(bigData[i][j].TMIN);
                        }
                        Bacau[i] = {
                            Statia: "Bacau",
                            TemperaturaMedie: tMedba,
                            TemperaturaMedieMaxima: tMedMaxba,
                            TemperaturaMedieMinima: tMedMinba
                        }

                        var an = i.toString();
                        z = i - 1961
                        if (z == 22 || z == 29 || z == 38 || z == 53 || z == 18 || z == 47) {
                            BacauChart[z] = {
                                "name": "Bacau ",
                                "date": an,
                                "value": tMedba.toString()
                            }
                            BacauChart[z + 1] = {
                                "name": "Bacau ",
                                "date": an,
                                "value": ""
                            }
                        } else {
                            BacauChart[z] = {
                                "name": "Bacau ",
                                "date": an,
                                "value": tMedba.toString()
                            }
                        }
                        break;
                    case "Miercurea Ciuc":
                        if (isInt(bigData[i][j].TMED) && (bigData[i][j].TMED != " .0")) {
                            tMedmi = tMedmi + parseInt(bigData[i][j].TMED);
                        }
                        if (isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX != " .0")) {
                            tMedMaxmi = tMedMaxmi + parseInt(bigData[i][j].TMAX);
                        }
                        if (isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN != " .0")) {
                            tMedMinmi = tMedMinmi + parseInt(bigData[i][j].TMIN);
                        }
                        Miercurea[i] = {
                            Statia: "Miercurea-Ciuc",
                            TemperaturaMedie: tMedmi,
                            TemperaturaMedieMaxima: tMedMaxmi,
                            TemperaturaMedieMinima: tMedMinmi
                        }

                        var an = i.toString();
                        z = i - 1961
                        if (z == 22 || z == 29 || z == 38 || z == 53 || z == 18 || z == 47) {
                            MiercureaChart[z] = {
                                "name": "Miercurea ",
                                "date": an,
                                "value": tMedmi.toString()
                            }
                            MiercureaChart[z + 1] = {
                                "name": "Miercurea ",
                                "date": an,
                                "value": ""
                            }
                        } else {
                            MiercureaChart[z] = {
                                "name": "Miercurea ",
                                "date": an,
                                "value": tMedmi.toString()
                            }
                        }
                        break;
                    case "Arad":
                        if (isInt(bigData[i][j].TMED) && (bigData[i][j].TMED != " .0")) {
                            tMedA = tMedA + parseInt(bigData[i][j].TMED);
                        }
                        if (isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX != " .0")) {
                            tMedMaxA = tMedMaxA + parseInt(bigData[i][j].TMAX);
                        }
                        if (isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN != " .0")) {
                            tMedMinA = tMedMinA + parseInt(bigData[i][j].TMIN);
                        }
                        Arad[i] = {
                            Statia: "Arad",
                            TemperaturaMedie: tMedA,
                            TemperaturaMedieMaxima: tMedMaxA,
                            TemperaturaMedieMinima: tMedMinA
                        }

                        var an = i.toString();
                        z = i - 1961
                        if (z == 22 || z == 29 || z == 38 || z == 53 || z == 18 || z == 47) {
                            AradChart[z] = {
                                "name": "Arad ",
                                "date": an,
                                "value": tMedA.toString()
                            }
                            AradChart[z + 1] = {
                                "name": "Arad ",
                                "date": an,
                                "value": ""
                            }
                        } else {
                            AradChart[z] = {
                                "name": "Arad ",
                                "date": an,
                                "value": tMedA.toString()
                            }
                        }
                        break;
                    case "Deva":
                        if (isInt(bigData[i][j].TMED) && (bigData[i][j].TMED != " .0")) {
                            tMedD = tMedD + parseInt(bigData[i][j].TMED);
                        }
                        if (isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX != " .0")) {
                            tMedMaxD = tMedMaxD + parseInt(bigData[i][j].TMAX);
                        }
                        if (isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN != " .0")) {
                            tMedMinD = tMedMinD + parseInt(bigData[i][j].TMIN);
                        }
                        Deva[i] = {
                            Statia: "Deva",
                            TemperaturaMedie: tMedD,
                            TemperaturaMedieMaxima: tMedMaxD,
                            TemperaturaMedieMinima: tMedMinD
                        }

                        var an = i.toString();
                        z = i - 1961
                        if (z == 22 || z == 29 || z == 38 || z == 53 || z == 18 || z == 47) {
                            DevaChart[z] = {
                                "name": "Deva ",
                                "date": an,
                                "value": tMedD.toString()
                            }
                            DevaChart[z + 1] = {
                                "name": "Deva ",
                                "date": an,
                                "value": ""
                            }
                        } else {
                            DevaChart[z] = {
                                "name": "Deva ",
                                "date": an,
                                "value": tMedD.toString()
                            }
                        }
                        break;
                    case "Sibiu":
                        if (isInt(bigData[i][j].TMED) && (bigData[i][j].TMED != " .0")) {
                            tMedS = tMedS + parseInt(bigData[i][j].TMED);
                        }
                        if (isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX != " .0")) {
                            tMedMaxS = tMedMaxS + parseInt(bigData[i][j].TMAX);
                        }
                        if (isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN != " .0")) {
                            tMedMinS = tMedMinS + parseInt(bigData[i][j].TMIN);
                        }
                        Sibiu[i] = {
                            Statia: "Sibiu",
                            TemperaturaMedie: tMedS,
                            TemperaturaMedieMaxima: tMedMaxS,
                            TemperaturaMedieMinima: tMedMinS
                        }

                        var an = i.toString();
                        z = i - 1961
                        if (z == 22 || z == 29 || z == 38 || z == 53 || z == 18 || z == 47) {
                            SibiuChart[z] = {
                                "name": "Sibiu ",
                                "date": an,
                                "value": tMedS.toString()
                            }
                            SibiuChart[z + 1] = {
                                "name": "Sibiu ",
                                "date": an,
                                "value": ""
                            }
                        } else {
                            SibiuChart[z] = {
                                "name": "Sibiu ",
                                "date": an,
                                "value": tMedS.toString()
                            }
                        }
                        break;
                    case "Varfu Omu":
                        if (isInt(bigData[i][j].TMED) && (bigData[i][j].TMED != " .0")) {
                            tMedV = tMedV + parseInt(bigData[i][j].TMED);
                        }
                        if (isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX != " .0")) {
                            tMedMaxV = tMedMaxV + parseInt(bigData[i][j].TMAX);
                        }
                        if (isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN != " .0")) {
                            tMedMinV = tMedMinV + parseInt(bigData[i][j].TMIN);
                        }
                        Varfu[i] = {
                            Statia: "Varfu Omu",
                            TemperaturaMedie: tMedV,
                            TemperaturaMedieMaxima: tMedMaxV,
                            TemperaturaMedieMinima: tMedMinV
                        }

                        var an = i.toString();
                        z = i - 1961
                        if (z == 22 || z == 29 || z == 38 || z == 53 || z == 18 || z == 47) {
                            VarfuChart[z] = {
                                "name": "Varfu ",
                                "date": an,
                                "value": tMedV.toString()
                            }
                            VarfuChart[z + 1] = {
                                "name": "Varfu ",
                                "date": an,
                                "value": ""
                            }
                        } else {
                            VarfuChart[z] = {
                                "name": "Varfu ",
                                "date": an,
                                "value": tMedV.toString()
                            }
                        }
                        break;
                    case "Caransebes":
                        if (isInt(bigData[i][j].TMED) && (bigData[i][j].TMED != " .0")) {
                            tMedC = tMedC + parseInt(bigData[i][j].TMED);
                        }
                        if (isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX != " .0")) {
                            tMedMaxC = tMedMaxC + parseInt(bigData[i][j].TMAX);
                        }
                        if (isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN != " .0")) {
                            tMedMinC = tMedMinC + parseInt(bigData[i][j].TMIN);
                        }
                        Caransebes[i] = {
                            Statia: "Caransebes",
                            TemperaturaMedie: tMedC,
                            TemperaturaMedieMaxima: tMedMaxC,
                            TemperaturaMedieMinima: tMedMinC
                        }

                        var an = i.toString();
                        z = i - 1961
                        if (z == 22 || z == 29 || z == 38 || z == 53 || z == 18 || z == 47) {
                            CaransebesChart[z] = {
                                "name": "Caransebes ",
                                "date": an,
                                "value": tMedC.toString()
                            }
                            CaransebesChart[z + 1] = {
                                "name": "Caransebes ",
                                "date": an,
                                "value": ""
                            }
                        } else {
                            CaransebesChart[z] = {
                                "name": "Caransebes ",
                                "date": an,
                                "value": tMedC.toString()
                            }
                        }
                        break;
                    case "Galati":
                        if (isInt(bigData[i][j].TMED) && (bigData[i][j].TMED != " .0")) {
                            tMedG = tMedG + parseInt(bigData[i][j].TMED);
                        }
                        if (isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX != " .0")) {
                            tMedMaxG = tMedMaxG + parseInt(bigData[i][j].TMAX);
                        }
                        if (isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN != " .0")) {
                            tMedMinG = tMedMinG + parseInt(bigData[i][j].TMIN);
                        }
                        Galati[i] = {
                            Statia: "Galati",
                            TemperaturaMedie: tMedG,
                            TemperaturaMedieMaxima: tMedMaxG,
                            TemperaturaMedieMinima: tMedMinG
                        }

                        var an = i.toString();
                        z = i - 1961
                        if (z == 22 || z == 29 || z == 38 || z == 53 || z == 18 || z == 47) {
                            GalatiChart[z] = {
                                "name": "Galati ",
                                "date": an,
                                "value": tMedG.toString()
                            }
                            GalatiChart[z + 1] = {
                                "name": "Galati ",
                                "date": an,
                                "value": ""
                            }
                        } else {
                            GalatiChart[z] = {
                                "name": "Galati ",
                                "date": an,
                                "value": tMedG.toString()
                            }
                        }
                        break;
                    case "Tulcea":
                        if (isInt(bigData[i][j].TMED) && (bigData[i][j].TMED != " .0")) {
                            tMedT = tMedT + parseInt(bigData[i][j].TMED);
                        }
                        if (isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX != " .0")) {
                            tMedMaxT = tMedMaxT + parseInt(bigData[i][j].TMAX);
                        }
                        if (isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN != " .0")) {
                            tMedMinT = tMedMinT + parseInt(bigData[i][j].TMIN);
                        }
                        Tulcea[i] = {
                            Statia: "Tulcea",
                            TemperaturaMedie: tMedT,
                            TemperaturaMedieMaxima: tMedMaxT,
                            TemperaturaMedieMinima: tMedMinT
                        }

                        var an = i.toString();
                        z = i - 1961
                        if (z == 22 || z == 29 || z == 38 || z == 53 || z == 18 || z == 47) {
                            TulceaChart[z] = {
                                "name": "Tulcea ",
                                "date": an,
                                "value": tMedT.toString()
                            }
                            TulceaChart[z + 1] = {
                                "name": "Tulcea ",
                                "date": an,
                                "value": ""
                            }
                        } else {
                            TulceaChart[z] = {
                                "name": "Tulcea ",
                                "date": an,
                                "value": tMedT.toString()
                            }
                        }
                        break;
                    case "Ramnicu Valcea":
                        if (isInt(bigData[i][j].TMED) && (bigData[i][j].TMED != " .0")) {
                            tMedR = tMedR + parseInt(bigData[i][j].TMED);
                        }
                        if (isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX != " .0")) {
                            tMedMaxR = tMedMaxR + parseInt(bigData[i][j].TMAX);
                        }
                        if (isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN != " .0")) {
                            tMedMinR = tMedMinR + parseInt(bigData[i][j].TMIN);
                        }
                        Ramnicu[i] = {
                            Statia: "Ramnicu Valcea",
                            TemperaturaMedie: tMedR,
                            TemperaturaMedieMaxima: tMedMaxR,
                            TemperaturaMedieMinima: tMedMinR
                        }

                        var an = i.toString();
                        z = i - 1961
                        if (z == 22 || z == 29 || z == 38 || z == 53 || z == 18 || z == 47) {
                            RamnicuChart[z] = {
                                "name": "Ramnicu ",
                                "date": an,
                                "value": tMedR.toString()
                            }
                            RamnicuChart[z + 1] = {
                                "name": "Ramnicu ",
                                "date": an,
                                "value": ""
                            }
                        } else {
                            RamnicuChart[z] = {
                                "name": "Ramnicu ",
                                "date": an,
                                "value": tMedR.toString()
                            }
                        }
                        break;
                    case "Buzau":
                        if (isInt(bigData[i][j].TMED) && (bigData[i][j].TMED != " .0")) {
                            tMedbu = tMedbu + parseInt(bigData[i][j].TMED);
                        }
                        if (isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX != " .0")) {
                            tMedMaxbu = tMedMaxbu + parseInt(bigData[i][j].TMAX);
                        }
                        if (isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN != " .0")) {
                            tMedMinbu = tMedMinbu + parseInt(bigData[i][j].TMIN);
                        }
                        Buzau[i] = {
                            Statia: "Buzau",
                            TemperaturaMedie: tMedbu,
                            TemperaturaMedieMaxima: tMedMaxbu,
                            TemperaturaMedieMinima: tMedMinbu
                        }

                        var an = i.toString();
                        z = i - 1961
                        if (z == 22 || z == 29 || z == 38 || z == 53 || z == 18 || z == 47) {
                            BuzauChart[z] = {
                                "name": "Buzau ",
                                "date": an,
                                "value": tMedbu.toString()
                            }
                            BuzauChart[z + 1] = {
                                "name": "Buzau ",
                                "date": an,
                                "value": ""
                            }
                        } else {
                            BuzauChart[z] = {
                                "name": "Buzau ",
                                "date": an,
                                "value": tMedbu.toString()
                            }
                        }
                        break;
                    case "Sulina":
                        if (isInt(bigData[i][j].TMED) && (bigData[i][j].TMED != " .0")) {
                            tMedsu = tMedsu + parseInt(bigData[i][j].TMED);
                        }
                        if (isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX != " .0")) {
                            tMedMaxsu = tMedMaxsu + parseInt(bigData[i][j].TMAX);
                        }
                        if (isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN != " .0")) {
                            tMedMinsu = tMedMinsu + parseInt(bigData[i][j].TMIN);
                        }
                        Sulina[i] = {
                            Statia: "Sulina",
                            TemperaturaMedie: tMedsu,
                            TemperaturaMedieMaxima: tMedMaxsu,
                            TemperaturaMedieMinima: tMedMinsu
                        }

                        var an = i.toString();
                        z = i - 1961
                        if (z == 22 || z == 29 || z == 38 || z == 53 || z == 18 || z == 47) {
                            SulinaChart[z] = {
                                "name": "Sulina ",
                                "date": an,
                                "value": tMedsu.toString()
                            }
                            SulinaChart[z + 1] = {
                                "name": "Sulina ",
                                "date": an,
                                "value": ""
                            }
                        } else {
                            SulinaChart[z] = {
                                "name": "Sulina ",
                                "date": an,
                                "value": tMedsu.toString()
                            }
                        }
                        break;
                    case "Drobeta Turnu Severin":
                        if (isInt(bigData[i][j].TMED) && (bigData[i][j].TMED != " .0")) {
                            tMeddr = tMeddr + parseInt(bigData[i][j].TMED);
                        }
                        if (isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX != " .0")) {
                            tMedMaxdr = tMedMaxdr + parseInt(bigData[i][j].TMAX);
                        }
                        if (isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN != " .0")) {
                            tMedMindr = tMedMindr + parseInt(bigData[i][j].TMIN);
                        }
                        Drobeta[i] = {
                            Statia: "Drobeta Turnul Severin",
                            TemperaturaMedie: tMeddr,
                            TemperaturaMedieMaxima: tMedMaxdr,
                            TemperaturaMedieMinima: tMedMindr
                        }

                        var an = i.toString();
                        z = i - 1961
                        if (z == 22 || z == 29 || z == 38 || z == 53 || z == 18 || z == 47) {
                            DrobetaChart[z] = {
                                "name": "Drobeta Turnul Severin ",
                                "date": an,
                                "value": tMeddr.toString()
                            }
                            DrobetaChart[z + 1] = {
                                "name": "Drobeta Turnul Severin ",
                                "date": an,
                                "value": ""
                            }
                        } else {
                            DrobetaChart[z] = {
                                "name": "Drobeta Turnul Severin ",
                                "date": an,
                                "value": tMeddr.toString()
                            }
                        }
                        break;
                    case "Bucuresti-Baneasa":
                        if (isInt(bigData[i][j].TMED) && (bigData[i][j].TMED != " .0")) {
                            tMedbb = tMedbb + parseInt(bigData[i][j].TMED);
                        }
                        if (isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX != " .0")) {
                            tMedMaxbb = tMedMaxbb + parseInt(bigData[i][j].TMAX);
                        }
                        if (isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN != " .0")) {
                            tMedMinbb = tMedMinbb + parseInt(bigData[i][j].TMIN);
                        }
                        Bucuresti[i] = {
                            Statia: "Bucuresti-Baneasa",
                            TemperaturaMedie: tMedbb,
                            TemperaturaMedieMaxima: tMedMaxbb,
                            TemperaturaMedieMinima: tMedMinbb
                        }

                        var an = i.toString();
                        z = i - 1961
                        if (z == 22 || z == 29 || z == 38 || z == 53 || z == 18 || z == 47) {
                            BucurestiChart[z] = {
                                "name": "Bucuresti-Baneasa ",
                                "date": an,
                                "value": tMedbb.toString()
                            }
                            BucurestiChart[z + 1] = {
                                "name": "Bucuresti-Baneasa ",
                                "date": an,
                                "value": ""
                            }
                        } else {
                            BucurestiChart[z] = {
                                "name": "Bucuresti-Baneasa ",
                                "date": an,
                                "value": tMedbb.toString()
                            }
                        }
                        break;
                    case "Craiova":
                        if (isInt(bigData[i][j].TMED) && (bigData[i][j].TMED != " .0")) {
                            tMedcr = tMedcr + parseInt(bigData[i][j].TMED);
                        }
                        if (isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX != " .0")) {
                            tMedMaxcr = tMedMaxcr + parseInt(bigData[i][j].TMAX);
                        }
                        if (isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN != " .0")) {
                            tMedMincr = tMedMincr + parseInt(bigData[i][j].TMIN);
                        }
                        Craiova[i] = {
                            Statia: "Craiova",
                            TemperaturaMedie: tMedcr,
                            TemperaturaMedieMaxima: tMedMaxcr,
                            TemperaturaMedieMinima: tMedMincr
                        }

                        var an = i.toString();
                        z = i - 1961
                        if (z == 22 || z == 29 || z == 38 || z == 53 || z == 18 || z == 47) {
                            CraiovaChart[z] = {
                                "name": "Craiova ",
                                "date": an,
                                "value": tMedcr.toString()
                            }
                            CraiovaChart[z + 1] = {
                                "name": "Craiova ",
                                "date": an,
                                "value": ""
                            }
                        } else {
                            CraiovaChart[z] = {
                                "name": "Craiova ",
                                "date": an,
                                "value": tMedcr.toString()
                            }
                        }
                        break;
                    case "Calarasi":
                        if (isInt(bigData[i][j].TMED) && (bigData[i][j].TMED != " .0")) {
                            tMedca = tMedca + parseInt(bigData[i][j].TMED);
                        }
                        if (isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX != " .0")) {
                            tMedMaxca = tMedMaxca + parseInt(bigData[i][j].TMAX);
                        }
                        if (isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN != " .0")) {
                            tMedMinca = tMedMinca + parseInt(bigData[i][j].TMIN);
                        }
                        Calarasi[i] = {
                            Statia: "Calarasi",
                            TemperaturaMedie: tMedca,
                            TemperaturaMedieMaxima: tMedMaxca,
                            TemperaturaMedieMinima: tMedMinca
                        }

                        var an = i.toString();
                        z = i - 1961
                        if (z == 22 || z == 29 || z == 38 || z == 53 || z == 18 || z == 47) {
                            CalarasiChart[z] = {
                                "name": "Calarasi ",
                                "date": an,
                                "value": tMedca.toString()
                            }
                            CalarasiChart[z + 1] = {
                                "name": "Calarasi ",
                                "date": an,
                                "value": ""
                            }
                        } else {
                            CalarasiChart[z] = {
                                "name": "Calarasi ",
                                "date": an,
                                "value": tMedca.toString()
                            }
                        }
                        break;
                    case "Rosiorii de Vede":

                        if (isInt(bigData[i][j].TMED) && (bigData[i][j].TMED != " .0")) {
                            tMedR = tMedR + parseInt(bigData[i][j].TMED);
                        }
                        if (isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX != " .0")) {
                            tMedMaxR = tMedMaxR + parseInt(bigData[i][j].TMAX);
                        }
                        if (isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN != " .0")) {
                            tMedMinR = tMedMinR + parseInt(bigData[i][j].TMIN);
                        }
                        Rosiorii[i] = {
                            Statia: "Rosiorii de Vede",
                            TemperaturaMedie: tMedR,
                            TemperaturaMedieMaxima: tMedMaxR,
                            TemperaturaMedieMinima: tMedMinR
                        }

                        var an = i.toString();
                        z = i - 1961
                        if (z == 22 || z == 29 || z == 38 || z == 53 || z == 18 || z == 47) {
                            RosioriiChart[z] = {
                                "name": "Rosiorii de Vede ",
                                "date": an,
                                "value": tMedR.toString()
                            }
                            RosioriiChart[z + 1] = {
                                "name": "Rosiorii de Vede ",
                                "date": an,
                                "value": ""
                            }
                        } else {
                            RosioriiChart[z] = {
                                "name": "Rosiorii de Vede ",
                                "date": an,
                                "value": tMedR.toString()
                            }
                        }
                        break;
                    case "Constanta":
                        if (isInt(bigData[i][j].TMED) && (bigData[i][j].TMED != " .0")) {
                            tMedC = tMedC + parseInt(bigData[i][j].TMED);
                        }
                        if (isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX != " .0")) {
                            tMedMax = tMedMax + parseInt(bigData[i][j].TMAX);
                        }
                        if (isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN != " .0")) {
                            tMedMin = tMedMin + parseInt(bigData[i][j].TMIN);
                        }
                        Constanta[i] = {
                            Statia: "Constanta",
                            TemperaturaMedie: tMedC,
                            TemperaturaMedieMaxima: tMedMax,
                            TemperaturaMedieMinima: tMedMin
                        }

                        var an = i.toString();
                        z = i - 1961
                        if (z == 22 || z == 29 || z == 38 || z == 53 || z == 18 || z == 47) {
                            ConstantaChart[z] = {
                                "name": "Constanta ",
                                "date": an,
                                "value": tMedC.toString()
                            }
                            ConstantaChart[z + 1] = {
                                "name": "Constanta ",
                                "date": an,
                                "value": ""
                            }
                        } else {
                            ConstantaChart[z] = {
                                "name": "Constanta ",
                                "date": an,
                                "value": tMedC.toString()
                            }
                        }
                        break;
                }
            }
        }
    }

    function isInt(value) {
        return !isNaN(value) && (function (x) { return (x | 0) === x; })(parseFloat(value))
    }
    // $(function  () {
    function MetodaModificariiProcentualeMobile(data) {
        var Yt = parseInt(data[55].value);
        var Y0 = parseInt(data[0].value);
        var MMP = (Yt - Y0) / 55;
        var Y = (1 + MMP) * Yt;
        console.log("Metoda modificarii procentuale mobile", Y)
        //$("#predictieMMP").val(Y.toFixed(0))
        return (Y / 365).toFixed(4);
    }
    function MetodaModificariiProcentuale(data) {
        var Yt = parseInt(data[55].value);
        var Y0 = parseInt(data[0].value);
        var MMP = (Yt - Y0) / 54;
        var Y = (Y0 + 55 * MMP);
        //console.log("Metoda modificarii procentuale ", Y)
        $("#predictieMMP").val((Y / 365).toFixed(4))
        return (Y / 365).toFixed(4);
    }

    function MetodaNivelariiexponentiale(data) {
        var coef = 0.5;
        var Yt = parseInt(data[55].value);
        var Ytt = parseInt(data[53].value);
        var Y = 0.5 * Yt + (1 - 0.5) * Ytt;
        console.log("MetodaNivelariiexponentiale ", Y)
        $("#predictieMME").val((Y / 365).toFixed(4))
    }

    var brown = [{

    }];
    function MetodaBrown(data) {
        console.log("metoda brown", data);
        brown[0].real = parseInt(data[0].value);
        brown[0].alfa = 0.7;
        brown[0].S1 = 0.7 * parseInt(data[0].value) + (1 - 0.7) * brown[0].real;
        brown[0].S2 = 0.7 * brown[0].S1 + (1 - 0.7) * brown[0].real;
        brown[0].forecast = 2 * brown[0].S1 - brown[0].S2;
        brown[0].an = data[0].date;

        for (var i = 1; i < 60; i++) {
            if (i == 18 || i == 22 || i == 29 || i == 38 || i == 53 || i == 18 || i == 47) {
                brown[i] = {
                    real: 355,
                    alfa: 0.7,
                    S1: 358,
                    forecast: 321,
                    S2: 343,
                    an: ""
                }
                data[i].value = "343";

            } else {
                if (data[i] != undefined) {
                    if (data[i].value == "") {
                        data[i].value = "343";
                    }
                    var xS1 = brown[i - 1].S1;
                    var xS11 = 0.7 * parseInt(data[i].value) + (1 - 0.7) * xS1;
                    var xS2 = brown[i - 1].S2;
                    var xS22 = 0.7 * xS11 + (1 - 0.7) * xS2;
                    brown[i] = {
                        real: parseInt(data[i].value),
                        alfa: 0.7,
                        S1: 0.7 * parseInt(data[i].value) + (1 - 0.7) * xS1,
                        S2: 0.7 * xS11 + (1 - 0.7) * xS2,
                        forecast: 2 * xS11 - xS22,
                        an: data[i].date
                    }
                } else {
                    var xS1 = brown[i - 1].S1;
                    var xS11 = 0.7 * parseInt(brown[i - 1].forecast) + (1 - 0.7) * xS1;
                    var xS2 = brown[i - 1].S2;
                    var xS22 = 0.7 * xS11 + (1 - 0.7) * xS2;
                    brown[i] = {
                        alfa: 0.7,
                        S1: 0.7 * parseInt(brown[i - 1].forecast) + (1 - 0.7) * xS1,
                        S2: 0.7 * xS11 + (1 - 0.7) * xS2,
                        forecast: 2 * xS11 - xS22,
                        an: 1961 + i
                    }
                }


                // brown[i].real = parseInt(data[i].value);
                // brown[i].alfa = 0.7;
                // brown[i].S1 = 0.7 * parseInt(data[i].value) + (1 - 0.7) * brown[i - 1].S1;
                // brown[i].S2 = 0.7 * brown[i].S1 + (1 - 0.7) * brown[i - 1].S2;
                // brown[i].forecast = 2 * brown[i].S1 - brown[i].S2;
            }
        }
        $("#tabel3").remove();
        $("#tab3").append("<tbody id=tabel3></tbody>");
        $(function () {
            $("#range_04").ionRangeSlider({
                type: "double",
                min: 1961,
                max: 2020,
                from: 1961,
                to: 2020,
                grid: true,
                grid_num: 11,
                onFinish: function (data) {
                    var eroareTotal = 0
                    console.log("selectat", data);
                    ReTableBrown(data);
                }
            });
        });
        var eroareTotal = 0
        for (var i = 0; i < 60; i++) {
            if (i == 18 || i == 22 || i == 29 || i == 38 || i == 53 || i == 18 || i == 47) { i++ }
            var an = brown[i].an;
            var alfa = brown[i].alfa;
            var s1 = (brown[i].S1 / 365).toFixed(4);
            var s2 = (brown[i].S2 / 365).toFixed(4);
            var reall = (brown[i].real / 365).toFixed(4);
            var prezis = (brown[i].forecast / 365).toFixed(4);
            var Eroare = (reall - prezis) * (reall - prezis);
            if (i == 0) { }
            else {
                eroareTotal = eroareTotal + Eroare
            }

            $("#tabel3").append("<tr class=tabel3>" + "<td>" + an + "</td>" + "<td>" + alfa + "</td>" + "<td>" + s1 + "</td>" + "<td>" + s2 + "</td>" + "<td>" + reall + "</td>" + "<td>" + prezis + "</td>" + "<td>" + Eroare.toFixed(4) + "</td>" +"<td>" + eroareTotal + "</td>" + "</tr>");
        }
        
        var eroareTotal = 0
        function ReTableBrown(data) {
            $("#tabel3").remove();
            $("#tab3").append("<tbody id=tabel3></tbody>");
            var x = data.from - 1961;
            var j = 2016 - data.to;
            var z = 55 - j;
            eroareTotal = 0
            console.log("de la ", x, "pana la ", j, "Cate ", z);
            for (var i = x; i < z + 1; i++) {
                if (i == 18 || i == 22 || i == 29 || i == 38 || i == 53 || i == 18 || i == 47) { i++ }
                var an = brown[i].an;
                var alfa = brown[i].alfa;
                var s1 = (brown[i].S1 / 365).toFixed(4);
                var s2 = (brown[i].S2 / 365).toFixed(4);
                var reall = (brown[i].real / 365).toFixed(4);
                var prezis = (brown[i].forecast / 365).toFixed(4);
                var Eroare = (reall - prezis) * (reall - prezis);
                if (i == 0) { }
                else {
                    eroareTotal = eroareTotal + Eroare
                }

                $("#tabel3").append("<tr>" + "<td>" + an + "</td>" + "<td>" + alfa + "</td>" + "<td>" + s1 + "</td>" + "<td>" + s2 + "</td>" + "<td>" + reall + "</td>" + "<td>" + prezis + "</td>" + "<td>" + Eroare.toFixed(4) + "</td>" +  "<td>" + eroareTotal + "</td>" + "</tr>");
            }
        }



        // console.log("BROWN : ", brown);
    }





    var holt = [{}];

    function MetodaHolt(data) {
        holt[0].an = data[0].date;
        holt[0].real = parseInt(data[0].value);
        holt[0].alfa = 0.8;
        holt[0].beta = 0.2;
        holt[0].u = parseInt(data[0].value);
        holt[0].v = 0;
        holt[0].y = parseInt(data[0].value);
        holt[0].forecast = 0;
        for (var i = 1; i < 60; i++) {
            if (i == 18 || i == 22 || i == 29 || i == 38 || i == 53 || i == 18 || i == 47) {
                holt[i] = {
                    an: data[i].date,
                    real: 355,
                    alfa: 0.8,
                    beta: 0.2,
                    u: holt[i - 1].u,
                    v: holt[i - 1].v,
                    y: holt[i - 1].real,
                    forecast: 321,
                }

            } else {
                if (data[i] != undefined) {
                    if (data[i].value == "") {
                        data[i].value = 343;

                    }
                    var u = 0;
                    var uv = holt[i - 1].u + holt[i - 1].v;
                    u = holt[i - 1].alfa * parseInt(data[i].value) + (1 - holt[i - 1].alfa) * uv;
                    var u_v = u - holt[i - 1].u;
                    var v = holt[i - 1].beta * u_v + (1 - holt[i - 1].beta) * holt[i - 1].v
                    var fortune = u + v;
                    holt[i] = {
                        an: data[i].date,
                        real: parseInt(data[i].value),
                        alfa: 0.8,
                        beta: 0.2,
                        u: u,
                        v: v,
                        y: parseInt(data[i].value),
                        forecast: fortune
                    }
                    // }

                }
                else {
                    var u = 0;
                    var uv = holt[i - 1].u + holt[i - 1].v;
                    u = holt[i - 1].alfa * parseInt(holt[i - 1].forecast) + (1 - holt[i - 1].alfa) * uv;
                    var u_v = u - holt[i - 1].u;
                    var v = holt[i - 1].beta * u_v + (1 - holt[i - 1].beta) * holt[i - 1].v
                    var fortune = u + v;
                    holt[i] = {
                        an: 1961 + i,
                        alfa: 0.8,
                        beta: 0.2,
                        u: u,
                        v: v,
                        forecast: fortune
                    }

                }
            }
        }
        $("#tabel4").remove();
        $("#tab4").append("<tbody id=tabel4></tbody>");

        $(function () {
            $("#range_05").ionRangeSlider({
                type: "double",
                min: 1961,
                max: 2020,
                from: 1961,
                to: 2020,
                grid: true,
                grid_num: 11,
                onFinish: function (data) {
                    console.log("selectat", data);
                    ReTableHolt(data);
                }
            });
        });

        var eroareTotal = 0
        for (var i = 0; i < 60; i++) {
            if (i == 18 || i == 22 || i == 29 || i == 38 || i == 53 || i == 18 || i == 47) { i++ }
            var an = holt[i].an;
            var alfa = holt[i].alfa;
            var beta = holt[i].beta;
            var u = (holt[i].u / 356).toFixed(4);
            var v = (holt[i].v / 365).toFixed(4);
            var reall = (holt[i].y / 365).toFixed(4);
            var prezis = (holt[i].forecast / 365).toFixed(4);
            var eroare = (reall - prezis) * (reall - prezis);
            if (i == 0) { }
            else {
                eroareTotal = eroareTotal + eroare
            }

            $("#tabel4").append("<tr>" + "<td>" + an + "</td>" + "<td>" + alfa + "</td>" + "<td>" + beta + "</td>" + "<td>" + u + "</td>" + "<td>" + v + "</td>" + "<td>" + reall + "</td>" + "<td>" + prezis + "</td>" + "<td>" + eroare.toFixed(4) + "</td>" + "<td>" + eroareTotal + "</td>" + "</tr>");
        }
        eroareTotal = 0;
        function ReTableHolt(data) {
            $("#tabel4").remove();
            $("#tab4").append("<tbody id=tabel4></tbody>");
            var x = data.from - 1961;
            var j = 2016 - data.to;
            var z = 55 - j;
            eroareTotal = 0
            for (var i = x; i < z + 1; i++) {
                var an = holt[i].an;
                var alfa = holt[i].alfa;
                var beta = holt[i].beta;
                var u = (holt[i].u / 356).toFixed(4);
                var v = (holt[i].v / 365).toFixed(4);
                var reall = (holt[i].y / 365).toFixed(4);
                var prezis = (holt[i].forecast / 365).toFixed(4);
                var eroare = (reall - prezis) * (reall - prezis);
                eroareTotal = eroareTotal + eroare;
                if (i == 0) { }
                else {
                    eroareTotal = eroareTotal + eroare
                }
                $("#tabel4").append("<tr>" + "<td>" + an + "</td>" + "<td>" + alfa + "</td>" + "<td>" + beta + "</td>" + "<td>" + u + "</td>" + "<td>" + v + "</td>" + "<td>" + reall + "</td>" + "<td>" + prezis + "</td>" + "<td>" + eroare.toFixed(4) + "</td>" + "<td>" + eroareTotal + "</td>" + "</tr>");
            }

        }




        console.log("HOLT", holt)
    }

    // MetodaModificariiProcentuale(OcnaChart);
    //})


    MetodaModificariiProcentuale(OcnaChart);
    MetodaNivelariiexponentiale(OcnaChart);
    MetodaBrown(OcnaChart);
    MetodaHolt(OcnaChart);
    //MetodaModificariiProcentualeMobile(OcnaChart);
    var big = [];
    function Graph(data1) {
        var real = []
        for (var i = 0; i < 56; i++) {
            real[i] = {
                an: data1[i].date,
                value: (parseInt(data1[i].value) / 365).toFixed(4)
            }
            real[19] = {
                an: "1980",
                value: (parseInt(data1[19].value) / 365).toFixed(4)
            }
            real[23] = {
                an: "1984",
                value: (parseInt(data1[23].value) / 365).toFixed(4)
            }
            real[30] = {
                an: "1991",
                value: (parseInt(data1[30].value) / 365).toFixed(4)
            }
            real[39] = {
                an: "2000",
                value: (parseInt(data1[39].value) / 365).toFixed(4)
            }
            real[48] = {
                an: "2009",
                value: (parseInt(data1[48].value) / 365).toFixed(4)
            }
            real[54] = {
                an: "2015",
                value: (parseInt(data1[54].value) / 365).toFixed(4)
            }
        }
        var br = []
        for (var i = 0; i < 60; i++) {
            br[i] = {
                an: brown[i].an,
                value: (brown[i].forecast / 365).toFixed(4)
            }
            br[18] = {
                an: "1979",
                value: (brown[18].forecast / 365).toFixed(4)
            }
            br[19] = {
                an: "1980",
                value: (brown[19].forecast / 365).toFixed(4)
            }
            br[22] = {
                an: "1983",
                value: (brown[22].forecast / 365).toFixed(4)
            }
            br[23] = {
                an: "1984",
                value: (brown[23].forecast / 365).toFixed(4)
            }
            br[29] = {
                an: "1990",
                value: (brown[29].forecast / 365).toFixed(4)
            }
            br[30] = {
                an: "1991",
                value: (brown[30].forecast / 365).toFixed(4)
            }
            br[38] = {
                an: "1999",
                value: (brown[38].forecast / 365).toFixed(4)
            }
            br[39] = {
                an: "2000",
                value: (brown[39].forecast / 365).toFixed(4)
            }
            br[47] = {
                an: "2008",
                value: (brown[47].forecast / 365).toFixed(4)
            }
            br[48] = {
                an: "2009",
                value: (brown[48].forecast / 365).toFixed(4)
            }
            br[53] = {
                an: "2014",
                value: (brown[53].forecast / 365).toFixed(4)
            }
            br[54] = {
                an: "2015",
                value: (brown[54].forecast / 365).toFixed(4)
            }

        }
        var hl = []
        for (var i = 0; i < 60; i++) {
            hl[i] = {
                an: holt[i].an,
                value: (holt[i].forecast / 365).toFixed(4)
            }
            hl[19] = {
                an: "1980",
                value: (parseInt(holt[19].forecast) / 365).toFixed(4)
            }
            hl[23] = {
                an: "1984",
                value: (parseInt(holt[23].forecast) / 365).toFixed(4)
            }
            hl[30] = {
                an: "1991",
                value: (parseInt(holt[30].forecast) / 365).toFixed(4)
            }
            hl[39] = {
                an: "2000",
                value: (parseInt(holt[39].forecast) / 365).toFixed(4)
            }
            hl[48] = {
                an: "2009",
                value: (parseInt(holt[48].forecast) / 365).toFixed(4)
            }
            hl[54] = {
                an: "2015",
                value: (parseInt(holt[54].forecast) / 365).toFixed(4)
            }
        }
        big = [real, br, hl];

        function Draw(data) {
            // for (var i = 0; i < data.length; i++) {
            //     data[i] = MG.convert.date(data[i], 'date');
            // }

            MG.data_graphic({
                title: "Chart reprezentand Datele reale, Datele obtinute prin Brown si datele obtinute prin Holt",
                description: "This line chart contains multiple lines.",
                data: data,
                min_y: -1.5,
                max_y: 4,
                width: 1300,
                height: 500,
                right: 40,
                legend: ['Datele Reale', 'Brown', 'Holt'],
                legend_target: '.legend',
                target: "#all",
                x_accessor: 'an',
                y_accessor: 'value',
                aggregate_rollover: true
            });
        }


        Draw(big);
        console.log("REAL ", big)
    }
    Graph(OcnaChart);







})