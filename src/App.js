import './App.css';
import VillagerView from './VillagerView.js';
import ItemView from './ItemView.js';
import { useState } from 'react';

function App() {
    const [view, setView] = useState("villager"); 
    let pageView;

    // Decide if person or item view. 
    // TODO: base this on a button
    if (view === "villager") {
        pageView = <VillagerView />;
    } else {
        pageView = <ItemView />;
    }

    return (
        <div className="App">
            {pageView}
        </div>
    );
}

export default App;
