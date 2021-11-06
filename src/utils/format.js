export function formatResult(data) {
  console.log(data);
  let formatedData = [];
  for(let i = 0; i < data.length; i++) {
    for(let u = 0; u < data[i].length; u++){
      formatedData.push(data[i][u]);
    }
  }
  return formatedData;
};

export function formatData(data) {
  try {
    console.log(data);
    let formatedData = '';
    formatedData += (data.map((d) =>{return d.data}) );
    return formatedData;
  } catch (err) {
    console.log(err);
    return {'err': 'file load failed re try'};
  }

  
}