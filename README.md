## IPL-PROJECT
* Initialize the project folder with -> npm init -y;
* Install csvtojson parser.
* Command to install is -> npm i csvtojson.
* In the index.js require the dependency by assigning it to a variable -> const csvtojson = require('csvtojson').
* In the index.js file the 2 csv files deliveries.csv and matches.csv has been used.
* First the matches.csv has been parsed to json object and then returned to the second function where the deliveries.csv has been passed.
* The first question has been referenced by result1 followed by it the 2nd, 3rd, and 4th question by the variable names result2, result3 and result4.
* The result variables is calling the functions that is solved in ipl.js file and then dumping the data the output JSON files.
* The file.parse method has been used to dump the data in the output folder after solving each problem.
 
 #### Initially only problem 1 that is the result1 variable  in index.js file has been uncommented to be executed. Uncommenting all the problems at once will cause delay in executing.  

### For problem 3
* Since the variable used is searching in both the files deliveries.csv and matches.csv it will take few seconds to execute.

### For problem 4
* The average(economy) has been calculated by dividing the total number of runs given by the bowler by the total number of ball a bowler has bowled.

