const Controls = ({ audioRef }) => {
  const handlePlay = () => {
    audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current.pause();
  };

  const handleStop = () => {
    audioRef.current.pause();
    audioRef.current.currentTime = 0;
  };
  return (
    <div>
      <button
        onClick={() => {
          handlePlay();
        }}
      >
        Play
      </button>
      <button
        onClick={() => {
          handlePause();
        }}
      >
        Pause
      </button>
      <button
        onClick={() => {
          handleStop();
        }}
      >
        Stop
      </button>
    </div>
  );
};

export default Controls;
