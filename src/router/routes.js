import * as Login from "@controleonline/ui-login/src/vue/router/routes";
import * as Products from "@controleonline/ui-products/src/vue/router/routes";
import * as Queues from "@controleonline/ui-pcp/src/vue/router/routes";
import * as People from "@controleonline/ui-people/src/vue/router/routes";
import * as Translate from "@controleonline/ui-translate/src/vue/router/routes";
import * as Users from "@controleonline/ui-users/src/vue/router/routes";

const routes = [
  ...Login.routes,
  ...Users.routes,
  ...Products.routes,
  ...Queues.routes,
  ...People.routes,
  ...Translate.routes,
  {
    path: "/",
    component: () =>
      import("@controleonline/ui-layout/src/vue/layouts/AdminLayout.vue"),
    children: [
      {
        name: "HomeIndex",
        path: "home",
        component: () => import("@controleonline/ui-layout/src/vue/pages/Home"),
      },
    ],
  },
];

export default routes;
