let a1 = 9,
  a2 = "x",
  a3 = false,
  a4 = false,
  b1 = 25,
  b2 = 45,
  b3 = false,
  b4 = false,
  c1 = 5,
  c2 = 15,
  c3 = false,
  c4 = false;

if (a2 == "x") {
  a3 = true;
} else {
  if (b2 == "x") {
    b3 = true;
  } else {
    c3 = true;
  }
}
console.log((a1 * (b1 * c1)) / (b2 * c2));
console.log((a1 * (b1 * c2)) / (b2 * c1));
