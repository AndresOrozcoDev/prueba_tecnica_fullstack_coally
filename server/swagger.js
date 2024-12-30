const swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.1.0',
    info: {
      title: 'ExpressJS',
      version: '0.1.0',
      description: 'HTTP services.',
      contact: {
        name: 'Andres Orozco',
        url: 'https://github.com/AndresOrozcoDev',
        email: 'andres.orozco.dev@gmail.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000',
        description: 'Local server',
      },
    ],
    tags: [
      {
        name: 'Tasks',
        description: 'Endpoints for managing tasks',
      }
    ],
    components: {
      schemas: {
        Task: {
          type: 'object',
          properties: {
            id: {
              type: 'string',
              description: 'Unique identifier for the task',
            },
            title: {
              type: 'string',
              description: 'Title of the task',
            },
            description: {
              type: 'string',
              description: 'Description of the task',
            },
            completed: {
              type: 'boolean',
              description: 'Completion status of the task',
            },
            createdAt: {
              type: 'string',
              format: 'date-time',
              description: 'Date and time when the task was created',
            },
          },
          required: ['title'],
        },
      },
    },
  },
  apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);

module.exports = swaggerDocs;
