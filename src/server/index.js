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
        let result1 = ipl.matches(jsn1);
        fs.writeFile(
          "../public/output/matchesPerYear.json",
          JSON.stringify(result1,null, 2),
          (error) => {
            if (error) throw error;
            console.log("result 1 saved");
          }
        );
        let result2 = ipl.matcheswonPerTeamPerYear(jsn1);
        fs.writeFile(
          "../public/output/matchesWonPerTeam.json",
          JSON.stringify(result2, null, 1),
          (error) => {
            if (error) throw error;
            console.log("result 2 saved");
          }
        );
        let result3 = ipl.extraRunsGiven(jsn1, jsnobj2);
        fs.writeFile(
          "../public/output/extraRuns.json",
          JSON.stringify(result3, null, 2),
          (error) => {
            if (error) throw error;
            console.log("result 3 saved");
          }
        );
        let result4 = ipl.economicalBowlers(jsn1, jsnobj2);
        fs.writeFile(
          "../public/output/economyBowler.json",
          JSON.stringify(result4, null, 2),
          (error) => {
            if (error) throw error;
            console.log("result 4 saved");
          }
        );
      });
  });
