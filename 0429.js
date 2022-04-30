// first letter of each word in str to upper case
String.prototype.toJadenCase = function () {
    return this.split(' ').map(x => x[0].toUpperCase() + x.substring(1)).join(' ')
  };