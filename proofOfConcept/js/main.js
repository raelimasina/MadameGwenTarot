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


function drawThree(){
    const reversal = Math.floor(Math.random()*2);
    document.querySelector('#oneCardSpread').style.display = 'none';
    document.querySelector('#fiveCardSpread').style.display = 'none';
    document.querySelector('#threeCardSpread').style.display = 'block';

    fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('#firstCard3').innerText = data.cards[0].name;
        if(reversal === 0 || !reversal){
          document.querySelector('#firstCard3Ex').innerText = data.cards[0].meaning_up;
        }else{
          document.querySelector('#firstCard3Ex').innerText = data.cards[0].meaning_rev;
        }
        document.querySelector('#desc31').innerText = data.cards[0].desc
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

      fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('#secondCard3').innerText = data.cards[0].name;
        if(reversal === 0 || !reversal){
          document.querySelector('#secondCard3Ex').innerText = data.cards[0].meaning_up;
        }else{
          document.querySelector('#secondCard3Ex').innerText = data.cards[0].meaning_rev;
        }
        document.querySelector('#desc32').innerText = data.cards[0].desc
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

    fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('#thirdCard3').innerText = data.cards[0].name;
        if(reversal === 0 || !reversal){
          document.querySelector('#thirdCard3Ex').innerText = data.cards[0].meaning_up;
        }else{
          document.querySelector('#thirdCard3Ex').innerText = data.cards[0].meaning_rev;
        }
        document.querySelector('#desc33').innerText = data.cards[0].desc
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}    


function drawFive(){
    const reversal = Math.floor(Math.random()*2);
    document.querySelector('#oneCardSpread').style.display = 'none';
    document.querySelector('#threeCardSpread').style.display = 'none';
    document.querySelector('#fiveCardSpread').style.display = 'block';

    fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('#firstCard5').innerText = data.cards[0].name;
        if(reversal === 0 || !reversal){
          document.querySelector('#firstCard5Ex').innerText = data.cards[0].meaning_up;
        }else{
          document.querySelector('#firstCard5Ex').innerText = data.cards[0].meaning_rev;
        }
        document.querySelector('#desc51').innerText = data.cards[0].desc
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

      fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('#secondCard5').innerText = data.cards[0].name;
        if(reversal === 0 || !reversal){
          document.querySelector('#secondCard5Ex').innerText = data.cards[0].meaning_up;
        }else{
          document.querySelector('#secondCard5Ex').innerText = data.cards[0].meaning_rev;
        }
        document.querySelector('#desc52').innerText = data.cards[0].desc
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

    fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('#thirdCard5').innerText = data.cards[0].name;
        if(reversal === 0 || !reversal){
          document.querySelector('#thirdCard5Ex').innerText = data.cards[0].meaning_up;
        }else{
          document.querySelector('#thirdCard5Ex').innerText = data.cards[0].meaning_rev;
        }
        document.querySelector('#desc53').innerText = data.cards[0].desc
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

      fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('#fourthCard5').innerText = data.cards[0].name;
        if(reversal === 0 || !reversal){
          document.querySelector('#fourthCard5Ex').innerText = data.cards[0].meaning_up;
        }else{
          document.querySelector('#fourthCard5Ex').innerText = data.cards[0].meaning_rev;
        }
        document.querySelector('#desc54').innerText = data.cards[0].desc
      })
      .catch(err => {
          console.log(`error ${err}`)
      });

      fetch('https://rws-cards-api.herokuapp.com/api/v1/cards/random?n=1')
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        document.querySelector('#fifthCard5').innerText = data.cards[0].name;
        if(reversal === 0 || !reversal){
          document.querySelector('#fifthCard5Ex').innerText = data.cards[0].meaning_up;
        }else{
          document.querySelector('#fifthCard5Ex').innerText = data.cards[0].meaning_rev;
        }
        document.querySelector('#desc55').innerText = data.cards[0].desc
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}    