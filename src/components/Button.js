function Button(props) {
  return (
    <div
      className="button flex items-center justify-center bg-[#28231d] text-white rounded-full w-12 h-12 font-bold absolute right-[-25px] bottom-[-25px] cursor-pointer transition-transform duration-100 ease-in active:scale-95"
      onClick={() => {
        const list = document.getElementsByClassName("item-text");
        const latest_item = list[list.length - 1];
        if (latest_item !== undefined && latest_item.value.length === 0) return;
        props.setItems([
          ...props.items,
          { id: props.itemCounter, value: "", checked: false },
        ]);
        props.setItemCounter(props.itemCounter + 1);
      }}
    >
      +
    </div>
  );
}

export default Button;
