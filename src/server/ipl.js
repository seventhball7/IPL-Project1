function matches(matchdata) {
  //1
  const teamMatches = {};
  for (let i in matchdata) {
    let year = matchdata[i].season;
    teamMatches[year] = teamMatches[year] + 1 || 1;
  }
  return teamMatches;
}

function matchesWon(matchdata) {
  //2
  let matchesWon = {};
  for (let i in matchdata) {
    let year = matchdata[i].season;
    let win = matchdata[i].winner;
    if (win.length==0){
      win ='draw';
    }
    if (year in matchesWon)
      matchesWon[year][win] = matchesWon[year][win] + 1 || 1;
    else matchesWon[year] = {};
  }
  return matchesWon;
}

function extraRuns(matchdata, deliverydata) {
  //3
  let teams = {};
  let id = [];
  for (let i in matchdata) {
    if (matchdata[i].season == 2016) {
      id.push(matchdata[i].id);
    }
  }
  for (let k in deliverydata) {
    for (let i = 0; i < id.length; i += 1) {
      if (deliverydata[k].match_id == id[i]) {
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

function economicalBowlers(matchdata, deliverydata) {
  //4
  let eBowler = {};
  let meconomy = {};
  let result = {};
  let id = [];
  for (let k in matchdata) {
    if (matchdata[k].season == 2015) {
      id.push(matchdata[k].id);
    }
  }
  for (let i in deliverydata) {
    for (let k = 0; k < id.length; k += 1) {
      if (id[k] == deliverydata[i].match_id) {
        let bowlerName = deliverydata[i].bowler;
        if (eBowler[bowlerName] == undefined) {
          eBowler[bowlerName] = {};
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

  let vals = Object.entries(meconomy).sort((a, b) => a[1] - b[1]); //converting meconomy to array then sorting

  for (let i = 0; i < 10; i++) {
    let bowler = vals[i][0];
    let averageValue = vals[i][1];
    result[bowler] = averageValue;
  }
  return result;
}
module.exports = {
  matches,
  matcheswonPerTeamPerYear: matchesWon,
  extraRunsGiven: extraRuns,
  economicalBowlers: economicalBowlers,
};
