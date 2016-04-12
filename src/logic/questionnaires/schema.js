function string(schema = {}) {
  return Object.assign({ type: 'string' }, schema);
}

function object(schema = {}) {
  return Object.assign({ type: 'object' }, schema);
}

function array(schema = {}) {
  return Object.assign({ type: 'array' }, schema);
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
    required: ['title', 'content'],
    properties: {
      title: string(),
      dataset: string(),
      content: array({
        items: object({
          oneOf: [
            contentPart('text'),
            contentPart('input'),
            contentPart('answer'),
            contentPart('answerQuiz')
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
  })),

  answerQuiz: contentPart('answerQuiz', object({
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
        patternProperties: { '.*': multiLangArrayOfStrings }
      }
    }
  }))

};
