import { Cont, Box, CodeSnip } from "./Components/Styles/Styles";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
const App = () => {

  let col = ["red", "blue", "green"]
  return (
    <>
      <DragDropContext>
        <Cont>
          <div>
            <Box prop={true} />
            <Box prop={false} />
            <Box prop={false} />
          </div>
          <div>
            <Droppable droppableId="code-snips">
              {(provided) => (
                <ul
                  {...provided.droppableProps} ref={provided.innerRef}
                >
                 {col.map((x, index) => {
                   return (
                     <Draggable key={index} index={index} draggableId={String(index)}>
                       {(provided) => (
                        <CodeSnip ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} />
                       )}
                     </Draggable>
                   )
                 })}
                </ul>
              )}
            </Droppable>
          </div>
        </Cont>
      </DragDropContext>
    </>
  );
};

export default App;
