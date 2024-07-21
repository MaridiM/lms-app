import * as icons from 'lucide-react-native'
import { FC } from 'react';
import { cn } from '@/shared/libs/utils';
import { iconWithClassName } from '@/shared/libs/icons/iconWithClassName';
import { IProps } from './Icon.interface';
import type { LucideIcon } from 'lucide-react-native';


const Icon: FC<IProps> = ({ name, className, size = 32 }) => {
    const IconComponent = icons[name] as LucideIcon
    iconWithClassName(IconComponent);

    return (
        <IconComponent className={cn(
            `w-[${size}px] h-[${size}px]`,
            className
        )} />
    )
}

export default Icon