//import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'
import Chart from './components/Chart';

const fetchOptions = async () => {
  const res = await fetch('http://localhost:5000/chart')
  const data = await res.json()

  console.log(data)
  return data
}

const App = () => {
  const [options, setOptions] = useState([])
  useEffect(() => {
    const getOptions = async () => {
      const opts = await fetchOptions()
      setOptions(opts)
    }
    
    getOptions()
  }, [])
   
  return (
    <Chart options = {options} />
  )
}

export default App
