// index.js
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import HomeComponent from './system/home/Home';
import UserManager from './system/UserManager/UserManager';

// Fuction to show month date year
// const countries = countriesData.map((country,index) => {console.log(country ,index)});



class App extends React.Component {
  state = {
    count: 0,
    bgColor:true,
    styles: {
      backgroundColor: '',
      color: '',
    },
    index: 0,
  }
  
  render() {
    

    return (
      <div>
        <HomeComponent/>
       <UserManager/>
      
      </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
