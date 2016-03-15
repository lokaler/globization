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
      additionalProperties: false,
      properties: {
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
        properties: {
          answerKey: ref('arrayOfStrings'),
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
