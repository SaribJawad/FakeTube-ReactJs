/* eslint-disable react/prop-types */
import { useParams } from "react-router-dom";
import PlayVideo from "../../components/playvideo/PlayVideo";
import Recomended from "../../components/recomended/Recomended";
import "./Video.css";

function Video() {
  const { videoId, categoryId } = useParams();

  return (
    <div className="play-container">
      <PlayVideo videoId={videoId} />
      <Recomended categoryId={categoryId} />
    </div>
  );
}

export default Video;
