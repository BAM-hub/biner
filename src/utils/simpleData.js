import { 
  preprocess,
  meanBinResult,
  boundaryBinResult
} from "./simpleDataProcess";

export function binByMean(data, binMemberCount) {
  let dataArr = data.split(',');
  binMemberCount = parseInt(binMemberCount);
  
  //arr.map(a => console.log(a));
  
  let binCount = dataArr.length/binMemberCount;
  dataArr = preprocess(binCount, dataArr, binMemberCount);
  return meanBinResult(dataArr, binMemberCount);
};

export function binByBoundries (data, binMemberCount) {
  let dataArr = data.split(',');
  let newDataArr = [];
  let binCount = dataArr.length/binMemberCount;

  dataArr = preprocess(binCount, dataArr, binMemberCount);
  //console.log(dataArr);

  for(let i = 0; i < dataArr.length; i ++) {
    newDataArr.push(sort(dataArr.splice(0, binMemberCount)));
  };
  //console.log(newDataArr);
  boundaryBinResult(newDataArr, binMemberCount);
};

function sort(dataArr) {
  dataArr.sort((a, b) => {return a - b });
  return dataArr;
};

