import auth from "@controleonline/ui-login/src/store/modules/auth";

import address from "@controleonline/ui-people/src/store/address";
import documents from "@controleonline/ui-people/src/store/documents";
import phones from "@controleonline/ui-people/src/store/phones";
import emails from "@controleonline/ui-people/src/store/emails";
import people from "@controleonline/ui-people/src/store/people";

import theme from "@controleonline/ui-layout/src/store/theme";

import orders from "@controleonline/ui-orders/src/store/orders";
import cart from "@controleonline/ui-orders/src/store/cart";
import order_products from "@controleonline/ui-orders/src/store/order_products";
import expanded_order_products from "@controleonline/ui-orders/src/store/expanded_order_products";


import invoice from "@controleonline/ui-financial/src/store/invoice";
import wallet from "@controleonline/ui-financial/src/store/wallet";
import paymentType from "@controleonline/ui-financial/src/store/paymentType";

import status from "@controleonline/ui-common/src/store/status";
import connections from "@controleonline/ui-common/src/store/connections";
import categories from "@controleonline/ui-common/src/store/categories";
import category_file from "@controleonline/ui-common/src/store/categories/category_file";
import extra_fields from "@controleonline/ui-common/src/store/extra/fields";
import extra_data from "@controleonline/ui-common/src/store/extra/data";
import imports from "@controleonline/ui-common/src/store/imports";
import file from "@controleonline/ui-common/src/store/file";
import city from "@controleonline/ui-common/src/store/address/city";
import acl from "@controleonline/ui-common/src/store/acl";

import products from "@controleonline/ui-products/src/store/products";
import product_unit from "@controleonline/ui-products/src/store/products/product_unit";
import product_group from "@controleonline/ui-products/src/store/products/product_group";
import product_group_product from "@controleonline/ui-products/src/store/products/product_group_product";
import product_group_feedstock from "@controleonline/ui-products/src/store/products/product_group_feedstock";
import product_category from "@controleonline/ui-products/src/store/products/product_category";
import product_file from "@controleonline/ui-products/src/store/products/product_file";

import displays from "@controleonline/ui-pcp/src/store/modules/displays";
import queues from "@controleonline/ui-pcp/src/store/modules/queues";
import order_products_queue from "@controleonline/ui-pcp/src/store/modules/order_products_queue";
import display_queues from "@controleonline/ui-pcp/src/store/modules/display_queues";

import language from "@controleonline/ui-translate/src/store/language";
import translate from "@controleonline/ui-translate/src/store/translate";

import { store } from "quasar/wrappers";
import { createStore } from "vuex";

export default store(function () {
  const Store = createStore({
    modules: {
      auth,
      address,
      documents,
      phones,
      emails,
      people,
      theme,
      orders,
      cart,
      order_products,
      expanded_order_products,
      invoice,
      wallet,
      paymentType,
      status,
      connections,
      categories,
      category_file,
      extra_fields,
      extra_data,
      imports,
      file,
      city,
      acl,
      products,
      product_unit,
      product_group,
      product_group_product,
      product_group_feedstock,
      product_category,
      product_file,
      displays,
      queues,
      order_products_queue,
      display_queues,
      language,
      translate,
    },
    strict: process.env.DEBUGGING,
  });

  return Store;
});
