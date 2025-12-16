
const form = document.querySelector('form')
        //this usecase will give you empty value
form.addEventListener('submit', function(e){
    e.preventDefault()       //to prevent direct submission to server as we are not doing backend now
        //all this is performed after the event is listened

   const height = parseInt(document.querySelector('#height').value) //.value to extract value from that input
   
   const weight = parseInt(document.querySelector('#weight').value)

  const result= document.querySelector('#result')
  const resulttext= document.querySelector('#resulttext')

   if(height === '' || height< 0 || isNaN(height) ){
    result.innerHTML = `Please give a valid height ${height}`;
   }
   else if(weight === '' || weight< 0 || isNaN(weight) ){
    result.innerHTML = `Please give a valid weight${weight}`;
   }
   else{
    const bmi =(weight / ((height*height)/10000) ).toFixed(2);//fixed number to decimal points
    //display result
    result.innerHTML= `<span> ${bmi} </span>`;
    if(bmi< 18.6){
    resulttext.innerHTML = `You are UnderWeight`;
}
else if (bmi> 18.6 && bmi< 24.9)
{
    resulttext.innerHTML = `Your Weight is Normal`;
}
else{
    resulttext.innerHTML=`you are OverWeight `;
}

    }
    


});