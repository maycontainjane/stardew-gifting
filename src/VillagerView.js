import { useState } from 'react';
import ItemList from './ItemList.js';
import villagerImages from './img/friends/index.js';
import villager_categories from './data/villager_categories.json';

function VillagerView() {
    var classNames = require('classnames');

    const [villagers, setVillagerList] = useState(villager_categories["all"]);
    const [currentVillager, setVillager] = useState("Abigail");
    const [currentCategory, setCategory] = useState("all");
    
    const tastes = ["loves", "likes", "neutral", "dislikes", "hates"];
    const categories = ["all", "marriageable", "bachelors", "bachelorettes"];

    const changeCategory = (category) => {
        setVillagerList(villager_categories[category]);
        setCategory(category);
        console.log(category);
    };
    
    const changeVillager = (e, villager) => {
        setVillager(villager);
    };

    return (
        <div>
            <div className="VillagerList">
                <div className="VillagerList-categories">
                    {categories.map((category) =>
                        <button className={classNames("VillagerList-category", {'category-active': currentCategory === category})} 
                            key={category} onClick={() => changeCategory(category)}>
                            {category}
                        </button>
                    )}
                </div>
                <div className="VillagerList-container">
                    <div className="CurrentVillager">
                        <img className="CurrentVillager-image" src={villagerImages[currentVillager]} />
                        <div className="CurrentVillager-name">{currentVillager}</div>
                    </div>
                    <div className="VillagerList-names-container">
                        <div className="VillagerList-names">
                            {villagers.map((villager) => 
                                <div className="VillagerList-name"  key={villager}>
                                    <button className={classNames("VillagerList-villager", {'VillagerList-active': currentVillager === villager})} 
                                    onClick={(e) => changeVillager(e, villager)}>
                                        <img className="VillagerList-villager-image" src={villagerImages[villager]} />
                                        <p className="VillagerList-name">{villager}</p>
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            <div className="ItemLists-container">
                {tastes.map((category) =>
                    <ItemList key={category} category={category} who={currentVillager} /> 
                )}
            </div>
        </div>
    );
}

export default VillagerView;
