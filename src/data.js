export const API_KEY = 'AIzaSyAfhcub04pCoj7j64-X8mQo0emFKn1gl9c';

export const conversor_de_valor = (valor) =>{
    if(valor >= 1000000){
        return Math.floor(valor/1000000)+"M";
    }else if(valor >= 1000){
        return Math.floor(valor/1000)+"K";
    }else{
        return valor;
    }
}