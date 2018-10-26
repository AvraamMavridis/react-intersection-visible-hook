import React, { useRef } from 'react';
import { mount } from 'enzyme';
import useVisibility from '../src';

// To be added, currently React reports `Invariant Violation: Hooks can only be called inside the body of a function component.`

// function App() {
//   const nodeRef = useRef(null);
//   const visibility = useVisibility();

//   return (
//     <div className="App">
//       <h1>Hello</h1>
//       <h2>{visibility.isIntersecting ? 'visible' : 'not visible' }</h2>
//     </div>
//   );
// }

// describe('useVisibility', () => {
//   let wrapper;

//   beforeEach(() => {
//     wrapper = mount(<App />);
//   });

//   it('should return state', () => {
//     expect(App).toBe(3);
//   });
// });
