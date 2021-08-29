//problem1

function matches(matchdata) {
  const teamMatches = {};
  matchdata.forEach((passedArgument) => {
    let year = passedArgument.season;
    if (year in teamMatches) {
      teamMatches[year] += 1;
    } else {
      teamMatches[year] = 1;
    }
  });
  return teamMatches;
}

//problem2

function matchesWon(matchdata) {
  let matchesWon = {};
  let perTeamWon = {};
  let year;
  matchdata.forEach((passedArgument) => {
    year = passedArgument.season;
    if (year in matchesWon) {
      let win = passedArgument.winner;
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
  });
  return matchesWon;
}

//problem3

function extraRuns(matchdata, deliverydata) {
  let teams = {};
  let id = matchdata
    .filter((passedArgument) => {
      if (passedArgument.season == 2016) return passedArgument.id;
    })
    .map((value) => {
      return value.id;
    });
  deliverydata.forEach((value) => {
    let matchid = value.match_id;
    for (let i = 0; i < id.length; i += 1) {
      if (matchid == id[i]) {
        let bteam = value.bowling_team;
        if (bteam in teams) {
          teams[bteam] += parseInt(value.extra_runs);
        } else {
          teams[bteam] = parseInt(value.extra_runs);
        }
      }
    }
  });
  return teams;
}

// problem 4

function economicalBowlers(matchdata, deliverydata) {
  //4
  let eBowler = {};
  let meconomy = {};
  let bowlerName;
  let result = {};
  let mData = matchdata.filter((value) => {
    if (value.season == 2015) return value.id;
  });
  deliverydata.forEach((value) => {
    let matchid = value.match_id;
    for (let i = 0; i < mData.length; i++) {
      if (matchid == mData[i].id) {
        bowlerName = value.bowler;
        if (eBowler[bowlerName] == undefined) {
          eBowler[bowlerName] = {};
          meconomy[bowlerName] = {};
          eBowler[bowlerName].ball = parseInt(value.ball);
          eBowler[bowlerName].run = parseInt(value.total_runs);
        } else {
          eBowler[bowlerName].ball += parseInt(value.ball);

          eBowler[bowlerName].run += parseInt(value.total_runs);
        }
        meconomy[bowlerName] =
          eBowler[bowlerName].run / eBowler[bowlerName].ball;
      }
    }
  });

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
