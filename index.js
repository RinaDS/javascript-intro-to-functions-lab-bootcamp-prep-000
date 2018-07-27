function shout(string){
  return string.toUpperCase()
}
function whisper(string){
  return string.toLowerCase()
}
function logShout(){
  const spy = "Hello";
  console.log(spy.toUpperCase())
}
function logWhisper(string){
  const spy = "Hello";
  console.log(spy.toLowerCase())
}
function sayHiToGrandma(string){
  if (sayHiToGrandma(string.toLowerCase())) === true{
    return "I can't hear you!"
  } ;else {
    return "Error"
  }
}