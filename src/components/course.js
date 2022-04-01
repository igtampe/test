import { Draggable } from "react-beautiful-dnd";
import { Card, Grid } from "@mui/material";

const card_style = {
  backgroundColor: "#F2EECB",
  width: 275,
  margin: 10,
  padding: 10,
};

export default function Course(props) {
  return (
    <Draggable draggableId={props.id} index={props.index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card style={card_style}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item>
                id = {props.id}; name = {props.name}
              </Grid>
            </Grid>
          </Card>
        </div>
      )}
    </Draggable>
  );
}
