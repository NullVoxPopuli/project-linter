# Project Linter

Define a schema for enforcing structure within your project.
Enforce consistency while trying to figure out what works best for your team.

This works by using Abstract Syntax Trees (ASTs) to identify file types, 
defined by you, categorize them, and then validation their location against 
the schema.

## Install

```bash
npm install project-linter
# or
yarn add project-linter
```

## Usage

```js
// .project-lintrc.js
module.exports = {
  categories: {
    componentJs: require('./...)
    component: ['single-file-component', 'multi-file-component']
    componentFolder: {

    }
  }
}

```
