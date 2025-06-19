# Challenge Description:
VVhat ?!?

None of zese codevarriors seemz to remember hiz ovvn name !

Kould you help ?

var albert = new Warrior("Al")
var boris  = new Warrior("Boris")

albert.toString() --> "Hi! my name's Boris" <-- ohoh..

# Test Cases:
describe("Tests", () => {
  it("test", () => {
var albert = new Warrior("Albert")
var boris  = new Warrior("Boris")

Test.assertEquals(albert.toString(),"Hi! my name's Albert");
Test.assertEquals(albert.name(),"Albert");
Test.assertEquals(boris.name(),"Boris");

boris.name("Bobo")
Test.assertEquals(boris.name(),"Bobo");


  });
});
