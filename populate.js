
function createpopulationForces() {
    var continentNamesDomain = continents.values().map(function(continentCode) {
      return continentNames[continentCode];
    });
    var scaledpopulationMargin = circleSize.max;

    populationScaleX = d3.scaleBand()
      .domain(continentNamesDomain)
      .range([scaledpopulationMargin, width - scaledpopulationMargin*2]);
    populationScaleY = d3.scaleLog()
      .domain(populationExtent)
      .range([height - scaledpopulationMargin, scaledpopulationMargin*2]);

    var centerCirclesInScaleBandOffset = populationScaleX.bandwidth() / 2;
    return {
      x: d3.forceX(function(d) {
          return populationScaleX(continentNames[d.ContinentCode]) + centerCirclesInScaleBandOffset;
        }).strength(forceStrength),
      y: d3.forceY(function(d) {
        return populationScaleY(d.population);
      }).strength(forceStrength)
      
    };
  }
