import { createApp } from 'vue';
import Dashboard from './components/Dashboard.vue';

const mount = (el) => {
  const app = createApp(Dashboard);
  app.mount(el);
};

//For Development and in isolation
if (process.env.NODE_ENV == 'development') {
  const devRoot = document.querySelector('#dashboard-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

//For Production or Remote
export { mount };
