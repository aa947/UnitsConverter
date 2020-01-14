/*
* 
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let reg_num = /^((?=\.\d|\d)(?:\d+)?(?:\.?\d*)(?:[eE][+-]?\d+)?)[+-/*]((?=\.\d|\d)(?:\d+)?(?:\.?\d*)(?:[eE][+-]?\d+)?)|((?=\.\d|\d)(?:\d+)?(?:\.?\d*)(?:[eE][+-]?\d+)?)/;
    let pre_result = input.match(reg_num);
    var result= eval(pre_result[0]);
    if (pre_result[0]===''){ result = 1 }
    console.log(result);
    //console.log('input.........', input);
    
    return result;
  };
  
  this.getUnit = function(input) {
    let reg_unit = /(gal)$|(mi)$|(km)$|(kg)$|(lbs)$|(L)$/gim;
    let pre_result = input.match(reg_unit);
    //console.log(pre_result);
    var result=pre_result[0];
    
    //invalid unit >> error
    if (pre_result[0]===''){ result ='Invalid Unit' }
    
    console.log(result);
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit){
      case 'km': result = 'mi'; break;
      case 'mi': result = 'km'; break;
      case 'gal': result = 'L'; break;
      case 'L': result = 'gal'; break;
      case 'kg': result = 'lbs'; break;
      case 'lbs': result = 'kg'; break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch(unit){
      case 'km': result = 'KiloMeters'; break;
      case 'mi': result = 'mile'; break;
      case 'gal': result = 'litre'; break;
      case 'L': result = 'galone'; break;
      case 'kg': result = 'lbs'; break;
      case 'lbs': result = 'kg'; break;
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;

    switch(initUnit){
      case 'km': result = initNum/miToKm ; break;
      case 'mi': result = initNum*miToKm ; break;
      case 'kg': result= initNum/lbsToKg; break;
      case 'lbs': result = initNum*lbsToKg ; break;
      case 'L': result = initNum*galToL ; break;
      case 'gal': result = initNum/galToL ; break;
    }
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    returnUnit = this.spellOutUnit(returnUnit);
    initUnit = this.spellOutUnit(initUnit);
    var result=`${initNum} ${initUnit}s converts to ${returnNum} ${returnUnit}s`
    
    return result;
  };
  
}

module.exports = ConvertHandler;
