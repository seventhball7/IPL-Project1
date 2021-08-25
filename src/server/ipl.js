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
  let year = {};
  let teams = {};
  matchdata.forEach((passedArgument) => {
    let id = {};
    //  let extraruns;
    if (passedArgument.season == 2016) {
      id = passedArgument.id;
    }
    deliverydata.forEach((element) => {
      let matchid = element.match_id;
      if (id == matchid) {
        let bteam = element.bowling_team;
        // console.log(bteam);
        if (bteam in teams) {
          teams[bteam] += parseInt(element.extra_runs);
        } else {
          teams[bteam] = parseInt(element.extra_runs);
        }
      }
    });
  });
  return teams;
}

// problem 4

function economicalBowlers(deliverydata) {
  let eBowler = {};
  let meconomy = {};
  let bowlerName;
  let result = [];
  deliverydata.forEach((passedArgument) => {
    bowlerName = passedArgument.bowler;
    if (eBowler[bowlerName] == undefined) {
      eBowler[bowlerName] = {};
      meconomy[bowlerName] = {};
      eBowler[bowlerName].ball = parseInt(passedArgument.ball);
      eBowler[bowlerName].run = parseInt(passedArgument.total_runs);
    } else {
      eBowler[bowlerName].ball += parseInt(passedArgument.ball);

      eBowler[bowlerName].run += parseInt(passedArgument.total_runs);
    }

    meconomy[bowlerName] = eBowler[bowlerName].run / eBowler[bowlerName].ball;
  });
  let vals = Object.entries(meconomy).sort((a, b) => a[1] - b[1]);
  for (let i = 0; i < 10; i++) {
    result.push(vals[i]);
  }
  return result;
}

module.exports = {
  matches: matches,
  matcheswonPerTeamPerYear: matchesWon,
  extraRunsGiven: extraRuns,
  economicalBowlers: economicalBowlers,
};
