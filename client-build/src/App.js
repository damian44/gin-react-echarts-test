import logo from './logo.svg';
import './App.css';

const fetchChart = async () => {
  const data = await fetch('http://localhost:5000/chart')
  return data
}

const App = () => {
  return (
    <div>
      {fetchChart}
    </div>
  )
}

export default App
