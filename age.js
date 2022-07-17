function createmedian_ageForces() {
    var continentNamesDomain = continents.values().map(function(continentCode) {
      return continentNames[continentCode];
    });
    var scaledmedian_ageMargin = circleSize.max;

    median_ageScaleX = d3.scaleBand()
      .domain(continentNamesDomain)
      .range([scaledmedian_ageMargin, width - scaledmedian_ageMargin*2]);
      median_ageScaleY = d3.scaleLog()
      .domain(median_ageExtent)
      .range([height - scaledmedian_ageMargin, scaledmedian_ageMargin*2]);

    var centerCirclesInScaleBandOffset = median_ageScaleX.bandwidth() / 2;
    return {
      x: d3.forceX(function(d) {
          return median_ageScaleX(continentNames[d.ContinentCode]) + centerCirclesInScaleBandOffset;
        }).strength(forceStrength),
      y: d3.forceY(function(d) {
        return median_ageScaleY(d.median_age);
      }).strength(forceStrength)
      
    };
  }
