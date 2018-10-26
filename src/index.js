export function useVisibility(node, options = {}) {

  const [visible, setVisibilty] = useState(false);

  const handleObserverUpdate = (entries) => {
    console.log(entries);
    // setVisibilty(entries)
  }

  const observer = new IntersectionObserver(handleObserverUpdate, options)

  useEffect(() => {
    if(node.current){
      observer.observe(node.current);
    }

    return function cleanup() {
      observer.unobserve();
    };
  });

  return visible;
}
