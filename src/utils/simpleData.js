export function binByMean(data, binMemberCount) {
  let dataArr = data.split(',');
  binMemberCount = parseInt(binMemberCount);
  
  //arr.map(a => console.log(a));
  
  let binCount = dataArr.length/binMemberCount;

  if(Number.isInteger(binCount)) {
    return meanBinResult(dataArr, binMemberCount);

  } else {
    let lastBinMembers = dataArr.length % binMemberCount;
    let binMidPoint = binMemberCount * 1/2;

    if (lastBinMembers < binMidPoint) {

      while(! Number.isInteger(binCount)) {
        dataArr.pop(); 
        binCount = dataArr.length/binMemberCount;
      }
      return meanBinResult(dataArr, binMemberCount);

    } else if( lastBinMembers > binMidPoint ) {
      console.log('add mean');

      let sum = 0;
      for(let i = 0; i < dataArr.length; i++ ){
        sum += parseInt(dataArr[i]);
      }
      let mean = sum/dataArr.length;
      while(! Number.isInteger(binCount)) {
        dataArr.push(mean); 
        binCount = dataArr.length/binMemberCount;
      }
      console.log(dataArr);
      return meanBinResult(dataArr, binMemberCount);
    } else {
      
      while(! Number.isInteger(binCount)) {
        dataArr.pop(); 
        binCount = dataArr.length/binMemberCount;
      }
      return meanBinResult(dataArr, binMemberCount);
    }
  };
};

function meanBinResult(dataArr, binMemberCount) {
  let binChecker = 0;
  let sum = 0;
  for(let i = 0; i < dataArr.length; i++) {
    sum += parseInt(dataArr[i]);
    binChecker++;

    if(Number.isInteger(binChecker/binMemberCount)){
      let mean = sum/binMemberCount;
     
      for(let u = binChecker; u > binChecker - binMemberCount; u--) {
        dataArr[u-1] = mean;
      }
      sum = 0;
    }
 
  }
  return dataArr;
};

function binByBoundries (data, binMemberCount) {
  
}
