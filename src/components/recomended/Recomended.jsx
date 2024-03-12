/* eslint-disable react/prop-types */
import "./Recomended.css";
import { useEffect, useState } from "react";
import { formatValue } from "../../functions/formatViews";
import { Link } from "react-router-dom";

const apiKey = "AIzaSyBdHTpZ_T2s2FLXHq9100IObOrjEGV16Fw";

function Recomended({ categoryId }) {
  const [recomendedData, setRecomendedData] = useState([]);

  useEffect(
    function () {
      async function fetchData() {
        const resp = await fetch(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${apiKey}`
        );
        const data = await resp.json();
        setRecomendedData(data.items);
      }
      fetchData();
    },
    [categoryId]
  );

  return (
    <div className="recomended">
      {recomendedData.map((x, index) => {
        return (
          <Link
            to={`/video/${x.snippet.categoryId}/${x.id}`}
            className="side-video-list"
            key={index}
          >
            <img src={x.snippet.thumbnails.medium.url} alt="" />
            <div className="vid-info">
              <h4>{x.snippet.title}</h4>
              <p>{x.snippet.channelTitle}</p>
              <p>{formatValue(x.statistics.viewCount)} Views</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Recomended;
