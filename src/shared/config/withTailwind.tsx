import { ComponentType } from 'react';
import { StyleProp, ViewStyle, TextStyle } from 'react-native';
import tw from 'twrnc';

interface TailwindProps {
  className?: string;
}

const withTailwind = <P extends { style?: StyleProp<ViewStyle | TextStyle> }>(
  Component: ComponentType<P & TailwindProps>
) => {
  return ({ className, style, ...props }: P & TailwindProps) => {
    const classNames = className ? tw`${className}` : {};
    const combinedStyles: StyleProp<ViewStyle | TextStyle> = [classNames, style];

    return <Component style={combinedStyles} {...props} />;
  };
};

export default withTailwind;
