import { Box, ContentStyles } from "./Styles/Styles";
import { Draggable } from "react-beautiful-dnd";
const CodeBox = ({ item, givenProp, index, check, column }) => {
  
let checker = () => check == item.id
  return (
      <Draggable draggableId={item.id} index={index}>
        {provided => (
          <Box
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            item={item}
            givenProp={givenProp}
            correct={checker()}
            column={column}
          >
            {item.content}
            <p>{item.code}</p>
          </Box>
        )}
      </Draggable>
  );
};
export default CodeBox;
