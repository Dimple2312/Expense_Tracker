class Income {
    constructor(){
    //initial values
    this.income = "";
    this.budget = "";
    this.savings = this.income - this.budget;
    this.incomeCategories = "";
    this.budgetCategories = "";
    };

    setStorageItem(key,value){
        localStorage.setItem(key,JSON.stringify(value));
    }

    getStorageItem(item){
        const localStorageItem = localStorage.getItem(item);
        if(localStorageItem !== null){
            return JSON.parse(localStorageItem);
        }
        else{
            return undefined; 
        }
    }

    addIncomeForm(e){
        e.preventDefault();

        const newIncomeInput = document.getElementById('newIncomeInput').value;
    }
}

const incomeObj = new Income();

export default incomeObj;

