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
    }else if(operation == '^'){
      rez = Math.pow(leftVal, rightVal)
    }
    
    this.values.splice(operator_pos + 1, 1);
    this.values.splice(operator_pos, 1, rez);
    this.values.splice(operator_pos - 1, 1);
  }


  calculate(){
    console.log(this.values);
    while(true){
      let operator_pos = 0;
      if(this.values.indexOf('^') != -1){
        operator_pos = this.values.indexOf('^');
        this.matematicOperation('^', operator_pos);
        console.log(this.values)
      }else break;
    }
        
    while(true){
      let operator_pos = 0;
      if(this.values.indexOf('*') != -1){
        operator_pos = this.values.indexOf('*');
        this.matematicOperation('*', operator_pos);
        console.log(this.values)
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
      if(this.values.indexOf('-') != -1){
        operator_pos = this.values.indexOf('-');
        this.matematicOperation('-', operator_pos);
      }else break;
    }

    while(true){
      let operator_pos = 0;
      if(this.values.indexOf('+') != -1){
        operator_pos = this.values.indexOf('+');
        this.matematicOperation('+', operator_pos);
        console.log(this.values)
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

/*
calculator = new SmartCalculator(9);
const value = calculator
.multiply(1)
.subtract(73)
.pow(2)
.add(62)
.multiply(1)
.add(29)
.add(60)
.subtract(8)
.subtract(83)
.add(50);
  

console.log(value.toString());
*/