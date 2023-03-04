
function checkContrasena(pass){
    var msg = {};
    try{
        if (pass.length < 6) throw "SHORT";
        

        if (pass.length > 10) throw "LONG";
        msg.status = "Validacion completa";
    }catch(error){
        if (error == 'SHORT') msg.status = "Contraseña muy corta";
        if (error == 'LONG') msg.status = "Contraseña muy larga"
    }finally{
        console.log("Estado de la contraseña: "+msg.status);
    }
}


checkContrasena('12345');