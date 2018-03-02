class SmartCalculator {
  constructor(initialValue) {
    this.values = [];
    this.values.push(initialValue); 
  }

  add(number) {
    this.values.push('+'); 
    this.values.push(number); 
    return this;
  }
  
  subtract(number) {
    this.values.push('-'); 
    this.values.push(number);
    return this;
  }

  multiply(number) {
    this.values.push('*'); 
    this.values.push(number); 
    return this;
  }

  devide(number) {
    this.values.push('/'); 
    this.values.push(number); 
    return this;
  }

  pow(number) {
    this.values.push('^'); 
    this.values.push(number);
    return this;
  }

  changeArray(operator_pos, rez){
    this.values.splice(operator_pos + 1, 1);
    this.values.splice(operator_pos, 1, rez);
    this.values.splice(operator_pos - 1, 1);
  }

  matematicOperation(operation, operator_pos){

    let tmp = this.values.slice((operator_pos - 1), (operator_pos + 2));
    let leftVal = tmp[0];
    let rightVal = tmp[2];
    let powTrigger = false;


    let rez = 0;
    if(operation == '*'){
      rez = leftVal * rightVal;
    }else if(operation == '/'){
      rez = leftVal / rightVal;
    }else if(operation == '+'){
      rez = leftVal + rightVal;
    }else if(operation == '-'){
      rez = leftVal - rightVal;
    }else if(operation == '^'){
      var arrPow = [];

      for (let index = 0; index < this.values.length; index++) {
        if(this.values[index] == '^') arrPow.push(this.values[index])
      }

      if(arrPow.length > 1){
        this.values.reverse();
        operator_pos = this.values.indexOf('^');
        tmp = this.values.slice((operator_pos - 1), (operator_pos + 2));

        rez = Math.pow(tmp[2], tmp[0])
        this.changeArray(operator_pos, rez);
        this.values.reverse();
        
        powTrigger = true;
      }
    
      rez = Math.pow(leftVal, rightVal)
    }

    if(!powTrigger){
      this.changeArray(operator_pos, rez);
    }
    
  }


  calculate(){
    let operations = {1 : '^', 2 : '*', 3 : '/', 4 : '-', 5 : '+' };

    for (const key in operations) {
      while(true){
        if(this.values.indexOf(operations[key]) != -1){
          let operator_pos = this.values.indexOf(operations[key]);
          this.matematicOperation(operations[key], operator_pos);
        }else break;
      }
    }

    return this.values;
  }

  valueOf() {
      return this.calculate();
  }

  toString() {
      return `${this.calculate()}`;
  }

  
}

module.exports = SmartCalculator;