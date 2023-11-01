import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const Houses = () => {
  const backgroundColors = [
    "rgba(54, 162, 235, 0.8)",
    "rgba(255, 206, 86, 0.8)",
    "rgba(255, 99, 132, 0.8)",
    "rgba(75, 192, 192, 0.8)",
    "rgba(153, 102, 255, 0.8)",
    "rgba(255, 159, 64, 0.8)",
    "rgba(199, 199, 199, 0.8)",
    "rgba(83, 102, 255, 0.8)",
    "rgba(40, 159, 64, 0.8)",
    "rgba(210, 199, 199, 0.8)",
    "rgba(78, 52, 199, 0.8)",
    "rgba(52, 162, 235, 0.8)",
    "rgba(252, 206, 86, 0.8)",
    "rgba(252, 99, 132, 0.8)",
    "rgba(72, 192, 192, 0.8)",
    "rgba(152, 102, 255, 0.8)",
    "rgba(252, 159, 64, 0.8)",
    "rgba(192, 199, 199, 0.8)",
    "rgba(82, 102, 255, 0.8)",
    "rgba(42, 159, 64, 0.8)",
    "rgba(212, 199, 199, 0.8)",
    "rgba(72, 52, 199, 0.8)",
  ];

  const borderColors = [
    "rgba(54, 162, 235, 1)",
    "rgba(255, 206, 86, 1)",
    "rgba(255, 99, 132, 1)",
    "rgba(75, 192, 192, 1)",
    "rgba(153, 102, 255, 1)",
    "rgba(255, 159, 64, 1)",
    "rgba(159, 159, 159, 1)",
    "rgba(83, 102, 255, 1)",
    "rgba(40, 159, 64, 1)",
    "rgba(210, 199, 199, 1)",
    "rgba(78, 52, 199, 1)",
    "rgba(52, 162, 235, 1)",
    "rgba(252, 206, 86, 1)",
    "rgba(252, 99, 132, 1)",
    "rgba(72, 192, 192, 1)",
    "rgba(152, 102, 255, 1)",
    "rgba(252, 159, 64, 1)",
    "rgba(152, 159, 159, 1)",
    "rgba(82, 102, 255, 1)",
    "rgba(42, 159, 64, 1)",
    "rgba(212, 199, 199, 1)",
    "rgba(72, 52, 199, 1)",
  ];

  // url for the Thrones API
  const url = "https://thronesapi.com/api/v2/Characters";

  // Collect houses as labels
  const houses = [];

  // Houses with their associated # of characters
  const houseCount = [];

  // Collect house's counts to insert into chart
  const count = [];

  // Fetch data from API asyncronously
  const getData = async function fetchDataFromURL() {
    try {
      const response = await fetch(url);
      console.log("Request successful", response);

      // Now turn data into a json readable format
      const data = await response.json();

      // Initialize house & count values
      getHouses(data);
      getCount();
    } catch (error) {
      // Error from API fetch
      console.error("Request failed", error);
    }
  };

  const getHouses = function getHousesFromData(data) {
    // Loop through data
    data.forEach((data_item) => {
      // Strip 'house' from family names
      data_item.family = data_item.family.replace("House ", "");

      // Address inconsistencies with Lannister family
      if (data_item.family === "Lanister") {
        data_item.family = "Lannister";
      }

      // Address inconsistencies with unknown/none/empty family inputs
      if (
        data_item.family === "Unkown" ||
        data_item.family === "None" ||
        data_item.family === ""
      ) {
        data_item.family = "Unknown";
      }

      // Address inconsistencies with Targaryen
      if (data_item.family === "Targaryan") {
        data_item.family = "Targaryen";
      }

      // Address inconsistencies with Lorath
      if (data_item.family === "Lorathi") {
        data_item.family = "Lorath";
      }

      // We will not be updating family value from here, save as constant
      const family = data_item.family;

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
  };

  // Function to get values of each house count to insert into chart
  const getCount = function getCountFromCountArray() {
    houseCount.forEach((count_item) => {
      count.push(parseInt(count_item.count));
    });
  };

  // Initialize everything
  getData();

  const data = {
    labels: houses,
    datasets: [
      {
        label: "Houses",
        data: count,
        backgroundColor: backgroundColors,
        borderColor: borderColors,
        borderWidth: 1,
      },
    ],
  };

  return (
    <>
      <h1>Houses</h1>
      <Doughnut data={data} />
    </>
  );
};
export default Houses;
