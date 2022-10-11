//api used: https://github.com/ekelen/tarot-api


//button event listeners
document.querySelector('#oneCard').addEventListener('click', drawOne);
document.querySelector('#threeCard').addEventListener('click', drawThree);
document.querySelector('#fiveCard').addEventListener('click', drawFive);

function drawOne(){
  const reversal = Math.floor(Math.random()*2);
  document.querySelector('#threeCardSpread').style.display = 'none';
  document.querySelector('#fiveCardSpread').style.display = 'none';
  document.querySelector('#oneCardSpread').style.display = 'block';

  fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('#firstCard1').innerText = data.cards[0].name;
        if(reversal === 0 || !reversal){
          document.querySelector('#firstCard1Ex').innerText = data.cards[0].meaning_up;
        }else{
          document.querySelector('#firstCard1Ex').innerText = data.cards[0].meaning_rev;
        }
        document.querySelector('#desc11').innerText = data.cards[0].desc
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}
