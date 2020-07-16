var stroka = 'var_text_hello';
var b = stroka.split('_');
var newarr = [];
for (var i = 0; i < b.length; i++) {
    newarr.push(ucfirst(b[i]));
}
console.log(newarr.join(''));

function ucfirst(str) {
var a = str[0].toUpperCase() + str.substr(1);
return(a);
}

// 14
function inArray(stroka, array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] == stroka) return true;
    }
    return false;
  }
   
  console.log(inArray('Аб', ['Ад', 'ДВ', 'Аб', 'дК']));