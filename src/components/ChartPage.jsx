import React from "react";
import { Line } from "react-chartjs-2";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function ChartPage() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "PERKEMBANGAN REALISASI INVESTASI KABUPATEN KATINGAN",
      },
    },
  };

  const labels = [2016, 2017, 2018, 2019, 2020, 2021];

  const data = {
    labels,
    datasets: [
      {
        label: "PMA",
        data: [
          239846810000, 1219881974652, 1875572532132, 1852401015342,
          2171948678654, 2118845977565,
        ],
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "PMDN",
        data: [
          237496700000, 1124980148645, 848775526019, 3790278623286,
          4171745209352, 4994118522073,
        ],
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div class="min-w-screen min-h-screen bg-gray-200 flex items-center justify-center px-5 py-5">
      <div class="w-full max-w-3xl">
        <Line options={options} data={data}></Line>
      </div>
    </div>
  );
}

export default ChartPage;
