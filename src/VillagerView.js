import { useState } from 'react';
import { Image } from 'react-native';
import ItemList from './ItemList.js';
import villagerImages from './img/friends/index.js';
import itemImages from './img/items/index.js';
import villager_categories from './data/villager_categories.json';

function VillagerView() {
    var classNames = require('classnames');

    const [villagers, setVillagerList] = useState(villager_categories["all"]);
    const [currentVillager, setVillager] = useState("Abigail");
    const [currentCategory, setCategory] = useState("all");
    
    const tastes = ["loves", "likes", "neutral", "dislikes"];
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
                            <p>{category}</p>
                        </button>
                    )}
                </div>
                <div className="VillagerList-names">
                    {villagers.map((villager) => 
                        <div>
                            <button className={classNames("VillagerList-villager", {'VillagerList-active': currentVillager === villager})} 
                            onClick={(e) => changeVillager(e, villager)} key={villager}>
                                <img className="VillagerList-villager-image" src={villagerImages[villager]} />
                                <p className="VillagerList-name">{villager}</p>
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className="ItemLists">
                {tastes.map((category) =>
                    <ItemList key={category} category={category} who={currentVillager} /> 
                )}
            </div>
        </div>
    );
}

export default VillagerView;
