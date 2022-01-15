import { useEffect, useState } from 'react';
import ItemList from './ItemList.js';
import villagerImages from '../img/friends/index.js';
import itemImages from '../img/items/index.js';
import villager_categories from '../data/villager_categories.json';

var classNames = require('classnames');

function VillagerView() {

    // State variables
    //      villagers - filtered list of villagers by category
    //      currentVillager - the villager whose preferences are displayed
    //      currentCategory - types of villagers being displayed
    //      filterText - what's currently typed into the text filter box
    const [villagers, setVillagerList] = useState(villager_categories["all"]);
    const [currentVillager, setVillager] = useState("Abigail");
    const [currentCategory, setCategory] = useState("all");
    const [filterText, setFilterText] = useState("");
    
    const tastes = ["loves", "likes", "neutral", "dislikes", "hates"];
    const categories = ["all", "marriageable", "bachelors", "bachelorettes"];

    const changeCategory = (category) => {
        setVillagerList(villager_categories[category]);
        setCategory(category);
        console.log(category);
    };
    
    const changeVillager = (villager) => setVillager(villager);

    const filterItemText = (e) => {
        e.preventDefault();
        setFilterText(e.target.value);
    }

    return (
        <div className="VillagerView">
            <div className="VillagerView__selection">
                <div className="VillagerView__categorySelection">
                    {categories.map((category) =>
                        <button className={classNames("VillagerView__category", {'VillagerView__category--active': currentCategory === category})} 
                            key={category} onClick={() => changeCategory(category)}>
                            {category}
                        </button>
                    )}
                </div>
                <div className="VillagerView__villagerSelectionContainer">
                    <div className="VillagerView__villagerSelection">
                        <div className="VillagerView__universal"  key="universal">
                                <button className={classNames("VillagerView__universalButton", {"VillagerView__villagerButton--active": currentVillager === "Universal"})} 
                                onClick={() => changeVillager("Universal")}>
                                    <img className="VillagerView__villagerButtonImage" alt="Love Dialogue Bubble" src={itemImages["Dialogue Bubble Love"]} />
                                    <div className="VillagerView__villagerButtonName"><span className="VillagerView__universalName">Universal Tastes</span></div>
                                </button>
                        </div>
                        <div className="VillagerView__searchbar">
                            <div className="VillagerView__searchbarLabel">filter</div>
                            <div className="VillagerView__searchbarInput"><input onChange={(e) => filterItemText(e)} type="text" value={filterText} /></div>
                        </div>
                    </div>
                    <div className="VillagerView__villagerList">
                        {villagers.map((villager) => 
                            <div className="VillagerView__villager"  key={villager}>
                                <button className={classNames("VillagerView__villagerButton", {"VillagerView__villagerButton--active": currentVillager === villager})} 
                                onClick={() => changeVillager(villager)}>
                                    <img className="VillagerView__villagerButtonImage" alt={villager + "'s portrait"} src={villagerImages[villager]} />
                                    <div className="VillagerView__villagerButtonName">{villager}</div>
                                </button>
                            </div>
                        )}
                    </div>
                    <div className={classNames("VillagerView__currentVillagerContainer", {"VillagerView__currentVillagerContainer-universal": currentVillager === "Universal"})}>
                        <div ClassName="VillagerView__currentVillager">
                            <img className="VillagerView__currentVillagerImage" alt={currentVillager + "'s portrait"} src={villagerImages[currentVillager]} />
                            <div className="VillagerView__currentVillagerName">{currentVillager}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="VillagerView__itemList">
                {tastes.map((category) =>
                    <ItemList key={category} category={category} who={currentVillager} filterText={filterText} /> 
                )}
            </div>
        </div>
    );
}

export default VillagerView;
