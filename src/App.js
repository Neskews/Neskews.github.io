import React from 'react';
import { Topic } from './Topic/Topic';
import data from "./data.json"
import "./App.scss";
import { Header } from "./Header/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <main>
                {data.map((data, key) => (
                    <Topic data={data} key={key} />
                ))}
            </main>
        </div>
    );
}

export default App;
