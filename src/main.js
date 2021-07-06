
import SearchAdzuna from "./services/adzuna";
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';


import TarotReading from "./js/tarot.js";


let search = 'servitude';

$

function getElements(response){
  console.log(response);
  console.log(response.cards);

  function getRandomItem(arr) {
    console.log(arr);
    const randomIndex = Math.floor(Math.random()* response.cards.length);
    const item = response.cards[randomIndex];
    console.log(item);
    return item;
  }
  

  const array = response.cards;
  const result1 = getRandomItem(array);
  const result2 = getRandomItem(array);
  const result3 = getRandomItem(array);

  $("#showCard1").html(`<img src=result1.name_short`);
  $("#showCard2").html(`<img src=result2.name_short`);
  $("#showCard3").html(`<img src=result3.name_short`);

  $("#showName1").text(result1.name);
  $("#showName2").text(result2.name);
  $("#showName3").text(result3.name);

  $("#showDescription1").text(result1.desc);
  $("#showDescription2").text(result2.desc);
  $("#showDescription3").text(result3.desc);

  $("#showMeaning1").text(result1.meaning_up);
  $("#showMeaning2").text(result2.meaning_up);
  $("#showMeaning3").text(result3.meaning_up);


  

TarotReading.getTarot()
  .then(function(response){
    getElements(response);
  });

meaningStr = result2.meaning_up;
jobSearchKeyWord = meaningStr.split(", ");

let search = 'servitude';

$


SearchAdzuna.getJobs(search)
  .then(function(response) {
    if (response instanceof Error) {
      throw Error(response.message);
    }
    console.log(response.results[0].title);
    console.log(response.results[0].location.area[0]);
    console.log(response.results[0].redirect_url);
  })
  .catch(function(error) {
    console.log(error);
    //display errors function
  });

  });

