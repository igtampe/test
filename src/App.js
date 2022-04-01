import { useState } from "react";
import { Routes, Route } from "react-router";
import Builder from "./components/builder";
import Test from "./components/test";
import { DragDropContext } from "react-beautiful-dnd";
import { lists, courses } from "./data/dummy_data";

export default function App() {
  const [currLists, setCurrLists] = useState(lists);
  const [currCourses, setCurrCourses] = useState(courses);

  const dragEnd = (result) => {
    console.log(result);
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = currLists[source.droppableId];
    const end = currLists[destination.droppableId];

    // if dropping into the same list, run this code
    if (destination.droppableId === source.droppableId) {
      // rearrange course_ids in source list
      const newStartCourses = Array.from(start["course_ids"]);
      newStartCourses.splice(source.index, 1);
      newStartCourses.splice(destination.index, 0, draggableId);
      // create a new list
      const newStart = {
        ...start,
        course_ids: newStartCourses,
      };
      // create a state
      const newCurrLists = {
        ...currLists,
        [newStart.id]: newStart,
      };
      // update state
      setCurrLists(newCurrLists);
      return;
    } else {
      // remove course_id from source and update
      const newStartCourses = Array.from(start["course_ids"]);
      newStartCourses.splice(source.index, 1);
      const newStart = {
        ...start,
        course_ids: newStartCourses,
      };
      // add course_id to destination and update
      const newEndCourses = Array.from(end["course_ids"]);
      newEndCourses.splice(destination.index, 0, draggableId);
      const newEnd = {
        ...end,
        course_ids: newEndCourses,
      };
      // create a state
      const newCurrLists = {
        ...currLists,
        [newStart.id]: newStart,
        [newEnd.id]: newEnd,
      };
      // update state
      setCurrLists(newCurrLists);
      return;
    }
  };

  return (
    <DragDropContext onDragEnd={dragEnd}>
      <div>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route
            path="/builder"
            element={<Builder lists={currLists} courses={currCourses} />}
          />
        </Routes>
      </div>
    </DragDropContext>
  );
}
