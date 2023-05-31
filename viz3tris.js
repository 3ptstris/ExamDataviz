fetch('data.json')
  .then((response) => response.json())
  .then((data) => runVisualization(data));

function runVisualization(data) {
  sortByCountryPopulation(data);
  const top30Countries = data.slice(0, 30);
  createBarChart(top30Countries);
}

function sortByCountryPopulation(data) {
  data.sort((a, b) => a.population - b.population);
}

function createBarChart(data) {
  const countryNames = data.map((country) => country.country);
  const populationValues = data.map((country) => country.population);

  const trace = {
    x: populationValues,
    y: countryNames,
    type: 'bar',
    orientation: 'h',
  };

  const layout = {
    title: 'Top 30 des Pays par Population',
    xaxis: { title: 'Population' },
    yaxis: { title: 'Pays' },
  };

  const config = { responsive: true };

  Plotly.newPlot('data-viz', [trace], layout, config);
}
