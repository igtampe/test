import { React, useState, useEffect } from "react";
import List from "./list";
import { DragDropContext } from "react-beautiful-dnd";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddIcon from "@mui/icons-material/Add";
import { Stack, IconButton, Button, Icon } from "@mui/material";
import {
  list_order,
  lists,
  years,
  semesters,
  courses,
} from "../data/dummy_data";

export default function Builder() {
  const year_ids = lists.year_list.year_ids;
  const [yearIndex, setYearIndex] = useState(year_ids.length - 1);

  const nextYear = () => {
    if (yearIndex + 1 < year_ids.length) {
      setYearIndex(yearIndex + 1);
    }
  };

  const prevYear = () => {
    if (yearIndex - 1 >= 0) {
      setYearIndex(yearIndex - 1);
    }
  };

  return (
    <div style={{ margin: 10 }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <List
          key={0}
          list={lists["course_list"]}
          courses={lists["course_list"].course_ids.map((id) => courses[id])}
        />
        <IconButton onClick={() => prevYear()}>
          <ChevronLeftIcon />
        </IconButton>
        {/* <Stack> */}
        {years[year_ids[yearIndex]].semester_ids.map((value, index) => (
          <List
            key={index + 1}
            list={semesters[value]}
            courses={semesters[value].course_ids.map((id) => courses[id])}
          />
        ))}
        {/* </Stack> */}
        <IconButton onClick={() => nextYear()}>
          <ChevronRightIcon />
        </IconButton>
      </Stack>
    </div>
  );
}
