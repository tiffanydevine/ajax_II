// Add a SumArray method to all arrays by expanding the Array prototype
Array.prototype.SumArray = function (arr) {
    var sum = [];
    if (arr != null && this.length == arr.length) {
        for (var i = 0; i < arr.length; i++) {
            sum.push(this[i] + arr[i]);
        }
    }
    return sum;
}

export {Array.prototype.SumArray}; 

