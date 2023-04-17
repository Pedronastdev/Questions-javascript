let n1 = 23 ** 2,
  n2 = 19 ** 2,
  n3 = 32 ** 2,
  n4 = 28 ** 2;
switch (n3 >= 1000) {
  case n1 >= 1000:
    console.log("o valor é " + n1);
    break;
  case n2 >= 1000:
    console.log("o valor é " + n2);
    break;
  case n3 >= 1000:
    console.log("o valor é " + n3);
    break;
  default:
    console.log("o valor é " + n4);
}
