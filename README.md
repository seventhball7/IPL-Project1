## IPL-PROJECT

- Initialize the project folder with -> npm init -y, a package.json file would be created.
- Install csvtojson parser.
- Command to install is -> npm i csvtojson.
- A package-lock.json file would be created.
- Type the command git init in the local directory/folder.
- Type the command (git clone [git@github.com:seventhball7/IPL-Project1.git](git@github.com:seventhball7/IPL-Project1.git)) or --> git remote add origin git@github.com:seventhball7/IPL-Project1.git to clone or copy the git repository.
- Open any editor and go to the src/server directory and then the index.js file.
- Require the following files and dependecies -->

        const csvtojson = require("csvtojson");
        const matchPath = "../data/matches.csv";
        const deliveryPath = "../data/deliveries.csv";
        const fs = require("fs");
        const ipl = require("./ipl.js");

- In the index.js file the 2 csv files deliveries.csv and matches.csv has been used.
- First the matches.csv has been parsed to json object and then returned to the second function by the .then() method where the deliveries.csv has been parsed.
- The command for it has been written below
  ```javascript
  csvtojson()
  .fromFile(matchPath)
  .then((jsnobj1) => {
    return jsnobj1;
  })
  .then((jsn1) => {
    csvtojson()
      .fromFile(deliveryPath)
      .then((jsnobj2) => {
      }
  ```
- After it the variables is calling the functions that is solved in ipl.js file and then dumping the data the output JSON files.
- The file.parse method has been used to write/dump the data in the output folder after solving each problem.
- The command for it is written below and the result has been referenced by the name matchesWonPerTeam which is being written on the matcheswonPerTeam.json file in the output folder.

          fs.writeFile(
          "../public/output/matchesWonPerTeam.json",
          JSON.stringify(matchesWonPerTeam, null, 2),
          (error) => {
            if (error) throw error;
          }
        );

- The following command is there to execute this file.

        * cd src/server
        * node index.js

### For problem 4

- The average(economy) has been calculated by dividing the total number of runs given by the bowler by the total number of ball a bowler has bowled.
 
 ## HighCharts Plotting
  - Server used is the 'LiveServer' and is directly installed from Visual Studio Code.
  - Server is using the port number 5500.
  - The output is fetched in the output.js file and then it is formatted in the highCharts graph.
  - The charts can be seen in the index.html file in the directory src/public/output.



  