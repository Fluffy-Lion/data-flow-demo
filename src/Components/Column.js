import { BoxListStyle, ColumnContainer, ColumnTitle } from "./Styles/Styles";
import CodeBox from "./CodeBox";
import { Droppable } from "react-beautiful-dnd";
import BoxList from "./BoxList";
const Column = (props) => {
  let correct = ["box-1", "box-2", "box-3"]
  return (
    <ColumnContainer>
      <ColumnTitle>{props.column.title}</ColumnTitle>
      <Droppable droppableId={props.column.id}>
        {provided => (
          <BoxListStyle ref={provided.innerRef} {...provided.droppableProps}>
                {props.items.map((item, index) => {
                  let check = correct[index]
                  return(
                  <CodeBox
                      key={item.id}
                      item={item}
                      index={index}
                      givenProp={item.givenProp}
                      check={check}
                      column={props.column.id}
                  />
                  )
            })}
            {provided.placeholder}
          </BoxListStyle>
        )}
      </Droppable>
    </ColumnContainer>
  );
};
export default Column;
