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

const nullOrString = { type: ['null', 'string'] };

export const questionnaire = array({

  $schema: 'http://json-schema.org/draft-04/schema#',

  items: object({
    additionalProperties: true,
    required: ['key', 'title', 'content'],
    properties: {
      key: string(),
      title: string(),
      dataset: nullOrString,
      view: nullOrString,
      content: array({
        items: object({
          oneOf: [
            contentPart('text'),
            contentPart('input'),
            contentPart('submit'),
            contentPart('answer'),
            contentPart('roundChooser'),
            contentPart('datasetMenu')
          ]
        })
      })
    }
  })
});

export const widgets = {

  text: multiLangArrayOfStrings,

  input: object({
    required: ['key', 'type', 'options'],
    properties: {
      key: string(),
      type: { enum: ['slider', 'choices'] },
      options: { type: 'object' }
    }
  }),

  submit: object({
    required: ['key'],
    additionalProperties: false,
    properties: {
      key: string()
    }
  }),

  answer: object({
    required: ['templates'],
    additionalProperties: true,
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
  }),

  roundChooser: { enum: [true] },

  datasetMenu: { enum: [true] }

};
