import React from "react";

const LiveCard = ({ lives }) => {
  return (
    <div>
      <div >
        <div class="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={lives.img} alt="" />
          </figure>
          <div class="card-body">
            <h2 class="card-title">
              {lives.name}
              <a
                href="https://www.youtube.com/watch?v=CrCGGEx-bPs&ab_channel=ArchismanGhosh"
                target="blank"
              >
                <div class="badge badge-secondary">Watch Now</div>
              </a>
            </h2>
            <p>Time: 4am USA</p>
            <p>Time: 12pm Qatar</p>
            <p>Time: 4pm Bangladesh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveCard;
