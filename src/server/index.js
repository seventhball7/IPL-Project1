const fs = require("fs");
const ipl = require("./ipl.js");

ipl.matchesPerYear(function callback(val){
    fs.writeFile(
        "../public/output/matchesPerYear.json",
        JSON.stringify(val, null, 2),
        (error) => {
          if (error) throw error;
          console.log("matchesPerYear executed");
        }
      );
 });
 
 ipl.matchesWonPerTeamPerYear((value)=>{
    fs.writeFile(
        "../public/output/matchesWonPerTeam.json",
        JSON.stringify(value, null, 2),
        (error) => {
          if (error) throw error;
          console.log("matches per team per year executed");
        }
      );
 })

 ipl.extraRunsin2016((value)=>{
    fs.writeFile(
        "../public/output/extraRuns.json",
        JSON.stringify(value, null, 2),
        (error) => {
          if (error) throw error;
          console.log("extra run in 2016 executed");
        }
      );
 })

 ipl.economyBowlerin2015((value)=>{
    fs.writeFile(
        "../public/output/economyBowler.json",
        JSON.stringify(value, null, 2),
        (error) => {
          if (error) throw error;
          console.log("most economical bowlers in 2015 executed");
        }
      );
 })