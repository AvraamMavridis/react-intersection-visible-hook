const { useRef, useState, useEffect, useMemo } = require('react');
require('intersection-observer');

/**
 * Visibility hook for functional components
 *
 * @export
 * @param {DOMNode reference} node
 * @param {Object} [options={}]
 * @returns {object} visibility
 */
const EMPTY = {}

function useVisibility(node, options = EMPTY) {
  const [ visible, setVisibilty ] = useState({});
  const isIntersecting = useRef();

  const handleObserverUpdate = (entries) => {
    const ent = entries[0];

    if (isIntersecting.current !== ent.isIntersecting) {
      setVisibilty(ent);
      isIntersecting.current = ent.isIntersecting;
    }
  };

  const observer = useMemo(
    () => new IntersectionObserver(handleObserverUpdate, options),
    [options]
  );

  useEffect(() => {
    if (!node.current) {
      return;
    }
    
    observer.observe(node.current);

    return function cleanup() {
      observer.unobserve(node.current);
    };
  }, [node.current, observer]);

  return visible;
}

module.exports = useVisibility;
