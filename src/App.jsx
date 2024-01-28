import Player from './components/Player.jsx';
import TimerChalange from './components/TimerChalange.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChalange title="Easy" targetTime={1} />
        <TimerChalange title="Not easy" targetTime={5} />
        <TimerChalange title="Getting tough" targetTime={10} />
        <TimerChalange title="Pros only" targetTime={15} />
      </div>
    </>
  );
}

export default App;
