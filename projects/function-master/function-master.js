function objectValues( assert ) {
      var data = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"};
      var array = [];
      var key;
      
      for (key in data) {
          array.push(data[key]);
      };
      
      return array;
}

function keysToString( assert ){
    
    var data = {a: "one", b: "two", ponies: "crayons", dingle: "dangle"}; 
    
    var string =(Object.keys(data)).join(" ");
    
    return string;
    
};

function valuesToString() {
      var data = {a: "one", boolean: false, b: "two", ponies: "crayons", something: {}, dingle: "dangle"};
      var array = [];
      for( var key in data){
          if (typeof data[key] == "string"){
          array.push(data[key])
      }
    }
  return array.join(" ");
   
};
function arrayOrObject(data) {
          if ( typeof data === "object"){
              //if (typeof data ===  )
          } 
          else return "object";
   
};

function capitalizeWord(string) {
    var letter = string.substring(0, 1);
    var restOfLetters = string.substring(1);
    
   
    return letter.toUpperCase() + restOfLetters;
    
};

function capitalizeAllWords(string) {
    var words = string.split(" ");
    var newArray = [];
  
    for (var i = 0; i < words.length; i++){
        var letter = words[i].substring(0, 1);
        var restOfLetters = words[i].substring(1);
        newArray.push(letter.toUpperCase() + restOfLetters);
        }
  
    var newString = newArray.join(" ");
    return newString;
  
};

function welcomeMessage(object){
  var j = object.name.substring(0, 1).toUpperCase();
  var h = object.name.substring (1);
  
  return "Welcome " + j + h +"!";
  
};

function profileInfo(object){
  
  var a = object.name.substring(0, 1).toUpperCase();
  var b = object.name.substring (1);
  
  var c = object.species.substring(0, 1).toUpperCase();
  var d = object.species.substring (1);
  
  return a + b +" is a " + c + d;
}

function maybeNoises(object){
    
    if (object.noises){
      if (object.noises.length > 0){
        return object.noises.join(" ");
    } else return "there are no noises";
    } else return "there are no noises";

}

function hasWord(string, word){
    if (string.search(word) === 0){  
    return true;
}   else return false;
};
