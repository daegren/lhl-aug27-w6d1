import React from 'react';
import Tweet from './Tweet.jsx';

const TweetContainer = ({ tweets }) => {
  return (
    <section id="tweetContainer">
      {tweets.map(t => <Tweet tweet={t} key={t.created_at} />)}
    </section>
  );
};

export default TweetContainer;
