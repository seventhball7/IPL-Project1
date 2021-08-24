const csvtojson = require('csvtojson');
const matchPath = "../data/matches.csv";
const deliveryPath = "../data/deliveries.csv";
const fs = require('fs');
const { extraRuns } = require('./ipl.js');
const ipl = require('./ipl.js');
csvtojson().
  fromFile(matchPath)
  .then((jsnobj1) => {
    return jsnobj1;
  })
  .then(
    jsn1 => {
      csvtojson().
        fromFile(deliveryPath)
        .then((jsnobj2) => {
        let res1= ipl.matches(jsn1);
       fs.writeFile('../public/output/matchesPerYear.json', JSON.stringify(res1, null, 2), (error) => {
         if (error) throw error;
       });
       let res2 =ipl.matcheswonPerTeamPerYear(jsn1);
      fs.writeFile('../public/output/matchesWonPerTeam.json', JSON.stringify(matchesWon, null, 2), (error) => {
       if (error) throw error;
     });
        let res3= ipl.extraRunsGiven(jsn1,jsnobj2)
       fs.writeFile('../public/output/extraRuns.json', JSON.stringify(res3, null, 2), (error) => {
        if (error) throw error;
      });
        let res4=ipl.economicalBowlers(jsnobj2);
        fs.writeFile('../public/output/economyBowler.json', JSON.stringify(res4, null, 2), (error) => {
         if (error) throw error;
        });
    
        })
    })


