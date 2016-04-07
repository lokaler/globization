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
