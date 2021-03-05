//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let startingFuelLevel;
let noOfAstranaut;
let altitude;
/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
const fuelLevel=require('readline-sync');
startingFuelLevel=Number(fuelLevel.question("Enter the starting FuelLevel:"))
while(startingFuelLevel<5000 && startingFuelLevel>30000)
{
console.log("Invalid fuel level.")
startingFuelLevel=Number(fuelLevel.question("Enter the starting FuelLevel(5000-30000):"))
}
  noOfAstranaut=Number(fuelLevel.question("Enter the no of astronauts:"))

while(noOfAstranaut<0 && noOfAstranaut>7)
{
  console.log("*********")
console.log("Invalid selection.")
noOfAstranaut=Number(fuelLevel.question("Enter the number of Astronaut(0-7):"))
}
  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.



/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
