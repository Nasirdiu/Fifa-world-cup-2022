import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './Live.css'
import LiveCard from "./LiveCard";
const LiveStream = () => {
  const [live, setLive] = useState([]);
  useEffect(() => {
    fetch("live.json")
      .then((res) => res.json())
      .then((data) => setLive(data));
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-center font-bold uppercase mt-16">
        Live <span className="text-orange-400">Stream</span>
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 px-12 mt-20">
      {
          live.map(lives=> <div key={lives.id}>
            <LiveCard lives={lives}></LiveCard>            
          </div>)
      }
      </div>
    </div>
  );
};

export default LiveStream;
