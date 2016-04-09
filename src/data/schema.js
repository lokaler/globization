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

function contentPart(key, schema) {
  return {
    required: [key],
    additionalProperties: false,
    properties: {
      [key]: schema
    }
  };
}

export default {

  $schema: 'http://json-schema.org/draft-04/schema#',

  definitions: {

    arrayOfStrings: array({ items: string() }),

    multiLangArrayOfStrings: object({
      required: ['de', 'en'],
      additionalProperties: true,
      properties: {
        action: string(),
        de: ref('arrayOfStrings'),
        en: ref('arrayOfStrings')
      }
    }),

    text: contentPart(
      'text',
      ref('multiLangArrayOfStrings')
    ),

    input: contentPart(
      'input',
      object({
        required: ['key', 'type', 'options'],
        properties: {
          key: string(),
          type: { enum: ['slider', 'choices'] },
          options: { type: 'object' }
        }
      })
    ),

    answer: contentPart(
      'answer',
      object({
        required: ['templates'],
        additionalProperties: false,
        properties: {
          className: { enum: ['tip'] },
          answerKey: array(),
          answerContext: object({
            patternProperties: { '.*': string() }
          }),
          templates: {
            patternProperties: { '.*': ref('multiLangArrayOfStrings') }
          }
        }
      })
    ),

    answerQuiz: contentPart(
      'answerQuiz',
      object({
        required: ['templates', 'key'],
        additionalProperties: false,
        properties: {
          key: string(),
          actions: array(),
          className: { enum: ['tip'] },
          answerKey: array(),
          answerContext: object({
            patternProperties: { '.*': string() }
          }),
          templates: {
            patternProperties: { '.*': ref('multiLangArrayOfStrings') }
          }
        }
      })
    ),

    card: array({
      items: object({
        oneOf: [
          ref('text'),
          ref('input'),
          ref('answer'),
          ref('answerQuiz')
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
