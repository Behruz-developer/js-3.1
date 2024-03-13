let number = +prompt('Son kriting, biz uni juft yoki toqligini aniqlab beramiz')

while (isNaN(number) ||  number == '') {
    number = prompt('Noto\'g\'ri kritdingiz, sonni boshidan kriting')

}
if(number % 2 == 0){
    alert("juft son  " +number);  
}else if(number % 2 == 1) {
    alert("toq son  " +number);  
}
