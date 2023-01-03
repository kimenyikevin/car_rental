# TIP ME API
This File will help you get started with the TIP ME API.
## Getting Started
---
### dependency-installation

```bash
npm install  or yarn install
```
### environment-variables
>Create a .env.dev in the root directory and paste all the environment variables values as you see them in .env.example

### scripts

```bash
starting server: npm run start:dev or yarn run start:dev
```

### Development GuideLine and Tip
*We will be using ES6 syntax for the development.
*Each feature or bug fix shpuld be created in a new branch.
*Main branch should never be pushed into directly.
*Add a label stating if your PR is either a bug fix or a feature.
*You will need to ask for review before your codes get merged to master branch.
*We will be using mongoose for the development, no core mongodb will be used.
*Every Independent Entity should have it's own model,service,controller and route. ex:users,transactions,etc.
*You can't push codes with eslint errors and warning
*You can't push codes without updating swagger file with your new route or feature where necessary.
*In case you add new environment variables, you need to add it's name to .env.example file and send it in collaborating group chat.
*Use comments where you think your codes intent is not very clear.
*You can use the swagger.example.json file as an example for catching up purpose.
