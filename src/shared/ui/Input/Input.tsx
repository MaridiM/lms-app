import { cn } from '@/shared/libs/utils';
import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react';
import { TextInput } from 'react-native';

const Input = forwardRef<
    ElementRef<typeof TextInput>,
    ComponentPropsWithoutRef<typeof TextInput>
>(({ className, placeholderClassName, ...props }, ref) => {


    return (
        <TextInput
            ref={ref}
            className={cn(
                'flex bg-background rounded-lg text-font',
                props.editable === false && 'opacity-50 web:cursor-not-allowed',
                className
            )}
            placeholderClassName={cn('text-font-placeholder', placeholderClassName)}
            {...props}
        />
    );
});

Input.displayName = 'Input';

export { Input };