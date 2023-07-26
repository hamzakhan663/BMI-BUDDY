const readline = require("readline");

// Function to introduce a delay using a Promise
const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

// Main function to gather user input
const main = async () => {
  console.log("Welcome to the BMI Buddy❤️‍🩹.");
  await sleep(2000);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  // Prompt for user's name
  await sleep(2000);
  rl.question("Please what is your name?\n", async function(name) {

  await sleep(2000);
    console.log(`Hello ${name}, We are pleased to have you here.`);

    // Prompt for user's weight
    await sleep(2000);
    rl.question("Kindly enter your weight in kilograms: ", async function(WeightInput) {
      // Prompt for user's height
      await sleep(2000);
      rl.question("Kindly enter your height in meters: ", function(HeightInput) {
        console.log(`Your weight is ${WeightInput}kg and your height is ${HeightInput}m.`);
    
        rl.close();
        
        const weight = parseInt(WeightInput);
        const height = parseFloat(HeightInput);
        
        if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
          console.log("Invalid input. Please enter valid numerical values for weight and height.");
        } else {
          const BMI = weight / (height * height);
          
          console.log(`${name}, your BMI is ${BMI.toFixed(2)}.`);
          const category = getBMICategory(BMI);
          console.log(`You are in the category: ${category}`);
        }
      });
    });
  });
};

// Function to calculate BMI category
const getBMICategory = BMI => {
  if (BMI < 18.5) return "Underweight";
  else if (BMI < 25) return "Normal Weight";
  else if (BMI < 30) return "Overweight";
  else if (BMI < 35) return "Obesity Class I";
  else if (BMI < 40) return "Obesity Class II";
  else return "Obesity Class III";
};

// Run the BMI calculator
main();
