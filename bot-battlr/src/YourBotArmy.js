import React from 'react';

function YourBotArmy({ botArmy, releaseBot, dischargeBot }) {
  return (
    <div className="your-bot-army">
      <h2>Your Bot Army</h2>
      <div className="bot-list">
        {botArmy.map((bot) => (
          <div key={bot.id} className="bot-card army-card">
            <div className="army-card-content">
              <img src={bot.avatar_url} alt={bot.name} />
              <h2>{bot.name}</h2>
              <p>Class: {bot.bot_class}</p>
              <button className="discharge-btn" onClick={() => dischargeBot(bot)}>
                Discharge
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;