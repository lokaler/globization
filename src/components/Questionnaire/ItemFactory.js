import React from 'react';

import Text from './widgets/Text';
import Slider from './widgets/Slider';
import Choices from './widgets/Choices';
import Answer from './widgets/Answer';

const widgets = {
  text: React.createFactory(Text),
  slider: React.createFactory(Slider),
  choices: React.createFactory(Choices),
  answer: React.createFactory(Answer)
};

export function create(item, index) {
  if (item.type === 'functions') {
    return '';
  }

  return widgets[item.type]({ data: item.data, key: `{item.type}_${index}` });
}
