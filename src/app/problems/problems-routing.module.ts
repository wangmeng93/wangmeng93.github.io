import {ProblemsComponent} from './problems.component';

export const problemsRoutes = [
  {
    path: '',
    component: ProblemsComponent,
    children: [{
      path: "",
      redirectTo: ""
    }]
  }
];
