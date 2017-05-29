const CHANGE_VIS = 'CHANGE_VIS';
const ZOOM_TO_COUNTRY = 'ZOOM_TO_COUNTRY';

const initialState = {
  debug: false,
  mapData: [],
  latlng: [0, 0],
  paths: [],
  initialScale: 300,
  scale: 300,
  zoom: 1,
  rotate: [0, 0],
  translate: [0, 0],
  type: 'globe',
  animation: null,
  active: null,
  tooltip: {
    active: false,
    text: 'Testtooltip',
    x: 200,
    y: 200
  }
};

export function reducer(state = initialState, action) {
  switch (action.type) {

    case CHANGE_VIS:
      return {
        ...state,
        ...action.val
      };

    case ZOOM_TO_COUNTRY:
      return {
        ...state,
        animation: {
          ...state.animation,
          action: 'zoomToCountry',
          payload: action.isoCode
        },
        active: action.isoCode,
        tooltip: { active: false }
      };

    default:
      return state;
  }
}

export const actions = {
  zoomToCountry: (isoCode) => (
    { type: ZOOM_TO_COUNTRY, isoCode }
  ),
  changeVis: (val) => (
    { type: CHANGE_VIS, val }
  )
};
