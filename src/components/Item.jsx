import React, {useRef} from 'react';
import { useDrag } from 'react-dnd'


export const Item = ({content, order, moveAction}) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "source1",
        item: {type: "source1", order: order},
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
      }))
      const ref = useRef(null);
      drag(ref)
    return <li ref={ref} className={isDragging ? "item dragging" : "item"}>{content}</li>
}

export default Item;