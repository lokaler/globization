function buildType(type) {
  return (schema = {}) => Object.assign({ type }, schema);
}

const object = buildType('string');
const array = buildType('array');
const string = buildType('string');

export default {

  $schema: 'http://json-schema.org/draft-04/schema#',

  definitions: {

    arrayOfStrings: array({
      items: string()
    }),

    functions: {
      required: ['functions'],
      properties: {
        functions: {
          $ref: '#/definitions/arrayOfStrings'
        }
      }
    },

    text: {
      required: ['text'],
      properties: {
        text: {
          $ref: '#/definitions/arrayOfStrings'
        }
      }
    },

    input: {
      required: ['input'],
      properties: {
        input: object({
          required: ['key', 'type', 'options'],
          properties: {
            key: string(),
            type: { enum: ['slider', 'choices'] },
            options: object()
          }
        })
      }
    },

    answer: {
      required: ['answer'],
      properties: {
        answer: object({
          properties: {

            answerKey: {
              $ref: '#/definitions/arrayOfStrings'
            },

            answerContext: object({
              patternProperties: {
                '.*': string()
              }
            }),

            templates: object({
              patternProperties: {
                '.*': {
                  $ref: '#/definitions/arrayOfStrings'
                }
              }
            })

          }
        })
      }
    },

    card: array({
      items: object({
        oneOf: [
          { $ref: '#/definitions/functions' },
          { $ref: '#/definitions/text' },
          { $ref: '#/definitions/input' },
          { $ref: '#/definitions/answer' }
        ]
      })
    })
  },

  type: 'array',
  items: object({
    required: ['title', 'content'],
    properties: {
      title: string(),
      content: {
        $ref: '#/definitions/card'
      }
    }
  })

};
