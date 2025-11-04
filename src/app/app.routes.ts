import { Routes } from '@angular/router';
import { ControlFlow } from './components/control-flow/control-flow';
import { Admin } from './components/admin/admin';
import { Attribute } from './components/attribute/attribute';
import { DataBinding } from './components/data-binding/data-binding';
import { Signal } from './components/signal/signal';
import { User } from './components/user/user';
import { NotFound } from './components/not-found/not-found';
import { Photos } from './components/photos/photos';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full',
  },
  {
    path: 'control-flow',
    component: ControlFlow,
  },
  {
    path: 'admin',
    component: Admin,
  },
  {
    path: 'attribute',
    component: Attribute,
  },
  {
    path: 'data-binding',
    component: DataBinding,
  },
  {
    path: 'signal',
    component: Signal,
  },
  {
    path: 'user',
    component: User,
  },
  {
    path: 'photos',
    component: Photos,
  },
  {
    path: '**',
    component: NotFound,
  },
];
