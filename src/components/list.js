import Course from "./course";
import { Droppable } from "react-beautiful-dnd";
import { Grid } from "@mui/material";

const list_style = {
  width: 400,
  minHeight: 300,
  padding: 5,
  margin: 10,
  border: "solid black",
};

export default function List(props) {
  return (
    <div style={list_style}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <p>
          {props.list.name} {props.list.year_id}
        </p>
        <Droppable droppableId={props.list.id}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {props.courses.map((course, index) => (
                <Grid item>
                  <Course id={course.id} name={course.name} index={index} />
                </Grid>
              ))}

              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </Grid>
    </div>
  );
}
