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
                break;
            case "Botosani":
                ChartPred1(BotosaniChart)
                MetodaModificariiProcentuale(BotosaniChart);
                MetodaNivelariiexponentiale(BotosaniChart);
                MetodaBrown(BotosaniChart);
                MetodaHolt(BotosaniChart);
                break;
            case "Iasi":
                ChartPred1(IasiChart)
                MetodaModificariiProcentuale(IasiChart);
                MetodaNivelariiexponentiale(IasiChart);
                MetodaBrown(IasiChart);
                MetodaHolt(IasiChart);
                break;
            case "Ceahlau":
                ChartPred1(CeahlauChart)
                MetodaModificariiProcentuale(CeahlauChart);
                MetodaNivelariiexponentiale(CeahlauChart);
                MetodaBrown(CeahlauChart);
                MetodaHolt(CeahlauChart);
                break;
            case "Cluj":
                ChartPred1(ClujChart)
                MetodaModificariiProcentuale(ClujChart);
                MetodaNivelariiexponentiale(ClujChart);
                MetodaBrown(ClujChart);
                MetodaHolt(ClujChart);
                break;
            case "Bacau":
                ChartPred1(BacauChart)
                MetodaModificariiProcentuale(BacauChart);
                MetodaNivelariiexponentiale(BacauChart);
                MetodaBrown(BacauChart);
                MetodaHolt(BacauChart);
                break;
            case "Miercurea":
                ChartPred1(MiercureaChart)
                MetodaModificariiProcentuale(MiercureaChart);
                MetodaNivelariiexponentiale(MiercureaChart);
                MetodaBrown(MiercureaChart);
                MetodaHolt(MiercureaChart);
                break;
            case "Deva":
                ChartPred1(DevaChart)
                MetodaModificariiProcentuale(DevaChart);
                MetodaNivelariiexponentiale(DevaChart);
                MetodaBrown(DevaChart);
                MetodaHolt(DevaChart);
                break;
            case "Sibiu":
                ChartPred1(SibiuChart)
                MetodaModificariiProcentuale(SibiuChart);
                MetodaNivelariiexponentiale(SibiuChart);
                MetodaBrown(SibiuChart);
                MetodaHolt(SibiuChart);
                break;
            case "Varfu":
                ChartPred1(VarfuChart)
                MetodaModificariiProcentuale(VarfuChart);
                MetodaNivelariiexponentiale(VarfuChart);
                MetodaBrown(VarfuChart);
                MetodaHolt(VarfuChart);
                break;
            case "Caransebes":
                ChartPred1(CaransebesChart)
                MetodaModificariiProcentuale(CaransebesChart);
                MetodaNivelariiexponentiale(CaransebesChart);
                MetodaBrown(CaransebesChart);
                MetodaHolt(CaransebesChart);
                break;
            case "Galati":
                ChartPred1(GalatiChart)
                MetodaModificariiProcentuale(GalatiChart);
                MetodaNivelariiexponentiale(GalatiChart);
                MetodaBrown(GalatiChart);
                MetodaHolt(GalatiChart);
                break;
            case "Tulcea":
                ChartPred1(TulceaChart)
                MetodaModificariiProcentuale(TulceaChart);
                MetodaNivelariiexponentiale(TulceaChart);
                MetodaBrown(TulceaChart);
                MetodaHolt(TulceaChart);
                break;
            case "Ramnicu":
                ChartPred1(RamnicuChart)
                MetodaModificariiProcentuale(RamnicuChart);
                MetodaNivelariiexponentiale(RamnicuChart);
                MetodaBrown(RamnicuChart);
                MetodaHolt(RamnicuChart);
                break;
            case "Buzau":
                ChartPred1(BuzauChart)
                MetodaModificariiProcentuale(BuzauChart);
                MetodaNivelariiexponentiale(BuzauChart);
                MetodaBrown(BuzauChart);
                MetodaHolt(BuzauChart);
                break;
            case "Sulina":
                ChartPred1(SulinaChart)
                MetodaModificariiProcentuale(SulinaChart);
                MetodaNivelariiexponentiale(SulinaChart);
                MetodaBrown(SulinaChart);
                MetodaHolt(SulinaChart);
                break;
            case "Drobeta":
                ChartPred1(DrobetaChart)
                MetodaModificariiProcentuale(DrobetaChart);
                MetodaNivelariiexponentiale(DrobetaChart);
                MetodaBrown(DrobetaChart);
                MetodaHolt(DrobetaChart);
                break;
            case "Bucuresti":
                ChartPred1(BucurestiChart)
                MetodaModificariiProcentuale(BucurestiChart);
                MetodaNivelariiexponentiale(BucurestiChart);
                MetodaBrown(BucurestiChart);
                MetodaHolt(BucurestiChart);
                break;
            case "Craiova":
                ChartPred1(CraiovaChart)
                MetodaModificariiProcentuale(CraiovaChart);
                MetodaNivelariiexponentiale(CraiovaChart);
                MetodaBrown(CraiovaChart);
                MetodaHolt(CraiovaChart);
                break;
            case "Calarasi":
                ChartPred1(CalarasiChart)
                MetodaModificariiProcentuale(CalarasiChart);
                MetodaNivelariiexponentiale(CalarasiChart);
                MetodaBrown(CalarasiChart);
                MetodaHolt(CalarasiChart);
                break;
            case "Rosiorii":
                ChartPred1(RosioriiChart)
                MetodaModificariiProcentuale(RosioriiChart);
                MetodaNivelariiexponentiale(RosioriiChart);
                MetodaBrown(RosioriiChart);
                MetodaHolt(RosioriiChart);
                break;
            case "Constanta":
                ChartPred1(ConstantaChart)
                MetodaModificariiProcentuale(ConstantaChart);
                MetodaNivelariiexponentiale(ConstantaChart);
                MetodaBrown(ConstantaChart);
                MetodaHolt(ConstantaChart);
                break;
            case "Arad":
                ChartPred1(AradChart)
                MetodaModificariiProcentuale(AradChart);
                MetodaNivelariiexponentiale(AradChart);
                MetodaBrown(AradChart);
                MetodaHolt(AradChart);
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
                temp1 = dataMedii[i].TemperaturaMedie + " ℃";
                // var temp3 = (dataMedii[i].TemperaturaMedieMinima) + " ℃";
                xy = x * dataMedii[i].TemperaturaMedie;
                suma = suma + xy;
                sumax2 = sumax2 + x * x;
                sumaani = sumaani + dataMedii[i].TemperaturaMedie;
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
                            TemperaturaMedie: tMedB,
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
        return Y;
    }
    function MetodaModificariiProcentuale(data) {
        var Yt = parseInt(data[55].value);
        var Y0 = parseInt(data[0].value);
        var MMP = (Yt - Y0) / 54;
        var Y = (Y0 + 55 * MMP);
        //console.log("Metoda modificarii procentuale ", Y)
        $("#predictieMMP").val(Y.toFixed(0))
        return Y;
    }

    function MetodaNivelariiexponentiale(data) {
        var coef = 0.5;
        var Yt = parseInt(data[55].value);
        var Ytt = parseInt(data[53].value);
        var Y = 0.5 * Yt + (1 - 0.5) * Ytt;
        console.log("MetodaNivelariiexponentiale ", Y)
        $("#predictieMME").val(Y.toFixed(0))
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

        for (var i = 1; i < 56; i++) {
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

                // brown[i].real = parseInt(data[i].value);
                // brown[i].alfa = 0.7;
                // brown[i].S1 = 0.7 * parseInt(data[i].value) + (1 - 0.7) * brown[i - 1].S1;
                // brown[i].S2 = 0.7 * brown[i].S1 + (1 - 0.7) * brown[i - 1].S2;
                // brown[i].forecast = 2 * brown[i].S1 - brown[i].S2;
            }
        }
        $("#tabel3").remove();
        $("#tab3").append("<tbody id=tabel3></tbody>");
        for (var i = 0; i < 56; i++) {
            if (i == 18 || i == 22 || i == 29 || i == 38 || i == 53 || i == 18 || i == 47) { i++ }
            var an = brown[i].an;
            var alfa = brown[i].alfa;
            var s1 = brown[i].S1;
            var s2 = brown[i].S2;
            var reall = brown[i].real;
            var prezis = brown[i].forecast;

            $("#tabel3").append("<tr>" + "<td>" + an + "</td>" + "<td>" + alfa + "</td>" + "<td>" + s1 + "</td>" + "<td>" + s2 + "</td>" + "<td>" + reall + "</td>" + "<td>" + prezis + "</td>" + "</tr>");
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
        for (var i = 1; i < 56; i++) {
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
                var u = 0;
                var uv = holt[i - 1].u + holt[i - 1].v;
                if (data[i].value == "") {
                    data[i].value = 343;

                }
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
        }
        $("#tabel4").remove();
        $("#tab4").append("<tbody id=tabel4></tbody>");
        for (var i = 0; i < 56; i++) {
            if (i == 18 || i == 22 || i == 29 || i == 38 || i == 53 || i == 18 || i == 47) { i++ }
            var an = holt[i].an;
            var alfa = holt[i].alfa;
            var beta = holt[i].beta;
            var u = holt[i].u;
            var v = holt[i].v;
            var reall = holt[i].y;
            var prezis = holt[i].forecast;

            $("#tabel4").append("<tr>" + "<td>" + an + "</td>" + "<td>" + alfa + "</td>" + "<td>" + beta + "</td>" + "<td>" + u + "</td>" + "<td>" + v + "</td>" + "<td>" + reall + "</td>" + "<td>" + prezis + "</td>" + "</tr>");
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
    function Graph(data1, brown, holt) {
        var real = []
        for (var i = 0; i < 56; i++) {
            real[i] = {
                an: data1[i].date, 
                value: parseInt(data1[i].value)
            }
            real[19]={
                an: "1980",
                value: parseInt(data1[19].value)
            }
            real[23]={
                an: "1984",
                value: parseInt(data1[23].value)
            }
            real[30]={
                an: "1991",
                value: parseInt(data1[30].value)
            }
            real[39]={
                an: "2000",
                value: parseInt(data1[39].value)
            }
            real[48]={
                an: "2009",
                value: parseInt(data1[48].value)
            }
            real[54]={
                an: "2015",
                value: parseInt(data1[54].value)
            }
        }
        var br = []
        for (var i = 0; i < 56; i++) {
            br[i] = {
                an:brown[i].an,
                value: brown[i].forecast
            }
            br[18] = {
                an: "1979",
                value: brown[18].forecast
            }
            br[19] = {
                an: "1980",
                value: brown[19].forecast
            }
            br[22] = {
                an: "1983",
                value: brown[22].forecast
            }
            br[23] = {
                an: "1984",
                value: brown[23].forecast
            }
            br[29] = {
                an: "1990",
                value: brown[29].forecast
            }
            br[30] = {
                an: "1991",
                value: brown[30].forecast
            }
            br[38] = {
                an: "1999",
                value: brown[38].forecast
            }
            br[39] = {
                an: "2000",
                value: brown[39].forecast
            }
            br[47] = {
                an: "2008",
                value: brown[47].forecast
            }
            br[48] = {
                an: "2009",
                value: brown[48].forecast
            }
            br[53] = {
                an: "2014",
                value: brown[53].forecast
            }
            br[54] = {
                an: "2015",
                value: brown[54].forecast
            }

        }
        var hl = []
        for (var i = 0; i < 56; i++) {
            hl[i] = {
                an: holt[i].an,
                value: holt[i].forecast
            }
             hl[19]={
                an: "1980",
                value: parseInt(holt[19].forecast)
            }
            hl[23]={
                an: "1984",
                value: parseInt(holt[23].forecast)
            }
            hl[30]={
                an: "1991",
                value: parseInt(holt[30].forecast)
            }
            hl[39]={
                an: "2000",
                value: parseInt(holt[39].forecast)
            }
            hl[48]={
                an: "2009",
                value: parseInt(holt[48].forecast)
            }
            hl[54]={
                an: "2015",
                value: parseInt(holt[54].forecast)
            }
        }
        big = [real, br, hl];

        function Draw( data ) {
            // for (var i = 0; i < data.length; i++) {
            //     data[i] = MG.convert.date(data[i], 'date');
            // }

            MG.data_graphic({
                title: "Char reprezentand Datele reale, Datele obtinute prin Brown si datele obtinute prin Holt",
                description: "This line chart contains multiple lines.",
                data: data,
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


        var zxzxz =
         [
    [
        {
            "date": "2014-01-01",
            "value": 10000000
        },
        {
            "date": "2014-01-02",
            "value": 10379978
        },
        {
            "date": "2014-01-03",
            "value": 10493749
        },
        {
            "date": "2014-01-04",
            "value": 10785250
        },
        {
            "date": "2014-01-05",
            "value": 13901904
        },
        {
            "date": "2014-01-06",
            "value": 11576838
        },
        {
            "date": "2014-01-07",
            "value": 14413854
        },
        {
            "date": "2014-01-08",
            "value": 15177211
        },
        {
            "date": "2014-01-09",
            "value": 16622100
        },
        {
            "date": "2014-01-10",
            "value": 17381072
        },
        {
            "date": "2014-01-11",
            "value": 18802310
        },
        {
            "date": "2014-01-12",
            "value": 15531790
        },
        {
            "date": "2014-01-13",
            "value": 15748881
        },
        {
            "date": "2014-01-14",
            "value": 18706437
        },
        {
            "date": "2014-01-15",
            "value": 19752685
        },
        {
            "date": "2014-01-16",
            "value": 21016418
        },
        {
            "date": "2014-01-17",
            "value": 25622924
        },
        {
            "date": "2014-01-18",
            "value": 25337480
        },
        {
            "date": "2014-01-19",
            "value": 22258882
        },
        {
            "date": "2014-01-20",
            "value": 23829538
        },
        {
            "date": "2014-01-21",
            "value": 24245689
        },
        {
            "date": "2014-01-22",
            "value": 26429711
        },
        {
            "date": "2014-01-23",
            "value": 26259017
        },
        {
            "date": "2014-01-24",
            "value": 25396183
        },
        {
            "date": "2014-01-25",
            "value": 23107346
        },
        {
            "date": "2014-01-26",
            "value": 28659852
        },
        {
            "date": "2014-01-27",
            "value": 25270783
        },
        {
            "date": "2014-01-28",
            "value": 26270783
        },
        {
            "date": "2014-01-29",
            "value": 27270783
        },
        {
            "date": "2014-01-30",
            "value": 28270783
        },
        {
            "date": "2014-01-31",
            "value": 29270783
        },
        {
            "date": "2014-02-01",
            "value": 30270783
        },
        {
            "date": "2014-02-02",
            "value": 31270783
        },
        {
            "date": "2014-02-03",
            "value": 32270783
        },
        {
            "date": "2014-02-04",
            "value": 33270783
        },
        {
            "date": "2014-02-05",
            "value": 28270783
        },
        {
            "date": "2014-02-06",
            "value": 27270783
        },
        {
            "date": "2014-02-07",
            "value": 35270783
        },
        {
            "date": "2014-02-08",
            "value": 34270783
        },
        {
            "date": "2014-02-09",
            "value": 28270783
        },
        {
            "date": "2014-02-10",
            "value": 35270783
        },
        {
            "date": "2014-02-11",
            "value": 36270783
        },
        {
            "date": "2014-02-12",
            "value": 34127078
        },
        {
            "date": "2014-02-13",
            "value": 33124078
        },
        {
            "date": "2014-02-14",
            "value": 36227078
        },
        {
            "date": "2014-02-15",
            "value": 37827078
        },
        {
            "date": "2014-02-16",
            "value": 36427073
        },
        {
            "date": "2014-02-17",
            "value": 37570783
        },
        {
            "date": "2014-02-18",
            "value": 38627073
        },
        {
            "date": "2014-02-19",
            "value": 37727078
        },
        {
            "date": "2014-02-20",
            "value": 38827073
        },
        {
            "date": "2014-02-21",
            "value": 40927078
        },
        {
            "date": "2014-02-22",
            "value": 41027078
        },
        {
            "date": "2014-02-23",
            "value": 42127073
        },
        {
            "date": "2014-02-24",
            "value": 43220783
        },
        {
            "date": "2014-02-25",
            "value": 44327078
        },
        {
            "date": "2014-02-26",
            "value": 40427078
        },
        {
            "date": "2014-02-27",
            "value": 41027078
        },
        {
            "date": "2014-02-28",
            "value": 45627078
        },
        {
            "date": "2014-03-01",
            "value": 44727078
        },
        {
            "date": "2014-03-02",
            "value": 44227078
        },
        {
            "date": "2014-03-03",
            "value": 45227078
        },
        {
            "date": "2014-03-04",
            "value": 46027078
        },
        {
            "date": "2014-03-05",
            "value": 46927078
        },
        {
            "date": "2014-03-06",
            "value": 47027078
        },
        {
            "date": "2014-03-07",
            "value": 46227078
        },
        {
            "date": "2014-03-08",
            "value": 47027078
        },
        {
            "date": "2014-03-09",
            "value": 48027078
        },
        {
            "date": "2014-03-10",
            "value": 47027078
        },
        {
            "date": "2014-03-11",
            "value": 47027078
        },
        {
            "date": "2014-03-12",
            "value": 48017078
        },
        {
            "date": "2014-03-13",
            "value": 48077078
        },
        {
            "date": "2014-03-14",
            "value": 48087078
        },
        {
            "date": "2014-03-15",
            "value": 48017078
        },
        {
            "date": "2014-03-16",
            "value": 48047078
        },
        {
            "date": "2014-03-17",
            "value": 48067078
        },
        {
            "date": "2014-03-18",
            "value": 48077078
        },
        {
            "date": "2014-03-19",
            "value": 48027074
        },
        {
            "date": "2014-03-20",
            "value": 48927079
        },
        {
            "date": "2014-03-21",
            "value": 48727071
        },
        {
            "date": "2014-03-22",
            "value": 48127072
        },
        {
            "date": "2014-03-23",
            "value": 48527072
        },
        {
            "date": "2014-03-24",
            "value": 48627027
        },
        {
            "date": "2014-03-25",
            "value": 48027040
        },
        {
            "date": "2014-03-26",
            "value": 48027043
        },
        {
            "date": "2014-03-27",
            "value": 48057022
        },
        {
            "date": "2014-03-28",
            "value": 49057022
        },
        {
            "date": "2014-03-29",
            "value": 50057022
        },
        {
            "date": "2014-03-30",
            "value": 51057022
        },
        {
            "date": "2014-03-31",
            "value": 52057022
        },
        {
            "date": "2014-04-01",
            "value": 53057022
        },
        {
            "date": "2014-04-02",
            "value": 54057022
        },
        {
            "date": "2014-04-03",
            "value": 52057022
        },
        {
            "date": "2014-04-04",
            "value": 55057022
        },
        {
            "date": "2014-04-05",
            "value": 58270783
        },
        {
            "date": "2014-04-06",
            "value": 56270783
        },
        {
            "date": "2014-04-07",
            "value": 55270783
        },
        {
            "date": "2014-04-08",
            "value": 58270783
        },
        {
            "date": "2014-04-09",
            "value": 59270783
        },
        {
            "date": "2014-04-10",
            "value": 60270783
        },
        {
            "date": "2014-04-11",
            "value": 61270783
        },
        {
            "date": "2014-04-12",
            "value": 62270783
        },
        {
            "date": "2014-04-13",
            "value": 63270783
        },
        {
            "date": "2014-04-14",
            "value": 64270783
        },
        {
            "date": "2014-04-15",
            "value": 65270783
        },
        {
            "date": "2014-04-16",
            "value": 66270783
        },
        {
            "date": "2014-04-17",
            "value": 67270783
        },
        {
            "date": "2014-04-18",
            "value": 68270783
        },
        {
            "date": "2014-04-19",
            "value": 69270783
        },
        {
            "date": "2014-04-20",
            "value": 70270783
        },
        {
            "date": "2014-04-21",
            "value": 71270783
        },
        {
            "date": "2014-04-22",
            "value": 72270783
        },
        {
            "date": "2014-04-23",
            "value": 73270783
        },
        {
            "date": "2014-04-24",
            "value": 74270783
        },
        {
            "date": "2014-04-25",
            "value": 75270783
        },
        {
            "date": "2014-04-26",
            "value": 76660783
        },
        {
            "date": "2014-04-27",
            "value": 77270783
        },
        {
            "date": "2014-04-28",
            "value": 78370783
        },
        {
            "date": "2014-04-29",
            "value": 79470783
        },
        {
            "date": "2014-04-30",
            "value": 80170783
        }
    ],
    [
        {
            "date": "2014-01-01",
            "value": 150000000
        },
        {
            "date": "2014-01-02",
            "value": 160379978
        },
        {
            "date": "2014-01-03",
            "value": 170493749
        },
        {
            "date": "2014-01-04",
            "value": 160785250
        },
        {
            "date": "2014-01-05",
            "value": 167391904
        },
        {
            "date": "2014-01-06",
            "value": 161576838
        },
        {
            "date": "2014-01-07",
            "value": 161413854
        },
        {
            "date": "2014-01-08",
            "value": 152177211
        },
        {
            "date": "2014-01-09",
            "value": 143762210
        },
        {
            "date": "2014-01-10",
            "value": 144381072
        },
        {
            "date": "2014-01-11",
            "value": 154352310
        },
        {
            "date": "2014-01-12",
            "value": 165531790
        },
        {
            "date": "2014-01-13",
            "value": 175748881
        },
        {
            "date": "2014-01-14",
            "value": 187064037
        },
        {
            "date": "2014-01-15",
            "value": 197520685
        },
        {
            "date": "2014-01-16",
            "value": 210176418
        },
        {
            "date": "2014-01-17",
            "value": 196122924
        },
        {
            "date": "2014-01-18",
            "value": 207337480
        },
        {
            "date": "2014-01-19",
            "value": 200258882
        },
        {
            "date": "2014-01-20",
            "value": 186829538
        },
        {
            "date": "2014-01-21",
            "value": 192456897
        },
        {
            "date": "2014-01-22",
            "value": 204299711
        },
        {
            "date": "2014-01-23",
            "value": 192759017
        },
        {
            "date": "2014-01-24",
            "value": 203596183
        },
        {
            "date": "2014-01-25",
            "value": 208107346
        },
        {
            "date": "2014-01-26",
            "value": 196359852
        },
        {
            "date": "2014-01-27",
            "value": 192570783
        },
        {
            "date": "2014-01-28",
            "value": 177967768
        },
        {
            "date": "2014-01-29",
            "value": 190632803
        },
        {
            "date": "2014-01-30",
            "value": 203725316
        },
        {
            "date": "2014-01-31",
            "value": 218226177
        },
        {
            "date": "2014-02-01",
            "value": 210698669
        },
        {
            "date": "2014-02-02",
            "value": 217640656
        },
        {
            "date": "2014-02-03",
            "value": 216142362
        },
        {
            "date": "2014-02-04",
            "value": 201410971
        },
        {
            "date": "2014-02-05",
            "value": 196704289
        },
        {
            "date": "2014-02-06",
            "value": 190436945
        },
        {
            "date": "2014-02-07",
            "value": 178891686
        },
        {
            "date": "2014-02-08",
            "value": 171613962
        },
        {
            "date": "2014-02-09",
            "value": 157579773
        },
        {
            "date": "2014-02-10",
            "value": 158677098
        },
        {
            "date": "2014-02-11",
            "value": 147129977
        },
        {
            "date": "2014-02-12",
            "value": 151561876
        },
        {
            "date": "2014-02-13",
            "value": 151627421
        },
        {
            "date": "2014-02-14",
            "value": 143543872
        },
        {
            "date": "2014-02-15",
            "value": 136581057
        },
        {
            "date": "2014-02-16",
            "value": 135560715
        },
        {
            "date": "2014-02-17",
            "value": 122625263
        },
        {
            "date": "2014-02-18",
            "value": 112091484
        },
        {
            "date": "2014-02-19",
            "value": 98810329
        },
        {
            "date": "2014-02-20",
            "value": 99882912
        },
        {
            "date": "2014-02-21",
            "value": 94943095
        },
        {
            "date": "2014-02-22",
            "value": 104875743
        },
        {
            "date": "2014-02-23",
            "value": 116383678
        },
        {
            "date": "2014-02-24",
            "value": 125028841
        },
        {
            "date": "2014-02-25",
            "value": 123967310
        },
        {
            "date": "2014-02-26",
            "value": 133167029
        },
        {
            "date": "2014-02-27",
            "value": 128577263
        },
        {
            "date": "2014-02-28",
            "value": 115836969
        },
        {
            "date": "2014-03-01",
            "value": 119264529
        },
        {
            "date": "2014-03-02",
            "value": 109363374
        },
        {
            "date": "2014-03-03",
            "value": 113985628
        },
        {
            "date": "2014-03-04",
            "value": 114650999
        },
        {
            "date": "2014-03-05",
            "value": 110866108
        },
        {
            "date": "2014-03-06",
            "value": 96473454
        },
        {
            "date": "2014-03-07",
            "value": 104075886
        },
        {
            "date": "2014-03-08",
            "value": 103568384
        },
        {
            "date": "2014-03-09",
            "value": 101534883
        },
        {
            "date": "2014-03-10",
            "value": 115825447
        },
        {
            "date": "2014-03-11",
            "value": 126133916
        },
        {
            "date": "2014-03-12",
            "value": 116502109
        },
        {
            "date": "2014-03-13",
            "value": 130169411
        },
        {
            "date": "2014-03-14",
            "value": 124296886
        },
        {
            "date": "2014-03-15",
            "value": 126347399
        },
        {
            "date": "2014-03-16",
            "value": 131483669
        },
        {
            "date": "2014-03-17",
            "value": 142811333
        },
        {
            "date": "2014-03-18",
            "value": 129675396
        },
        {
            "date": "2014-03-19",
            "value": 115514483
        },
        {
            "date": "2014-03-20",
            "value": 117630630
        },
        {
            "date": "2014-03-21",
            "value": 122340239
        },
        {
            "date": "2014-03-22",
            "value": 132349091
        },
        {
            "date": "2014-03-23",
            "value": 125613305
        },
        {
            "date": "2014-03-24",
            "value": 135592466
        },
        {
            "date": "2014-03-25",
            "value": 123408762
        },
        {
            "date": "2014-03-26",
            "value": 111991454
        },
        {
            "date": "2014-03-27",
            "value": 116123955
        },
        {
            "date": "2014-03-28",
            "value": 112817214
        },
        {
            "date": "2014-03-29",
            "value": 113029590
        },
        {
            "date": "2014-03-30",
            "value": 108753398
        },
        {
            "date": "2014-03-31",
            "value": 99383763
        },
        {
            "date": "2014-04-01",
            "value": 100151737
        },
        {
            "date": "2014-04-02",
            "value": 94985209
        },
        {
            "date": "2014-04-03",
            "value": 82913669
        },
        {
            "date": "2014-04-04",
            "value": 78748268
        },
        {
            "date": "2014-04-05",
            "value": 63829135
        },
        {
            "date": "2014-04-06",
            "value": 78694727
        },
        {
            "date": "2014-04-07",
            "value": 80868994
        },
        {
            "date": "2014-04-08",
            "value": 93799013
        },
        {
            "date": "2014-04-09",
            "value": 99042416
        },
        {
            "date": "2014-04-10",
            "value": 97298692
        },
        {
            "date": "2014-04-11",
            "value": 83353499
        },
        {
            "date": "2014-04-12",
            "value": 71248129
        },
        {
            "date": "2014-04-13",
            "value": 75253744
        },
        {
            "date": "2014-04-14",
            "value": 68976648
        },
        {
            "date": "2014-04-15",
            "value": 71002284
        },
        {
            "date": "2014-04-16",
            "value": 75052401
        },
        {
            "date": "2014-04-17",
            "value": 83894030
        },
        {
            "date": "2014-04-18",
            "value": 90236528
        },
        {
            "date": "2014-04-19",
            "value": 99739114
        },
        {
            "date": "2014-04-20",
            "value": 96407136
        },
        {
            "date": "2014-04-21",
            "value": 108323177
        },
        {
            "date": "2014-04-22",
            "value": 101578914
        },
        {
            "date": "2014-04-23",
            "value": 115877608
        },
        {
            "date": "2014-04-24",
            "value": 112088857
        },
        {
            "date": "2014-04-25",
            "value": 112071353
        },
        {
            "date": "2014-04-26",
            "value": 101790062
        },
        {
            "date": "2014-04-27",
            "value": 115003761
        },
        {
            "date": "2014-04-28",
            "value": 120457727
        },
        {
            "date": "2014-04-29",
            "value": 118253926
        },
        {
            "date": "2014-04-30",
            "value": 117956992
        }
    ],
    [
        {
            "date": "2014-01-01",
            "value": 60000000
        },
        {
            "date": "2014-01-02",
            "value": 60379978
        },
        {
            "date": "2014-01-03",
            "value": 40493749
        },
        {
            "date": "2014-01-04",
            "value": 60785250
        },
        {
            "date": "2014-01-05",
            "value": 67391904
        },
        {
            "date": "2014-01-06",
            "value": 61576838
        },
        {
            "date": "2014-01-07",
            "value": 61413854
        },
        {
            "date": "2014-01-08",
            "value": 82177211
        },
        {
            "date": "2014-01-09",
            "value": 103762210
        },
        {
            "date": "2014-01-10",
            "value": 84381072
        },
        {
            "date": "2014-01-11",
            "value": 54352310
        },
        {
            "date": "2014-01-12",
            "value": 65531790
        },
        {
            "date": "2014-01-13",
            "value": 75748881
        },
        {
            "date": "2014-01-14",
            "value": 47064037
        },
        {
            "date": "2014-01-15",
            "value": 67520685
        },
        {
            "date": "2014-01-16",
            "value": 60176418
        },
        {
            "date": "2014-01-17",
            "value": 66122924
        },
        {
            "date": "2014-01-18",
            "value": 57337480
        },
        {
            "date": "2014-01-19",
            "value": 100258882
        },
        {
            "date": "2014-01-20",
            "value": 46829538
        },
        {
            "date": "2014-01-21",
            "value": 92456897
        },
        {
            "date": "2014-01-22",
            "value": 94299711
        },
        {
            "date": "2014-01-23",
            "value": 62759017
        },
        {
            "date": "2014-01-24",
            "value": 103596183
        },
        {
            "date": "2014-01-25",
            "value": 108107346
        },
        {
            "date": "2014-01-26",
            "value": 66359852
        },
        {
            "date": "2014-01-27",
            "value": 62570783
        },
        {
            "date": "2014-01-28",
            "value": 77967768
        },
        {
            "date": "2014-01-29",
            "value": 60632803
        },
        {
            "date": "2014-01-30",
            "value": 103725316
        },
        {
            "date": "2014-01-31",
            "value": 98226177
        },
        {
            "date": "2014-02-01",
            "value": 60698669
        },
        {
            "date": "2014-02-02",
            "value": 67640656
        },
        {
            "date": "2014-02-03",
            "value": 66142362
        },
        {
            "date": "2014-02-04",
            "value": 101410971
        },
        {
            "date": "2014-02-05",
            "value": 66704289
        },
        {
            "date": "2014-02-06",
            "value": 60436945
        },
        {
            "date": "2014-02-07",
            "value": 78891686
        },
        {
            "date": "2014-02-08",
            "value": 71613962
        },
        {
            "date": "2014-02-09",
            "value": 107579773
        },
        {
            "date": "2014-02-10",
            "value": 58677098
        },
        {
            "date": "2014-02-11",
            "value": 87129977
        },
        {
            "date": "2014-02-12",
            "value": 51561876
        },
        {
            "date": "2014-02-13",
            "value": 51627421
        },
        {
            "date": "2014-02-14",
            "value": 83543872
        },
        {
            "date": "2014-02-15",
            "value": 66581057
        },
        {
            "date": "2014-02-16",
            "value": 65560715
        },
        {
            "date": "2014-02-17",
            "value": 62625263
        },
        {
            "date": "2014-02-18",
            "value": 92091484
        },
        {
            "date": "2014-02-19",
            "value": 48810329
        },
        {
            "date": "2014-02-20",
            "value": 49882912
        },
        {
            "date": "2014-02-21",
            "value": 44943095
        },
        {
            "date": "2014-02-22",
            "value": 104875743
        },
        {
            "date": "2014-02-23",
            "value": 96383678
        },
        {
            "date": "2014-02-24",
            "value": 105028841
        },
        {
            "date": "2014-02-25",
            "value": 63967310
        },
        {
            "date": "2014-02-26",
            "value": 63167029
        },
        {
            "date": "2014-02-27",
            "value": 68577263
        },
        {
            "date": "2014-02-28",
            "value": 95836969
        },
        {
            "date": "2014-03-01",
            "value": 99264529
        },
        {
            "date": "2014-03-02",
            "value": 109363374
        },
        {
            "date": "2014-03-03",
            "value": 93985628
        },
        {
            "date": "2014-03-04",
            "value": 94650999
        },
        {
            "date": "2014-03-05",
            "value": 90866108
        },
        {
            "date": "2014-03-06",
            "value": 46473454
        },
        {
            "date": "2014-03-07",
            "value": 84075886
        },
        {
            "date": "2014-03-08",
            "value": 103568384
        },
        {
            "date": "2014-03-09",
            "value": 101534883
        },
        {
            "date": "2014-03-10",
            "value": 95825447
        },
        {
            "date": "2014-03-11",
            "value": 66133916
        },
        {
            "date": "2014-03-12",
            "value": 96502109
        },
        {
            "date": "2014-03-13",
            "value": 80169411
        },
        {
            "date": "2014-03-14",
            "value": 84296886
        },
        {
            "date": "2014-03-15",
            "value": 86347399
        },
        {
            "date": "2014-03-16",
            "value": 31483669
        },
        {
            "date": "2014-03-17",
            "value": 82811333
        },
        {
            "date": "2014-03-18",
            "value": 89675396
        },
        {
            "date": "2014-03-19",
            "value": 95514483
        },
        {
            "date": "2014-03-20",
            "value": 97630630
        },
        {
            "date": "2014-03-21",
            "value": 62340239
        },
        {
            "date": "2014-03-22",
            "value": 62349091
        },
        {
            "date": "2014-03-23",
            "value": 65613305
        },
        {
            "date": "2014-03-24",
            "value": 65592466
        },
        {
            "date": "2014-03-25",
            "value": 63408762
        },
        {
            "date": "2014-03-26",
            "value": 91991454
        },
        {
            "date": "2014-03-27",
            "value": 96123955
        },
        {
            "date": "2014-03-28",
            "value": 92817214
        },
        {
            "date": "2014-03-29",
            "value": 93029590
        },
        {
            "date": "2014-03-30",
            "value": 108753398
        },
        {
            "date": "2014-03-31",
            "value": 49383763
        },
        {
            "date": "2014-04-01",
            "value": 100151737
        },
        {
            "date": "2014-04-02",
            "value": 44985209
        },
        {
            "date": "2014-04-03",
            "value": 52913669
        },
        {
            "date": "2014-04-04",
            "value": 48748268
        },
        {
            "date": "2014-04-05",
            "value": 23829135
        },
        {
            "date": "2014-04-06",
            "value": 58694727
        },
        {
            "date": "2014-04-07",
            "value": 50868994
        },
        {
            "date": "2014-04-08",
            "value": 43799013
        },
        {
            "date": "2014-04-09",
            "value": 4042416
        },
        {
            "date": "2014-04-10",
            "value": 47298692
        },
        {
            "date": "2014-04-11",
            "value": 53353499
        },
        {
            "date": "2014-04-12",
            "value": 71248129
        },
        {
            "date": "2014-04-13",
            "value": 75253744
        },
        {
            "date": "2014-04-14",
            "value": 68976648
        },
        {
            "date": "2014-04-15",
            "value": 71002284
        },
        {
            "date": "2014-04-16",
            "value": 75052401
        },
        {
            "date": "2014-04-17",
            "value": 83894030
        },
        {
            "date": "2014-04-18",
            "value": 50236528
        },
        {
            "date": "2014-04-19",
            "value": 59739114
        },
        {
            "date": "2014-04-20",
            "value": 56407136
        },
        {
            "date": "2014-04-21",
            "value": 108323177
        },
        {
            "date": "2014-04-22",
            "value": 101578914
        },
        {
            "date": "2014-04-23",
            "value": 95877608
        },
        {
            "date": "2014-04-24",
            "value": 62088857
        },
        {
            "date": "2014-04-25",
            "value": 92071353
        },
        {
            "date": "2014-04-26",
            "value": 81790062
        },
        {
            "date": "2014-04-27",
            "value": 105003761
        },
        {
            "date": "2014-04-28",
            "value": 100457727
        },
        {
            "date": "2014-04-29",
            "value": 98253926
        },
        {
            "date": "2014-04-30",
            "value": 67956992
        }
    ]
]

console.log("CE au ei ", zxzxz)
        Draw(big);
      



        console.log("REAL ", big)
    }
    Graph(OcnaChart, brown, holt);







})