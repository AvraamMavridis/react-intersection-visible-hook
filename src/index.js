const { useRef, useState, useEffect } = require('react');
require('intersection-observer');

/**
 * Visibility hook for functional components
 *
 * @export
 * @param {DOMNode reference} node
 * @param {Object} [options={}]
 * @returns {object} visibility
 */
function useVisibility(node, options = {}) {
  const [ visible, setVisibilty ] = useState({});
  const isIntersecting = useRef();

  const handleObserverUpdate = (entries) => {
    const ent = entries[0];

    if (isIntersecting.current !== ent.isIntersecting) {
      setVisibilty(ent);
      isIntersecting.current = ent.isIntersecting;
    }
  };

  const observer = new IntersectionObserver(handleObserverUpdate, options);

  useEffect(() => {
    const element = node.current;

    if (!element) {
      return;
    }

    observer.observe(element);

    return function cleanup() {
      observer.unobserve(element);
    };
  });

  return visible;
}

module.exports = useVisibility;
