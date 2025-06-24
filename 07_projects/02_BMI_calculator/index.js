const form = document.querySelector('form')

form.addEventListener('submit', function(e){
  e.preventDefault()

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height === '' || height < 0  || isNaN(height)){
    results.innerHTML = "Please give a valid height"
  } else if(weight === '' || weight < 0  || isNaN(weight)){
    results.innerHTML = "Please give a valid weight"
  }else{
    const bmi =(weight / ((height * height)/10000)).toFixed(2)
    results.innerHTML = `<span>${bmi}</span>`
  }
})

// assignment based on 
// BMI Weight Guide
// Under Weight = Less than 18.6

// Normal Range = 18.6 and 24.9

// Overweight = Greater than 24.9

// display these 
