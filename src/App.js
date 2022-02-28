import { Container } from "./Components/Styles/Styles";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CodeBox from "./Components/CodeBox";
import { useState } from "react";
import { initialInfo } from "./Components/initialInfo";
import Column from "./Components/Column";

const App = () => {

  const [info, setInfo]  = useState("")

  const [data, setData] = useState(initialInfo)
  const onDragEnd = (result) => {
     const { destination, source, draggableId} = result
     if(!destination){
       return
     }
     if(
       destination.droppableId === source.droppableId &&
       destination.index === source.index
     ) {
       return
     }
     const start = data.columns[source.droppableId]
     const finish = data.columns[destination.droppableId]

     if(start === finish){
      const newItemIds = Array.from(start.itemIds)
      newItemIds.splice(source.index, 1)
      newItemIds.splice(destination.index, 0, draggableId)
 
      const newColumn = {
        ...start,
        itemIds: newItemIds,
      }
 
      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn
        }
      }
      setData(newData)
     }

     const startItemIds = Array.from(start.itemIds)
     startItemIds.splice(source.index, 1)
     const newStart = {
      ...start,
      itemIds: startItemIds,
    }

    const finishItemIds = Array.from(finish.itemIds)
    finishItemIds.splice(destination.index, 0, draggableId)
    const newFinish = {
      ...finish,
      itemIds: finishItemIds
    }

    const newData= {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      },
    }
    setData(newData)
     
  }
  return (
    <DragDropContext
      onDragEnd={onDragEnd}
    >
      <Container>
      {data.columnOrder.map((columnId) => {
        const column = data.columns[columnId]
        
        const items = column.itemIds.map(itemId => data.boxes[itemId])
        // NEED TO SPLIT BETWEEN CODE SNIPPETS AND BOXEs
        // return <Column key={column.id} column={column} items={items} />
      })}
      </Container>
  </DragDropContext>
  )}


export default App
