const csvtojson = require("csvtojson");
const matchPath = "../data/matches.csv";
const deliveryPath = "../data/deliveries.csv";
const fs = require("fs");
const ipl = require("./ipl.js");
csvtojson()
  .fromFile(matchPath)
  .then((jsnobj1) => {
    return jsnobj1;
  })
  .then((jsn1) => {
    csvtojson()
      .fromFile(deliveryPath)
      .then((jsnobj2) => {
       
        let jsnArray1 = Object.values(jsn1);
        console.log(jsn1)
        let jsnArray2 = Object.values(jsnobj2);

        let matchesPlayedPeryear = () => {
          let result = ipl.matches(jsnArray1);
          fs.writeFile(
            "../public/output/matchesPerYear.json",
            JSON.stringify(result, null, 2),
            (error) => {
              if (error) throw error;
              console.log("result 1 executed");
            }
          );
        };
        matchesPlayedPeryear();
        let matchesWonPerTeam = () => {
          let result = ipl.matcheswonPerTeamPerYear(jsnArray1);
          fs.writeFile(
            "../public/output/matchesWonPerTeam.json",
            JSON.stringify(result, null, 2),
            (error) => {
              if (error) throw error;
              console.log("result 2 executed");
            }
          );
        };
        matchesWonPerTeam();
        let extraRunConceded = () => {
          let result = ipl.extraRunsGiven(jsnArray1, jsnArray2);
          fs.writeFile(
            "../public/output/extraRuns.json",
            JSON.stringify(result, null, 2),
            (error) => {
              if (error) throw error;
              console.log("result 3 executed");
            }
          );
        };

        extraRunConceded();
        let economicalBowlersofIPL = () => {
          let result = ipl.economicalBowlers(jsnArray1, jsnArray2);
          fs.writeFile(
            "../public/output/economyBowler.json",
            JSON.stringify(result, null, 2),
            (error) => {
              if (error) throw error;
              console.log("result 4 executed");
            }
          );
        };
        economicalBowlersofIPL();
      });
  });
