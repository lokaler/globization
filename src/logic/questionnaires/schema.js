function string(schema = {}) {
  return { type: 'string', ...schema };
}

function object(schema = {}) {
  return {
    type: 'object',
    ...schema,
    patternProperties: {
      '^//.*': {}
      // ...(schema.patternProperties || {})
    }
  };
}

function array(schema = {}) {
  return { type: 'array', ...schema };
}

function contentPart(key, schema = {}) {
  return {
    $schema: 'http://json-schema.org/draft-04/schema#',
    required: [key],
    additionalProperties: false,
    properties: { [key]: schema }
  };
}

export const questionnaire = array({

  $schema: 'http://json-schema.org/draft-04/schema#',

  items: object({
    additionalProperties: false,
    required: ['key', 'title', 'content'],
    properties: {
      key: string(),
      title: string(),
      dataset: string(),
      view: string(),
      content: array({
        items: object({
          oneOf: [
            contentPart('text'),
            contentPart('input'),
            contentPart('answer')
          ]
        })
      })
    }
  })
});

const arrayOfStrings = array({ items: string() });
const multiLangArrayOfStrings = object({
  required: ['de', 'en'],
  additionalProperties: false,
  properties: {
    action: string(),
    de: arrayOfStrings,
    en: arrayOfStrings
  }
});

export const widgets = {

  text: contentPart('text', multiLangArrayOfStrings),

  input: contentPart('input', object({
    required: ['key', 'type', 'options'],
    properties: {
      key: string(),
      type: { enum: ['slider', 'choices'] },
      options: { type: 'object' }
    }
  })),

  answer: contentPart('answer', object({
    required: ['templates'],
    additionalProperties: false,
    properties: {
      className: { enum: ['tip'] },
      answerKey: array(),
      answerContext: object({
        patternProperties: { '.*': string() }
      }),
      templates: {
        patternProperties: { '.*': multiLangArrayOfStrings }
      }
    }
  }))
};
