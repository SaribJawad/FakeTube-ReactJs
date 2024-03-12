/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Search.css";
import { formatTime } from "../../functions/formatTime";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/Loader";

const apiKey = "AIzaSyBdHTpZ_T2s2FLXHq9100IObOrjEGV16Fw";

function Search({ query }) {
  const [searchData, setSearchData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(
    function () {
      setIsLoading(true);
      async function fetchSearch() {
        const resp = await fetch(
          `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&key=${apiKey}`
        );
        const data = await resp.json();
        setSearchData(data.items);
        setIsLoading(false);
      }
      fetchSearch();
    },
    [query]
  );

  return (
    <div className="search-container">
      {isLoading ? (
        <Loader />
      ) : (
        searchData.map((x, index) => {
          return (
            <Link
              to={`http://localhost:5173/video/20/${x.id.videoId}`}
              key={index}
            >
              <div className="search-result">
                <div className="search-result-right">
                  <img
                    className="thumbnail"
                    src={x.snippet.thumbnails.medium.url}
                    alt=""
                  />
                </div>
                <div className="search-result-left">
                  <h3>{x.snippet.title}</h3>
                  <div className="video-stats">
                    <p>71M views &bull; {formatTime(x.snippet.publishTime)}</p>
                    <div>
                      <img
                        src="https://images.squarespace-cdn.com/content/v1/55fc0004e4b069a519961e2d/1442590746571-RPGKIXWGOO671REUNMCB/image-asset.gif"
                        alt=""
                      />
                      <span> &bull; {x.snippet.channelTitle}</span>
                    </div>

                    <p className="description">{x.snippet.description}</p>
                  </div>
                </div>
              </div>
            </Link>
          );
        })
      )}
    </div>
  );
}

export default Search;
