function inArray(stroka, array) {
    for (var i = 0; i < array.length; i++) {
      if (array[i] == stroka) return true;
    }
    return false;
  }
   
  console.log(inArray('Аб', ['Ад', 'ДВ', 'Аб', 'дК']));
  