import { ElementRef, forwardRef } from 'react';
import { Pressable } from 'react-native';
import { TextClassContext } from '../Text';
import { cn } from '@/shared/libs/utils';
import { ButtonProps } from './types';
import {
    buttonTextVariants,
    buttonVariants,
    styles
} from './styles';
import { createWidthStyle } from '@/shared/libs/helpers';

const Button = forwardRef<ElementRef<typeof Pressable>, ButtonProps>(
    ({ className, variant, size, fill, width, ...props }, ref) => {
        const dynamicWidthStyle = width ? createWidthStyle(width)  : {};
        return (
            <TextClassContext.Provider
              value={buttonTextVariants({ variant, size, className: 'web:pointer-events-none' })}
            >
                <Pressable
                    className={cn(
                        props.disabled && 'opacity-50 web:pointer-events-none',
                        buttonVariants({
                            variant,
                            size,
                            className
                        })
                    )}
                    style={[
                        fill && styles.fill,
                        dynamicWidthStyle,
                    ]}
                    ref={ref}
                    role='button'
                    {...props}
                />
            </TextClassContext.Provider>
        );
    }
);
Button.displayName = 'Button';

export { Button };