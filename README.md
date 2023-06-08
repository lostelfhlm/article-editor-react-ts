# ArticleEditor

### 

![screenshot](/public/screenshot.png)

- [About](#about)
- [How To Run Locally](#how-to-run-locally)

## About
This is a articleEditor web application used with React and TypeScript.
It can edit article title ,body and get,add, update, delete article from backend api.

1. Using packages:

@typescript-eslint/parser
When working on a TypeScript project, using @typescript-eslint/parser is benefit from the TypeScript type checking and analysis capabilities while linting  code. 

@types/axios
it could improves code quality, reduces errors, and enhances the development experience when working with Axios in a TypeScript project.

2. Structure

react-ts

     src

    assets              ... Store images and icon
        icon
        
    Component           ... Components of pages
        Article
        Common
        
    Controller          ... The controller component contains logic and  the flow of data between the model and the view.
    
    Model               ... Managing the application's state and data, such as api.
    
    Page                ... Display pages with multiple view, if there are other pages exist, Rect Router is needed.
    
    Style               ... The css style of each component.
    
    View                ... Displaying the data to the user and handling user interactions.


## How To Run Locally

1. Clone this repo

2. Run yarn install

3. Install all the dependencies

```

yarn install

```

4. Run yarn start

```

yarn start

```
