
   // want to pair the musicians with the instrument they play.
   // 1st array is musicians []
   // 2nd array is instruments []
function theBeatlesPlay(musicians, instruments) {
  var musicianInstruments = [];
    for(var i = 0; i < musicians.length; i++) {
      musicianInstruments[i] = musicians[i] + " plays " + instruments[i];
    }
    return musicianInstruments;
  }   
    
//  want each fact in array to end with "!!!"
//  const facts = [
//   "He was the last Beatle to learn to drive",
//   "He was never a vegetarian",
//   "He was a choir boy and boy scout",
//   "He hated the sound of his own voice"
// ];

function johnLennonFacts(facts) {
  var i = 0;
  while (i<facts.length) {
    facts[i] = facts[i] + "!!!";
    i++;
  }
  return facts;
}

  // create an array that repeates " I love the beatles" over and over again
  // want to say " I love the beatles" one more time than passed.
  
function iLoveTheBeatles(inputNumber) {
  var beat = [];
  var i = 0;
  do{ 
    beat[i] = "I love the Beatles!";
    i++;
  } while(i< 15-inputNumber);
    //argument represents the difference between input # and 15
  return beat;
}