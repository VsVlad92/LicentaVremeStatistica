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

    ChartPred1(OcnaChart);

    //TabelPredictie("Ocna");

    function ChartSelectpred(data) {
        switch (data) {
            case "Ocna":
                ChartPred1(OcnaChart)
                console.log(OcnaChart)
                MetodaModificariiProcentuale(OcnaChart);
                MetodaNivelariiexponentiale(OcnaChart);
                break;
            case "Botosani":
                ChartPred1(BotosaniChart)
                MetodaModificariiProcentuale(BotosaniChart);
                MetodaNivelariiexponentiale(BotosaniChart);
                break;
            case "Iasi":
                ChartPred1(IasiChart)
                MetodaModificariiProcentuale(IasiChart);
                MetodaNivelariiexponentiale(IasiChart);
                break;
            case "Ceahlau":
                ChartPred1(CeahlauChart)
                MetodaModificariiProcentuale(CeahlauChart);
                MetodaNivelariiexponentiale(CeahlauChart);
                break;
            case "Cluj":
                ChartPred1(ClujChart)
                MetodaModificariiProcentuale(ClujChart);
                MetodaNivelariiexponentiale(ClujChart);
                break;
            case "Bacau":
                ChartPred1(BacauChart)
                MetodaModificariiProcentuale(BacauChart);
                MetodaNivelariiexponentiale(BacauChart);
                break;
            case "Miercurea":
                ChartPred1(MiercureaChart)
                MetodaModificariiProcentuale(MiercureaChart);
                MetodaNivelariiexponentiale(MiercureaChart);
                break;
            case "Deva":
                ChartPred1(DevaChart)
                MetodaModificariiProcentuale(DevaChart);
                MetodaNivelariiexponentiale(DevaChart);
                break;
            case "Sibiu":
                ChartPred1(SibiuChart)
                MetodaModificariiProcentuale(SibiuChart);
                MetodaNivelariiexponentiale(SibiuChart);
                break;
            case "Varfu":
                ChartPred1(VarfuChart)
                MetodaModificariiProcentuale(VarfuChart);
                MetodaNivelariiexponentiale(VarfuChart);
                break;
            case "Caransebes":
                ChartPred1(CaransebesChart)
                MetodaModificariiProcentuale(CaransebesChart);
                MetodaNivelariiexponentiale(CaransebesChart);
                break;
            case "Galati":
                ChartPred1(GalatiChart)
                MetodaModificariiProcentuale(GalatiChart);
                MetodaNivelariiexponentiale(GalatiChart);
                break;
            case "Tulcea":
                ChartPred1(TulceaChart)
                MetodaModificariiProcentuale(TulceaChart);
                MetodaNivelariiexponentiale(TulceaChart);
                break;
            case "Ramnicu":
                ChartPred1(RamnicuChart)
                MetodaModificariiProcentuale(RamnicuChart);
                MetodaNivelariiexponentiale(RamnicuChart);
                break;
            case "Buzau":
                ChartPred1(BuzauChart)
                MetodaModificariiProcentuale(BuzauChart);
                MetodaNivelariiexponentiale(BuzauChart);
                break;
            case "Sulina":
                ChartPred1(SulinaChart)
                MetodaModificariiProcentuale(SulinaChart);
                MetodaNivelariiexponentiale(SulinaChart);
                break;
            case "Drobeta":
                ChartPred1(DrobetaChart)
                MetodaModificariiProcentuale(DrobetaChart);
                MetodaNivelariiexponentiale(DrobetaChart);
                break;
            case "Bucuresti":
                ChartPred1(BucurestiChart)
                MetodaModificariiProcentuale(BucurestiChart);
                MetodaNivelariiexponentiale(BucurestiChart);
                break;
            case "Craiova":
                ChartPred1(CraiovaChart)
                MetodaModificariiProcentuale(CraiovaChart);
                MetodaNivelariiexponentiale(CraiovaChart);
                break;
            case "Calarasi":
                ChartPred1(CalarasiChart)
                MetodaModificariiProcentuale(CalarasiChart);
                MetodaNivelariiexponentiale(CalarasiChart);
                break;
            case "Rosiorii":
                ChartPred1(RosioriiChart)
                MetodaModificariiProcentuale(RosioriiChart);
                MetodaNivelariiexponentiale(RosioriiChart);
                break;
            case "Constanta":
                ChartPred1(ConstantaChart)
                MetodaModificariiProcentuale(ConstantaChart);
                MetodaNivelariiexponentiale(ConstantaChart);
                break;
            case "Arad":
                ChartPred1(AradChart)
                MetodaModificariiProcentuale(AradChart);
                MetodaNivelariiexponentiale(AradChart);
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
        var MMP = (Yt - Y0)/55;
        var Y = (1 + MMP)*Yt;
        console.log("Metoda modificarii procentuale mobile", Y)
        //$("#predictieMMP").val(Y.toFixed(0))
        return Y;
    }
    function MetodaModificariiProcentuale(data) {
        var Yt = parseInt(data[55].value);
        var Y0 = parseInt(data[0].value);
        var MMP = (Yt - Y0)/54;
        var Y = (Y0 + 55 * MMP);
        //console.log("Metoda modificarii procentuale ", Y)
        $("#predictieMMP").val(Y.toFixed(0))
        return Y;
    }

    function MetodaNivelariiexponentiale(data){
        var coef = 0.5;
        var Yt = parseInt(data[55].value);
        var Ytt = parseInt(data[53].value);
        var Y = 0.5 * Yt +(1-0.5)*Ytt;
        console.log("MetodaNivelariiexponentiale ", Y)
        $("#predictieMME").val(Y.toFixed(0))
    }

    // MetodaModificariiProcentuale(OcnaChart);
    //})


    MetodaModificariiProcentuale(OcnaChart);
    MetodaNivelariiexponentiale(OcnaChart);
    //MetodaModificariiProcentualeMobile(OcnaChart);





})