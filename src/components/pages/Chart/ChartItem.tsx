import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { useQuery } from "react-query";
import { LineModel } from "../../../models/LineModel";
import Maps from "./Maps";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

let dataArr: LineModel = { labels: [], datasets: [] };

export default function ChartItem() {
  const { isLoading, error, data } = useQuery("alldata", () =>
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all").then(
      (res) => res.json()
    )
  );

  useEffect(() => {
    if (isLoading) {
      return;
    }
    let counter = 0;
    let counter2 = 0;
    let counter3 = 0;
    let labelArr: string[] = [];
    let casesArr: number[] = [];
    let recoveredArr: number[] = [];
    let deathsArr: number[] = [];
    console.log("Inside Effect", data.cases);

    for (let key in data.cases) {
      if (counter > 9) {
        break;
      }
      counter++;
      labelArr.push(key);
      casesArr.push(data.cases[key]);
    }

    for (let key in data.recovered) {
      if (counter2 > 9) {
        break;
      }
      counter2++;
      recoveredArr.push(data.recovered[key]);
    }

    for (let key in data.deaths) {
      if (counter3 > 9) {
        break;
      }
      counter3++;
      deathsArr.push(data.deaths[key]);
    }

    console.log(labelArr);
    console.log("Cases", casesArr);
    console.log("Recovered", recoveredArr);
    console.log("Deaths", deathsArr);

    const ourDataset = {
      labels: labelArr,
      datasets: [
        {
          label: "Cases",
          data: casesArr,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
        },
        {
          label: "Recovered",
          data: recoveredArr,
          borderColor: "rgb(44, 44, 132)",
          backgroundColor: "rgba(44, 102, 132, 0.5)",
        },
        {
          label: "Deaths",
          data: deathsArr,
          borderColor: "rgb(255, 178, 132)",
          backgroundColor: "rgba(255, 55, 132, 0.5)",
        },
      ],
    };
    dataArr = ourDataset;
  }, [isLoading]);

  if (!data) {
    return <div>Loading...</div>;
  }

  return <Line options={options} data={dataArr} />;
}
