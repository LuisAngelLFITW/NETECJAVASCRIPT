// Responsables de los cuarteles
 
const paddockManagers = [
    { id: 1, taxNumber: '132254524', name: 'JUAN TAPIA BURGOS'},
    { id: 2, taxNumber: '143618668', name: 'EFRAIN SOTO VERA'},
    { id: 3, taxNumber: '78903228', name: 'CARLOS PEREZ GONZALEZ'},
    { id: 4, taxNumber: '176812737', name: 'ANDRES VIÑALES CIENFUEGOS'},
    { id: 5, taxNumber: '216352696', name: 'OSCAR PEREZ ZUÑIGA'},
    { id: 6, taxNumber: '78684747', name: 'JOAQUIN ANDRADE SANDOVAL' }
  ];
    
    // Tipo de cuartel, en el cual se utiliza el tipo de producto plantado
    var paddockType = [
      { id: 1, name: 'PALTOS' },
      { id: 2, name: 'AVELLANOS' },
      { id: 3, name: 'CEREZAS' },
      { id: 4, name: 'NOGALES' },
    ]
   
  
    // Un paddock representa un cuartel de un campo (Entiéndase también como potrero o parcela), el área está representada en m2, harvestYear es el año en el que se sembró el cuartel
    const paddocks = [
      { paddockManagerId: 6, farmId: 1, paddockTypeId: 1, harvestYear: 2019, area: 1200 },
      { paddockManagerId: 1, farmId: 3, paddockTypeId: 4, harvestYear: 2019, area: 500 },
      { paddockManagerId: 5, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 20000 },
      { paddockManagerId: 2, farmId: 2, paddockTypeId: 3, harvestYear: 2021, area: 8401},
      { paddockManagerId: 3, farmId: 1, paddockTypeId: 1, harvestYear: 2020, area: 2877 },
      { paddockManagerId: 5, farmId: 2, paddockTypeId: 2, harvestYear: 2017, area: 15902 },
      { paddockManagerId: 3, farmId: 3, paddockTypeId: 2, harvestYear: 2018, area: 1736 },
      { paddockManagerId: 2, farmId: 3, paddockTypeId: 3, harvestYear: 2020, area: 2965 },
      { paddockManagerId: 4, farmId: 3, paddockTypeId: 4, harvestYear: 2018, area: 1651 },
      { paddockManagerId: 5, farmId: 1, paddockTypeId: 1, harvestYear: 2018, area: 700 },
      { paddockManagerId: 1, farmId: 2, paddockTypeId: 1, harvestYear: 2019, area: 7956 },
      { paddockManagerId: 5, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 3745 },
      { paddockManagerId: 6, farmId: 1, paddockTypeId: 3, harvestYear: 2021, area: 11362 },
      { paddockManagerId: 2, farmId: 3, paddockTypeId: 3, harvestYear: 2021, area: 300 },
      { paddockManagerId: 3, farmId: 2, paddockTypeId: 2, harvestYear: 2020, area: 19188 },
      { paddockManagerId: 3, farmId: 1, paddockTypeId: 1, harvestYear: 2019, area: 17137 },
      { paddockManagerId: 4, farmId: 3, paddockTypeId: 2, harvestYear: 2020, area: 100 },
      { paddockManagerId: 2, farmId: 1, paddockTypeId: 3, harvestYear: 2019, area: 11845 },
      { paddockManagerId: 5, farmId: 2, paddockTypeId: 1, harvestYear: 2018, area: 15969 },
      { paddockManagerId: 1, farmId: 3, paddockTypeId: 1, harvestYear: 2029, area: 10420 },
      { paddockManagerId: 5, farmId: 2, paddockTypeId: 3, harvestYear: 2010, area: 3200 },
      { paddockManagerId: 6, farmId: 1, paddockTypeId: 2, harvestYear: 2012, area: 10587 },
      { paddockManagerId: 2, farmId: 2, paddockTypeId: 2, harvestYear: 2018, area: 16750 }
    ];
  
  
    const farms = [
      { id: 1, name: 'AGRICOLA SANTA ANA' },
      { id: 2, name: 'VINA SANTA PAULA' },
      { id: 3, name: 'FORESTAL Y AGRICOLA LO ENCINA' }
    ];
  
  
  // **********************************************************
  // **********************************************************
  // **********************************************************
  
    // Tip: Una hectárea equivale a 10.000m2
 
    // *****************************************
    // ************* PREGUNTA 2 ****************
    // *****************************************
  
  
  // Función para tener una arreglo paddockType con sus totales
 
  function sortPaddockTypeByTotalArea() {
 
    console.log("******************* sortPaddockTypeByTotalArea *************************");
 
    let arregloTotalArea = [];
    
    for (let i=0;i<paddockType.length;i++) {
 
        let sumaTotalPorId = 0;
 
        for (let j=0; j<paddocks.length;j++) {
 
            if(paddockType[i].id == paddocks[j].paddockTypeId) {
                sumaTotalPorId += paddocks[j].area;
            }
 
        }
 
        let objetoTotal = {
            paddockTypeId: i+1,
            paddockTypeName: paddockType[i].name,
            totalArea: sumaTotalPorId
        }
 
        arregloTotalArea.push(objetoTotal);
    }
 
    console.log("Arreglo Total Area : ", arregloTotalArea);
    console.log("******************* Fin sortPaddockTypeByTotalArea *************************");
  }
 
  sortPaddockTypeByTotalArea();
 
    // *****************************************
    // ************* PREGUNTA 3 ****************
    // *****************************************
 
    // Arreglo con los nombres de los administradores, ordenados decrecientemente por 
    // la suma TOTAL de hectáreas que administran.
 
    function sortPaddockManagerIdByTotalArea() {
 
        console.log("******************* sortPaddockManagerByTotalArea *************************");
 
        let arregloTotalAreaManager = [];
 
        for (let i=0; i < paddockManagers.length;i++) {
 
            let sumaTotalPorManager = 0;
 
            for (let j=0; j<paddocks.length;j++) {
                if (paddockManagers[i].id == paddocks[j].paddockManagerId) {
                    sumaTotalPorManager += paddocks[j].area;
                }
            }
 
            let objetoManager = {
                paddockManagerId: i+1,
                paddockManagerName: paddockManagers[i].name,
                totalAreaManager: sumaTotalPorManager
            }
 
            arregloTotalAreaManager.push(objetoManager);
 
            arregloTotalAreaManager.sort(sortArrayArea);
        }
 
 
        console.log("arregloTotalAreaManager: ", arregloTotalAreaManager);
        console.log("******************* Fin sortPaddockManagerByTotalArea *************************");
    }
 
    // Función para ordenar por área en orden decreciente
 
    function sortArrayArea(x, y) {
        if (x.totalAreaManager < y.totalAreaManager) { return 1 }
        if (x.totalAreaManager > y.totalAreaManager) { return -1 }
        return 0;
    }
 
    sortPaddockManagerIdByTotalArea();
 
    // *****************************************
    // ************* PREGUNTA 3 v2 *************
    // *****************************************
 
    // Arreglo con los nombres de los administradores, ordenados decrecientemente por 
    // la suma TOTAL de hectáreas que administran.
 
    console.log("******************* sortPaddockManagerByTotalArea v2 *************************");
 
    function sortPaddockManagerIdByTotalAreaV2() {
 
        let arregloTotalAreaManager = [];
 
        paddockManagers.forEach(  (elementoi, i) => {
 
            let sumaTotalAreasPorManager = paddocks.filter( (elementoj, j) => {
                return elementoi.id == elementoj.paddockManagerId;
            }).reduce( // Genero una suma, para luego ponerla en el objeto
                (acumulador, paddocksR) => {
                    acumulador += paddocksR.area;
                    return acumulador;
                }, 
            0);
 
            let objetoManager = {
                paddockManagerId: elementoi.id,
                paddockManagerName: elementoi.name,
                totalAreaManager: sumaTotalAreasPorManager
            }
 
            arregloTotalAreaManager.push(objetoManager);
 
        });
 
        arregloTotalAreaManager.sort(sortArrayArea);
 
        console.log("arregloTotalAreaManager: ", arregloTotalAreaManager);
        console.log("******************* sortPaddockManagerByTotalArea v2 *************************");
   
    }
 
    sortPaddockManagerIdByTotalAreaV2();
