import React, {useState, useRef} from 'react'
import Item from "./Item"
import { useDrop } from 'react-dnd'

export const ItemTypes = {COUNTRY: "country"}

export const List = ({content}) => {
    const ref = useRef(null);
    const [items, setItems] = useState(content);
    const moveItem = (from) => {
    console.log(from);
    /*let newItems = [...items];
    var element = items[from];
    newItems.splice(from, 1);
    newItems.splice(to, 0, element);
    setItems(newItems);*/
  }
  const [{isOver}, drop] = useDrop(()=>({
    accept: "source1",
    drop: (item, monitor) => moveItem(item),
      collect: monitor => ({
        isOver: !!monitor.isOver(),
      })
  }))
  drop(ref)
    return (       
        <ol ref={ref} className="list">
          {items.map((item, index) => (<Item key={index} content={item} order={index} moveAction={moveItem} />))}
        </ol>
    )
}

export default List;