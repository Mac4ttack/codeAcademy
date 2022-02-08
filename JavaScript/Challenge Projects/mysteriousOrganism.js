// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequor = (specimenNum, dnaArr) => {
  //creates a new specimen
    return {
      _specimenNum: specimenNum,
      _dnaArr: dnaArr,
   //randomly selects one dna base, changes it, returns array
      mutate () {
        const mutateNum = Math.floor(Math.random() * dnaArr.length);
        const ogBase = dnaArr[mutateNum];
        while (ogBase === dnaArr[mutateNum]) {
          dnaArr[mutateNum] = returnRandBase()
          }
        return dnaArr;
      },
      //compares two different strands of DNA, returns string w/ % in similar
    compareDNA(pAequor) {
      let commonNum = 0;
      for (base in this._dnaArr){
        if (this._dnaArr[base] === pAequor._dnaArr[base]) {
          commonNum++;
        }
      }
      const pctCommon = Math.floor((commonNum/15) * 100)
      return `specimen #${this._specimenNum} and specimen #${pAequor._specimenNum} have ${pctCommon}%  DNA in common.`
    },
    //if DNA strand >= 60% C or G then returns true it will likely survive
    willLikelySurvive() {
      let baseCount = 0;
      for (base in this._dnaArr) {
        if (this._dnaArr[base] == 'C' || this._dnaArr[base] == 'G'){
          baseCount++;
        }
      }
      //console.log(baseCount)
      return baseCount >= 9 ? true : false;
    }
  }
}

//let test1 = pAequor(1,mockUpStrand());
//let test2 = pAequor(2,mockUpStrand());
//let strand1 = test1._dnaArr;
//console.log(strand1)
//let mutate1 = test1.mutate();
//console.log(mutate1)
//console.log(test1.compareDNA(test2))
//console.log(test1.willLikelySurvive());

function createExamples () {
  let examplesArr = [];
  let i = 0 ;
  while (i < 30) {
    let test = pAequor(i,mockUpStrand())
    if(test.willLikelySurvive()) {
        examplesArr.push(test);
        i++;
    }
  }
  return examplesArr
}
const examples = createExamples();

console.log(examples[29]);





