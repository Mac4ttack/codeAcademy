const _ = {
    clamp (number,lower,upper) {
        const lowerClampedValue = Math.max(number,lower);
        const clampedValue = Math.min(lowerClampedValue,upper);
        return clampedValue;
    },
    inRange (number,start,end) {
        let temp;
        if (typeof end === "undefined") {
            end = start; 
            start = 0;
        } 
        if (start > end) {
            temp = end,
            end = start,
            start = temp;
        } 
        let isInRange = (start <= number && number < end) ? true : false;
        return isInRange;
    },
    words (string) {
        const words = string.split(' ');
        return words;
    },
    pad(string,length) {
        if (length <= string.length) {
        return string;
        }
        const startPaddingLength = Math.floor((length - string.length)/2);
        const endPaddingLength = length - string.length - startPaddingLength;
        const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
        return paddedString;
    },
    has(object,key) {
      let hasValue = object[key] !== undefined ? true : false; 
      return hasValue;
    },
    invert(object){
      let invertedObject = {};
      for (let key in object){
        let originalValue = object[key];
        invertedObject[originalValue] = key;
      }
      return invertedObject;
    },
    findKey(object,predicate) {
      for (let key in object) {
        let value = object[key];
        let predicateReturnValue = predicate(value);
        if (predicateReturnValue) {
          return key;
        }
      }
      return undefined;
    },
    drop(array,n) {
      if (n === undefined) {
        n = 1
      }
      let droppedArray = array.slice(n,array.length);
      return droppedArray;
    },
    dropWhile (array,predicate) {
      let dropNumber = array.findIndex(
        (element, index) => !(predicate(element, index, array))
        );
      let droppedArray = this.drop(array,dropNumber);
      return droppedArray;
    },
    chunk(array,size) {
      if(size === undefined) {
        size = 1;
      }
      let arrayChunks = [];
      for (i=0; i<array.length;i+=size) {
        let arrayChunk = array.slice(i,i+size);
        arrayChunks.push(arrayChunk);
      }
      return arrayChunks;
    }
}
    
  
   
   
   // Do not write or modify code below this line.
   module.exports = _;
   