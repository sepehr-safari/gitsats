import { createBrowserRouter } from 'react-router-dom';

import { Layout } from './layout';

const Zero = () => import('./steps/zero');
const One = () => import('./steps/one');
const Two = () => import('./steps/two');
const Three = () => import('./steps/three');
const Four = () => import('./steps/four');

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        async lazy() {
          return { Component: (await Zero()).Zero };
        },
      },
      {
        path: '/steps/one',
        async lazy() {
          return { Component: (await One()).One };
        },
      },
      {
        path: '/steps/two',
        async lazy() {
          return { Component: (await Two()).Two };
        },
      },
      {
        path: '/steps/three',
        async lazy() {
          return { Component: (await Three()).Three };
        },
      },
      {
        path: '/steps/four',
        async lazy() {
          return { Component: (await Four()).Four };
        },
      },
    ],
  },
]);
