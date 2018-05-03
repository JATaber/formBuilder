// Factory for building different input types
const inputFactory = (input) => {

    //is the array exists form the form
    if (input.type) {
        // Route input types to correct build method
        switch (input.type.toLowerCase()) {
            case 'select':
                // Check if name and options array or throw exception
                if (input.name && input.options && Array.isArray(input.options)) {
                    // Builds a string to return
                    let outputString = `<select name="${input.name}">`;

                    for (let i = 0; i < input.options.length; i++){
                        outputString += `<option value="${input.options[i].value}">${input.options[i].label}</option>`;
                    }

                    //close the select tag
                    outputString += '</select>';

                    //this labels the select element of the form
                    if (input.label){
                        outputString = `<label>${input.label} ${outputString}</label>`;
                    }

                    outputString = `${outputString}`;

                    return outputString;
                }else{
                    //this displays the error that is thrown
                    return error('The select inputs require a name string and options array.', [input.name, input.options]);
                }
                break;

            case 'label':
                // Check if value or throw exception
                if (input.value){
                    return `<label>${input.value}</label>`;
                }else{
                    return error('The label inputs require a value string.', input.value);
                }
                break;

            case 'reset':
                if(input.type === 'reset'){
                    return `<input type="${input.type}" value="${input.value}">`;
                }else{
                    return error(`The ${input.type} inputs require a value string`, input.value);
                }
                break;

            case 'submit':
                if(input.type === 'submit'){
                    return `<input type="${input.type}" value="${input.value}">`
                }else{
                    return error(`The ${input.type} inputs require a value string`, input.value);
                }
                break;

            default:
                if (input.name){

                    // Builds a input string to return
                    let outputString = `<input type="${input.type}" name="${input.name}"`;

                    //checks to see if a value has been entered and
                    if (input.value){
                        outputString += ` value="${input.value}"/>`;
                    }else{
                        //this closes the input field
                        outputString += ' />';
                    }

                    if (input.label){
                        outputString = `<label>${input.label} ${outputString}</label>`;
                    }

                    return outputString;
                }else{
                    return error(`The ${input.type} inputs require a value string`, input.value);
                }
        }
    }

    return error('You must supply a valid input type.', input.type);
};

// Error message template that will
const error = (message, value) => {
    throw new Error(`FormBuilder - ${message}\nYour input:\n${value}`);
};

// Main function to build the complete form
module.exports.buildForm = (inputs, action = false, method = 'GET') => {

    // create a variable to build the form string
    let outputString = '<form';

    //this checks to see if an action was set
    if (action){
        outputString += ` action="${action}"`;
    }

    //this checks to see if a method was set
    if(method){
        outputString += ` method="${method}">`;
    }

    // Check if inputs variable is an array or throw exception
    if (inputs && Array.isArray(inputs)) {

        // Iterate through each input
        outputString += inputs.map(inputFactory).join('\n');
    } else {
        error('You must supply a valid array of inputs.', inputs); // Custom error method included
    }

    outputString += '</form>';

    console.log(outputString);

    return outputString;
};