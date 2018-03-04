class SmartCalculator {
  constructor(initialValue) {
    this.values = [];
    this.count = 0;
    this.values.push(initialValue); 
  }

  add(number) {
    // your implementation
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

  matematicOperation(operation, operator_pos){
    let tmp = this.values.slice((operator_pos - 1), (operator_pos + 2));
    let leftVal = tmp[0];
    let rightVal = tmp[2];

    let rez = 0;
    if(operation == '*'){
      rez = leftVal * rightVal;
    }else if(operation == '/'){
      rez = leftVal / rightVal;
    }else if(operation == '+'){
      rez = leftVal + rightVal;
    }else if(operation == '-'){
      rez = leftVal - rightVal;
    }else if(operation === '^'){
      rez = Math.pow(leftVal, rightVal)
    }
    
    this.values.splice(operator_pos + 1, 1);
    this.values.splice(operator_pos, 1, rez);
    this.values.splice(operator_pos - 1, 1);
  }


  calculate(){

    while(true){
      let operator_pos = 0;
      if(this.values.indexOf('^') != -1){
        operator_pos = this.values.indexOf('^');
        this.matematicOperation('^', operator_pos);
      }else break;
    }
        
    while(true){
      let operator_pos = 0;
      if(this.values.indexOf('*') != -1){
        operator_pos = this.values.indexOf('*');
        this.matematicOperation('*', operator_pos);
      }else break;
    }

    while(true){
      let operator_pos = 0;
      if(this.values.indexOf('/') != -1){
        operator_pos = this.values.indexOf('/');
        this.matematicOperation('/', operator_pos);
      }else break;
    }

    while(true){
      let operator_pos = 0;
      if(this.values.indexOf('+') != -1){
        operator_pos = this.values.indexOf('+');
        this.matematicOperation('+', operator_pos);
      }else break;
    }

    while(true){
      let operator_pos = 0;
      if(this.values.indexOf('-') != -1){
        operator_pos = this.values.indexOf('-');
        this.matematicOperation('-', operator_pos);
      }else break;
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

//calculator = new SmartCalculator(10);
//const value = calculator.add(5).add(-2).multiply(2).pow(2);

//console.log(value.toString());