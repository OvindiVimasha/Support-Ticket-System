export const MOCK_USER = {
    id: 'user_01',
    name: 'Poppy Wright',
    email: 'poppywright@gmail.com',
    role: 'USER',
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
        description: 'I was charged twice for my subscription this month. Please refund the extra amount. I noticed two separate entries in my bank statement for the same transaction ID.',
        status: 'open',
        priority: 'medium',
        category: 'Billing',
        count: 1,
        time: '5 hours ago',
        comments: [
            {
                id: 'c3',
                author: 'Finance Team',
                content: 'We noticed the duplicate transaction. Our team is processing the refund now. It should reflect in your account within 3-5 business days.',
                time: 'Jan 17, 2026 10:30 AM',
                avatar: 'FT',
                isAgent: true
            }
        ]
    },
    {
        id: 'Tkt -0012',
        title: 'How to change password?',
        description: 'I cannot find the option to change my account password in the profile settings. I have looked through the entire settings page but the security tab seems to be missing.',
        status: 'resolved',
        priority: 'low',
        category: 'Account',
        count: 2,
        time: 'Yesterday',
        comments: [
            {
                id: 'c4',
                author: 'Support Agent',
                content: 'You can change your password by going to Profile > Security > Change Password. I have attached a guide link below.',
                time: 'Jan 17, 2026 02:00 PM',
                avatar: 'SA',
                isAgent: true
            },
            {
                id: 'c5',
                author: 'Poppy Wright',
                content: 'Found it! Thank you for the quick help.',
                time: 'Jan 17, 2026 03:30 PM',
                avatar: 'PW',
                isAgent: false
            }
        ]
    }
]
