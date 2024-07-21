import * as icons from 'lucide-react-native'


export type Icons = typeof icons;
export type IconName = keyof Icons

export interface IProps {
    name: IconName;
    className?: string
    fill?: string
    size?: string
}