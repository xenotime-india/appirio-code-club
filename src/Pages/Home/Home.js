import React from 'react'
import { Button } from 'react-lightning-design-system';
import { Line, Bar, Doughnut } from 'react-chartjs';

export class Home extends React.Component {
	rand = (min, max, num) => {
    var rtn = [];
    while (rtn.length < num) {
      rtn.push((Math.random() * (max - min)) + min);
    }
    return rtn;
  }
	render() {
		const chartData = {
      labels: ["January", "February", "March", "April", "May", "June", "July"],
      datasets: [
        {
          label: "Red Flag",
          fillColor: "rgba(170,8,8,0.2)",
          strokeColor: "rgba(170,8,8,1)",
          pointColor: "rgba(170,8,8,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(170,8,8,1)",
          data: this.rand(0, 20, 7)
        },
        {
          label: "Golden Flag",
          fillColor: "rgba(229,197,13,0.2)",
          strokeColor: "rgba(229,197,13,1)",
          pointColor: "rgba(229,197,13,1)",
          pointStrokeColor: "#fff",
          pointHighlightFill: "#fff",
          pointHighlightStroke: "rgba(229,197,13,1)",
          data: this.rand(0, 20, 7)
        }
      ]
    };
		const doughnutData = [
      {
        value: this.rand(25, 300, 1)[0],
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
      },
      {
        value: this.rand(25, 300, 1)[0],
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
      },
      {
        value: this.rand(25, 300, 1)[0],
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
      },
      {
        value: this.rand(25, 300, 1)[0],
        color: "#949FB1",
        highlight: "#A8B3C5",
        label: "Grey"
      },
      {
        value: this.rand(25, 300, 1)[0],
        color: "#4D5360",
        highlight: "#616774",
        label: "Dark Grey"
      }
    ];
		return (
      <article className="slds-card">
        <div className="slds-card__header slds-grid">
          <header className="slds-media slds-media_center slds-has-flexi-truncate">
            <div className="slds-media__figure">
        <span className="slds-icon_container slds-icon-standard-contact" title="description of icon when needed">

        </span>
            </div>
            <div className="slds-media__body">
              <h2>
                <a href="javascript:void(0);" className="slds-card__header-link slds-truncate" title="[object Object]">
                  <span className="slds-text-heading_small">Sugam's last 6 months records (1)</span>
                </a>
              </h2>
            </div>
          </header>
          <div className="slds-no-flex">
            <button className="slds-button slds-button_neutral">Customize</button>
          </div>
        </div>
        <div className="slds-card__body">
          <div className="slds-grid slds-wrap">
            <div className="slds-col slds-size_1-of-1 slds-medium-size_6-of-12 slds-large-size_6-of-12">
          <Line data={chartData} options={{ responsive: true }}/>
            </div>
            <div className="slds-col slds-size_1-of-1 slds-medium-size_6-of-12 slds-large-size_6-of-12">
              <Bar data={chartData} options={{responsive: true}}/>
            </div>
          </div>
          <div className="slds-grid slds-wrap">
            <div className="slds-col slds-size_1-of-1 slds-medium-size_6-of-12 slds-large-size_6-of-12">
              <Doughnut data={chartData} options={{ responsive: true }}/>
            </div>
            <div className="slds-col slds-size_1-of-1 slds-medium-size_6-of-12 slds-large-size_6-of-12">
              <Line data={doughnutData} options={{ responsive: true }}/>
            </div>
          </div>
        </div>
        <footer className="slds-card__footer"></footer>
      </article>
		)
   	}
}