const brand = document.querySelector('#brand')
const model = document.querySelector('#model')
const year = document.querySelector('#year')
const result = document.querySelector('.result')

let toyotaModels = ['Camry','Land Cruiser', 'Vista']
let bmwModels = ['x5', 'x6', 'x7']

const selectBrand = ()=> {
  if (brand.value=='0'){
    model.style.display='none'}
    else { model.style.display='block'
  }
}

let options = ''
if(brand.value=='100'){
  for (let model of toyotaModels) {
    options +=`<option value='1000'>${model}</option>`
  }
  }

else if(brand.value=='300'){
  for (let model of bmwModels) {
    options +=`<option value='3000'>${model}</option>`
  }
  }

model.innerHTML=options

  const getSum = () => {
    result.innerHTML = `Стоимость: ${(+brand.value + +model.value)*+year.value} тысяч рублей`
  }