var tMed;
var tMedMin;
var tMedMax;
$(function() {

   
    var Ocna =[]; var OcnaChart =[];

 
    var Botosani =[];var Iasi =[];var Ceahlau =[];var Cluj =[];var Bacau =[];
    var Miercurea =[];var Arad = [];var Deva = [];var Sibiu =[];
    var Varfu =[];
    var Caransebes =[];
    var Galati =[];
    var Tulcea = [];
    var Ramnicu = [];
    var Buzau = [];
    var Sulina = [];
    var Drobeta = [];
    var Bucuresti = [];
    var Craiova = [];
    var Calarasi = [];
    var Rosiorii = [];
    var Constanta = [];
    var Tmed = [{
           }];

        $("#selectOption").change(function(){
            console.log($("#selectOption").val());
            Tabel($("#selectOption").val());
        })
         TmedAn();
        Tabel("Ocna");
        console.log("Ocna Chart",OcnaChart)
        Chart(OcnaChart);
        
        
        function Tabel(dataMedii){
            switch(dataMedii){
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
            function Run(dataMedii){
                console.log(dataMedii);
                $("#tabel1").remove();
                $("#tab").append("<tbody id=tabel1></tbody>");
                for(i=1961; i<dataMedii.length; i++){
                        if(i==1980 || i==1984 || i== 1991 || i==2015 || i==2000 || i==2009){i++}
                        var temp1 = dataMedii[i].TemperaturaMedie/365;
                        var temp2 = dataMedii[i].TemperaturaMedieMaxima/365;
                        var temp3 = dataMedii[i].TemperaturaMedieMinima/365;
                        $("#tabel1").append("<tr>"+"<td>"+i+"</td>"+"<td>"+temp1+"</td>"+"<td>"+temp2+"</td>"+"<td>"+temp3+"</td>"+"</tr>");
                }
            }
           

        }
       //Run(Ocna);
        var z =0
        function TmedAn(){
          for(var i=1961;i<=2016;i++) { 
                tMed = 0;
                tMedMin = 0;
                tMedMax = 0;
           for(var j=0;j<bigData[i].length;j++){
                switch(bigData[i][j].CODST){
                    case "15015":
                        if(isInt(bigData[i][j].TMED) && (bigData[i][j].TMED!=" .0")){
                            tMed = tMed + parseInt(bigData[i][j].TMED);
                        }
                        
                        if(isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX!=" .0")){
                            tMedMax = tMedMax + parseInt(bigData[i][j].TMAX);
                        }
                        if(isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN!=" .0")){
                            tMedMin = tMedMin + parseInt(bigData[i][j].TMIN);
                        }
                        Ocna[i] = {
                            Statia: "Ocna",
                            TemperaturaMedie: tMed,
                            TemperaturaMedieMaxima: tMedMax,
                            TemperaturaMedieMinima: tMedMin
                        }
                        
                         var an = i.toString();
                         z = i-1961
                         if(z==22 || z==29 || z==38  || z==53 || z==18 || z==47 ){
                              OcnaChart[z]={
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                                OcnaChart[z+1]={
                                "date":an,
                                "value":""
                            }
                         }else{
                            OcnaChart[z]={
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                         }
                        break;
                    case "15020":
                        if(isInt(bigData[i][j].TMED) && (bigData[i][j].TMED!=" .0")){
                            tMed = tMed + parseInt(bigData[i][j].TMED);
                        }
                        if(isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX!=" .0")){
                            tMedMax = tMedMax + parseInt(bigData[i][j].TMAX);
                        }
                        if(isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN!=" .0")){
                            tMedMin = tMedMin + parseInt(bigData[i][j].TMIN);
                        }
                        Botosani[i] = {
                            Statia: "Botosani",
                            TemperaturaMedie: tMed,
                            TemperaturaMedieMaxima: tMedMax,
                            TemperaturaMedieMinima: tMedMin
                        }
                        break;
                    case "15090":
                        if(isInt(bigData[i][j].TMED) && (bigData[i][j].TMED!=" .0")){
                            tMed = tMed + parseInt(bigData[i][j].TMED);
                        }
                        if(isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX!=" .0")){
                            tMedMax = tMedMax + parseInt(bigData[i][j].TMAX);
                        }
                        if(isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN!=" .0")){
                            tMedMin = tMedMin + parseInt(bigData[i][j].TMIN);
                        }
                        Iasi[i] = {
                            Statia: "Iasi",
                            TemperaturaMedie: tMed,
                            TemperaturaMedieMaxima: tMedMax,
                            TemperaturaMedieMinima: tMedMin
                        }
                        break;
                    case "15108":
                        if(isInt(bigData[i][j].TMED) && (bigData[i][j].TMED!=" .0")){
                            tMed = tMed + parseInt(bigData[i][j].TMED);
                        }
                        if(isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX!=" .0")){
                            tMedMax = tMedMax + parseInt(bigData[i][j].TMAX);
                        }
                        if(isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN!=" .0")){
                            tMedMin = tMedMin + parseInt(bigData[i][j].TMIN);
                        }
                        Ceahlau[i] = {
                            Statia: "Ceahlau",
                            TemperaturaMedie: tMed,
                            TemperaturaMedieMaxima: tMedMax,
                            TemperaturaMedieMinima: tMedMin
                        }
                        break;
                    case "15120":
                        if(isInt(bigData[i][j].TMED) && (bigData[i][j].TMED!=" .0")){
                            tMed = tMed + parseInt(bigData[i][j].TMED);
                        }
                        if(isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX!=" .0")){
                            tMedMax = tMedMax + parseInt(bigData[i][j].TMAX);
                        }
                        if(isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN!=" .0")){
                            tMedMin = tMedMin + parseInt(bigData[i][j].TMIN);
                        }
                        Cluj[i] = {
                            Statia: "Cluj",
                            TemperaturaMedie: tMed,
                            TemperaturaMedieMaxima: tMedMax,
                            TemperaturaMedieMinima: tMedMin
                        }
                        break;
                     case "15150":
                        if(isInt(bigData[i][j].TMED) && (bigData[i][j].TMED!=" .0")){
                            tMed = tMed + parseInt(bigData[i][j].TMED);
                        }
                        if(isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX!=" .0")){
                            tMedMax = tMedMax + parseInt(bigData[i][j].TMAX);
                        }
                        if(isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN!=" .0")){
                            tMedMin = tMedMin + parseInt(bigData[i][j].TMIN);
                        }
                        Bacau[i] = {
                            Statia: "Bacau",
                            TemperaturaMedie: tMed,
                            TemperaturaMedieMaxima: tMedMax,
                            TemperaturaMedieMinima: tMedMin
                        }
                        break;
                    case "15170":
                        if(isInt(bigData[i][j].TMED) && (bigData[i][j].TMED!=" .0")){
                            tMed = tMed + parseInt(bigData[i][j].TMED);
                        }
                        if(isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX!=" .0")){
                            tMedMax = tMedMax + parseInt(bigData[i][j].TMAX);
                        }
                        if(isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN!=" .0")){
                            tMedMin = tMedMin + parseInt(bigData[i][j].TMIN);
                        }
                        Miercurea[i] = {
                            Statia: "Miercurea-Ciuc",
                            TemperaturaMedie: tMed,
                            TemperaturaMedieMaxima: tMedMax,
                            TemperaturaMedieMinima: tMedMin
                        }
                        break;
                    case "15200":
                        if(isInt(bigData[i][j].TMED) && (bigData[i][j].TMED!=" .0")){
                            tMed = tMed + parseInt(bigData[i][j].TMED);
                        }
                        if(isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX!=" .0")){
                            tMedMax = tMedMax + parseInt(bigData[i][j].TMAX);
                        }
                        if(isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN!=" .0")){
                            tMedMin = tMedMin + parseInt(bigData[i][j].TMIN);
                        }
                        Arad[i] = {
                            Statia: "Arad",
                            TemperaturaMedie: tMed,
                            TemperaturaMedieMaxima: tMedMax,
                            TemperaturaMedieMinima: tMedMin
                        }
                        break;
                    case "15230":
                        if(isInt(bigData[i][j].TMED) && (bigData[i][j].TMED!=" .0")){
                            tMed = tMed + parseInt(bigData[i][j].TMED);
                        }
                        if(isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX!=" .0")){
                            tMedMax = tMedMax + parseInt(bigData[i][j].TMAX);
                        }
                        if(isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN!=" .0")){
                            tMedMin = tMedMin + parseInt(bigData[i][j].TMIN);
                        }
                        Deva[i] = {
                            Statia: "Deva",
                            TemperaturaMedie: tMed,
                            TemperaturaMedieMaxima: tMedMax,
                            TemperaturaMedieMinima: tMedMin
                        }
                        break;
                    case "15260":
                        if(isInt(bigData[i][j].TMED) && (bigData[i][j].TMED!=" .0")){
                            tMed = tMed + parseInt(bigData[i][j].TMED);
                        }
                        if(isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX!=" .0")){
                            tMedMax = tMedMax + parseInt(bigData[i][j].TMAX);
                        }
                        if(isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN!=" .0")){
                            tMedMin = tMedMin + parseInt(bigData[i][j].TMIN);
                        }
                        Sibiu[i] = {
                            Statia: "Sibiu",
                            TemperaturaMedie: tMed,
                            TemperaturaMedieMaxima: tMedMax,
                            TemperaturaMedieMinima: tMedMin
                        }
                        break;
                    case "15280":
                        if(isInt(bigData[i][j].TMED) && (bigData[i][j].TMED!=" .0")){
                            tMed = tMed + parseInt(bigData[i][j].TMED);
                        }
                        if(isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX!=" .0")){
                            tMedMax = tMedMax + parseInt(bigData[i][j].TMAX);
                        }
                        if(isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN!=" .0")){
                            tMedMin = tMedMin + parseInt(bigData[i][j].TMIN);
                        }
                        Varfu[i] = {
                            Statia: "Varfu Omu",
                            TemperaturaMedie: tMed,
                            TemperaturaMedieMaxima: tMedMax,
                            TemperaturaMedieMinima: tMedMin
                        }
                        break;
                    case "15292":
                        if(isInt(bigData[i][j].TMED) && (bigData[i][j].TMED!=" .0")){
                            tMed = tMed + parseInt(bigData[i][j].TMED);
                        }
                        if(isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX!=" .0")){
                            tMedMax = tMedMax + parseInt(bigData[i][j].TMAX);
                        }
                        if(isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN!=" .0")){
                            tMedMin = tMedMin + parseInt(bigData[i][j].TMIN);
                        }
                        Caransebes[i] = {
                            Statia: "Caransebes",
                            TemperaturaMedie: tMed,
                            TemperaturaMedieMaxima: tMedMax,
                            TemperaturaMedieMinima: tMedMin
                        }
                        break;
                    case "15310":
                        if(isInt(bigData[i][j].TMED) && (bigData[i][j].TMED!=" .0")){
                            tMed = tMed + parseInt(bigData[i][j].TMED);
                        }
                        if(isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX!=" .0")){
                            tMedMax = tMedMax + parseInt(bigData[i][j].TMAX);
                        }
                        if(isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN!=" .0")){
                            tMedMin = tMedMin + parseInt(bigData[i][j].TMIN);
                        }
                        Galati[i] = {
                            Statia: "Galati",
                            TemperaturaMedie: tMed,
                            TemperaturaMedieMaxima: tMedMax,
                            TemperaturaMedieMinima: tMedMin
                        }
                        break;
                    case "15335":
                        if(isInt(bigData[i][j].TMED) && (bigData[i][j].TMED!=" .0")){
                            tMed = tMed + parseInt(bigData[i][j].TMED);
                        }
                        if(isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX!=" .0")){
                            tMedMax = tMedMax + parseInt(bigData[i][j].TMAX);
                        }
                        if(isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN!=" .0")){
                            tMedMin = tMedMin + parseInt(bigData[i][j].TMIN);
                        }
                        Tulcea[i] = {
                            Statia: "Tulcea",
                            TemperaturaMedie: tMed,
                            TemperaturaMedieMaxima: tMedMax,
                            TemperaturaMedieMinima: tMedMin
                        }
                        break;
                    case "15346":
                        if(isInt(bigData[i][j].TMED) && (bigData[i][j].TMED!=" .0")){
                            tMed = tMed + parseInt(bigData[i][j].TMED);
                        }
                        if(isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX!=" .0")){
                            tMedMax = tMedMax + parseInt(bigData[i][j].TMAX);
                        }
                        if(isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN!=" .0")){
                            tMedMin = tMedMin + parseInt(bigData[i][j].TMIN);
                        }
                        Ramnicu[i] = {
                            Statia: "Ramnicu Valcea",
                            TemperaturaMedie: tMed,
                            TemperaturaMedieMaxima: tMedMax,
                            TemperaturaMedieMinima: tMedMin
                        }
                        break;
                    case "15350":
                        if(isInt(bigData[i][j].TMED) && (bigData[i][j].TMED!=" .0")){
                            tMed = tMed + parseInt(bigData[i][j].TMED);
                        }
                        if(isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX!=" .0")){
                            tMedMax = tMedMax + parseInt(bigData[i][j].TMAX);
                        }
                        if(isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN!=" .0")){
                            tMedMin = tMedMin + parseInt(bigData[i][j].TMIN);
                        }
                        Buzau[i] = {
                            Statia: "Buzau",
                            TemperaturaMedie: tMed,
                            TemperaturaMedieMaxima: tMedMax,
                            TemperaturaMedieMinima: tMedMin
                        }
                        break; 
                    case "15360":
                        if(isInt(bigData[i][j].TMED) && (bigData[i][j].TMED!=" .0")){
                            tMed = tMed + parseInt(bigData[i][j].TMED);
                        }
                        if(isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX!=" .0")){
                            tMedMax = tMedMax + parseInt(bigData[i][j].TMAX);
                        }
                        if(isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN!=" .0")){
                            tMedMin = tMedMin + parseInt(bigData[i][j].TMIN);
                        }
                        Sulina[i] = {
                            Statia: "Sulina",
                            TemperaturaMedie: tMed,
                            TemperaturaMedieMaxima: tMedMax,
                            TemperaturaMedieMinima: tMedMin
                        }
                        break;
                    case "15410":
                        if(isInt(bigData[i][j].TMED) && (bigData[i][j].TMED!=" .0")){
                            tMed = tMed + parseInt(bigData[i][j].TMED);
                        }
                        if(isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX!=" .0")){
                            tMedMax = tMedMax + parseInt(bigData[i][j].TMAX);
                        }
                        if(isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN!=" .0")){
                            tMedMin = tMedMin + parseInt(bigData[i][j].TMIN);
                        }
                        Drobeta[i] = {
                            Statia: "Drobeta Turnul Severin",
                            TemperaturaMedie: tMed,
                            TemperaturaMedieMaxima: tMedMax,
                            TemperaturaMedieMinima: tMedMin
                        }
                        break;
                    case "15420":
                        if(isInt(bigData[i][j].TMED) && (bigData[i][j].TMED!=" .0")){
                            tMed = tMed + parseInt(bigData[i][j].TMED);
                        }
                        if(isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX!=" .0")){
                            tMedMax = tMedMax + parseInt(bigData[i][j].TMAX);
                        }
                        if(isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN!=" .0")){
                            tMedMin = tMedMin + parseInt(bigData[i][j].TMIN);
                        }
                        Bucuresti[i] = {
                            Statia: "Bucuresti-Baneasa",
                            TemperaturaMedie: tMed,
                            TemperaturaMedieMaxima: tMedMax,
                            TemperaturaMedieMinima: tMedMin
                        }
                        break;
                    case "15450":
                        if(isInt(bigData[i][j].TMED) && (bigData[i][j].TMED!=" .0")){
                            tMed = tMed + parseInt(bigData[i][j].TMED);
                        }
                        if(isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX!=" .0")){
                            tMedMax = tMedMax + parseInt(bigData[i][j].TMAX);
                        }
                        if(isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN!=" .0")){
                            tMedMin = tMedMin + parseInt(bigData[i][j].TMIN);
                        }
                        Craiova[i] = {
                            Statia: "Craiova",
                            TemperaturaMedie: tMed,
                            TemperaturaMedieMaxima: tMedMax,
                            TemperaturaMedieMinima: tMedMin
                        }
                        break;
                    case "15460":
                        if(isInt(bigData[i][j].TMED) && (bigData[i][j].TMED!=" .0")){
                            tMed = tMed + parseInt(bigData[i][j].TMED);
                        }
                        if(isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX!=" .0")){
                            tMedMax = tMedMax + parseInt(bigData[i][j].TMAX);
                        }
                        if(isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN!=" .0")){
                            tMedMin = tMedMin + parseInt(bigData[i][j].TMIN);
                        }
                        Calarasi[i] = {
                            Statia: "Calarasi",
                            TemperaturaMedie: tMed,
                            TemperaturaMedieMaxima: tMedMax,
                            TemperaturaMedieMinima: tMedMin
                        }
                        break;  
                    case "15470":
                        if(isInt(bigData[i][j].TMED) && (bigData[i][j].TMED!=" .0")){
                            tMed = tMed + parseInt(bigData[i][j].TMED);
                        }
                        if(isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX!=" .0")){
                            tMedMax = tMedMax + parseInt(bigData[i][j].TMAX);
                        }
                        if(isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN!=" .0")){
                            tMedMin = tMedMin + parseInt(bigData[i][j].TMIN);
                        }
                        Rosiorii[i] = {
                            Statia: "Rosiorii de Vede",
                            TemperaturaMedie: tMed,
                            TemperaturaMedieMaxima: tMedMax,
                            TemperaturaMedieMinima: tMedMin
                        }
                        break;
                    case "15480":
                        if(isInt(bigData[i][j].TMED) && (bigData[i][j].TMED!=" .0")){
                            tMed = tMed + parseInt(bigData[i][j].TMED);
                           
                        }
                        if(isInt(bigData[i][j].TMAX) && (bigData[i][j].TMAX!=" .0")){
                            tMedMax = tMedMax + parseInt(bigData[i][j].TMAX);
                        }
                        if(isInt(bigData[i][j].TMIN) && (bigData[i][j].TMIN!=" .0")){
                            tMedMin = tMedMin + parseInt(bigData[i][j].TMIN);
                        }
                        Constanta[i] = {
                            Statia: "Constanta",
                            TemperaturaMedie: tMed,
                            TemperaturaMedieMaxima: tMedMax,
                            TemperaturaMedieMinima: tMedMin
                        }
                       break;
                   }
           }
        }
        }
            //console.log("temperatura Ocna", Ocna);
            //console.log("temperatura", Varfu);
        function isInt(value) {
         return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
        }
       

    $(function(){
        $('#tableslim').slimScroll({
            height: '250px'
        });
     });

});

