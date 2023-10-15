import { FaqProps } from "./types";

export const RequireProps = {
    queries: [{
        title: '',
        description: ''
    }, 4],
    title: '',
    description: '',
    contactLink: ''
}

export const data: FaqProps = {
    title: 'Questions & Answers',
    description: "Explore the common questions and answers about Celebration",
    queries: [
        {
            title: 'How to create an account?',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
        {
            title: 'How can I make payment?',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
        {
            title: 'Do you provide discounts?',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
        {
            title: 'How do you provide support?',
            description: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.'
        },
    ],
    contactLink: "#"
}