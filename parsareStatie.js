// $(function() {
        var i= 1961;
        var OcnaAll = [];   var IasiAll = [];
        var BotosaniAll = []; var ClujAll = [];
        var BacauAll = [];   var MiercureaAll = [];
        var AradAll = []; var DevaAll = [];
        var SibiuAll = [];   var VarfuAll = [];
        var CaransebesAll = []; var GalatiAll = [];
        var TulceaAll = [];   var RamnicuAll = [];
        var BuzauAll = []; var SulinaAll = [];
        var DrobetaAll = [];   var BucurestiAll = [];
        var CraiovaAll = []; var CalarasiAll = [];
        var RosioriiAll = [];   var ConstantaAll = [];
      for(i; i<2017; i++){
        //   console.log(bigData[i]);
         // bigData[i].forEach(function(element)
          for(var j=0;j< bigData[i].length;j++) {
             //console.log(element);
             var x = bigData[i];
              if(x[j].CODST == "Ocna Sugatag")
                {
                    var obj = {
                        nume:x[j].CODST,
                        data:x[j].DATCLIM,
                        Tmax:x[j].TMAX,
                        Tmin:x[j].TMIN,
                        Tmed:x[j].TMED
                    }
                    OcnaAll.push(obj);
                }
                if(x[j].CODST == "Botosani")
                {
                    var obj = {
                        nume:x[j].CODST,
                        data:x[j].DATCLIM,
                        Tmax:x[j].TMAX,
                        Tmin:x[j].TMIN,
                        Tmed:x[j].TMED
                    }
                    BotosaniAll.push(obj);
                }
                if(x[j].CODST == "Iasi")
                {
                    var obj = {
                        nume:x[j].CODST,
                        data:x[j].DATCLIM,
                        Tmax:x[j].TMAX,
                        Tmin:x[j].TMIN,
                        Tmed:x[j].TMED
                    }
                    IasiAll.push(obj);
                }
                if(x[j].CODST == "Cluj-Napoca")
                {
                    var obj = {
                        nume:x[j].CODST,
                        data:x[j].DATCLIM,
                        Tmax:x[j].TMAX,
                        Tmin:x[j].TMIN,
                        Tmed:x[j].TMED
                    }
                    ClujAll.push(obj);
                }
                if(x[j].CODST == "Bacau")
                {
                    var obj = {
                        nume:x[j].CODST,
                        data:x[j].DATCLIM,
                        Tmax:x[j].TMAX,
                        Tmin:x[j].TMIN,
                        Tmed:x[j].TMED
                    }
                    BacauAll.push(obj);
                }
                if(x[j].CODST == "Miercurea Ciuc")
                {
                    var obj = {
                        nume:x[j].CODST,
                        data:x[j].DATCLIM,
                        Tmax:x[j].TMAX,
                        Tmin:x[j].TMIN,
                        Tmed:x[j].TMED
                    }
                    MiercureaAll.push(obj);
                }
                if(x[j].CODST == "Arad")
                {
                    var obj = {
                        nume:x[j].CODST,
                        data:x[j].DATCLIM,
                        Tmax:x[j].TMAX,
                        Tmin:x[j].TMIN,
                        Tmed:x[j].TMED
                    }
                    AradAll.push(obj);
                }
                if(x[j].CODST == "Deva")
                {
                    var obj = {
                        nume:x[j].CODST,
                        data:x[j].DATCLIM,
                        Tmax:x[j].TMAX,
                        Tmin:x[j].TMIN,
                        Tmed:x[j].TMED
                    }
                    DevaAll.push(obj);
                }
                if(x[j].CODST == "Sibiu")
                {
                    var obj = {
                        nume:x[j].CODST,
                        data:x[j].DATCLIM,
                        Tmax:x[j].TMAX,
                        Tmin:x[j].TMIN,
                        Tmed:x[j].TMED
                    }
                    SibiuAll.push(obj);
                }
                if(x[j].CODST == "Varfu Omu")
                {
                    var obj = {
                        nume:x[j].CODST,
                        data:x[j].DATCLIM,
                        Tmax:x[j].TMAX,
                        Tmin:x[j].TMIN,
                        Tmed:x[j].TMED
                    }
                    VarfuAll.push(obj);
                }
                if(x[j].CODST == "Caransebes")
                {
                    var obj = {
                        nume:x[j].CODST,
                        data:x[j].DATCLIM,
                        Tmax:x[j].TMAX,
                        Tmin:x[j].TMIN,
                        Tmed:x[j].TMED
                    }
                    CaransebesAll.push(obj);
                }

                if(x[j].CODST == "Galati")
                {
                    var obj = {
                        nume:x[j].CODST,
                        data:x[j].DATCLIM,
                        Tmax:x[j].TMAX,
                        Tmin:x[j].TMIN,
                        Tmed:x[j].TMED
                    }
                    GalatiAll.push(obj);
                }
                if(x[j].CODST == "Tulcea")
                {
                    var obj = {
                        nume:x[j].CODST,
                        data:x[j].DATCLIM,
                        Tmax:x[j].TMAX,
                        Tmin:x[j].TMIN,
                        Tmed:x[j].TMED
                    }
                    TulceaAll.push(obj);
                }
                if(x[j].CODST == "Ramnicu Valcea")
                {
                    var obj = {
                        nume:x[j].CODST,
                        data:x[j].DATCLIM,
                        Tmax:x[j].TMAX,
                        Tmin:x[j].TMIN,
                        Tmed:x[j].TMED
                    }
                    RamnicuAll.push(obj);
                }
                if(x[j].CODST == "Buzau")
                {
                    var obj = {
                        nume:x[j].CODST,
                        data:x[j].DATCLIM,
                        Tmax:x[j].TMAX,
                        Tmin:x[j].TMIN,
                        Tmed:x[j].TMED
                    }
                    BuzauAll.push(obj);
                }
                if(x[j].CODST == "Sulina")
                {
                    var obj = {
                        nume:x[j].CODST,
                        data:x[j].DATCLIM,
                        Tmax:x[j].TMAX,
                        Tmin:x[j].TMIN,
                        Tmed:x[j].TMED
                    }
                    SulinaAll.push(obj);
                }
                if(x[j].CODST == "Drobeta Turnu Severin")
                {
                    var obj = {
                        nume:x[j].CODST,
                        data:x[j].DATCLIM,
                        Tmax:x[j].TMAX,
                        Tmin:x[j].TMIN,
                        Tmed:x[j].TMED
                    }
                    DrobetaAll.push(obj);
                }
                 if(x[j].CODST == "Bucuresti-Baneasa")
                {
                    var obj = {
                        nume:x[j].CODST,
                        data:x[j].DATCLIM,
                        Tmax:x[j].TMAX,
                        Tmin:x[j].TMIN,
                        Tmed:x[j].TMED
                    }
                    DrobetaAll.push(obj);
                }
                 if(x[j].CODST == "Craiova")
                {
                    var obj = {
                        nume:x[j].CODST,
                        data:x[j].DATCLIM,
                        Tmax:x[j].TMAX,
                        Tmin:x[j].TMIN,
                        Tmed:x[j].TMED
                    }
                    CraiovaAll.push(obj);
                }
                 if(x[j].CODST == "Calarasi")
                {
                    var obj = {
                        nume:x[j].CODST,
                        data:x[j].DATCLIM,
                        Tmax:x[j].TMAX,
                        Tmin:x[j].TMIN,
                        Tmed:x[j].TMED
                    }
                    CalarasiAll.push(obj);
                }
                 if(x[j].CODST == "Rosiorii de Vede")
                {
                    var obj = {
                        nume:x[j].CODST,
                        data:x[j].DATCLIM,
                        Tmax:x[j].TMAX,
                        Tmin:x[j].TMIN,
                        Tmed:x[j].TMED
                    }
                    RosioriiAll.push(obj);
                }
                 if(x[j].CODST == "Constanta")
                {
                    var obj = {
                        nume:x[j].CODST,
                        data:x[j].DATCLIM,
                        Tmax:x[j].TMAX,
                        Tmin:x[j].TMIN,
                        Tmed:x[j].TMED
                    }
                    ConstantaAll.push(obj);
                }

          };
      }
      console.log("haide",BotosaniAll)

// });