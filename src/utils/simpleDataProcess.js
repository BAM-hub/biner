export function preprocess(binCount, dataArr, binMemberCount) {
    if(Number.isInteger(binCount)) {
      return dataArr;
  
    } else {
      let lastBinMembers = dataArr.length % binMemberCount;
      let binMidPoint = binMemberCount * 1/2;
  
      if (lastBinMembers < binMidPoint) {
  
        while(! Number.isInteger(binCount)) {
          dataArr.pop(); 
          binCount = dataArr.length/binMemberCount;
        }
        return dataArr;
  
      } else if( lastBinMembers > binMidPoint ) {
        //console.log('add mean');
  
        let sum = 0;
        for(let i = 0; i < dataArr.length; i++ ){
          sum += parseInt(dataArr[i]);
        }
        let mean = sum/dataArr.length;
        while(! Number.isInteger(binCount)) {
          dataArr.push(mean); 
          binCount = dataArr.length/binMemberCount;
        }
        //console.log(dataArr);
        return dataArr;
      } else {
        
        while(! Number.isInteger(binCount)) {
          dataArr.pop(); 
          binCount = dataArr.length/binMemberCount;
        }
        return dataArr;
      }
    };
  }
  
  
export function meanBinResult(dataArr, binMemberCount) {
  let binChecker = 0;
  let sum = 0;
  for(let i = 0; i < dataArr.length; i++) {
    sum += parseInt(dataArr[i]);
    binChecker++;

    if(Number.isInteger(binChecker/binMemberCount)){
      let mean = sum/binMemberCount;
    
      for(let u = binChecker; u > binChecker - binMemberCount; u--) {
      dataArr[u-1] = mean;
      };
      sum = 0;
    };

  };
  return dataArr;
};

export function boundaryBinResult(dataArr, binMemberCount) {

  if(binMemberCount <= 2) {
    return dataArr;
  } else if (binMemberCount <= 3) {
    for(let i = 0; i<dataArr.length; i++) {
      
      dataArr[i][1] = dataArr[i][2];
    };
    return dataArr;

  } else if (binMemberCount%2 === 0) {
    

    //console.log(binSides);
    for(let i = 0; i< dataArr.length; i++) {
      let binSides = (binMemberCount - 2)/2;

      for(let u = 1; u < binMemberCount -1; u++) {
        if(binSides > 0) {
          dataArr[i][u] = dataArr[i][0];
          binSides--;
        }
      }
      binSides = (binMemberCount - 2)/2;

      for(let u = binMemberCount - binSides -1; u < binMemberCount; u++) {
        if(binSides > 0) {
          dataArr[i][u] = dataArr[i][binMemberCount - 1];
          binSides--;
        }
      }
    }
    return dataArr;

  } else {
    let mid = Math.floor(dataArr[0].length/2);
    let end = dataArr[0].length -1;
    console.log(end);
    for(let i = 0; i< dataArr.length; i++) {
      let binSides = (binMemberCount - 3)/2;

      for(let u = 1; u < binMemberCount -1; u++) {
        if(binSides > 0) {
          dataArr[i][u] = dataArr[i][0];
          binSides--;
        }
      }
      binSides = (binMemberCount - 3)/2;

      for(let u = binMemberCount - binSides -1; u < binMemberCount; u++) {
        if(binSides > 0) {
          dataArr[i][u] = dataArr[i][binMemberCount - 1];
          binSides--;
        }
      }
      dataArr[i][mid] = dataArr[i][end];
    };
  
    return dataArr;
  }
};

