import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";


export const Container = styled.View`
  background-color: #E8EAED;
  flex: 1;
`;

export const Header = styled.View`
  margin-left: ${RFValue(20)}px;
  margin-top: ${RFValue(94)}px;
  margin-bottom: ${RFValue(30)}px;
`;

export const TaskListView = styled.View`
  flex: 4;
`;

export const FooterView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const AddTaskView = styled.View`
  position: absolute;
  align-items: center;
  flex-direction: row;
`;