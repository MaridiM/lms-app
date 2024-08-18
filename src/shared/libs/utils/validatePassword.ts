export const validatePassword = (password: string): string => {
    const passwordValidationRules = [
        { regex: /(?=.*[!@$&*])/, message: 'Write at least one special character.' },
        { regex: /(?=.*[0-9])/, message: 'Write at least one number.' },
        { regex: /(?=.{6,})/, message: 'Write at least 6 characters.' }
    ];

    for (const rule of passwordValidationRules) {
        if (!rule.regex.test(password)) {
            return rule.message;
        }
    }

    return ''
}