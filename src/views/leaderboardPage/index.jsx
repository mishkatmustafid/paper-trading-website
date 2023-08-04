import React from 'react';
import Navbar from '../../components/navbar';
import PageHeading from '../../components/page-heading';


const teamsData = [
  { position: 1, team: 'Team A', MSFT: 100, NFLX: 200, GOOGL: 150, AAPL: 120, TSLA: 300, IBM: 80, ORCL: 90, AMZN: 180, cashBalance: 500, profit: 100 },
  { position: 2, team: 'Team B', MSFT: 80, NFLX: 220, GOOGL: 170, AAPL: 110, TSLA: 250, IBM: 60, ORCL: 100, AMZN: 200, cashBalance: 450, profit: 80 },
  { position: 3, team: 'Team C', MSFT: 90, NFLX: 180, GOOGL: 160, AAPL: 100, TSLA: 280, IBM: 70, ORCL: 80, AMZN: 150, cashBalance: 400, profit: 70 },
  { position: 4, team: 'Team D', MSFT: 70, NFLX: 160, GOOGL: 140, AAPL: 90, TSLA: 200, IBM: 50, ORCL: 70, AMZN: 120, cashBalance: 350, profit: 60 },
];

const Leaderboard = () => {
  return (
    
    <div className="container-fluid">
      <Navbar />
      <PageHeading title={"Leaderboard"} />
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Position</th>
            <th>Team</th>
            <th>MSFT</th>
            <th>NFLX</th>
            <th>GOOGL</th>
            <th>AAPL</th>
            <th>TSLA</th>
            <th>IBM</th>
            <th>ORCL</th>
            <th>AMZN</th>
            <th>Cash Balance</th>
            <th>Profit</th>
          </tr>
        </thead>
        <tbody>
          {teamsData.map((team, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-light' : ''}>
              <td>{team.position}</td>
              <td>{team.team}</td>
              <td>{team.MSFT}</td>
              <td>{team.NFLX}</td>
              <td>{team.GOOGL}</td>
              <td>{team.AAPL}</td>
              <td>{team.TSLA}</td>
              <td>{team.IBM}</td>
              <td>{team.ORCL}</td>
              <td>{team.AMZN}</td>
              <td>{team.cashBalance}</td>
              <td>{team.profit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;