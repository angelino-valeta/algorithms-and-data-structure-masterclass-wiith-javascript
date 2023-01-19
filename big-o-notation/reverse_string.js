function reverse(s){
  return s.split('').reverse().join('');
}

function reverse2(s){
  let i = s.length
  let o = ''

  while (i > 0){
    o += s.substring(i -1, i)
    i--
    return o
  }
}
var nome = 'Angelino';

const result =  reverse(nome);
console.log(result);
