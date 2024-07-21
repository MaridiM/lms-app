import { ReactNode } from "react"
import { VariantProps } from "class-variance-authority"
import { Pressable } from "react-native"
import { buttonVariants } from "../styles"

export interface IProps {
    fill?: boolean
    width?: string
}

export type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> & VariantProps<typeof buttonVariants> & IProps;