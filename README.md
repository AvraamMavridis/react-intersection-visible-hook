# react-intersection-visible-hook

React hook to track the visibility of a functional component based on IntersectionVisible Observer.

In the following example we changed the background color of the body depending on the visibility of the blue box.

<img src="https://github.com/AvraamMavridis/react-intersection-visible-hook/blob/master/demo_gif.gif?raw=true" />

*Demo and tests are coming*

```
import useVisibility from 'react-intersection-visible-hook'
```

### How to use it

```js
function App() {
  const nodeRef = useRef(null);
  const visibility = useVisibility(nodeRef);

  return (
    <div className="App" ref={nodeRef}>
      <h1>Hello</h1>
    </div>
  );
}
```

##### With options

```js
const options = {
  root: document.querySelector('#scrollArea'),
  rootMargin: '0px',
  threshold: 1.0
}

function App() {
  const nodeRef = useRef(null);
  const visibility = useVisibility(nodeRef, options);

  return (
    <div className="App" ref={nodeRef}>
      <h1>Hello</h1>
      <h2>{visibility.isIntersecting ?  'Component is visible' : 'Component is hidden' }</h2>
    </div>
  );
}
```

The `visibility` object contains

```
boundingClientRect
intersectionRatio
intersectionRect
isIntersecting
rootBounds
target
time
```


### Contribute

Any pull-request is more than welcome :boom: :smile:

### License

MIT

