import { Box, ContentStyles } from "./Styles/Styles";
import { Draggable } from "react-beautiful-dnd";
const CodeBox = ({ item, givenProp, index }) => {
  return (
      <Draggable draggableId={item.id} index={index}>
        {provided => (
          <Box
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            item={item}
            givenProp={givenProp}
          >
            {item.content}
          </Box>
        )}
      </Draggable>
  );
};
export default CodeBox;
