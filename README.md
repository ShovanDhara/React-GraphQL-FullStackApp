# React GraphQL Full Stack Application

This is a Full Stack application based on React, GraphQl where you can do Query, Mutation, Authentication, Sorting, Pagination, Filtering on a GraphQL database.
GraphQl Server is created using 'graphql-yoga' which is an Express JS based Node Server 

*Architecture
Here’s an overview of the architecture that’s used when building GraphQL servers with Prisma:

![](public/architecture.png)

The Prisma server provides the data access layer in your application architecture, making it easy for your API server to talk to the database through Prisma. The API of the Prisma server is consumed by the Prisma client inside your API server implementation (similar to an ORM). 

For installing packages inside server folder
```bash
npm install
```

Start Application Srver

```bash
http://localhost:4000/

```
Here you can write query and mutaions

install prisma globally
prisma deploy
First select the Demo server. When the browser opens, register with Prisma Cloud and go back to your terminal.

Then you need to select the region for your Demo server. Once that’s done, you can just hit enter twice to use the suggested values for service and stage.
Endpoint - https://eu1.prisma.sh/shovan9836/shovan_prisma/shovan_dev_prisma
then run - prisma generate


