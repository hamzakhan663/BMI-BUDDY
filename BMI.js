const readline = require("readline");

// Function to introduce a delay using a Promise
const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Main function to gather user input
const main = async () => {
  console.log("Welcome to the BMI Buddy❤️‍🩹.");

  // Introduce a delay before asking for the user's name
  await sleep(2000);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question("Please what is your name?\n", function(name) {
    console.log(`Hello ${name}, We are pleased to have you here.`);

    // Introduce a delay before asking for weight
    sleep(2000).then(() => {
      rl.question("Kindly enter your weight in kilograms: ", function(weight) {
        // Introduce a delay before asking for height
        sleep(2000).then(() => {
          rl.question("Kindly enter your height in meters: ", function(height) {
            sleep(2000).then(() => {
            console.log(`Your weight is ${weight}kg and your height is ${height}m.`);
            
            sleep(2000).then(() => {
            console.log("Kindly await your BMI Result.");
            
            // Close the readline interface when done
            rl.close();
          });
        });
        });
    });
      });
    });
  });
};

// Run the BMI calculator
main();
