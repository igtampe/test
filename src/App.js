import { Routes, Route } from "react-router";
import Builder from "./components/builder";
import Test from "./components/test";
import { DragDropContext } from "react-beautiful-dnd";

export default function App() {
  const dragEnd = (result) => {
    console.log(result);
  };

  return (
    <DragDropContext onDragEnd={dragEnd}>
      <div>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/builder" element={<Builder />} />
        </Routes>
      </div>
    </DragDropContext>
  );
}
