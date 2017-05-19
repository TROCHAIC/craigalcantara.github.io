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
          if (Array.isArray(data)=== true){
              return "array"
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
    if (string.search(word) === -1){  
    return false;
}   else return true;
};


function addFriend(name, object){
    object.friends.push(name);
    return object;
}

function isFriend(name, object){

    if(object.friends){
        for( var i = 0; i < object.friends.length; i++){
            if (name === object.friends[i]){
                return true;}
        } 
        return false;
    } return false}
    
function nonFriends(name, data){
    var notFriends = [];
    for (var i = 0; i < data.length; i++){
        var personPresent = false;
        if(data[i].name !== name){
            for (var k = 0; k < data[i].friends.length; k++){
                if(data[i].friends[k] === name){
                    personPresent = true;
                }
            }
                
        } 
        if (personPresent === false && data[i].name !== name){
            notFriends.push(data[i].name);
        }
    } 
    return notFriends;
}

function updateObject(object, key, value){
        object[key] = value;
        return object;
}


function removeProperties(object, array){
    if (array.length > 0){
        for(var key in object){
            for (var i = 0; i < array.length; i++){
                 if (key === array[i]){
                 delete (object[key]);
                }
            }
        }
    }
    return object
}

function dedup(array){
    var newArray =[];
    for(var i = 0; array.length > i; i++){
        if (newArray.indexOf(array[i]) === -1){
            newArray.push(array[i])
        }
    }    
    return newArray;
}
