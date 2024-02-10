import React, { useState, useEffect } from 'react';
import './App.css';
import BotCollection from './BotCollection';
import SortBar from './SortBar';
import YourBotArmy from './YourBotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]);

  useEffect(() => {
    fetchBots();
  }, []);

  const fetchBots = async () => {
    try {
      const response = await fetch('https://botdb.onrender.com/bots');
      const data = await response.json();
      setBots(data);
    } catch (error) {
      console.error('Error fetching bot data:', error);
    }
  };

  const enlistBot = (bot) => {
    if (!botArmy.includes(bot)) {
      setBotArmy([...botArmy, bot]);
    }
  };

  const releaseBot = (bot) => {
    const updatedArmy = botArmy.filter((b) => b.id !== bot.id);
    setBotArmy(updatedArmy);
  };

  const dischargeBot = async (bot) => {
    try {
      await fetch(`https://botdb.onrender.com/bots/${bot.id}`, {
        method: 'DELETE',
      });
      const updatedBots = bots.filter((b) => b.id !== bot.id);
      setBots(updatedBots);
      releaseBot(bot);
    } catch (error) {
      console.error('Error discharging bot:', error);
    }
  };

  const handleSort = (event) => {
    const sortBy = event.target.value;
    const sortedBots = [...bots].sort((a, b) => b[sortBy] - a[sortBy]);
    setBots(sortedBots);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Bot Battlr</h1>
        <h5>The one and only spot in the known universe where you can custom build your own Bot Army!</h5>
      </header>
      <main>
        <SortBar handleSort={handleSort} />
        <BotCollection bots={bots} enlistBot={enlistBot} />
        <YourBotArmy botArmy={botArmy} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      </main>
    </div>
  );
}

export default App;
