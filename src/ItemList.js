import villager_tastes from './data/villager_tastes.json';
import universal_tastes from './data/universal_tastes.json';

function ItemList(props) {

    // connect the universal tastes list with the villager tastes list
    let itemsList = villager_tastes[props.who][props.category].concat(universal_tastes[props.category]["items"]);

    return (
        <div>
            <h1>{props.category}</h1>
            <div className="ItemList-items">
                {itemsList.map((item) => 
                    <p className="ItemList-item" key={item}>{item}</p>
                )}
            </div>
        </div>
    );
}

export default ItemList;
