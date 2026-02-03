export const MOCK_USER = {
    id: 'user_01',
    name: 'Poppy Wright',
    email: 'poppywright@gmail.com',
    role: 'User',
    avatar: 'PW'
}

export const MOCK_TICKETS = [
    {
        id: 'Tkt -0010',
        title: 'Unable to access dashboard after login',
        description: 'I am experiencing issues accessing the main dashboard after successfully logging in. The page shows a loading spinner indefinitely.',
        status: 'open',
        priority: 'high',
        category: 'Technical',
        count: 2,
        time: '2 hours ago',
        comments: [
            {
                id: 'c1',
                author: 'Support Agent',
                content: 'Thank you for reporting this issue. Could you please try clearing your browser cache and cookies?',
                time: 'Jan 15, 2026 11:00 AM',
                avatar: 'SA',
                isAgent: true
            },
            {
                id: 'c2',
                author: 'Poppy Wright',
                content: 'I tried clearing the cache but the issue persists. I am using Chrome on Windows 11.',
                time: 'Jan 16, 2026 09:00 AM',
                avatar: 'PW',
                isAgent: false
            }
        ]
    },
    {
        id: 'Tkt -0011',
        title: 'Billing issue - Double charge',
        description: 'I was charged twice for my subscription this month. Please refund the extra amount.',
        status: 'open',
        priority: 'medium',
        category: 'Billing',
        count: 1,
        time: '5 hours ago',
        comments: []
    },
    {
        id: 'Tkt -0012',
        title: 'How to change password?',
        description: 'I cannot find the option to change my account password in the profile settings.',
        status: 'resolved',
        priority: 'low',
        category: 'Account',
        count: 4,
        time: 'Yesterday',
        comments: []
    }
]
