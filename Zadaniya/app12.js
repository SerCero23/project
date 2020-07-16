function getDivisors(x) {    
    function check(x) {
    var newArr = [];
    for (var i = 1; i <= x; i++) {
        if (x % i ==0 ) {
        newArr.push(i);
        }
    }
    return newArr;
    }
    console.log(check(x));
}
getDivisors(54);