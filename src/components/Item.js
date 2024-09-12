import { useRecoilState } from "recoil";
import { isHoveredState } from "../state";
import "../styles/animation.css";
import "../App.css";

function Item(props) {
  const [isHovered, setIsHovered] = useRecoilState(isHoveredState);

  return (
    <div
      className="item flex items-baseline justify-between py-2 my-1 mx-1.5 animate-fadeIn border-b last:border-none border-gray-300"
      onMouseEnter={(e) => {
        setIsHovered(true);
      }}
      onMouseLeave={(e) => {
        setIsHovered(false);
      }}
    >
      <div className="checkbox-text-container flex">
        <label
          className={`flex items-center cursor-pointer h-12 w-full px-2.5 rounded-lg transition-all duration-200 mb-1 font-medium ${props.item.checked ? "selected" : null}`}
        >
          <input
            type="checkbox"
            name="checkItems"
            checked={props.item.checked}
            onChange={(e) => {
              props.handleItemCheck(props.item.id, !props.item.checked);
            }}
            disabled={props.item.value.length === 0}
            className={"hidden"}
          />
          <span className="checkbox-ghost relative block w-5 h-5 border-2 border-accent rounded-md mr-2 transition-all duration-200 border-[#28231d]"></span>
          <div className="item-input">
            <input
              className="ml-2 item-text max-w-[50vw] outline-none border-b-2 transition-all duration-200 border-b-white font-caveat text-xl font-semibold w-full focus:outline-none focus:border-b-black"
              type="text"
              value={props.item["value"]}
              placeholder={"enter task"}
              style={{
                color: props.item.checked ? "#aaa" : "#000",
                textDecoration: props.item.checked ? "line-through" : "none",
              }}
              onChange={(e) => {
                props.onItemChange(props.item.id, e);
              }}
            />
          </div>
        </label>
      </div>
      {isHovered ? (
        <div
          className="remove-btn bg-red-500 text-white rounded-full p-0 h-4 w-4 cursor-pointer flex justify-center items-center leading-tight text-sm font-bold"
          onClick={() => {
            const newItems = (items) =>
              items.filter((item) => item.id !== props.item.id);
            props.setItems(newItems);
          }}
        >
          -
        </div>
      ) : null}
    </div>
  );
}

export default Item;
