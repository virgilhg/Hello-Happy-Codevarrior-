// NOTE: Solution is incomplete, challenge was time-sensitive. With more time, I would made this.name be both a getter and a setter function.
function Warrior(name){
  this.name = function(){
      return this.name = name
  };  
  this.toString = function(){
    return "Hi! my name\'s "+this.name;
  }
}

