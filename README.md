# formBuilder

An easy way to dynamically load a HTML form using Node.

## Quick Start Guide

This will help you load and test the code

### Installation

Clone the codebase locally

`git clone https://github.com/JATaber/formBuilder.git`

Install the packages

`npm install`

## Testing the code

`node src/index.js`

### Allowed inputs

* Select
* Submit
* Label
* Reset
* Email
* Text
* Password

### Input Examples

#### Select Input
```
{type: 'select', label: 'Gender', name: 'gender', options: [
        {value: 'male', label: 'Male'},
        {value: 'female', label: 'Female'}
 ]}

```
#### Output
```
<select name="gender">
<option value="male">Male</option>
<option value="female">Female</option>
</select>
```
#### Label & Text Input
```
{type: 'text', label: 'First Name', name: 'firstName', value: 'Enter your first name' }
```
#### Output
```
<label>Last Name <input type="text" name="lastName" value="Enter your last name"/></label>
```
#### Submit Input
```
{type: 'submit', value: 'Submit'}
```
#### Output
```
<input type="submit" value="Submit">
```
#### Reset Input
```
{type: 'reset', value: 'Reset'}
```
#### Output
```
<input type="reset" value="Reset">
```
#### Output
```
<input type="submit" value="Submit">
```
#### Email Input
```
{type: 'text', label: 'Last Name', name: 'lastName', value: 'Enter your last name'}
```
#### Output
```
<label>Email <input type="email" name="email" value="Enter your email"/></label>
```
