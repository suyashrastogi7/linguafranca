import React from "react";

import twitter from "../Images/twitter.svg";
import { TwitterTweetEmbed } from "react-twitter-embed";

const Tweet = () => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-2xl w-96 ">
        <div className="bg-[#1D9BF0] py-5 px-5 rounded-t-lg relative">
          <h1 className="text-white font-bold text-xl">Latest Tweets</h1>
          <img
            src={twitter}
            className="absolute -bottom-28 -right-8 z-10 scale-50 opacity-30"
            alt="twitter-icon"
          />
        </div>
        <div className="bg-white h-80 flex flex-col overflow-auto z-50">
          <TwitterTweetEmbed tweetId={"933354946111705097"} />
          <TwitterTweetEmbed tweetId={"933354946111705097"} />
          <TwitterTweetEmbed tweetId={"933354946111705097"} />
          <TwitterTweetEmbed tweetId={"933354946111705097"} />
        </div>
      </div>
    </div>
  );
};

export default Tweet;
