export const swaggerDocument = {
  openapi: '3.0.0',
  info: {
    title: 'MyTop100Movies',
    description: 'MyTop100Movies - API, Database, CRUD - Application which lets users set their top 100 movies. Movies could come from an API like The Movie Database (). Should allow users to add a movie, list and rank their movie selections. Start with basic CRUD for movies and add features.',
    contact: {
      email: 'kalisangabokevin@gmail.com',
    },
    version: '1.0.0',
  },
  servers: [
    {
      url: '/',
    },
    {
      url: 'http://localhost:{port}',
      variables: {
        port: {
          default: '8080',
        },
      },
    },
  ],
  tags: [
    {
      name: 'Swagger Documentation for MyTop100Movies',
      description: 'CRUD endpoints for MyTop100Movies',
    },
    {
      name: 'Movies',
      description: 'Endpoints for fetching and getting movies',
    },
    {
      name: 'MovieList',
      description: 'Endpoints for fetching and getting movies list',
    },
    {
      name: 'Authentication',
      description: 'Endpoints for Authentications',
    },
  ],
  paths: {
    '/auth/login': {
      post: {
        tags: ['Authentication'],
        summary: 'Sign in Endpoint',
        operationId: 'login',
        requestBody: {
          description: 'signin credentials',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/login',
              },
            },
          },
          required: true,
        },
        responses: {
          '201': {
            description: 'Server is up',
          },
        },
      },
    },
    '/auth/signup': {
      post: {
        tags: ['Authentication'],
        summary: 'Sign up Endpoint',
        operationId: 'signup',
        requestBody: {
          description: 'signup credentials',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/signup',
              },
            },
          },
          required: true,
        },
        responses: {
          '201': {
            description: 'Signed up successfully',
          },
        },
      },
    },

    '/movies': {
      get: {
        tags: ['Movies'],
        summary: 'Endpoint for getting all movies',
        operationId: 'get-movies',
        securityShemes: {},
        responses: {
          '200': {
            description: 'Fetching movies successfully',
          },
          '404': {
            description: 'Endpoint is not found',
          },
        },
      },
    },
    '/movies/search': {
      get: {
        tags: ['Movies'],
        summary: 'Endpoint for searching movies by keywords',
        operationId: 'search-movies',
        parameters: [
          {
            name: 'keywords',
            in: 'query',
            description: 'Search keywords',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        securityShemes: {},
        responses: {
          '200': {
            description: 'User were fetched successfully',
          },
          '404': {
            description: 'Endpoint is not found',
          },
        },
      },
    },
    '/movies/{movieId}': {
      get: {
        tags: ['Movies'],
        summary: 'Endpoint for getting movie by id',
        operationId: 'get-users',
        parameters: [
          {
            name: 'movieId',
            in: 'path',
            description: 'Movie id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        securityShemes: {},
        responses: {
          '200': {
            description: 'User were fetched successfully',
          },
          '404': {
            description: 'Endpoint is not found',
          },
        },
      },
    },
    '/lists/': {
      post: {
        tags: ['MovieList'],
        summary: 'Endpoint for creating movie lisst',
        operationId: 'Create list',
        requestBody: {
          description: 'Login credentials',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/list',
              },
            },
          },
          required: true,
        },
        security: [
          {
            bearerToken: [],
          },
        ],
        responses: {
          '200': {
            description: 'Movie list created successfuly',
          },
          '400': {
            description: 'Invalid data were given',
          },
          '404': {
            description: 'Endpoint is not found',
          },
        },
      },
      get: {
        tags: ['MovieList'],
        summary: 'Endpoint for getting movie lists',
        operationId: 'get list',
        requestBody: {},
        security: [
          {
            bearerToken: [],
          },
        ],
        responses: {
          '200': {
            description: 'Movie list created successfuly',
          },
          '404': {
            description: 'Endpoint is not found',
          },
        },
      },
    },
    '/lists/{listId}': {
      post: {
        tags: ['MovieList'],
        summary: 'Endpoint for adding movie to list ',
        operationId: 'Add movie to a list',
        parameters: [
          {
            name: 'listId',
            in: 'path',
            description: 'List id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          description: 'Login credentials',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/movie',
              },
            },
          },
          required: true,
        },
        security: [
          {
            bearerToken: [],
          },
        ],
        responses: {
          '200': {
            description: 'Movie list created successfuly',
          },
          '400': {
            description: 'Invalid data were given',
          },
          '404': {
            description: 'Endpoint is not found',
          },
        },
      },
      get: {
        tags: ['MovieList'],
        summary: 'Endpoint for getting movies on lists',
        operationId: 'get list movies',
        requestBody: {},
        parameters: [
          {
            name: 'listId',
            in: 'path',
            description: 'List id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        security: [
          {
            bearerToken: [],
          },
        ],
        responses: {
          '200': {
            description: 'Movie list created successfuly',
          },
          '404': {
            description: 'Endpoint is not found',
          },
        },
      },
    },
    '/lists/{listId}/{movieId}': {
      patch: {
        tags: ['MovieList'],
        summary: 'Endpoint updating movie rank ',
        operationId: 'Update movie rank',
        parameters: [
          {
            name: 'listId',
            in: 'path',
            description: 'List id',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'movieId',
            in: 'path',
            description: 'Movie id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        requestBody: {
          description: 'Login credentials',
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/movieRank',
              },
            },
          },
          required: true,
        },
        security: [
          {
            bearerToken: [],
          },
        ],
        responses: {
          '200': {
            description: 'Movie rank updated successfully',
          },
          '400': {
            description: 'Invalid data were given',
          },
          '404': {
            description: 'Endpoint is not found',
          },
        },
      },
      delete: {
        tags: ['MovieList'],
        summary: 'Endpoint for removing movie lists',
        operationId: 'remove movie from list',
        requestBody: {},
        security: [
          {
            bearerToken: [],
          },
        ],
        parameters: [
          {
            name: 'listId',
            in: 'path',
            description: 'List id',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'movieId',
            in: 'path',
            description: 'Movie id',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {
          '200': {
            description: 'Movie deleted successfuly',
          },
          '404': {
            description: 'Endpoint is not found',
          },
        },
      },
    },
    '/sample': {
      get: {
        tags: ['Sample'],
        summary: 'endpoint to test if server is up',
        operationId: 'sample-get',
        responses: {
          '200': {
            description: 'Server is up',
          },
        },
      },
      post: {
        tags: ['Sample'],
        summary: 'endpoint to test if server is up',
        operationId: 'sample-post',
        responses: {
          '201': {
            description: 'Server is up',
          },
        },
      },
      put: {
        tags: ['Sample'],
        summary: 'endpoint to test if server is up',
        operationId: 'sample-put',
        responses: {
          '200': {
            description: 'Server is up',
          },
        },
      },
      patch: {
        tags: ['Sample'],
        summary: 'endpoint to test if server is up',
        operationId: 'sample-patch',
        responses: {
          '200': {
            description: 'Server is up',
          },
        },
      },
      delete: {
        tags: ['Sample'],
        summary: 'endpoint to test if server is up',
        operationId: 'sample-delete',
        responses: {
          '200': {
            description: 'Server is up',
          },
        },
      },
    },
  },
  components: {
    schemas: {
      login: {
        required: ['email', 'password'],
        type: 'object',
        properties: {
          email: {
            type: 'string',
          },
          password: {
            type: 'string',
          },
        },
        example: {
          email: 'johndoe@example.com',
          password: 'password',
        },
      },

      signup: {
        required: ['email', 'password', 'name'],
        type: 'object',
        properties: {
          email: {
            type: 'string',
          },
          password: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
        },
        example: {
          email: 'johndoe@example.com',
          password: 'password',
          name: 'John doe',
        },
      },
      list: {
        required: ['name'],
        type: 'object',
        properties: {
          name: {
            type: 'string',
          },
        },
        example: {
          name: 'My Top 100 Horror movie',
        },
      },
      movie: {
        required: ['movieId'],
        type: 'object',
        properties: {
          movieId: {
            type: 'number',
          },
        },
        example: {
          movieId: 646389,
        },
      },
      movieRank: {
        required: ['rank'],
        type: 'object',
        properties: {
          rank: {
            type: 'number',
          },
        },
        example: {
          rank: 1,
        },
      },
    },
    securitySchemes: {
      bearerToken: {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
    },
  },
};
