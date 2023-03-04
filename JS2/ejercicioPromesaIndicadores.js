fetch('https://mindicador.cl/api').then(function(response) {
    return response.json();
}).then(function(dailyIndicators) {
    document.getElementById("UF").innerHTML = 'El valor actual de la UF es $' + dailyIndicators.uf.valor;
    document.getElementById("DolarO").innerHTML = 'El valor actual del Dólar observado es $' + dailyIndicators.dolar.valor;
    document.getElementById("DolarA").innerHTML = 'El valor actual del Dólar acuerdo es $' + dailyIndicators.dolar_intercambio.valor;
    document.getElementById("Euro").innerHTML = 'El valor actual del Euro es $' + dailyIndicators.euro.valor;
    document.getElementById("IPC").innerHTML = 'El valor actual del IPC es ' + dailyIndicators.ipc.valor;
    document.getElementById("UTM").innerHTML = 'El valor actual de la UTM es $' + dailyIndicators.utm.valor;
    document.getElementById("IVP").innerHTML = 'El valor actual del IVP es $' + dailyIndicators.ivp.valor;
    document.getElementById("Imacec").innerHTML = 'El valor actual del Imacec es ' + dailyIndicators.imacec.valor;
}).catch(function(error) {
    console.log('Requestfailed', error);
});

/*CODIGO ALEJANDRA
const API = 'https://mindicador.cl/api';
 
async function fetchData(urlAPI) {
 
    try {
        const response = await fetch(urlAPI);
        const data = await response.json();
 
        // console.log(data);
        console.log('El valor de la UF es: $' + data.uf.valor);
        console.log('El valor actual del Dólar observado es $' + data.dolar.valor);
        console.log('El valor actual del Dólar acuerdo es $' + data.dolar_intercambio.valor);
        console.log('El valor actual del Euro es $' + data.euro.valor);
        console.log('El valor actual del IPC es ' + data.ipc.valor +'%');
        console.log('El valor actual de la UTM es $' + data.utm.valor);
        console.log('El valor actual del IVP es $' + data.ivp.valor);
        console.log('El valor actual del Imacec es ' + data.imacec.valor + '%');
    } catch (error) {
        console.log(error);
    }
    
}
 
//Consultamos los datos de la api
fetchData(API);

urls: https://codepen.io/rafael-andrews/pen/ZEerXaJ, https://mindicador.cl/
*/