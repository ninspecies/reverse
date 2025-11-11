function digitize(n) {
  let str = n.toString()
  let strings = str.split("").reverse()
  return strings.map((num) => Number(num))
}