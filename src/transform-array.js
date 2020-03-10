module.exports = function transform(arr) {
    if (!Array.isArray(arr)) throw Error;
    for (let i = 0; i<arr.length; i++){
        if (arr[i]=="--double-next") {
          arr[i]=arr[i+1];
        }
    
        if (arr[i]=="--double-prev") {
          arr[i]=arr[i-1];
        }
    
        if (arr[i]=="--discard-next"){
          arr.splice(i,2);
        }
    
        if (arr[i]=="--discard-prev"){
          arr.splice(i-1,2);
        }
      }
      return arr;
};
