import React from 'react';
import logo from './logo.svg';
import './App.css';
import LandingPage from './containers/LandingPage/landingPage';

function App() {
  return (
    <div className="App">
        <header>
          <link href='http://fonts.googleapis.com/css?family=Lato:400,700' rel='stylesheet' type='text/css' />
          <link href="https://fonts.googleapis.com/css?family=Poppins&display=swap" rel="stylesheet" />
          <meta charSet="UTF-8" />
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
          <link href="src\assets\styles\global.css" rel="stylesheet" />
        </header>
        <LandingPage/>
    </div>
  );
}

export default App;
