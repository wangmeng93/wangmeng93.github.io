import {ContactComponent} from './contact.component';

export const contactRoutes = [
  {
    path: '',
    component: ContactComponent,
    children: [{
      path: "",
      redirectTo: ""
    }]
  }
];
