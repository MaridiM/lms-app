export const paths = {
    default: 'index',
    onboarding: (page?: string): string => `(router)/onboarding/${page || ''}`,
    welcomeIntro: (page?: string): string => `(router)/welcome-intro/${page || ''}`,

}