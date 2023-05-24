import React, { useState, useEffect } from 'react';
import CustomText from '../../components/CustomText/CustomText';
import * as S from './styles'
import TextField from '../../components/TextField/TextField';
import CustomButton from '../../components/CustomButton/CustomButton';
import TaskList from '../../components/TaskList/TaskList';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Task } from '../../Interfaces/TaskInterfaces';
import SplashScreen from 'react-native-splash-screen';

function Home() {
  const [task, setTask] = useState<{ key: string; task: string; }[]>([]);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    SplashScreen.hide();
    loadTasks()
  }, [])

  useEffect(() => {
    saveTasks();
  }, [task])
  
  const loadTasks = async () => {
    const taskStorage = await AsyncStorage.getItem('@task');

    if (taskStorage) {
      setTask(JSON.parse(taskStorage));
    }
  }

  const addTask = () => {
    if (userInput === '') {
      return;
    }
  
    const newTask = {
      key: userInput,
      task: userInput
    };
  
    setTask([...task, newTask]);
    setUserInput('');
  }

  const saveTasks = async () => {
    await AsyncStorage.setItem('@task', JSON.stringify(task));
  }

  const completeTask = (data: Task): void => {
    const taskCompleted = task.filter(item => item.key !== data.key);
    setTask(taskCompleted);
  }

  return (
    <S.Container>
      <S.Header>
        <CustomText
          type='title'
          color='#000'
          fontSize={'24px'}
          >
          Tarefas de hoje
        </CustomText>
      </S.Header>

      <S.TaskListView>
        <TaskList completeTask={completeTask} data={task}/> 
      </S.TaskListView>

      <S.FooterView>
        <S.AddTaskView>
          <TextField 
            value={userInput} 
            onChangeText={(text) => setUserInput(text)} 
            placeholder='Adicione uma tarefa' 
          />            
          <CustomButton
            size='small'
            btnVariant='circle'
            onPress={addTask}
          >
            <CustomText
              color='#000'
              fontSize={'30px'}
              fontWeight='normal'
            >
              +
            </CustomText>
          </CustomButton>

        </S.AddTaskView>
      </S.FooterView>

    </S.Container>
  );
}

export default Home;
