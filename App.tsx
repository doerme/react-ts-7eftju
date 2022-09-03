import * as React from 'react';
import { useRef, useEffect } from 'react';
import { yyEva } from 'yyeva';
import './style.css';

export default function App() {
  const playerContainer = useRef<HTMLDivElement>(null);
  const playerRef = useRef(null);
  useEffect(() => {
    (async () => {
      playerRef.current = await yyEva({
        container: playerContainer.current, // Html Element
        videoUrl:
          'https://unpkg.yy.com/webupload/e-video/demo/AAA_dynamic_264_mid-0.mp4', // Video Url
        // Events
        onStart() {},
        onStop() {},
        onEnd() {},
        onPause() {},
        onResume() {},
        onProcess() {},
        onError() {},
      });
      // playerRef.current.start();
    })();
  }, []);

  return (
    <div>
      <h1>yyeva demo</h1>
      <p>yyeva demo:</p>
      <div ref={playerContainer}></div>
    </div>
  );
}
