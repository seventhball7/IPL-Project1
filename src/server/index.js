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
        let totalMatchesPerYear = ipl.matches(jsn1); //problem1 invocation
        fs.writeFile(
          "../public/output/matchesPerYear.json",
          JSON.stringify(totalMatchesPerYear, null, 2),
          (error) => {
            if (error) throw error;
          }
        );

        let matchesWonPerTeam = ipl.matcheswonPerTeamPerYear(jsn1); //problem2 invocation

        fs.writeFile(
          "../public/output/matchesWonPerTeam.json",
          JSON.stringify(matchesWonPerTeam, null, 2),
          (error) => {
            if (error) throw error;
          }
        );
        // let extraRunsConceded = ipl.extraRunsGiven(jsn1, jsnobj2);  //problem3 invocation

        // fs.writeFile(
        //   "../public/output/extraRuns.json",
        //   JSON.stringify(extraRunsConceded, null, 2),
        //   (error) => {
        //     if (error) throw error;
        //   }
        // );
        let topEconomicalBowlers = ipl.economicalBowlers(jsnobj2); //problem4 invocation
        fs.writeFile(
          "../public/output/economyBowler.json",
          JSON.stringify(topEconomicalBowlers, null, 2),
          (error) => {
            if (error) throw error;
          }
        );
      });
  });
