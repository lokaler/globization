function string(schema = {}) {
  return Object.assign({ type: 'string' }, schema);
}

function object(schema = {}) {
  return Object.assign({ type: 'object' }, schema);
}

function array(schema = {}) {
  return Object.assign({ type: 'array' }, schema);
}

function ref(definition) {
  return {
    $ref: `#/definitions/${ definition }`
  };
}

export default {

  $schema: 'http://json-schema.org/draft-04/schema#',

  definitions: {

    arrayOfStrings: array({ items: string() }),

    text: {
      required: ['text'],
      properties: {
        text: ref('arrayOfStrings')
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
            options: { type: 'object' }
          }
        })
      }
    },

    answer: {
      required: ['answer'],
      properties: {
        answer: object({
          properties: {

            answerKey: ref('arrayOfStrings'),

            answerContext: object({
              patternProperties: {
                '.*': string()
              }
            }),

            templates: {
              patternProperties: {
                '.*': ref('arrayOfStrings')
              }
            }

          }
        })
      }
    },

    card: array({
      items: object({
        oneOf: [
          ref('text'),
          ref('input'),
          ref('answer')
        ]
      })
    })
  },

  type: 'array',
  items: object({
    required: ['title', 'content'],
    properties: {
      title: string(),
      dataset: string(),
      functions: ref('arrayOfStrings'),
      content: ref('card')
    }
  })
};
