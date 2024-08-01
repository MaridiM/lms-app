import { TouchableOpacity as TouchableOpacityComponent } from 'react-native';
import { TailwindTouchableOpacityProps } from '../types';
import withTailwind from '@/shared/config/withTailwind';

const TouchableOpacity = withTailwind<TailwindTouchableOpacityProps>(TouchableOpacityComponent);
export default TouchableOpacity
