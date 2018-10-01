import React from 'react';

const Tweet = ({ tweet }) => {
  return (
    <article className="tweet">
      <header>
        <img className="tweeterAvatar" src={tweet.user.avatars.small} />
        <h3 className="tweeterName">{tweet.user.name}</h3>
        <p className="tweeterId">{tweet.user.handle}</p>
      </header>
      <p className="tweetText">{tweet.content.text}</p>
      <footer>
        <p className="postedDate">{tweet.created_at}</p>
      </footer>
    </article>
  );
};

export default Tweet;
