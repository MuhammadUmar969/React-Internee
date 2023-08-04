export const questions = [
    {
        questionText: "What does React use to manage state within components?",
        answers: [
            {
                answerText: "setState()",
                correctAnswer : true,
            },
            {
                answerText: " updateState()",
                correctAnswer : false,
            },
            {
                answerText: "this.state()",
                correctAnswer : false,
            },
            {
                answerText: "stateChange()",
                correctAnswer : false,
            },
        ],
    },
    {
        questionText: "In React, what is the significance of the 'render' method?",
        answers: [
            {
                answerText: " It updates the component's state.",
                correctAnswer : false,
            },
            {
                answerText: " It renders the component's JSX to the DOM.",
                correctAnswer : true,
            },
            {
                answerText: "It handles asynchronous API calls.",
                correctAnswer : false,
            },
            {
                answerText: " It manages component lifecycle events.",
                correctAnswer : false,
            },
        ],
    },
    {
        questionText: "Which lifecycle method is called just before a component is removed from the DOM?",
        answers: [
            {
                answerText: "componentWillUnmount",
                correctAnswer : true,
            },
            {
                answerText: " componentWillUnmounted",
                correctAnswer : false,
            },
            {
                answerText: "removeComponent",
                correctAnswer : false,
            },
            {
                answerText: "willUnmount",
                correctAnswer : false,
            },
        ],
    },
    {
        questionText: "What is the purpose of 'props' in React?",
        answers: [
            {
                answerText: "It holds the component's local state.",
                correctAnswer : false,
            },
            {
                answerText: " It allows components to communicate with each other.",
                correctAnswer : true,
            },
            {
                answerText: " It handles CSS styles for components.",
                correctAnswer : false,
            },
            {
                answerText: "It is used for React router configuration.",
                correctAnswer : false,
            },
        ],
    },
    {
        questionText: "In React, what is the recommended way to handle forms and user input?",
        answers : [
            {
                answerText: "Using the input' event",
                correctAnswer :false,
            },
            {
                answerText: "Using the 'submit' event",
                correctAnswer : false,
            },
            {
                answerText: "Using the change' event",
                correctAnswer : true,
            },
            {
                answerText: " Using the 'form' event",
                correctAnswer : false,
            },
        ],
    },
    {
        questionText: "Which method is used to create a new React element in JSX?",
        answers : [
            {
                answerText: "React.createElement()",
                correctAnswer : true,
            },
            {
                answerText: "JSX.createElement()",
                correctAnswer : false,
            },
            {
                answerText: "createElement()",
                correctAnswer : false,
            },
            {
                answerText: "newElement()",
                correctAnswer : false,
            },
        ],
    },
    {
        questionText: "What does 'JSX' stand for in React?",
        answers : [
            {
                answerText: "Java Syntax XML",
                correctAnswer : false,
            },
            {
                answerText: "JavaScript EXtension",
                correctAnswer : false,
            },
            {
                answerText: "Java Server Xhtml",
                correctAnswer : false,
            },
            {
                answerText: "JavaScript XML",
                correctAnswer : true,
            },
        ],
    },
    {
        questionText: "What is the purpose of 'keys' in React lists?",
        answers : [
            {
                answerText: "To add styles to list items.",
                correctAnswer :false ,
            },
            {
                answerText: "To control the order of list items.",
                correctAnswer : false,
            },
            {
                answerText: "To uniquely identify elements in the DOM.",
                correctAnswer : true,
            },
            {
                answerText: "To set a unique ID for the list component.",
                correctAnswer : false,
            },
        ],
    },
    {
        questionText: "In React, what is the role of the 'shouldComponentUpdate' method?",
        answers : [
            {
                answerText: "To force a component to update.",
                correctAnswer :false,
            },
            {
                answerText: "To check if the component should be updated or not.",
                correctAnswer : true,
            },
            {
                answerText: "To handle errors in the component.",
                correctAnswer : false,
            },
            {
                answerText: "To check the component's initial state.",
                correctAnswer : false,
            },
        ],
    },
    {
        questionText: "What is the purpose of 'refs' in React?",
        answers : [
            {
                answerText: "To reference external libraries in the component.",
                correctAnswer : false,
            },
            {
                answerText: "To create references to DOM elements or React components.",
                correctAnswer : true,
            },
            {
                answerText: " To store the component's props.",
                correctAnswer : false,
            },
            {
                answerText: "To manage component hierarchy.",
                correctAnswer : false,
            },
        ],
    }
];