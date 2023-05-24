import { TouchableOpacityProps } from 'react-native';

export interface ButtonProps extends TouchableOpacityProps {
  size?: 'small';
  onPress?: () => void;
  disabled?: boolean;
  children?: React.ReactNode;
  btnVariant?: 
  | 'circle' ;
}
