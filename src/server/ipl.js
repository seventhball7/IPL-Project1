//problem1

function matches(matchdata) {
  const teamMatches = {};
  for (let i in matchdata) {
    let year = matchdata[i].season;
    if (teamMatches[year] == null) {
      teamMatches[year] = 1;
    }
    else {
      teamMatches[year] += 1;
    }
  }
 return teamMatches;
}

//problem2

function matchesWon(matchdata) {
  let matchesWon = {};
  let perTeamWon = {};
  for (let i = 0; i < matchdata.length; i += 1) {
    if (matchdata[i].season in matchesWon) {
      if (matchdata[i].winner in perTeamWon) {
        perTeamWon[matchdata[i].winner] += 1;
      }
      else {
        perTeamWon[matchdata[i].winner] = 1;
      }
      matchesWon[matchdata[i].season] = perTeamWon;
    }
    else {
       perTeamWon={};
      matchesWon[matchdata[i].season] = perTeamWon;
    }
  }
  return matchesWon;

}

//problem3

function extraRuns(matchdata, deliverydata) {
  let year = {};
  let teams = {};
  for (let i in matchdata) {
    let id = {};
    //  let extraruns;
    if (matchdata[i].season == 2016) {
      id = matchdata[i].id;
    }
    for (let k in deliverydata) {
      let matchid = deliverydata[k].match_id;
      if (id == matchid) {
        let bteam = deliverydata[k].bowling_team;
        // console.log(bteam);
        if (bteam in teams) {
          teams[bteam] += parseInt(deliverydata[k].extra_runs);
        }
        else {
          teams[bteam] = parseInt(deliverydata[k].extra_runs);
        }

      }
    }

  }
  return teams;
}




// problem 4

function economicalBowlers(deliverydata) {
  let eBowler = {};
  //let result = [];
  let meconomy={};
  let bowlerName;
  //let arr=[];
  for (let i in deliverydata) {
    bowlerName = deliverydata[i].bowler;
    if (eBowler[bowlerName] == undefined) {
      eBowler[bowlerName] = {};
      meconomy[bowlerName]={};
      eBowler[bowlerName].ball = parseInt(deliverydata[i].ball);
      eBowler[bowlerName].run = parseInt(deliverydata[i].total_runs);
      // meconomy[bowlerName].economy=eBowler[bowlerName].run/eBowler[bowlerName].ball;

    }
    else {
      eBowler[bowlerName].ball += parseInt(deliverydata[i].ball);

      eBowler[bowlerName].run += parseInt(deliverydata[i].total_runs);
      
      
    }
   
    meconomy[bowlerName].economy=eBowler[bowlerName].run/eBowler[bowlerName].ball;
  // result.push[meconomy[bowlerName].economy];
  }

  return meconomy;
  }
module.exports = {
  matches: matches,
  matcheswonPerTeamPerYear: matchesWon,
  extraRunsGiven: extraRuns,
  economicalBowlers: economicalBowlers
}


















