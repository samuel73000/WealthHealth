import "./Home.css";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Home() {
  // donner provisoir pour les graphiques . dans l'avenir il faudrais recuperer les donner depuis redux
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <section className='section-home'>
        <div className="title-home">
      <h2>Home</h2>
      <p>Welcome to the company dashboard</p>
      </div>
      <div className='chart-container-all'>
      {/* // Nombre total d'employés */}
        <div className='chart-container-number-employees'> 
          <ResponsiveContainer width='100%' height='100%'>
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Area
                type='monotone'
                dataKey='uv'
                stroke='#8884d8'
                fill='#8884d8'
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
{/* // Nombre de nouvelles embauches ce mois-ci */}
        <div className='chart-container-news-employees-in-month'>
          <ResponsiveContainer width='100%' height='100%'>
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Area
                type='monotone'
                dataKey='uv'
                stroke='#8884d8'
                fill='#8884d8'
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>



      <div className='chart-container-all'>
      {/* Nombre de départs récents */}
        <div className='chart-container-number-employees'> 
          <ResponsiveContainer width='100%' height='100%'>
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Area
                type='monotone'
                dataKey='uv'
                stroke='#8884d8'
                fill='#8884d8'
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
{/*  Moyenne d'ancienneté des employés*/}
        <div className='chart-container-news-employees-in-month'>
          <ResponsiveContainer width='100%' height='100%'>
            <AreaChart
              width={500}
              height={400}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}>
              <CartesianGrid strokeDasharray='3 3' />
              <XAxis dataKey='name' />
              <YAxis />
              <Tooltip />
              <Area
                type='monotone'
                dataKey='uv'
                stroke='#8884d8'
                fill='#8884d8'
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
// UTILISER RECHARTS POUR FAIRT DES GRAPHIQUES POUR LES STASTIQUES
// Nombre total d'employés
// Nombre de nouvelles embauches ce mois-ci
// Nombre de départs récents
// Moyenne d'ancienneté des employés
