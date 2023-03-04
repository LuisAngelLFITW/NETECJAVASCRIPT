//no pueden rugir gato y conejo

function rugir(animal){
    var msg = {};
    try{
        if (animal == 'Gato'){ 
            throw 'Gato';
        }
        if (animal == 'Conejo'){ 
            throw 'Conejo';
        }
        msg.status = "RUGIDO!!";
    }catch(error){
        if (error == 'Gato') msg.status = "Ls gatos no rugen";
        if (error == 'Conejo') msg.status = "Los conejos no rugen"
    }finally{
        console.log("Mensaje: "+msg.status);
    }
}


rugir('Cfa');
rugir('Conejo');
rugir('Gato');