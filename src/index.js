const formBuilder = require('./builderTool');

const input = [
    {type: 'text', label: 'First Name', name: 'firstName', value: 'Enter your first name' },
    {type: 'text', label: 'Last Name', name: 'lastName', value: 'Enter your last name'},
    {type: 'email', label: 'Email', name: 'email', value: 'Enter your email'},
    {type: 'password', label: 'Password', name: 'password', value: 'Enter your password'},
    {type: 'select', label: 'Gender', name: 'gender', options: [
        {value: 'male', label: 'Male'},
        {value: 'female', label: 'Female'}
    ]},
    {type: 'submit', value: 'Submit'},
    {type: 'reset', value: 'Reset'}
];

const form = formBuilder.buildForm(input, 'james', 'POST');

