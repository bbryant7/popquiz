console.log('quiz 1');

function begin() {
  console.log("begin");
}
begin();

// 

function foo() {
  console.log("does it work?")
}
foo();

function echo(string) {
  return string;
}
echo("hello");
//

function math(x, y, z) {
  return (x + y) * z;
}
math(3, 4, 2);

//
function callMe(function() {
  console.log("in function two");
}) {

  console.log("in function one");
};

callMe();

//

function callMe2(string, function(string) {
  console.log("in function two");
  console.log(string);
}) {
  console.log("in function one");
};

callMe2();
