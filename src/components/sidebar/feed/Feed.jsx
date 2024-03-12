/* eslint-disable react/prop-types */
import "./Feed.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { formatValue } from "../../functions/formatViews";
import { formatTime } from "../../functions/formatTime";

const apiKey = "AIzaSyBdHTpZ_T2s2FLXHq9100IObOrjEGV16Fw";

function Feed({ category }) {
  const [data, setData] = useState([]);

  // fetching data to display on feed
  useEffect(
    function () {
      async function fetchData() {
        const resp = await fetch(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=100&regionCode=US&videoCategoryId=${category}&key=${apiKey}`
        );
        const data = await resp.json();
        setData(data.items);
      }

      fetchData();
    },
    [category]
  );

  return (
    <div className="feed">
      {data.map((item, index) => {
        return (
          <Link
            to={`video/${item.snippet.categoryId}/${item.id}`}
            className="card"
            key={index}
          >
            <img src={item.snippet.thumbnails.medium.url} alt="" />
            <h2>{item.snippet.title}</h2>
            <h3>{item.snippet.channelTitle}</h3>
            <p>
              {formatValue(item.statistics.viewCount)} views &bull;{" "}
              {formatTime(item.snippet.publishedAt)}
            </p>
          </Link>
        );
      })}
    </div>
  );
}

export default Feed;
