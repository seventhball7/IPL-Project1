const csvtojson = require("csvtojson");
const matchPath = "../data/matches.csv";
const deliveryPath = "../data/deliveries.csv";

const matchesPerYear = (cb) => {
  csvtojson()
    .fromFile(matchPath)
    .then((obj) => {
      let val = obj
        .map((row) => {
          return row.season;
        })
        .reduce((acc, curr) => {
          acc[curr] = acc[curr] + 1 || 1;
          return acc;
        }, {});
      cb(val);
      //return val;
    });
};

//problem2
const matchesWonPerTeamPerYear = (cb) => {
  csvtojson()
    .fromFile(matchPath)
    .then((obj) => {
      let value = obj
        .map((row) => {
          let season = row.season;
          let winner = row.winner;
          return { season, winner };
        })
        .reduce((acc, curr) => {
          let winner = curr.winner;
          let season = curr.season;
          if (season in acc) {
            if (winner in acc[season]) {
              acc[season][winner] += 1;
            } else {
              acc[season][winner] = 1;
            }
          } else {
            acc[season] = {};
            acc[season][winner] = 1;
          }
          return acc;
        }, {});
      cb(value);
      return value;
    });
};

3;
const extraRunsin2016 = (cb) => {
  csvtojson()
    .fromFile(matchPath)
    .then((jsnobj1) => {
      return jsnobj1;
    })
    .then((jsn1) => {
      csvtojson()
        .fromFile(deliveryPath)
        .then((jsnobj2) => {
          let result = {};
          let id = jsn1
            .filter((data) => {
              if (data.season == 2016) return data.id;
            })
            .map((element) => {
              return element.id;
            });
          jsnobj2.map((element) => {
            let find = id.find((value) => {
              return element.match_id == value;
            });
            if (find != undefined) {
              if (result[element.bowling_team] != undefined) {
                result[element.bowling_team] += parseInt(element.extra_runs);
              } else {
                result[element.bowling_team] = parseInt(element.extra_runs);
              }
            }
          });
          cb(result);
          // return result;
        });
    });
};
const economyBowlerin2015 = (cb) => {
  csvtojson()
    .fromFile(matchPath)
    .then((jsnobj1) => {
      return jsnobj1;
    })
    .then((jsn1) => {
      csvtojson()
        .fromFile(deliveryPath)
        .then((jsnobj2) => {
          let eBowler = {};
          let meconomy = {};
          let result = {};
          let id = jsn1
            .filter((data) => {
              if (data.season == 2015) return data.id;
            })
            .map((data) => {
              return data.id;
            });
          jsnobj2.map((data) => {
            let find = id.find((value) => {
              return data.match_id == value;
            });
            if (find != undefined) {
              let bowlerName = data.bowler;
              if (bowlerName in eBowler) {
                eBowler[bowlerName].ball += parseInt(data.ball);
                eBowler[bowlerName].run += parseInt(data.total_runs);
              } else {
                eBowler[bowlerName] = {};
                eBowler[bowlerName].ball = parseInt(data.ball);

                eBowler[bowlerName].run = parseInt(data.total_runs);
              }
              meconomy[bowlerName] =
                eBowler[bowlerName].run / eBowler[bowlerName].ball;
            }
          });
          let vals = Object.entries(meconomy).sort((a, b) => a[1] - b[1]);
          vals = vals.filter((vals, idx) => idx < 10);
          result = Object.fromEntries(vals);
          cb(result);
          //  return result;
        });
    });
};
module.exports = {
  matchesPerYear,
  matchesWonPerTeamPerYear,
  extraRunsin2016,
  economyBowlerin2015,
};
