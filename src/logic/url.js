export function getQueryVariable(variable) {
  const query = window.location.search.substring(1);
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
    const [name, value] = vars[i].split('=');
    if (decodeURIComponent(name) === variable) {
      return decodeURIComponent(value);
    }
  }
}
