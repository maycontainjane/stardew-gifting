import villager_tastes from '../data/villager_tastes.json';
import universal_tastes from '../data/universal_tastes.json';
import items_by_category from '../data/items_by_category.json';

function ItemList(props) {
    let itemsList;
    let universalTastes = universal_tastes[props.category]["items"].map((item) => {
            if (item.includes("All")) {
                let category = item.replace("All ", "");
                if (category in items_by_category) {
                    return items_by_category[category];
                } else {
                    return item;
                }
            } else {
                return item;
            }
        }).flat();
    universalTastes = [...new Set(universalTastes)];
 

    if (props.who === "Universal") {
        itemsList = universalTastes;
    } else {     // connect the universal tastes list with the villager tastes list
        let expandedItems = villager_tastes[props.who][props.category].map((item) => {
            if (item.includes("All")) {
                let category = item.replace("All ", "");
                if (category in items_by_category) {
                    return items_by_category[category];
                } else {
                    return item;
                }
            } else {
                return item;
            }
        }).flat();
        expandedItems = [...new Set(expandedItems)];
        itemsList = expandedItems.concat(universalTastes).sort();
    }

    // If universal:
        // for each category at the end, go through and add "exceptions" into html as exceptionList div for each
    // If villager:
        // If item is all and item is not in full villager list, insert items from category into list

    let filteredItemsList = itemsList.map((item) => {
        if (item.toLowerCase().match(props.filterText.toLowerCase())) {
            return item;
        } else {
            return "";
        }
    });

    return (
        <div className="ItemList">
            <h1 className="ItemList__header">{props.category}</h1>
            <div className="ItemList__itemsContainer">
                {filteredItemsList.map((item) => {
                        if (item !== "") {
                            let lowerUniversal = universalTastes.map((stuff) => {
                                return stuff.toLowerCase();
                            });
                            if (lowerUniversal.includes(item.toLowerCase())) {
                                return <div className="ItemList__item universal" key={item}>{item}</div>
                            } else { 
                                return <div className="ItemList__item" key={item}>{item}</div>
                            }
                        }
                    }
                )}
            </div>
        </div>
    );
}

export default ItemList;
