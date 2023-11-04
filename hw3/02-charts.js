// Colors for doughnut chart sections
const backgroundColors = [
  'rgba(54, 162, 235, 0.8)',
  'rgba(255, 206, 86, 0.8)',
  'rgba(255, 99, 132, 0.8)',
  'rgba(75, 192, 192, 0.8)',
  'rgba(153, 102, 255, 0.8)',
  'rgba(255, 159, 64, 0.8)',
  'rgba(199, 199, 199, 0.8)',
  'rgba(83, 102, 255, 0.8)',
  'rgba(40, 159, 64, 0.8)',
  'rgba(210, 199, 199, 0.8)',
  'rgba(78, 52, 199, 0.8)',
  'rgba(52, 162, 235, 0.8)',
  'rgba(252, 206, 86, 0.8)',
  'rgba(252, 99, 132, 0.8)',
  'rgba(72, 192, 192, 0.8)',
  'rgba(152, 102, 255, 0.8)',
  'rgba(252, 159, 64, 0.8)',
  'rgba(192, 199, 199, 0.8)',
  'rgba(82, 102, 255, 0.8)',
  'rgba(42, 159, 64, 0.8)',
  'rgba(212, 199, 199, 0.8)',
  'rgba(72, 52, 199, 0.8)',
];

const borderColors = [
  'rgba(54, 162, 235, 1)',
  'rgba(255, 206, 86, 1)',
  'rgba(255, 99, 132, 1)',
  'rgba(75, 192, 192, 1)',
  'rgba(153, 102, 255, 1)',
  'rgba(255, 159, 64, 1)',
  'rgba(159, 159, 159, 1)',
  'rgba(83, 102, 255, 1)',
  'rgba(40, 159, 64, 1)',
  'rgba(210, 199, 199, 1)',
  'rgba(78, 52, 199, 1)',
  'rgba(52, 162, 235, 1)',
  'rgba(252, 206, 86, 1)',
  'rgba(252, 99, 132, 1)',
  'rgba(72, 192, 192, 1)',
  'rgba(152, 102, 255, 1)',
  'rgba(252, 159, 64, 1)',
  'rgba(152, 159, 159, 1)',
  'rgba(82, 102, 255, 1)',
  'rgba(42, 159, 64, 1)',
  'rgba(212, 199, 199, 1)',
  'rgba(72, 52, 199, 1)',
];

// url for the Thrones API
const url = 'https://thronesapi.com/api/v2/Characters';

// Houses with their associated # of characters
const houseCount = [];

// Fetch data from API asyncronously
const getData = async function fetchDataFromURL() {
  try {
    const response = await fetch(url);
    console.log('Request successful', response);

    // Now turn data into a json readable format
    data = await response.json();

    // Render chart with data retrieved from API
    renderChart(data);
  } catch (error) {
    // Error from API fetch
    console.error('Request failed', error);
  }
};

// Function to list houses and get associated counts for families
const getHouses = function getHousesFromData(data) {

  const houses = [];
  // Loop through data
  data.forEach((dataItem) => {
    // Strip 'house' from family names
    dataItem.family = dataItem.family.replace('House ', '');

    // Address inconsistencies with Lannister family
    if (dataItem.family === 'Lanister') {
      dataItem.family = 'Lannister';
    }

    // Address inconsistencies with unknown/none/empty family inputs
    if (
      dataItem.family === 'Unkown' ||
      dataItem.family === 'None' ||
      dataItem.family === ''
    ) {
      dataItem.family = 'Unknown';
    }

    // Address inconsistencies with Targaryen
    if (dataItem.family === 'Targaryan') {
      dataItem.family = 'Targaryen';
    }

    // Address inconsistencies with Lorath
    if (dataItem.family === 'Lorathi') {
      dataItem.family = 'Lorath';
    }

    // We will not be updating family value from here, save as constant
    const family = dataItem.family;

    if (houses.includes(family)) {
      // Family already exists in list of houses, add to count
      const index = houseCount.map((e) => e.family).indexOf(family);
      houseCount[index].count += 1;
    } else {
      // Family does not exists yet in list, add new entry & start new count
      houses.push(family);
      houseCount.push({ family: family, count: 1 });
    }
  });

  return houses;
};

// Function to get values of each house count to insert into chart
const getCount = function getCountFromCountArray() {
  const count = [];
  houseCount.forEach((countItem) => {
    count.push(countItem.count);
  });
  return count;
};

// Function that renders the chart in display
const renderChart = function renderChartFromData(data) {
  const donutChart = document.querySelector('.donut-chart');

  new Chart(donutChart, {
    type: 'doughnut',
    data: {
      labels: getHouses(data),
      datasets: [
        {
          label: 'Houses',
          data: getCount(),
          backgroundColor: backgroundColors,
          borderColor: borderColors,
          borderWidth: 1,
        },
      ],
    },
  });
};

// Initialize everything
getData();
