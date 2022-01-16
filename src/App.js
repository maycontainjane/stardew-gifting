import './App.css';
import VillagerView from './villagerview/VillagerView.js';
import ItemView from './itemview/ItemView.js';
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
            <div ClassName="App__header">
                <div className="App__headerText">Stardew Gift Guide</div>
            </div>
            {pageView}
        </div>
    );
}

export default App;
