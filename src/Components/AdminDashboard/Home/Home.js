import React from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker'
import annotationPlugin from 'chartjs-plugin-annotation';
import styles_dark from './Home_Dark.module.css';
import styles_light from './Home_Light.module.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  annotationPlugin
);

const labels = ['1 Jan', '2 Jan', '3 Jan', '4 Jan', '5 Jan', '6 Jan', '7 Jan'];



export const cardOneoptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      enabled: false
    }
  },
  scales: {
    x: {
      display: false
    },
    y: {
      display: false
    }
  },
};

export const cardTwooptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      enabled: false
    }
  },
  scales: {
    x: {
      display: false
    },
    y: {
      display: false
    }
  },
};

export const cardThreeoptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
    },
    tooltip: {
      enabled: false
    }
  },
  scales: {
    x: {
      display: false
    },
    y: {
      display: false
    }
  },
};

export const CardOneChart = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(195 32 225)',
      backgroundColor: 'rgb(195 32 225)',
    },
  ],
};

export const CardTwoChart = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(77 243 226)',
      backgroundColor: 'rgb(77 243 226)',
    },
  ],
};

export const CardThreeChart = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgb(30 203 79)',
      backgroundColor: 'rgb(30 203 79)',
    },
  ],
};

export const data = {
  labels,
  datasets: [
    {
      label: 'Value 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgba(118, 23, 234, 1)',
      backgroundColor: 'rgba(118, 23, 234, 1)',
    },
    {
      label: 'Value 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgba(195, 32, 225, 1)',
      backgroundColor: 'rgba(195, 32, 225, 1)',
    },
    {
      label: 'Value 3',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      borderColor: 'rgba(77, 243, 226, 1)',
      backgroundColor: 'rgba(77, 243, 226, 1)',
    },
  ],
};

function Home({ theme }) {

  const style = theme === 'dark' ? styles_dark : styles_light

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      title: {
        display: false,
        text: 'Chart.js Line Chart',
      },
      annotation: {
        annotations: {
          line1: {
            type: 'line',
            xMin: '4 Jan',
            xMax: '4 Jan',
            borderColor: 'rgba(255, 107, 44, 1)',
            borderWidth: 2,
          }
        }
      }
    },
    scales: {
      x: {
        ticks: {
          color: theme === 'dark' ?  '#fff' : '#000'
        }
      },
      y: {
        ticks: {
          color: theme === 'dark' ?  '#fff' : '#000'
        },
        grid: {
          color: "rgba(255, 255, 255, 0.3)"
        }
      }
    },
  };

  return (
    <div className='row'>
      <div className='col-md-12'>
        <h3 className={`${style.page_title}`}>Dashboard</h3>
      </div>
      <div className="col-12 col-sm-6 col-xl-4 grid-margin">
        <div className={`card ${style.upper_cards}`}>
          <div className="card-body">
            <div className='row mx-1'>
              <div className='col-md-2'>
                <img src="/total-widraw.png" alt="" />
              </div>
              <div className='col-md-10'>
                <div className={`${style.upper_card_title} pt-2`}>
                  <p className={`${style.title}`}>Total Widraw <img src="/caret-up.png" className='float-end pt-2' alt="" /></p>
                  <p className={`${style.sub_title}`}>BTC</p>
                </div>
              </div>
              <div className='col-md-6'>
                <div className={`${style.card_lower_section} mt-2`}>
                  <h3 className={`${style.amount}`}>$52,291</h3>
                  <p className={`${style.change_in_flow_red}`}>+0.25%</p>
                </div>
              </div>
              <div className='col-md-6'>
                <Line options={cardOneoptions} data={CardOneChart} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-xl-4 grid-margin">
        <div className={`card ${style.upper_cards}`}>
          <div className="card-body">
            <div className='row mx-1'>
              <div className='col-md-2'>
                <img src="/total-deposit.png" alt="" />
              </div>
              <div className='col-md-10'>
                <div className={`${style.upper_card_title} pt-2`}>
                  <p className={`${style.title}`}>total Deposite <img src="/caret-up.png" className='float-end pt-2' alt="" /></p>
                  <p className={`${style.sub_title}`}>BTC</p>
                </div>
              </div>
              <div className='col-md-6'>
                <div className={`${style.card_lower_section} mt-2`}>
                  <h3 className={`${style.amount}`}>$52,291</h3>
                  <p className={`${style.change_in_flow_neon}`}>+0.25%</p>
                </div>
              </div>
              <div className='col-md-6'>
                <Line options={cardTwooptions} data={CardTwoChart} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-sm-6 col-xl-4 grid-margin">
        <div className={`card ${style.upper_cards}`}>
          <div className="card-body">
            <div className='row mx-1'>
              <div className='col-md-2'>
                <img src="/total-deposit.png" alt="" />
              </div>
              <div className='col-md-10'>
                <div className={`${style.upper_card_title} pt-2`}>
                  <p className={`${style.title}`}>total trading <img src="/caret-up.png" className='float-end pt-2' alt="" /></p>
                  <p className={`${style.sub_title}`}>BTC</p>
                </div>
              </div>
              <div className='col-md-6'>
                <div className={`${style.card_lower_section} mt-2`}>
                  <h3 className={`${style.amount}`}>$52,291</h3>
                  <p className={`${style.change_in_flow_green}`}>+0.25%</p>
                </div>
              </div>
              <div className='col-md-6'>
                <Line options={cardThreeoptions} data={CardThreeChart} />
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className='col-md-12'>
        <div className={`${style.separater}`}></div>
      </div>
      <div className='col-md-12'>
        <div className={`${style.chart_detail_section}`}>
          <div className='row'>
            <div className='col-md-2'>
              <h2 className={`${style.title}`}>Crash <img src="/caret-down.png" alt="" /></h2>
            </div>
            <div className='col-md-4'>
              <div className={`${style.chart_legends}`}>
                <div className={`${style.legend_one} d-flex`}>
                  <span></span>
                  <p>Value 1</p>
                </div>
                <div className={`${style.legend_two} d-flex`}>
                  <span></span>
                  <p>Value 2</p>
                </div>
                <div className={`${style.legend_three} d-flex`}>
                  <span></span>
                  <p>Value 3</p>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <div className="btn-group float-end">
                <button className={`btn btn-secondary dropdown-toggle ${style.chart_time_line_dropdown}`} type="button" id="dropdownMenuClickableInside" data-bs-toggle="dropdown" data-bs-auto-close="outside" aria-expanded="false">
                  Last Week Days
                </button>
                {/* <ul class="dropdown-menu" aria-labelledby="dropdownMenuClickableInside">
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                    <li><a class="dropdown-item" href="#">Menu item</a></li>
                  </ul> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-md-12'>
        <div className={`${style.main_chart_card}`}>
          <Line options={options} data={data} />
        </div>
      </div>
    </div>
  )
}

export default Home