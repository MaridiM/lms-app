export const paths = {
    default: 'index',
    login:  (page?: string): string => `(router)/login/${page || ''}`,
    signup:  (page?: string): string => `(router)/sing-up/${page || ''}`,
    onboarding: (page?: string): string => `(router)/onboarding/${page || ''}`,
    welcomeIntro: (page?: string): string => `(router)/welcome-intro/${page || ''}`,
    forgotPassword: (page?: string): string => `(router)/forgot-password/${page || ''}`,
    verifyAccount: (page?: string): string => `(router)/verify-account/${page || ''}`,

}