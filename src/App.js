import './App.css';
import RequestComponent from './components/requestComponent'
// import useToggle from './hooks/useToggle'

function App() {
  // const [value, toggleValue] = useToggle(false)
  // console.log(value)
  return (
    <div className="App">
      <RequestComponent/>

      {/* <button onClick={toggleValue}>useToggle</button> */}
    </div>
  );
}

export default App;
