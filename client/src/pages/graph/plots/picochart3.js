import React from "react";
import { Line } from "react-chartjs-2";
import "chartjs-plugin-streaming";

const data = {
  datasets: [
    {
      label: "EnSat Temperature",
      borderColor: "#00FF00",
      backgroundColor: "rgba(84, 207, 84, 0.45)",
      lineTension: 0.5,
      data: []
    },
  ]
};

function TempChart(props) {
  let pico = props.picodata;
  const options = {
    tooltips: {
      mode: 'nearest',
      intersect: false
    },
    hover: {
      mode: 'nearest',
      intersect: false
    },
    scales: {
      xAxes: [
        {
          type: "realtime",
          realtime: {
            onRefresh: function () {
              data.datasets[0].data.push({
                x: Date.now(),
                y: pico
              });
            },
            delay: 2000
          }
        },
      ]
    }
  };

  return (
    <div>
      <Line data={data} options={options} height={100} />
    </div>
  );
}

export default TempChart