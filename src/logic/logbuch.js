import url from 'url';
import store from '../store';

export function logbuch(payload) {
  const params = {
    ...payload,
    round: store.getState().master.round
  };

  const apiEndpoint = `https://uebermorgen-logbuch.lokaler.de${ url.format({ query: params }) }`;

  fetch(apiEndpoint, { method: 'POST' })
  .catch(error => {
    console.error(error); // eslint-disable-line no-console
  });
}
