const csvtojson = require("csvtojson");
const FileSystem = require("fs");
const Ipl = require("./ipl.js");

const matchPath = "../data/matches.csv";
const deliveryPath = "../data/deliveries.csv";

csvtojson()
  .fromFile(matchPath)
  .then((matchesDataParsed) => {
    return matchesDataParsed;
  })
  .then((matchesData) => {
    csvtojson()
      .fromFile(deliveryPath)
      .then((deliveryData) => {
        let matchesPlayedPeryear = () => {
          let result = Ipl.matchesPerYear(matchesData);
          savetoFile("../public/output/matchesPerYear.json", result);
        };
        matchesPlayedPeryear();
        let matchesWonPerTeam = () => {
          let result = Ipl.matchesWonPerTeamPerYear(matchesData);
          savetoFile("../public/output/matchesWonPerTeam.json", result);
        };
        matchesWonPerTeam();
        let extraRunConceded = () => {
          let result = Ipl.extraRunsin2016(matchesData, deliveryData);
          savetoFile("../public/output/extraRuns.json", result);
        };

        extraRunConceded();
        let economicalBowlersofIPL = () => {
          let result = Ipl.economyBowlerin2015(matchesData, deliveryData);
          savetoFile("../public/output/economyBowler.json", result);
        };
        economicalBowlersofIPL();
      });
  });

function savetoFile(location, data) {
  FileSystem.writeFile(location, JSON.stringify(data, null, 2), (error) => {
    if (error) throw error;
    console.log("executed");
  });
}
