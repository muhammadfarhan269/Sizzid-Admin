import React, { useEffect, useMemo, useState } from 'react'
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
import annotationPlugin from 'chartjs-plugin-annotation';
import styles_dark from './Home_Dark.module.css';
import styles_light from './Home_Light.module.css';
import { getDashboardStats } from '../../../api';

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

const labels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];



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
      label: 'Users',
      data: [0, 0, 0, 0, 0, 0, 0],
      borderColor: 'rgb(195 32 225)',
      backgroundColor: 'rgb(195 32 225)',
    },
  ],
};

export const CardTwoChart = {
  labels,
  datasets: [
    {
      label: 'Support',
      data: [0, 0, 0, 0, 0, 0, 0],
      borderColor: 'rgb(77 243 226)',
      backgroundColor: 'rgb(77 243 226)',
    },
  ],
};

export const CardThreeChart = {
  labels,
  datasets: [
    {
      label: 'Rewards',
      data: [0, 0, 0, 0, 0, 0, 0],
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
      data: [0, 0, 0, 0, 0, 0, 0],
      borderColor: 'rgba(118, 23, 234, 1)',
      backgroundColor: 'rgba(118, 23, 234, 1)',
    },
    {
      label: 'Value 2',
      data: [0, 0, 0, 0, 0, 0, 0],
      borderColor: 'rgba(195, 32, 225, 1)',
      backgroundColor: 'rgba(195, 32, 225, 1)',
    },
    {
      label: 'Value 3',
      data: [0, 0, 0, 0, 0, 0, 0],
      borderColor: 'rgba(77, 243, 226, 1)',
      backgroundColor: 'rgba(77, 243, 226, 1)',
    },
  ],
};

function Home({ theme }) {

  const style = theme === 'dark' ? styles_dark : styles_light
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDashboardStats();
        setStats(res.data.data);
      } catch (err) {
        setError('Failed to load data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const chartData = useMemo(() => {
    if (!stats) return data;
    return {
      ...data,
      datasets: [
        { ...data.datasets[0], data: [stats.users?.newToday || 0, stats.users?.active || 0, stats.users?.total || 0, 0, 0, 0, 0] },
        { ...data.datasets[1], data: [stats.support?.openTickets || 0, stats.support?.urgentTickets || 0, 0, 0, 0, 0, 0] },
        { ...data.datasets[2], data: [stats.rewards?.pendingRedemptions || 0, stats.tournaments?.active || 0, stats.games?.total || 0, 0, 0, 0, 0] },
      ],
    };
  }, [stats]);

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
      {loading && <div className='col-md-12'><p>Loading...</p></div>}
      {error && <div className='col-md-12'><p style={{ color: 'red' }}>{error}</p></div>}
      <div className="col-12 col-sm-6 col-xl-4 grid-margin">
        <div className={`card ${style.upper_cards}`}>
          <div className="card-body">
            <div className='row mx-1'>
              <div className='col-md-2'>
                <img src="/total-widraw.png" alt="" />
              </div>
              <div className='col-md-10'>
                <div className={`${style.upper_card_title} pt-2`}>
                  <p className={`${style.title}`}>Total Users <img src="/caret-up.png" className='float-end pt-2' alt="" /></p>
                  <p className={`${style.sub_title}`}>All players</p>
                </div>
              </div>
              <div className='col-md-6'>
                <div className={`${style.card_lower_section} mt-2`}>
                  <h3 className={`${style.amount}`}>{stats?.users?.total ?? 0}</h3>
                  <p className={`${style.change_in_flow_red}`}>Active: {stats?.users?.active ?? 0}</p>
                </div>
              </div>
              <div className='col-md-6'>
                <Line options={cardOneoptions} data={{ ...CardOneChart, datasets: [{ ...CardOneChart.datasets[0], data: [stats?.users?.newToday || 0, stats?.users?.active || 0, stats?.users?.total || 0, 0, 0, 0, 0] }] }} />
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
                  <p className={`${style.title}`}>Open Tickets <img src="/caret-up.png" className='float-end pt-2' alt="" /></p>
                  <p className={`${style.sub_title}`}>Support</p>
                </div>
              </div>
              <div className='col-md-6'>
                <div className={`${style.card_lower_section} mt-2`}>
                  <h3 className={`${style.amount}`}>{stats?.support?.openTickets ?? 0}</h3>
                  <p className={`${style.change_in_flow_neon}`}>Urgent: {stats?.support?.urgentTickets ?? 0}</p>
                </div>
              </div>
              <div className='col-md-6'>
                <Line options={cardTwooptions} data={{ ...CardTwoChart, datasets: [{ ...CardTwoChart.datasets[0], data: [stats?.support?.openTickets || 0, stats?.support?.urgentTickets || 0, 0, 0, 0, 0, 0] }] }} />
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
                  <p className={`${style.title}`}>Pending Redemptions <img src="/caret-up.png" className='float-end pt-2' alt="" /></p>
                  <p className={`${style.sub_title}`}>Rewards</p>
                </div>
              </div>
              <div className='col-md-6'>
                <div className={`${style.card_lower_section} mt-2`}>
                  <h3 className={`${style.amount}`}>{stats?.rewards?.pendingRedemptions ?? 0}</h3>
                  <p className={`${style.change_in_flow_green}`}>Games: {stats?.games?.total ?? 0}</p>
                </div>
              </div>
              <div className='col-md-6'>
                <Line options={cardThreeoptions} data={{ ...CardThreeChart, datasets: [{ ...CardThreeChart.datasets[0], data: [stats?.rewards?.pendingRedemptions || 0, stats?.games?.total || 0, stats?.tournaments?.active || 0, 0, 0, 0, 0] }] }} />
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
                  <p>Users</p>
                </div>
                <div className={`${style.legend_two} d-flex`}>
                  <span></span>
                  <p>Support</p>
                </div>
                <div className={`${style.legend_three} d-flex`}>
                  <span></span>
                  <p>Rewards/Tournaments</p>
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
          <Line options={options} data={chartData} />
        </div>
      </div>
    </div>
  )
}

export default Home