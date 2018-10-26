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
    if (node.current) {
      observer.observe(node.current);
    }

    return function cleanup() {
      observer.unobserve(node.current);
    };
  });

  return visible;
}

module.exports = useVisibility;
