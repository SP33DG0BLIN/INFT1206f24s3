//bhavin shueevan
//inft1206
// this is assignment 4 part 1 
const cusnam = document.getElementById('customname'); // Box where you can type a name.
const rndmzr = document.querySelector('.randomize'); // Button you click to make a silly story.
const stry = document.querySelector('.story'); // The spot where the story shows up.
function rndarrayval(arr) {
  return arr[Math.floor(Math.random() * arr.length)]; // Picks a random thing from a list.
}
// The story template and lists of silly things to use.
const strytxt = "It was 94 fahrenheit outside, so :x: went for a walk. When they got to :y:, they stared in horror for a few moments, then :z:. Bob saw the whole thing, but was not surprised — :x: weighs 300 pounds, and it was a hot day.";
const x = ["Willy the Goblin", "Big Daddy", "Father Christmas"]; // Funny characters.
const y = ["the soup kitchen", "Disneyland", "the White House"]; // Weird places.
const z = ["spontaneously combusted", "melted into a puddle on the sidewalk", "turned into a slug and crawled away"]; // Crazy actions.
// When you click the button, this happens:
rndmzr.addEventListener('click', () => {
  let nS = strytxt; // Start with the main story.
  // Pick a random character, place, and action.
  const one = rndarrayval(x); 
  const two = rndarrayval(y); 
  const three = rndarrayval(z);
  // Put the random things into the story.
  nS = nS.replaceAll(':x:', one).replace(':y:', two).replace(':z:', three);
  // If you typed a name, use it instead of "Bob".
  if (cusnam.value !== '') nS = nS.replace('Bob', cusnam.value);
  // If "UK" is picked, change pounds and Fahrenheit to stones and centigrade.
  if (document.getElementById('uk').checked) {
    const w = `${Math.round(300 / 14)} stone`; // Convert weight to UK weight.
    const t = `${Math.round((94 - 32) * 5 / 9)} centigrade`; // Convert temp to C.
    nS = nS.replace('300 pounds', w).replace('94 fahrenheit', t); // old numbers for new ones.
  }
  stry.textContent = nS; //story in the box.
  stry.style.visibility = 'visible'; //makes story visible.
});
