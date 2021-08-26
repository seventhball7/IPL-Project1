function matches(matchdata) {                                                                         //1
  const teamMatches = {};
  for (let i in matchdata) {
    let year = matchdata[i].season;
    if (year in teamMatches) {
      teamMatches[year] += 1;
    } else {
      teamMatches[year] = 1;
    }
  }
  return teamMatches;
}

function matchesWon(matchdata) {                                                                       //2
  let matchesWon = {};
  let perTeamWon = {};
  for (let i in matchdata) {
    let year = matchdata[i].season;
    let win = matchdata[i].winner;
    if (year in matchesWon) {
      if (win in perTeamWon) {
        perTeamWon[win] += 1;
      } else {
        perTeamWon[win] = 1;
      }
      matchesWon[year] = perTeamWon;
    } else {
      perTeamWon = {};
      matchesWon[year] = perTeamWon;
    }
  }
  return matchesWon;
}

function extraRuns(matchdata, deliverydata) {                                                           //3 
  let year = {};
  let teams = {};
  for (let i in matchdata) {
    let id = {};
    if (matchdata[i].season == 2016) {
      id = matchdata[i].id;
    }
    for (let k in deliverydata) {
      let matchid = deliverydata[k].match_id;
      if (id == matchid) {
        let bteam = deliverydata[k].bowling_team;
        if (bteam in teams) {
          teams[bteam] += parseInt(deliverydata[k].extra_runs);
        } else {
          teams[bteam] = parseInt(deliverydata[k].extra_runs);
        }
      }
    }
  }
  return teams;
}

function economicalBowlers(matchdata, deliverydata) {                                                       //4
  let eBowler = {};
  let meconomy = {};
  let bowlerName;
  let result = {};
  for (let k in matchdata) {
    let id = {};
    if (matchdata[k].season == 2015) {
      id = matchdata[k].id;
    }
    for (let i in deliverydata) {
      let matchid = deliverydata[i].match_id;
      if (id == matchid) {
        bowlerName = deliverydata[i].bowler;
        if (eBowler[bowlerName] == undefined) {
          eBowler[bowlerName] = {};
          meconomy[bowlerName] = {};
          eBowler[bowlerName].ball = parseInt(deliverydata[i].ball);
          eBowler[bowlerName].run = parseInt(deliverydata[i].total_runs);
        } else {
          eBowler[bowlerName].ball += parseInt(deliverydata[i].ball);

          eBowler[bowlerName].run += parseInt(deliverydata[i].total_runs);
        }
        meconomy[bowlerName] =
          eBowler[bowlerName].run / eBowler[bowlerName].ball;
      }
    }
  }
  let vals = Object.entries(meconomy).sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < 10; i++) {
    let bowler = vals[i][0];
    let averageValue = vals[i][1];
    result[bowler] = averageValue;
  }
  return result;
}
module.exports = {
  matches: matches,
  matcheswonPerTeamPerYear: matchesWon,
  extraRunsGiven: extraRuns,
  economicalBowlers: economicalBowlers,
};
