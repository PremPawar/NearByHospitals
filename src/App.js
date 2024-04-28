import * as React from 'react';
import Navbar from './components/navbar.js';
import './App.css';
import Map from './components/Map.js';


const clientId = "411763291481-420vkvmu4k8082ip3m7acqelb3njevq6.apps.googleusercontent.com";

function App() {
 

    return (
        <div className="App">
            <Navbar />
            <Map />
        </div>
    );
}

export default App;
