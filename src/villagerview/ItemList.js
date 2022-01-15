import villager_tastes from '../data/villager_tastes.json';
import universal_tastes from '../data/universal_tastes.json';

function ItemList(props) {
    let itemsList;

    if (props.who === "Universal") {
        itemsList = universal_tastes[props.category]["items"].sort();
    } else {     // connect the universal tastes list with the villager tastes list
        itemsList = villager_tastes[props.who][props.category].concat(universal_tastes[props.category]["items"]).sort();
    }

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
                            return <div className="ItemList__item" key={item}>{item}</div>
                        }
                    }
                )}
            </div>
        </div>
    );
}

export default ItemList;
