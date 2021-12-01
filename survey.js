/*

• Will learn to create a linear flow through asynchronous, callback based function calls.
• Will learn how and when to leverage nested callbacks, as well as their potential drawbacks

Profile Generator

Create a quick survey app which asks the user a bunch of questions like their favourite music, activity, food, sport, etc. It will then generate a profile description for them to use online, like the example demonstrated above.

• need a nice way to ASK QUESTIONS + FETCH ANSWERS

      The readline module in Node helps us read one line at a time. It can use any input stream, but in our case we are only interested in stdin.

____________________________________________________ */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What\'s your name? Nicknames are also acceptable:)', (nickName) => {
  console.log(`Thank you for your valuable feedback: ${nickName}`);
  rl.question('What\'s an activity you like doing?', (activity) => {
    console.log(`Thank you for your valuable feedback: ${activity}`);
    rl.question('What do you listen to while doing that?', (listening) => {
      console.log(`Thank you for your valuable feedback: ${listening}`);
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (mealTime) => {
        console.log(`Thank you for your valuable feedback: ${mealTime}`);
        rl.question('What\'s your favourite thing to eat for that meal?', (meal) => {
          console.log(`Thank you for your valuable feedback: ${meal}`);
          rl.question('Which sport is your absolute favourite?', (sport) => {
            console.log(`Thank you for your valuable feedback: ${sport}`);
            rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (power) => {
              console.log(`Thank you for your valuable feedback: ${power}`);
              console.log(`Profile:"${nickName} loves listening to ${listening} while ${activity}, devouring ${meal} for ${mealTime}, prefers ${sport} over any other sport, and is amazing at ${power}.'`)
              rl.close();
            });
          });
        });
      });
    });
  });
});
