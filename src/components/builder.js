import { React, useState, useEffect } from "react";
import List from "./list";
import { DragDropContext } from "react-beautiful-dnd";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import AddIcon from "@mui/icons-material/Add";
import { Stack, IconButton, Button, Icon } from "@mui/material";

export default function Builder(props) {
  const years = props.lists["year_list"]["year_ids"];
  const [yearIndex, setYearIndex] = useState(years.length - 1);

  const nextYear = () => {
    if (yearIndex + 1 < years.length) {
      setYearIndex(yearIndex + 1);
    }
  };

  const prevYear = () => {
    if (yearIndex - 1 >= 0) {
      setYearIndex(yearIndex - 1);
    }
  };

  return (
    <div style={{ margin: 10, minHeight: 1000 }}>
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <List
          key={0}
          list={props.lists["course_list"]}
          courses={props.lists["course_list"]["course_ids"].map(
            (id) => props.courses[id]
          )}
        />
        <IconButton key={1} onClick={() => prevYear()}>
          <ChevronLeftIcon />
        </IconButton>
        {props.lists[years[yearIndex]]["semester_ids"].map(
          (value, index) => (
            <List
              key={index + 2}
              list={props.lists[value]}
              courses={props.lists[value]["course_ids"].map(
                (id) => props.courses[id]
              )}
            />
          )
        )}
        <IconButton key={years.length + 1} onClick={() => nextYear()}>
          <ChevronRightIcon />
        </IconButton>
      </Stack>
    </div>
  );
}
