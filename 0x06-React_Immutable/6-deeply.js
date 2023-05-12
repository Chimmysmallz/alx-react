import { Map } from 'immutable';

function mergeDeeplyElements(page1, page2) {
  const mergeDeeply = (a, b) => {
    return Map(a).mergeWith(mergeDeeply, b);
  }
  return Map(page1).mergeWith(mergeDeeply, page2);
}

export default mergeDeeplyElements;
