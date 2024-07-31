import { Icon } from "@/shared/ui"

export const useColors = () => {
    return {
        gradients: {
            onboarding: ['#E5ECF9', '#F6F7F9'],
            welocmeIntro: ['#E5ECF9', '#F6F7F9', '#E8EEf9'],
            login: ['#E5ECF9', '#F6F7F9'],
        },
        dot: {
            default: 'bg-dot',
            active: 'bg-dot-active',
        },
        text: {
            default: 'text-font',
            description: 'text-font-description',
            error: 'text-font-error',
        },
        icon: {
            default: '#a1a1a1',
            secondary: '#747474',
        }
    }
}