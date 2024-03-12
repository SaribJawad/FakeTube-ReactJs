/* eslint-disable react/prop-types */
import "./PlayVideo.css";
import { BiLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { IoMdShareAlt } from "react-icons/io";
import { MdSaveAlt } from "react-icons/md";
import { useEffect, useState } from "react";
import { formatValue } from "../../functions/formatViews";
import { formatTime } from "../../functions/formatTime";

const apiKey = "AIzaSyBdHTpZ_T2s2FLXHq9100IObOrjEGV16Fw";

function PlayVideo({ videoId }) {
  const [apiData, setApiData] = useState(null);
  const [channelInfo, setChannelInfo] = useState(null);
  const [commentData, setCommentData] = useState([]);

  useEffect(
    function () {
      async function fetchSelectedVideo() {
        const resp = await fetch(
          `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${apiKey}`
        );

        const data = await resp.json();
        setApiData(data.items[0]);
      }

      fetchSelectedVideo();
    },
    [videoId]
  );

  useEffect(
    function () {
      async function fetchChannelDetails() {
        const resp = await fetch(
          `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${apiData?.snippet.channelId}&key=${apiKey}`
        );
        const data = await resp.json();
        setChannelInfo(data?.items[0]);
      }

      async function fetchComments() {
        const resp =
          await fetch(`https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=50&videoId=${videoId}&key=${apiKey}
   `);
        const data = await resp.json();
        console.log(data);
        setCommentData(data.items);
      }

      fetchChannelDetails();
      fetchComments();
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [apiData]
  );

  return (
    <div className="play-video">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
      <h3>{apiData ? apiData.snippet.title : "Title here"}</h3>
      <div className="play-video-info">
        <p>
          {apiData ? formatValue(apiData.statistics.viewCount) : "16k"} veiws
          &bull;{" "}
          {apiData ? formatTime(apiData.snippet.publishedAt) : "1 day ago"}
        </p>
        <div>
          <span>
            <BiLike className="icons" />{" "}
            {apiData ? formatValue(apiData.statistics.likeCount) : "132"}
          </span>
          <span>
            <BiDislike className="icons" />2
          </span>
          <span>
            <IoMdShareAlt className="icons" /> Share
          </span>
          <span>
            <MdSaveAlt className="icons" /> Save
          </span>
        </div>
      </div>
      <hr />
      <div className="publisher">
        <img
          src={channelInfo ? channelInfo.snippet.thumbnails.default.url : ""}
          alt=""
        />
        <div>
          <p>{apiData ? apiData.snippet.channelTitle : ""}</p>
          <span>
            {channelInfo
              ? formatValue(channelInfo.statistics.subscriberCount)
              : ""}{" "}
            subscribers
          </span>
        </div>
        <button>Subscribe</button>
      </div>
      <div className="vid-description">
        <p>
          {apiData ? apiData.snippet.description.slice(0, 250) : "Description"}
        </p>
        <hr />
        <h4>
          {apiData ? formatValue(apiData.statistics.commentCount) : 1 + "k"}{" "}
          comments
        </h4>

        {commentData.map((x, index) => {
          return (
            <div className="comment" key={index}>
              <img
                src={x.snippet.topLevelComment.snippet.authorProfileImageUrl}
                alt=""
              />
              <div>
                <h3>
                  {x.snippet.topLevelComment.snippet.authorDisplayName}
                  <span>1 day ago</span>
                </h3>
                <p>{x.snippet.topLevelComment.snippet.textDisplay}</p>
                <div className="comment-action">
                  <BiLike className="icons" />
                  <span>
                    {formatValue(x.snippet.topLevelComment.snippet.likeCount)}
                  </span>
                  <BiDislike className="icons" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PlayVideo;
