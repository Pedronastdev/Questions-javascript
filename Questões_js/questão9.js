let idade = 20;
switch (idade <= 18) {
  case idade >= 7:
    console.log("infantil A, idade=" + idade);
    break;
  case idade >= 10:
    console.log("infantil B, idade=" + idade);
    break;
  case idade >= 13:
    console.log("juvenil A, idade=" + idade);
    break;
  case idade >= 17:
    console.log("juvenil B, idade=" + idade);
    break;
  default:
    console.log("Adulto " + idade);
}
