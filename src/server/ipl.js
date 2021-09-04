function matchesPerYear(matchdata) {
  let value = matchdata
    .map((row) => {
      return row.season;
    })
    .reduce((acc, curr) => {
      acc[curr] = acc[curr] + 1 || 1;
      return acc;
    }, {});
  return value;
}

//problem2
function matchesWonPerTeamPerYear(matchData) {
  let value = matchData
    .map((row) => {
      let season = row.season;
      let winner = row.winner;
      return { season, winner };
    })
    .reduce((acc, currentValue) => {
      let winner = currentValue.winner;
      let season = currentValue.season;
      if (season in acc) {
        winner in acc[season]
          ? (acc[season][winner] += 1)
          : (acc[season][winner] = 1);
      } else {
        acc[season] = {};
        acc[season][winner] = 1;
      }
      return acc;
    }, {});
  return value;
}

//3
function extraRunsin2016(matchData, deliveryData) {
  let result = {};
  let id = matchData
    .filter((data) => {
      if (data.season == 2016) return data.id;
    })
    .map((element) => {
      return element.id;
    });
  deliveryData.map((element) => {
    let find = id.find((value) => {
      return element.match_id == value;
    });
    if (find != undefined) {
      result[element.bowling_team] != undefined
        ? (result[element.bowling_team] += parseInt(element.extra_runs))
        : (result[element.bowling_team] = parseInt(element.extra_runs));
    }
  });
  return result;
}

//4

const economyBowlerin2015 = (matchData, deliveryData) => {
  let economyBowler = {};
  let mostEconomyBowler = {};
  let result = {};
  let id = matchData
    .filter((data) => {
      if (data.season == 2015) return data.id;
    })
    .map((data) => {
      return data.id;
    });
  deliveryData.map((data) => {
    let sameMatchId = id.find((value) => {
      return data.match_id == value;
    });
    if (sameMatchId != undefined) {
      let bowlerName = data.bowler;
      bowlerName in economyBowler
        ? ((economyBowler[bowlerName].ball += parseInt(data.ball)),
          (economyBowler[bowlerName].run += parseInt(data.total_runs)))
        : ((economyBowler[bowlerName] = {}),
          (economyBowler[bowlerName].ball = parseInt(data.ball)),
          (economyBowler[bowlerName].run = parseInt(data.total_runs)));

      mostEconomyBowler[bowlerName] =
        economyBowler[bowlerName].run / economyBowler[bowlerName].ball;
    }
  });
  let values = Object.entries(mostEconomyBowler).sort((a, b) => a[1] - b[1]);
  values = values.filter((vals, idx) => idx < 10);
  result = Object.fromEntries(values);
  return result;
};
module.exports = {
  matchesPerYear,
  matchesWonPerTeamPerYear,
  extraRunsin2016,
  economyBowlerin2015,
};
