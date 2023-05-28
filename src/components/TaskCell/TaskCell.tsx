import React from "react";
import * as S from './styles'
import CustomText from "../CustomText/CustomText";
import { TaskCellProps } from "../../Interfaces/TaskInterfaces";

function TaskCell({ task, completeTask }: TaskCellProps) {

  const firstLetterUpper = (task: string): string => {
    return task.charAt(0).toUpperCase() + task.slice(1);
  };
  
  return(
    <S.TaskContainer
      animation='bounceIn'
    >
      <S.TaskContentView>

        <S.SquareButton
          onPress={() => completeTask(task)}
        >
          <S.Icons
            name="check"
            size={25}
            color='#fff'
          />
        </S.SquareButton>

        <S.TextView>
          <CustomText
            color="#000"
            fontSize="20px"
            fontWeight="normal"
            >
            {firstLetterUpper(task.task)}
          </CustomText>
        </S.TextView>

        <S.CircleView/>

      </S.TaskContentView>
    </S.TaskContainer>
  );
}

export default TaskCell;