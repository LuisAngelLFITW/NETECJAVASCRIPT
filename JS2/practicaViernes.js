// EXCEPCIONES Y PROMESAS 
 
// IMPLEMENTAR TRY Y CATCH, PARA EL MANEJO DE EXCEPCIONES
 
function fac(n) {
    var res = 0;
 
    if (n < 0) {
        throw console.log("No acepta números negativos");
    }
 
    if (n == 0) {
        return 1;
    }
    return n * fac(n-1);
}
 
function print(n) {
    console.log("fac(" + n + ")= " + fac(n));
}
 
print(5);
print(1);
print(0);
print(-7);