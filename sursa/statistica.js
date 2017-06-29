var tMed;
var tMedMin;
var tMedMax;
$(function () {


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
    var dataBar = [];

    $("#selectOption").change(function () {
        console.log($("#selectOption").val());
        Tabel($("#selectOption").val());
        ChartSelect($("#selectOption").val());
    })

    $("#an").change(function () {
        console.log($("#an").val())
        console.log(bigData[$("#an").val()])
        Chartan(bigData[$("#an").val()]);
    })
    TmedAn();
    Tabel("Ocna");
    Chart(OcnaAll);
    Chartan(bigData[2016]);

    function ChartSelect(data) {
        switch (data) {
            case "Ocna":
                Chart(OcnaAll)
                console.log(OcnaChart)
                break;
            case "Botosani":
                Chart(BotosaniAll)
                break;
            case "Iasi":
                Chart(IasiAll)
                break;
            case "Ceahlau":
                Chart(CeahlauChart)
                break;
            case "Cluj":
                Chart(ClujAll)
                break;
            case "Bacau":
                Chart(BacauAll)
                break;
            case "Miercurea":
                Chart(MiercureaAll)
                break;
            case "Deva":
                Chart(DevaAll)
                break;
            case "Sibiu":
                Chart(SibiuAll)
                break;
            case "Varfu":
                Chart(VarfuAll)
                break;
            case "Caransebes":
                Chart(CaransebesAll)
                break;
            case "Galati":
                Chart(GalatiAll)
                break;
            case "Tulcea":
                Chart(TulceaAll)
                break;
            case "Ramnicu":
                Chart(RamnicuAll)
                break;
            case "Buzau":
                Chart(BuzauAll)
                break;
            case "Sulina":
                Chart(SulinaAll)
                break;
            case "Drobeta":
                Chart(DrobetaAll)
                break;
            case "Bucuresti":
                Chart(BucurestiAll)
                break;
            case "Craiova":
                Chart(CraiovaAll)
                break;
            case "Calarasi":
                Chart(CalarasiAll)
                break;
            case "Rosiorii":
                Chart(RosioriiAll)
                break;
            case "Constanta":
                Chart(ConstantaAll)
                break;
            case "Arad":
                Chart(AradAll)
                break;
        }
    };


    function Tabel(dataMedii) {
        switch (dataMedii) {
            case "Ocna":
                dataMedii = Ocna
                Run(dataMedii)
                break;
            case "Botosani":
                dataMedii = Botosani
                Run(dataMedii)
                break;
            case "Iasi":
                dataMedii = Iasi
                Run(dataMedii)
                break;
            case "Iasi":
                dataMedii = Iasi
                Run(dataMedii)
                break;
            case "Ceahlau":
                dataMedii = Ceahlau
                Run(dataMedii)
                break;
            case "Cluj":
                dataMedii = Cluj
                Run(dataMedii)
                break;
            case "Bacau":
                dataMedii = Bacau
                Run(dataMedii)
                break;
            case "Miercurea":
                dataMedii = Miercurea
                Run(dataMedii)
                break;
            case "Deva":
                dataMedii = Deva
                Run(dataMedii)
                break;
            case "Sibiu":
                dataMedii = Sibiu
                Run(dataMedii)
                break;
            case "Varfu":
                dataMedii = Varfu
                Run(dataMedii)
                break;
            case "Caransebes":
                dataMedii = Caransebes
                Run(dataMedii)
                break;
            case "Galati":
                dataMedii = Galati
                Run(dataMedii)
                break;
            case "Tulcea":
                dataMedii = Tulcea
                Run(dataMedii)
                break;
            case "Ramnicu":
                dataMedii = Ramnicu
                Run(dataMedii)
                break;
            case "Buzau":
                dataMedii = Buzau
                Run(dataMedii)
                break;
            case "Sulina":
                dataMedii = Sulina
                Run(dataMedii)
                break;
            case "Drobeta":
                dataMedii = Drobeta
                Run(dataMedii)
                break;
            case "Bucuresti":
                dataMedii = Bucuresti
                Run(dataMedii)
                break;
            case "Craiova":
                dataMedii = Craiova
                Run(dataMedii)
                break;
            case "Calarasi":
                dataMedii = Calarasi
                Run(dataMedii)
                break;
            case "Rosiorii":
                dataMedii = Rosiorii
                Run(dataMedii)
                break;
            case "Constanta":
                dataMedii = Constanta
                Run(dataMedii)
                break;
        }
        function Run(dataMedii) {
            console.log(dataMedii);
             var x = 1961 
             for (var j = 0; x < 2016; j++){
                  x = 1961 + j;
                 
                 if(x == 1980 || x == 1984 ||x == 1991 || x == 2000 || x == 2009  || x == 2015){
                     var z = 300 / 365;
                    dataBar[j] = {
                        an:x,
                        value: z.toFixed(3)
                    }
                 }else{
                     var z = dataMedii[x].TemperaturaMedie / 365
                    dataBar[j] = {
                        an:x,
                        value: z.toFixed(3)
                    }
                 }
                   //console.log("DATA BAR ", dataBar);
             }

           
            ChartBar (dataBar);
            $("#tabel1").remove();
            $("#tab").append("<tbody id=tabel1></tbody>");
            for (i = 1961; i < dataMedii.length; i++) {
                if (i == 1980 || i == 1984 || i == 1991 || i == 2015 || i == 2000 || i == 2009) { i++ }
                var temp1 = (dataMedii[i].TemperaturaMedie / 365).toFixed(3) + " ℃";
                var temp2 = (dataMedii[i].TemperaturaMedieMaxima / 365).toFixed(3) + " ℃";
                var temp3 = (dataMedii[i].TemperaturaMedieMinima / 365).toFixed(3) + " ℃";
                $("#tabel1").append("<tr>" + "<td>" + i + "</td>" + "<td>" + temp1 + "</td>" + "<td>" + temp2 + "</td>" + "<td>" + temp3 + "</td>" + "</tr>");
            }
        }


    }
    //Run(Ocna);
    var z = 0
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
                                "value": (tMedO / 365).toFixed(2)
                            }
                            OcnaChart[z + 1] = {
                                "name": "Ocna ",
                                "date": an,
                                "value": "1"
                            }
                        } else {
                            OcnaChart[z] = {
                                "name": "Ocna ",
                                "date": an,
                                "value": (tMedO / 365).toFixed(2)
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
                                "value": (tMedB / 365).toFixed(2)
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
                                "value": (tMedB / 365).toFixed(2)
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
                                "value": (tMedi / 365).toFixed(2)
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
                                "value": (tMedi / 365).toFixed(2)
                            }
                        }
                        break;
                    case "Ceahlau ":
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
                                "value": (tMedc / 365).toFixed(2)
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
                                "value": (tMedc / 365).toFixed(2)
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
                                "value": (tMedcl / 365).toFixed(2)
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
                                "value": (tMedcl / 365).toFixed(2)
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
                                "value": (tMedba / 365).toFixed(2)
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
                                "value": (tMedba / 365).toFixed(2)
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
                                "value": (tMedmi / 365).toFixed(2)
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
                                "value": (tMedmi / 365).toFixed(2)
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
                                "value": (tMedA / 365).toFixed(2)
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
                                "value": (tMedA / 365).toFixed(2)
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
                                "value": (tMedD / 365).toFixed(2)
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
                                "value": (tMedD / 365).toFixed(2)
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
                                "value": (tMedS / 365).toFixed(2)
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
                                "value": (tMedS / 365).toFixed(2)
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
                                "value": (tMedV / 365).toFixed(2)
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
                                "value": (tMedV / 365).toFixed(2)
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
                                "value": (tMedC / 365).toFixed(2)
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
                                "value": (tMedC / 365).toFixed(2)
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
                                "value": (tMedG / 365).toFixed(2)
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
                                "value": (tMedG / 365).toFixed(2)
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
                                "value": (tMedT / 365).toFixed(2)
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
                                "value": (tMedT / 365).toFixed(2)
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
                                "value": (tMedR / 365).toFixed(2)
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
                                "value": (tMedR / 365).toFixed(2)
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
                                "value": (tMedbu / 365).toFixed(2)
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
                                "value": (tMedbu / 365).toFixed(2)
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
                                "value": (tMedsu / 365).toFixed(2)
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
                                "value": (tMedsu / 365).toFixed(2)
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
                                "value": (tMeddr / 365).toFixed(2)
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
                                "value": (tMeddr / 365).toFixed(2)
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
                                "value": (tMedbb / 365).toFixed(2)
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
                                "value": (tMedbb / 365).toFixed(2)
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
                                "value": (tMedcr / 365).toFixed(2)
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
                                "value": (tMedcr / 365).toFixed(2)
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
                                "value": (tMedca / 365).toFixed(2)
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
                                "value": (tMedca / 365).toFixed(2)
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
                                "value": (tMed / 365).toFixed(2)
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
                                "value": (tMed / 365).toFixed(2)
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
                                "value": (tMedC / 365).toFixed(2)
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
                                "value": (tMedC / 365).toFixed(2)
                            }
                        }
                        break;
                }
            }
        }
    }
    //console.log("temperatura Ocna", Ocna);
    //console.log("temperatura", Varfu);
    function isInt(value) {
        return !isNaN(value) && (function (x) { return (x | 0) === x; })(parseFloat(value))
    }


    $(function () {
        $('#tableslim').slimScroll({
            height: '250px'
        });
    });

    

});

