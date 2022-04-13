import { Draggable } from "react-beautiful-dnd";
import CourseCard from "./CourseCard";

export default function Course(props) {
  return (
    <Draggable draggableId={props.id} index={props.index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <CourseCard {...props} />

        </div>
      )}
    </Draggable>
  );
}
