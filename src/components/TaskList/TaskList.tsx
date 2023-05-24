import React from "react";
import * as S from './styles';
import TaskCell from "../TaskCell/TaskCell";
import { TaskListProps } from "../../Interfaces/TaskInterfaces";

function TaskList({ data, completeTask }: TaskListProps) {

  return(
    <S.TaskList
      data={data}
      showsVerticalScrollIndicator={false}
      keyExtractor={({ key }: any) => String(key)}
      renderItem={({ item }: any) => <TaskCell completeTask={completeTask} task={item}/>}
    >
    </S.TaskList>
  );
}

export default TaskList;