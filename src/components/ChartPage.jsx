import React from "react";
import TablePage from "../components/TablePage";
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

ChartJS.defaults.color = "black";
ChartJS.defaults.backgroundColor = "green";
ChartJS.defaults.borderColor = "green";

function ChartPage() {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Perkembangan Realisasi Investasi Kabupaten Katingan (Rp)",
        color: "#40A2D5",
        font: { weight: "bold", size: 20 },
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
        borderColor: "blue",
        backgroundColor: "blue",
      },
    ],
  };

  return (
    <div
      id="kinerja-investasi"
      className="flex items-center justify-center w-full h-full"
    >
      <span className="flex flex-col justify-center items-center max-w-screen">
        <h2 className="text-center text-birumud text-5xl font-bold">
          Kinerja Investasi
        </h2>
        <p className="py-5 text-gray-500 text-lg font-light">
          Perkembangan Realisasi Investasi Tahun ke Tahun (Rp)
        </p>
        <div className="w-3/4 h-auto items-center justify-center">
          <TablePage />
        </div>
        <div className=" w-3/4 h-max bg-gray-50 p-10 rounded-xl">
          <Line options={options} data={data}></Line>
        </div>
      </span>
    </div>
  );
}

export default ChartPage;
