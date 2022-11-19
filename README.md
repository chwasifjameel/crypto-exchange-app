# Crypto Exchange App Details

## Assumptions made
I have made some assumptions while attempting this task which are as follow

1. The excat icons are not needed to be export and placed. You can use similar icons from npm libraries
1. The mobile and tablet versions can be designed as per your understanding
1. A random crypto endpoint can be used if the exact endpoint is not found. (I tried reaching out to Mariano to clarify but he was not available. If you think it's important, I can change that after clarification).
1. Redux/Context are not required as application is not too big at this stage
1. As provided API does not support pagniation so I can use my local logic for that. However, best way for pagination is to be done on server side.
1. Table sorting is just for design indication, it does not need to be implemented as most of the stuff on page is static.

**Question asked to Mariano regarding point # 3**

`While working on the task, I happened to encounter a question can you please get that addressed?`

`The task says to list the balance of the pool. In contrast, there is no endpoint that directly lists such information. Will it be a combination of endpoints or not? I couldn't find any endpoint which lists information exactly like the table header. Maybe the table headers are just for reference?`

`If you could answer these questions for me, it would be much appreciated.`


## Things I kept in mind while coding
I addressed the following things while coding

1. Strong typeing accross all components
2. Making components to be resuable
3. Linting of code and standard with (ESLint, Husky)
4. Responsive and milimal design with TailwindCSS
5. Eliminating console error & warnings
