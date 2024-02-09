const form = document.querySelector('form')
form.addEventListener('submit', function(e){
    e.preventDefault()
    const height = parseInt(document.querySelector('#Height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results')

    if(height === '' || height < 0 || isNaN(height)){
result.innerHTML = `please give a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
result.innerHTML = `please give a valid weight ${weight}`;
    }else {
       const bmi = (weight / ((height*height)/10000)).toFixed(2)
       // show the result
       result.innerHTML = `<span>${bmi}</span>`
       if (bmi < 18.6) {
        result.innerHTML = `Your BMI is ${bmi}. You are underweight.`;
    } else if (bmi > 24.9) {
        result.innerHTML = `Your BMI is ${bmi}. You are overweight.`;
    } else {
        result.innerHTML = `Your BMI is ${bmi}. You have a normal weight.`;
    }
    }


})


