import { useRecoilState } from "recoil";
import { itemsState, itemCounterState } from "../state";
import Item from "./Item";
import Button from "../components/Button";
import "../App.css";

function List() {
  const [items, setItems] = useRecoilState(itemsState);
  const [itemCounter, setItemCounter] = useRecoilState(itemCounterState);

  const handleItemCheck = (id, check) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, checked: check };
      }
      return item;
    });
    setItems(newItems);
  };
  const onItemChange = (id, event) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, value: event.target.value };
      }
      return item;
    });
    setItems(newItems);
  };

  return (
    <div className="list-button-container relative">
      <div className="list bg-white p-2 rounded-xl shadow-lg animate-fadeIn w-[80vw] max-w-[360px]">
        {items.length === 0 ? (
          <div className="empty-list font-caveat text-2xl text-center">Empty List</div>
        ) : (
          <div>
            {items.map((item, index) => (
              <Item
                key={item + index}
                setItems={setItems}
                onItemChange={onItemChange}
                handleItemCheck={handleItemCheck}
                item={item}
              />
            ))}
          </div>
        )}
      </div>
      <Button
        items={items}
        setItems={setItems}
        itemCounter={itemCounter}
        setItemCounter={setItemCounter}
      />
    </div>
  );
}

export default List;
