import{U as i,s as t,L as s,u as r,j as e}from"./index-9ec6e13a.js";import{G as a}from"./iconBase-325a8da0.js";function c(n){return a({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M217 28.098v455.804l142-42.597V70.697zm159.938 26.88l.062 2.327V87h16V55zM119 55v117.27h18V73h62V55zm258 50v16h16v-16zm0 34v236h16V139zm-240 58.727V233H41v46h96v35.273L195.273 256zM244 232c6.627 0 12 10.745 12 24s-5.373 24-12 24-12-10.745-12-24 5.373-24 12-24zM137 339.73h-18V448h18zM377 393v14h16v-14zm0 32v23h16v-23zM32 471v18h167v-18zm290.652 0l-60 18H480v-18z"}}]})(n)}const f="/tweet-cards/assets/peakpx-087a87e3.jpg",o=i`
  0% {
    opacity: 0.1;
  }
   50% {
    opacity: 1;
  }
  100% {
    opacity: 0.1;
  }
`,m=t.section`
  background-image: url(${f});
  background-size: cover;
  background-repeat: no-repeat;
`,d=t.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`,l=t(s)`
  display: flex;
  flex-direction: column;
  align-items: center;
  --c: #fff;
  padding: 10px;
  color: #fff;
  background: linear-gradient(90deg, #0000 33%, #fff5, #0000 67%)
      var(--_p, 100%) / 300% no-repeat,
    #004dff;
  border: none;
  transform: perspective(500px) rotateY(calc(20deg * var(--_i, -1)));

  outline-offset: 0.1em;
  transition: 0.3s;

  font-weight: bold;
  font-size: 2rem;
  margin: 0;
  cursor: pointer;
  padding: 0.1em 0.3em;

  :hover,
  :focus-visible {
    --_p: 0%;
    --_i: 1;
  }
  :active {
    text-shadow: none;
    color: var(--c);
    box-shadow: inset 0 0 9e9Q #0005;
    transition: 0s;
  }
`,p=t.span`
  animation: ${o} 1500ms cubic-bezier(1, -0.05, 0, 1.01) infinite;
`,h=t(c)`
  color: #fff;

  animation: ${o} 1500ms cubic-bezier(1, -0.05, 0, 1.01) infinite;
`;function v(){const n=r();return e.jsx(m,{children:e.jsx(d,{children:e.jsxs(l,{to:"/tweets",state:{from:n},children:[e.jsx(h,{size:150}),e.jsx(p,{children:"Go to Tweets"})]})})})}function x(){return e.jsx("main",{children:e.jsx(v,{})})}export{x as default};