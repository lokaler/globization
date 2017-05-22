import url from 'url';
import { fromPairs } from 'lodash';

export function createLogbuchEntry(questions){
  const card = questions.cards[questions.activeCard];

  const inputs = card.content
    .filter(widget => 'input' in widget)
    .map(widget => widget.input)
    .map(widget => ([ widget.key, questions.inputValues[widget.key] ]))

  upload({
    ...fromPairs(inputs),
    round: questions.activeQuestionnaireId
  });
}

function upload(query) {

  const apiEndpoint = `https://uebermorgen-logbuch.lokaler.de${ url.format({ query }) }`;

  const request = new Request(apiEndpoint, {
    method: 'POST',
    mode: 'no-cors'
  });
  fetch(request);

  // fetch('https://uebermorgen-logbuch.lokaler.de')
  //   .then(response => {
  //     response.json().then(json => {
  //       console.log(json);
  //     });
  //   });
}
