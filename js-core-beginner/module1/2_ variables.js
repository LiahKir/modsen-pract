function visibilityArea() {
  {
    var str1 = "var"
    let str2 = "let"
    const str3 = "const"
    console.log(str1, "inside");
    console.log(str2, "inside");
    console.log(str3, "inside");
  }
  console.log(str1, "outside");
  console.log(str2, "outside");
  console.log(str3, "outside");
}
