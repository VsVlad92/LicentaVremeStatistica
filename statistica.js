var tMed;
var tMedMin;
var tMedMax;
$(function() {

   
    var Ocna =[]; var OcnaChart =[];

 
    var Botosani =[];   var BotosaniChart =[];var Iasi =[];var IasiChart =[];var Ceahlau =[];var CeahlauChart =[];
    var Cluj =[];var Bacau =[];var ClujChart =[] ; var BacauChart =[];
    var Miercurea =[]; var MiercureaChart =[];var Arad = [];var AradChart = [];var Deva = [];var DevaChart = [];var Sibiu =[];var SibiuChart =[];
    var Varfu =[];var VarfuChart =[];
    var Caransebes =[]; var CaransebesChart =[];
    var Galati =[];var GalatiChart =[];
    var Tulcea = [];var TulceaChart = [];
    var Ramnicu = [];var RamnicuChart = [];
    var Buzau = []; var BuzauChart = [];
    var Sulina = []; var SulinaChart = [];
    var Drobeta = []; var DrobetaChart = [];
    var Bucuresti = []; var BucurestiChart = [];
    var Craiova = []; var CraiovaChart = [];
    var Calarasi = []; var CalarasiChart = [];
    var Rosiorii = [];var RosioriiChart = [];
    var Constanta = [];var ConstantaChart = [];
    var Tmed = [{
           }];

        $("#selectOption").change(function(){
            console.log($("#selectOption").val());
            Tabel($("#selectOption").val());
            ChartSelect($("#selectOption").val());
        })

        $("#an").change(function(){
            console.log($("#an").val())
            console.log(bigData[$("#an").val()])
            Chartan(bigData[$("#an").val()]);
        })
        TmedAn();
        Tabel("Ocna");
        Chart(OcnaChart);
        Chartan(bigData[2016]);

        function ChartSelect(data){
             switch(data){
                case "Ocna":
                    Chart(OcnaChart)
                    Chartan(OcnaChart);
                    console.log(OcnaChart)
                 break;
                 case "Botosani":
                    Chart(BotosaniChart)
                 break;
                 case "Iasi":
                    Chart(IasiChart)
                 break;
                 case "Ceahlau":
                    Chart(CeahlauChart)
                 break;
                 case "Cluj":
                   Chart(ClujChart)
                 break;
                 case "Bacau":
                   Chart(BacauChart)
                 break;
                 case "Miercurea":
                   Chart(MiercureaChart)
                 break;
                 case "Deva":
                   Chart(DevaChart)
                 break;
                 case "Sibiu":
                    Chart(SibiuChart)
                 break;
                 case "Varfu":
                   Chart(VarfuChart)
                 break;
                 case "Caransebes":
                    Chart(CaransebesChart)
                 break;
                 case "Galati":
                    Chart(GalatiChart)
                 break;
                 case "Tulcea":
                   Chart(TulceaChart)
                 break;
                 case "Ramnicu":
                  Chart(RamnicuChart)
                 break;
                 case "Buzau":
                    Chart(BuzauChart)
                 break;
                 case "Sulina":
                    Chart(SulinaChart)
                 break;
                 case "Drobeta":
                   Chart(DrobetaChart)
                 break;
                 case "Bucuresti":
                    Chart(BucurestiChart)
                 break;
                 case "Craiova":
                   Chart(CraiovaChart)
                 break;
                 case "Calarasi":
                    Chart(CalarasiChart)
                 break;
                 case "Rosiorii":
                    Chart(RosioriiChart)
                 break;
                 case "Constanta":
                   Chart(ConstantaChart)
                 break;
            }
         };
        
        
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
                        var temp1 = (dataMedii[i].TemperaturaMedie/365).toFixed(3) + " ℃";
                        var temp2 = (dataMedii[i].TemperaturaMedieMaxima/365).toFixed(3) + " ℃";
                        var temp3 = (dataMedii[i].TemperaturaMedieMinima/365).toFixed(3) + " ℃";
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
                    case "Ocna Sugatag":
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
                                "name":"Ocna ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                                OcnaChart[z+1]={
                                "name":"Ocna ",
                                "date":an,
                                "value":""
                            }
                         }else{
                            OcnaChart[z]={
                                "name":"Ocna ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                         }
                        break;
                    case "Botosani":
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

                         var an = i.toString();
                         z = i-1961
                         if(z==22 || z==29 || z==38  || z==53 || z==18 || z==47 ){
                             BotosaniChart[z]={
                                "name":"Botosani ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                                BotosaniChart[z+1]={
                                "name":"Botosani ",
                                "date":an,
                                "value":""
                            }
                         }else{
                            BotosaniChart[z]={
                                "name":"Botosani ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                         }
                        break;
                    case "Iasi":
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
                        
                         var an = i.toString();
                         z = i-1961
                         if(z==22 || z==29 || z==38  || z==53 || z==18 || z==47 ){
                              IasiChart[z]={
                                "name":"Iasi ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                                IasiChart[z+1]={
                                "name":"Iasi ",
                                "date":an,
                                "value":""
                            }
                         }else{
                            IasiChart[z]={
                                "name":"Iasi ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
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
                        
                         var an = i.toString();
                         z = i-1961
                         if(z==22 || z==29 || z==38  || z==53 || z==18 || z==47 ){
                              CeahlauChart[z]={
                                "name":"Ceahlau ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                                CeahlauChart[z+1]={
                                "name":"Ceahlau ",
                                "date":an,
                                "value":""
                            }
                         }else{
                            CeahlauChart[z]={
                                "name":"Ceahlau ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                         }
                        break;
                    case "Cluj-Napoca":
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
                        
                         var an = i.toString();
                         z = i-1961
                         if(z==22 || z==29 || z==38  || z==53 || z==18 || z==47 ){
                              ClujChart[z]={
                                "name":"Cluj ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                                ClujChart[z+1]={
                                "name":"Cluj ",
                                "date":an,
                                "value":""
                            }
                         }else{
                            ClujChart[z]={
                                "name":"Cluj ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                         }
                        break;
                     case "Bacau":
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
                        
                         var an = i.toString();
                         z = i-1961
                         if(z==22 || z==29 || z==38  || z==53 || z==18 || z==47 ){
                             BacauChart[z]={
                                "name":"Bacau ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                               BacauChart[z+1]={
                                "name":"Bacau ",
                                "date":an,
                                "value":""
                            }
                         }else{
                           BacauChart[z]={
                                "name":"Bacau ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                         }
                        break;
                    case "Miercurea Ciuc":
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
                        
                         var an = i.toString();
                         z = i-1961
                         if(z==22 || z==29 || z==38  || z==53 || z==18 || z==47 ){
                              MiercureaChart[z]={
                                "name":"Miercurea ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                                MiercureaChart[z+1]={
                                "name":"Miercurea ",
                                "date":an,
                                "value":""
                            }
                         }else{
                           MiercureaChart[z]={
                                "name":"Miercurea ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                         }
                        break;
                    case "Arad":
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
                        
                         var an = i.toString();
                         z = i-1961
                         if(z==22 || z==29 || z==38  || z==53 || z==18 || z==47 ){
                             AradChart[z]={
                                "name":"Arad ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                               AradChart[z+1]={
                                "name":"Arad ",
                                "date":an,
                                "value":""
                            }
                         }else{
                            AradChart[z]={
                                "name":"Arad ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                         }
                        break;
                    case "Deva":
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
                        
                         var an = i.toString();
                         z = i-1961
                         if(z==22 || z==29 || z==38  || z==53 || z==18 || z==47 ){
                             DevaChart[z]={
                                "name":"Deva ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                               DevaChart[z+1]={
                                "name":"Deva ",
                                "date":an,
                                "value":""
                            }
                         }else{
                            DevaChart[z]={
                                "name":"Deva ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                         }
                        break;
                    case "Sibiu":
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
                        
                         var an = i.toString();
                         z = i-1961
                         if(z==22 || z==29 || z==38  || z==53 || z==18 || z==47 ){
                             SibiuChart[z]={
                                "name":"Sibiu ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                               SibiuChart[z+1]={
                                "name":"Sibiu ",
                                "date":an,
                                "value":""
                            }
                         }else{
                           SibiuChart[z]={
                                "name":"Sibiu ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                         }
                        break;
                    case "Varfu Omu":
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
                        
                         var an = i.toString();
                         z = i-1961
                         if(z==22 || z==29 || z==38  || z==53 || z==18 || z==47 ){
                              VarfuChart[z]={
                                "name":"Varfu ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                                VarfuChart[z+1]={
                                "name":"Varfu ",
                                "date":an,
                                "value":""
                            }
                         }else{
                            VarfuChart[z]={
                                "name":"Varfu ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                         }
                        break;
                    case "Caransebes":
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
                        
                         var an = i.toString();
                         z = i-1961
                         if(z==22 || z==29 || z==38  || z==53 || z==18 || z==47 ){
                              CaransebesChart[z]={
                                "name":"Caransebes ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                               CaransebesChart[z+1]={
                                "name":"Caransebes ",
                                "date":an,
                                "value":""
                            }
                         }else{
                           CaransebesChart[z]={
                                "name":"Caransebes ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                         }
                        break;
                    case "Galati":
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
                        
                         var an = i.toString();
                         z = i-1961
                         if(z==22 || z==29 || z==38  || z==53 || z==18 || z==47 ){
                             GalatiChart[z]={
                                "name":"Galati ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                                GalatiChart[z+1]={
                                "name":"Galati ",
                                "date":an,
                                "value":""
                            }
                         }else{
                           GalatiChart[z]={
                                "name":"Galati ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                         }
                        break;
                    case "Tulcea":
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
                        
                         var an = i.toString();
                         z = i-1961
                         if(z==22 || z==29 || z==38  || z==53 || z==18 || z==47 ){
                              TulceaChart[z]={
                                "name":"Tulcea ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                                TulceaChart[z+1]={
                                "name":"Tulcea ",
                                "date":an,
                                "value":""
                            }
                         }else{
                            TulceaChart[z]={
                                "name":"Tulcea ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                         }
                        break;
                    case "Ramnicu Valcea":
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
                        
                         var an = i.toString();
                         z = i-1961
                         if(z==22 || z==29 || z==38  || z==53 || z==18 || z==47 ){
                             RamnicuChart[z]={
                                "name":"Ramnicu ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                                RamnicuChart[z+1]={
                                "name":"Ramnicu ",
                                "date":an,
                                "value":""
                            }
                         }else{
                            RamnicuChart[z]={
                                "name":"Ramnicu ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                         }
                        break;
                    case "Buzau":
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
                        
                         var an = i.toString();
                         z = i-1961
                         if(z==22 || z==29 || z==38  || z==53 || z==18 || z==47 ){
                              BuzauChart[z]={
                                "name":"Buzau ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                               BuzauChart[z+1]={
                                "name":"Buzau ",
                                "date":an,
                                "value":""
                            }
                         }else{
                            BuzauChart[z]={
                                "name":"Buzau ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                         }
                        break; 
                    case "Sulina":
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
                        
                         var an = i.toString();
                         z = i-1961
                         if(z==22 || z==29 || z==38  || z==53 || z==18 || z==47 ){
                             SulinaChart[z]={
                                "name":"Sulina ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                                SulinaChart[z+1]={
                                "name":"Sulina ",
                                "date":an,
                                "value":""
                            }
                         }else{
                            SulinaChart[z]={
                                "name":"Sulina ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                         }
                        break;
                    case "Drobeta Turnu Severin":
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
                        
                         var an = i.toString();
                         z = i-1961
                         if(z==22 || z==29 || z==38  || z==53 || z==18 || z==47 ){
                             DrobetaChart[z]={
                                "name":"Drobeta Turnul Severin ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                                DrobetaChart[z+1]={
                                "name":"Drobeta Turnul Severin ",
                                "date":an,
                                "value":""
                            }
                         }else{
                            DrobetaChart[z]={
                                "name":"Drobeta Turnul Severin ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                         }
                        break;
                    case "Bucuresti-Baneasa":
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
                        
                         var an = i.toString();
                         z = i-1961
                         if(z==22 || z==29 || z==38  || z==53 || z==18 || z==47 ){
                             BucurestiChart[z]={
                                "name":"Bucuresti-Baneasa ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                               BucurestiChart[z+1]={
                                "name":"Bucuresti-Baneasa ",
                                "date":an,
                                "value":""
                            }
                         }else{
                           BucurestiChart[z]={
                                "name":"Bucuresti-Baneasa ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                         }
                        break;
                    case "Craiova":
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
                        
                         var an = i.toString();
                         z = i-1961
                         if(z==22 || z==29 || z==38  || z==53 || z==18 || z==47 ){
                            CraiovaChart[z]={
                                "name":"Craiova ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                               CraiovaChart[z+1]={
                                "name":"Craiova ",
                                "date":an,
                                "value":""
                            }
                         }else{
                           CraiovaChart[z]={
                                "name":"Craiova ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                         }
                        break;
                    case "Calarasi":
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
                        
                         var an = i.toString();
                         z = i-1961
                         if(z==22 || z==29 || z==38  || z==53 || z==18 || z==47 ){
                             CalarasiChart[z]={
                                "name":"Calarasi ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                                CalarasiChart[z+1]={
                                "name":"Calarasi ",
                                "date":an,
                                "value":""
                            }
                         }else{
                            CalarasiChart[z]={
                                "name":"Calarasi ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                         }
                        break;  
                    case "Rosiorii de Vede":
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
                        
                         var an = i.toString();
                         z = i-1961
                         if(z==22 || z==29 || z==38  || z==53 || z==18 || z==47 ){
                              RosioriiChart[z]={
                                "name":"Rosiorii de Vede ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                                RosioriiChart[z+1]={
                                "name":"Rosiorii de Vede ",
                                "date":an,
                                "value":""
                            }
                         }else{
                           RosioriiChart[z]={
                                "name":"Rosiorii de Vede ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                         }
                        break;
                    case "Constanta":
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
                        
                         var an = i.toString();
                         z = i-1961
                         if(z==22 || z==29 || z==38  || z==53 || z==18 || z==47 ){
                             ConstantaChart[z]={
                                "name":"Constanta ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
                            }
                                ConstantaChart[z+1]={
                                "name":"Constanta ",
                                "date":an,
                                "value":""
                            }
                         }else{
                           ConstantaChart[z]={
                                "name":"Constanta ",
                                "date":an,
                                "value":(tMed/365).toFixed(2)
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
         return !isNaN(value) && (function(x) { return (x | 0) === x; })(parseFloat(value))
        }
       

    $(function(){
        $('#tableslim').slimScroll({
            height: '250px'
        });
     });

});

