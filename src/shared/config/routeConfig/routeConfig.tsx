import { type RouteProps } from 'react-router-dom'
import { MainPageAsync as MainPage } from 'pages/MainPage'
import { AboutPageAsync as AboutPage } from 'pages/AboutPage'

export enum APP_ROUTES {
  MAIN = 'main',
  ABOUT = 'about',
}

export const RoutePath: Record<APP_ROUTES, string> = {
  [APP_ROUTES.MAIN]: '/',
  [APP_ROUTES.ABOUT]: '/about'
}

export const routeConfig: Record<APP_ROUTES, RouteProps> = {
  [APP_ROUTES.MAIN]: {
    path: RoutePath.main,
    element: <MainPage />
  },
  [APP_ROUTES.ABOUT]: {
    path: RoutePath.about,
    element: <AboutPage />
  }
}
