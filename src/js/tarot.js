export default class TarotReading {
  static getTarot() {
    return(fetch(`https://rws-cards-api.herokuapp.com/api/v1/cards/search?type=major`))
      .then(function(response) {
        console.log(response);
        if(!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .catch(function(error){
        return (error.message);

      });
  }
}