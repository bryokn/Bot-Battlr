import React, { useState } from 'react';
import BotSpecs from './BotSpecs';

function BotCard({ bot, enlistBot }) {
  const [showSpecs, setShowSpecs] = useState(false);

  const toggleSpecs = () => {
    setShowSpecs(!showSpecs);
  };

  return (
    <div className="bot-card">
      <img src={bot.avatar_url} alt={bot.name} />
      <h2>{bot.name}</h2>
      <p>Class: {bot.bot_class}</p>
      {!showSpecs ? (
        <>
          <button onClick={toggleSpecs}>Show Specs</button>
          <button onClick={() => enlistBot(bot)}>Enlist</button>
        </>
      ) : (
        <BotSpecs bot={bot} enlistBot={enlistBot} goBack={toggleSpecs} />
      )}
    </div>
  );
}

export default BotCard;