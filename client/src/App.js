import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import VideoPlayer from "./components/VideoPlayer";
import Notifications from "./components/Notifications";
import Options from "./components/Options";

export default function App() {
  return (
    <div className="wrapper">
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand">Video Chat</a>
      </nav>
      <VideoPlayer />
      <Options>
        <Notifications />
      </Options>
    </div>
  );
}
