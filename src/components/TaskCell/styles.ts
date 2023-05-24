import styled from "styled-components/native";
import * as Animatable from "react-native-animatable";
import Icon from 'react-native-vector-icons/AntDesign'

export const TaskContainer = styled(Animatable.View)`
  justify-content: center;
  background-color: #FFF;
  min-height: 53px;
  width: 335px;
  border-radius: 10px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
`;

export const TaskContentView = styled.View`
  flex-direction: row;
`;

export const SquareButton = styled.TouchableOpacity`
  background-color: rgba(85, 188, 246, 0.4);
  height: 24px;
  width: 24px;
  border-radius: 5px;
  align-self: center;
  margin-left: 15px;
  margin-right: 15px;
`;

export const Icons = styled(Icon)`
  
`;

export const TextView = styled.View`
  width: 250px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

export const CircleView = styled.View`
  align-self: center;
  position: absolute;
  width: 12px;
  height: 12px;
  right: 15px;
  border: 2px solid #55BCF6;
  border-radius: 5px;
`;