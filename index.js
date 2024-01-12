const summ = document.querySelector('.amntMoney')
const submit = document.querySelector('.submit')

console.log(submit)

const expences =[];

submit.addEventListener('click',()=>{
    let expence = {
        summ:summ.value
    }
    expences.push(expence);
    console.log(expences)
    localStorage.setItem('myExpences',JSON.stringify(expences))
})






