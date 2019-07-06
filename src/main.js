// This is the main.js file. Import global CSS and scripts here.
import "~/assets/styles/global.scss";

// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import DefaultLayout from "~/layouts/Default";
import VueDisqus from "vue-disqus";

export default function(Vue, { router, head, isClient }) {
  // 全域預設 meta
  head.htmlAttrs = { lang: "zh-TW" };
  // head.bodyAttrs = { class: "body" };

  // 設置 snipcart 購物車
  head.link.push({
    rel: "stylesheet",
    href: "https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css"
  });

  head.script.push({
    type: "text/javascript",
    src: "https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js",
    body: true
  });

  head.script.push({
    type: "text/javascript",
    src: "https://cdn.snipcart.com/scripts/2.0/snipcart.js",
    body: true,
    id: "snipcart",
    "data-api-key": "ZTQ2MjVjN2EtNGUzMy00MDMwLWFkYjctZGU0MzMxMzhhZjdjNjM2OTgwMDAwNTE0MzU0MzIx"
  });

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
  Vue.use(VueDisqus);
}
