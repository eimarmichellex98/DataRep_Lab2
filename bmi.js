//BMI Lab
//Constructor initiliases class
class BMI {
    constructor(height, weight){
        this.height = height;
        this.weight = weight;
    }
//Method to calculate BMI
    calcBMI(){
        let bmi = this.weight/(this.height**2);
        return bmi;
    }
}
//Instance created to invoke method above
let MyBmi = new BMI(2, 90);
let calculatedBMI = MyBmi.calcBMI();
console.log(calculatedBMI);