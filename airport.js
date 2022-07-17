function createairportsForces() {
      
  

    var continentNamesDomain = continents.values().map(function(continentCode) {
      return continentNames[continentCode];
    });
    var scaledairportsMargin = circleSize.max;

    airportsScaleX = d3.scaleBand()
      .domain(continentNamesDomain)
      .range([scaledairportsMargin, width - scaledairportsMargin*2]);
    airportsScaleY = d3.scaleLog()
      .domain(airportsExtent)
      .range([height - scaledairportsMargin, scaledairportsMargin*2]);
      

    var centerCirclesInScaleBandOffset = airportsScaleX.bandwidth() / 2;
    return {
      x: d3.forceX(function(d) {
          return airportsScaleX(continentNames[d.ContinentCode]) + centerCirclesInScaleBandOffset;
        }).strength(forceStrength),
      y: d3.forceY(function(d) {
        return airportsScaleY(d.airports);
      }).strength(forceStrength)
      
      
    };
    
  }
