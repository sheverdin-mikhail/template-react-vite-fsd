import { ExamplePage } from '@/pages/examplePage';
import { RouteProps } from 'react-router-dom';

export type AppRouteProps = RouteProps & {
  authOnly?: boolean;
}

// global routing

export enum AppRoutes {
  // MAIN = 'main',
  EXAMPLE = 'example',
}

export const RoutePath: Record<AppRoutes, string> = {
  // [AppRoutes.MAIN]: '/main/:mainId',
  [AppRoutes.EXAMPLE]: '/',


  // [AppRoutes.NOT_FOUND]: '/*',
};
//-----------------------------------------------------------------------------------


// Routing config

export const routeConfig: Record<AppRoutes, AppRouteProps> = {

  // No Private pages

   [AppRoutes.EXAMPLE]: {
    path: RoutePath.example,
    element: <ExamplePage />,
    authOnly: true,
  },
 

  // [AppRoutes.NOT_FOUND]: {
  //   path: RoutePath.not_found,
  //   element: <NotFoundPage />,
  //   authOnly: false,
  // },
};
