const test = require('ava');
const { createElement: h } = require('react');
const ReactTestRenderer = require('react-test-renderer');
const sinon = require('sinon');
const useVisibilty = require('../src/index');

function render(val) {
  return ReactTestRenderer.create(val).toJSON();
}

test(t => {
  const ref = { current: 'ref' };
  global.IntersectionObserver = sinon.spy();
  function Component() {
    return JSON.stringify(useVisibilty(ref));
  }
  render(h(Component));

  t.true(global.IntersectionObserver.called);
});
