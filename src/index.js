module.exports = function reverse(number) {
    // const reverse = (number) =>{
        let digit = 1;
        let result =""
        if (number < 0) {number = number*-1}
        while (number >= 1) {
        digit = number % 10;
        number = Math.floor(number / 10);
        result = `${result}${digit}`;
        }
        return Number(result)
      };
// console.log(reverse(450));
// console.log(reverse(-125));
