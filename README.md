# React GraphQL Full Stack Application

This is a Full Stack application based on React, GraphQl where you can do Query, Mutation, Authentication, Sorting, Pagination, Filtering on a GraphQL database.
GraphQl Server is created using 'graphql-yoga' which is an Express JS based Node Server. The application also implements some error handling best practices. 

## Architecture
Here’s an overview of the architecture that’s used when building GraphQL servers with Prisma:

![](public/architecture.png)

The Prisma server provides the data access layer in your application architecture, making it easy for your API server to talk to the database through Prisma. The API of the Prisma server is consumed by the Prisma client inside your API server implementation (similar to an ORM). 

Install prisma globally and run generate command for generating prisma datamodel files
First select the Demo server. When the browser opens, register with Prisma Cloud and go back to your terminal.
```bash
prisma generate
prisma deploy
```
### Sample Endpoint - https://eu1.prisma.sh/shovan9836/shovan_prisma/shovan_dev_prisma

## Application Instruction
For installing packages inside server folder
```bash
npm install
```

Start Application Server

```bash
http://localhost:4000/

```
Here you can write query and mutaions
Sample query and mutations - 
```bash
mutation {
  post(
    url: "www.graphqlconf.org"
    description: "An awesome GraphQL conference"
  ) {
    id
  }
}

mutation {
  login(
    email: "shovan.dhara@gmail.com"
    password: "Cancer2233!"
  ) {
    token
    user {
      email
      links {
        url
        description
      }
    }
  }
}

subscription {
  newVote {
    id
    link {
      url
      description
    }
    user {
      name
      email
    }
  }
}

query {
  feed(filter:"QL") {
    id
  	description
    url
    postedBy {
      id
      name
    }
  }
}

query {
  feed(filter:"Pr") {
    count
    links {
      id
      description
      url
    }
  }
}
```
## Client Side Flow
The client side of this application is build upon React using Apollo Client for GraphQL Connection
In root level run
```bash
npm install
npm start
```

*Point to localhost:3000 in your favorite browser*

