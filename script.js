function mudarCor(Palavra){
let insert = document.getElementById('resultado');
var radioCor = document.getElementsByName('Cores')
document.getElementById('resultado').textContent= Palavra;

if(radioCor[0].checked == true){
        insert.style.color="black";
    }
else if(radioCor[1].checked == true){
    insert.style.color="red"
}
else if(radioCor[2].checked == true){
    insert.style.color="yellow"
}
else if(radioCor[3].checked == true){
    insert.style.color="blue"
}
}