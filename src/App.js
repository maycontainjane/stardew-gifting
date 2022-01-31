import './App.css';
import VillagerView from './villagerview/VillagerView.js';
import ItemView from './itemview/ItemView.js';
import { useState } from 'react';

function App() {
    const [view, setView] = useState("villager"); 
    const [viewModal, setModal] = useState(false);
    let pageView;

    const openModal = () => {
        if (viewModal) {
            setModal(false);
        } else {
            setModal(true);
        }
    }

    // Decide if person or item view. 
    // TODO: base this on a button
    if (view === "villager") {
        pageView = <VillagerView />;
    } else {
        pageView = <ItemView />;
    }

    return (
        <div className="App">
            <div className="App__header">
                <div className="App__headerText">Stardew Gift Guide <button onClick={() => openModal()} className="App__helpButton">?</button></div>
            </div>
            {pageView}
            {viewModal && 
                <div className="App__modal">
                    <span class="close" onClick={() => openModal()}>&times;</span>
                    This guide is still a work in progress. 
                    A known bug is duplicate items showing up (universal tastes AND villager tastes sometimes conflict). In this case, 
                    the <span className="ItemList__item">Pink-Highlighted Item</span> takes prescedence. 
                    Please submit other bugs or data corrections to me <a href="https://github.com/maycontainjane/stardew-gifting/issues">here!</a>
                </div>
            }
        </div>
    );
}

export default App;
