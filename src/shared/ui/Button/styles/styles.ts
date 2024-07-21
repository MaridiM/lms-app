import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen'
import { cva } from "class-variance-authority";
import { StyleSheet } from "nativewind";

export const styles = StyleSheet.create({
    fill: {
        width: wp(`100%`),
    },
})

export const buttonVariants = cva(
    'group flex items-center justify-center rounded-md web:ring-offset-background web:transition-colors web:focus-visible:outline-none web:focus-visible:ring-2 web:focus-visible:ring-ring web:focus-visible:ring-offset-2',
    {
        variants: {
            variant: {
                default: 'bg-primary web:hover:opacity-90 active:opacity-90',
            },
            size: {
                default: 'h-10 px-4 py-2 native:h-12 native:px-5 native:py-3',
                sm: 'h-9 rounded-md px-3',
                lg: 'h-11 rounded-md px-8 native:h-14',
                icon: 'h-10 w-10',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);

export const buttonTextVariants = cva(
    'web:whitespace-nowrap text-sm native:text-base font-medium text-foreground web:transition-colors',
    {
        variants: {
            variant: {
                default: 'text-primary-foreground',
            },
            size: {
                default: '',
                sm: '',
                lg: 'native:text-lg',
                icon: '',
            },
        },
        defaultVariants: {
            variant: 'default',
            size: 'default',
        },
    }
);
