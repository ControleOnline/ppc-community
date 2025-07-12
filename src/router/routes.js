import * as Accounting from "@controleonline/ui-accounting/src/vue/router/routes";
import * as Carrier from "@controleonline/ui-carrier/src/vue/router/routes";
import * as Config from "@controleonline/ui-config/src/vue/router/routes";
import * as Contracts from "@controleonline/ui-contracts/src/vue/router/routes";
import * as Crm from "@controleonline/ui-crm/src/vue/router/routes";
import * as Customers from "@controleonline/ui-customers/src/vue/router/routes";
import * as Dashboard from "@controleonline/ui-dashboard/src/vue/router/routes";
import * as Financial from "@controleonline/ui-financial/src/vue/router/routes";
import * as Login from "@controleonline/ui-login/src/vue/router/routes";
import * as Products from "@controleonline/ui-products/src/vue/router/routes";
import * as Professionals from "@controleonline/ui-professionals/src/vue/router/routes";
import * as Employee from "@controleonline/ui-employee/src/vue/router/routes";
import * as Providers from "@controleonline/ui-providers/src/vue/router/routes";
import * as Queues from "@controleonline/ui-pcp/src/vue/router/routes";
import * as Logistic from "@controleonline/ui-logistic/src/vue/router/routes";
import * as Support from "@controleonline/ui-support/src/vue/router/routes";
import * as Tasks from "@controleonline/ui-tasks/src/vue/router/routes";
import * as People from "@controleonline/ui-people/src/vue/router/routes";
import * as Translate from "@controleonline/ui-translate/src/vue/router/routes";
import * as Contents from "@controleonline/ui-ead/src/vue/router/routes";
import * as Shop from "@controleonline/ui-shop/src/vue/router/routes";

import * as Users from "@controleonline/ui-users/src/vue/router/routes";
import * as Orders from "@controleonline/ui-orders/src/vue/router/routes";

const routes = [
  ...Login.routes,
  ...Logistic.routes,
  ...Financial.routes,
  ...Providers.routes,
  ...Customers.routes,
  ...Contracts.routes,
  ...Tasks.routes,
  ...Carrier.routes,
  ...Users.routes,
  ...Dashboard.routes,
  ...Support.routes,
  ...Accounting.routes,
  ...Crm.routes,
  ...Config.routes,
  ...Employee.routes,
  ...Products.routes,
  ...Professionals.routes,
  ...Queues.routes,
  ...Orders.routes,
  ...People.routes,
  ...Translate.routes,
  ...Contents.routes,
  ...Shop.routes,
  {
    path: "/",
    component: () =>
      import("@controleonline/ui-layout/src/vue/layouts/AdminLayout.vue"),
    children: [
      {
        name: "HomeIndex",
        path: "home",
        component: () => import("@controleonline/ui-pcp/src/vue/pages/Displays/Displays.vue"),
      },
    ],
  },
];

export default routes;
