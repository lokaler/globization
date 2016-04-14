import url from 'url';
import store from 'store';

export function logbuch(payload) {
  const params = {
    ...payload,
    round: store.getState().questions.activeQuestionnaireId
  };

  const apiEndpoint = `https://uebermorgen-logbuch.lokaler.de${ url.format({ query: params }) }`;

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
