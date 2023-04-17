let n=53,e=0
const ht=10,hl=50,he=20;
if(n>hl){
    console.log("salario total:"+((hl*ht)+((n-hl)*he)))
    console.log("salario extra:"+((n-hl)*he))
}else{
    console.log("salario total:"+n*ht)
    console.log("salario extra:"+0)
}