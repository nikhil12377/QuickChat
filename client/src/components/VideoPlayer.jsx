import React, { useContext } from "react";
import { SocketContext } from "../SocketContext";

const VideoPlayer = () => {
  const { call, callAccepted, myVideo, userVideo, stream, name, callEnded } =
    useContext(SocketContext);
  return (
    <div className="container gridContainer">
      {/* Our own video */}
      {stream && (
        <div className="paper">
          <div className="row">
            <div className="col-12 col-md-6">
              <h5>{name || "Name"}</h5>
              <video
                playsInline
                muted
                ref={myVideo}
                autoPlay
                className="video"
              ></video>
            </div>
          </div>
        </div>
      )}

      {/* User video */}
      {callAccepted && !callEnded && (
        <div className="paper">
          <div className="row">
            <div className="col-12 col-md-6">
              <h5>{call.name || "Name"}</h5>
              <video
                playsInline
                ref={userVideo}
                autoPlay
                className="video"
              ></video>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
