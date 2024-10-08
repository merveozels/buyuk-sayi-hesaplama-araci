function calculateDiscount() {
  let firstNumber = Number(document.getElementById('firstNumber').value);
  let middleNumber = Number(document.getElementById('middleNumber').value);
  let lastNumber =  Number(document.getElementById('lastNumber').value);

  let result;

//input'lardan değerleri string olarak almak yerine, sayıya çeviriyoruz buynun için number fonskyionu kullanılır inputtan gelen ifadeler html tabanlı 
// olduğu için stringtir unutma number(xxxxxx .value)

  if (firstNumber >= middleNumber && firstNumber >= lastNumber) {
  alert('1. Sayı en büyük Sayıdır');
  } else if( middleNumber >= firstNumber && middleNumber >= lastNumber){
  alert('2. Sayı en büyük sayıdır');
  } else {
    alert('3.sayı en büyük sayıdır');
  }
}