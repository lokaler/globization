export function sponLogger() {
  try {
    const sponFrame = window.parent.$ || false;
    // console.log('logger', sponFrame);
    if (sponFrame) {
      sponFrame().spInterface('reCountPage',
        { countIVW: true, newParamsOnly: false, params: null });
    }
  } catch (e) {
    // console.log('can not log');
  }
}

export function googleLogger(action, value = 1) {
  console.log('log', action, value);
  try {
    const ga = window.parent.ga;
    if (ga) {
      ga('send', 'event', 'ddj-inpage', action, 'uebermorgen', value);
    }
  } catch (e) {
    // console.log('can not log');
  }
}
