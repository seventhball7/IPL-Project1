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
        let matchesPlayedPeryear = () => {
          let result = ipl.matches(jsn1);
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
          let result = ipl.matcheswonPerTeamPerYear(jsn1);
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
          let result = ipl.extraRunsGiven(jsn1, jsnobj2);
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
          let result = ipl.economicalBowlers(jsn1, jsnobj2);
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
