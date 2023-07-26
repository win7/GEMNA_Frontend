import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _d9f1d560 = () => interopDefault(import('../pages/account_auth.vue' /* webpackChunkName: "pages/account_auth" */))
const _67a1770a = () => interopDefault(import('../pages/login_page.vue' /* webpackChunkName: "pages/login_page" */))
const _4fa8d19c = () => interopDefault(import('../pages/login_page_auth.vue' /* webpackChunkName: "pages/login_page_auth" */))
const _24ae3f7e = () => interopDefault(import('../pages/wizard.vue' /* webpackChunkName: "pages/wizard" */))
const _f90e4ad2 = () => interopDefault(import('../pages/wizard/step1.vue' /* webpackChunkName: "pages/wizard/step1" */))
const _f8f21bd0 = () => interopDefault(import('../pages/wizard/step2.vue' /* webpackChunkName: "pages/wizard/step2" */))
const _f8d5ecce = () => interopDefault(import('../pages/wizard/step3.vue' /* webpackChunkName: "pages/wizard/step3" */))
const _1c8bade5 = () => interopDefault(import('../pages/components/accordion.vue' /* webpackChunkName: "pages/components/accordion" */))
const _24fbdb0e = () => interopDefault(import('../pages/components/alert.vue' /* webpackChunkName: "pages/components/alert" */))
const _700441bc = () => interopDefault(import('../pages/components/animations.vue' /* webpackChunkName: "pages/components/animations" */))
const _257f4717 = () => interopDefault(import('../pages/components/avatars.vue' /* webpackChunkName: "pages/components/avatars" */))
const _0b40eab5 = () => interopDefault(import('../pages/components/badge_label.vue' /* webpackChunkName: "pages/components/badge_label" */))
const _40b3dfc4 = () => interopDefault(import('../pages/components/base.vue' /* webpackChunkName: "pages/components/base" */))
const _30654fb6 = () => interopDefault(import('../pages/components/breadcrumb.vue' /* webpackChunkName: "pages/components/breadcrumb" */))
const _b61abe44 = () => interopDefault(import('../pages/components/buttons.vue' /* webpackChunkName: "pages/components/buttons" */))
const _371d1500 = () => interopDefault(import('../pages/components/cards.vue' /* webpackChunkName: "pages/components/cards" */))
const _1b9ab43c = () => interopDefault(import('../pages/components/color_palette.vue' /* webpackChunkName: "pages/components/color_palette" */))
const _0d0ff3e5 = () => interopDefault(import('../pages/components/drop_dropdowns.vue' /* webpackChunkName: "pages/components/drop_dropdowns" */))
const _a1f3e5b4 = () => interopDefault(import('../pages/components/fab_buttons.vue' /* webpackChunkName: "pages/components/fab_buttons" */))
const _4f405dc4 = () => interopDefault(import('../pages/components/fancy_footer.vue' /* webpackChunkName: "pages/components/fancy_footer" */))
const _73a7a0bc = () => interopDefault(import('../pages/components/fancy_toolbar.vue' /* webpackChunkName: "pages/components/fancy_toolbar" */))
const _4e748f50 = () => interopDefault(import('../pages/components/filters.vue' /* webpackChunkName: "pages/components/filters" */))
const _b0cc6264 = () => interopDefault(import('../pages/components/footer.vue' /* webpackChunkName: "pages/components/footer" */))
const _8b75bc8e = () => interopDefault(import('../pages/components/grid.vue' /* webpackChunkName: "pages/components/grid" */))
const _a879f74c = () => interopDefault(import('../pages/components/height.vue' /* webpackChunkName: "pages/components/height" */))
const _1a506592 = () => interopDefault(import('../pages/components/icons.vue' /* webpackChunkName: "pages/components/icons" */))
const _067baf9c = () => interopDefault(import('../pages/components/lists.vue' /* webpackChunkName: "pages/components/lists" */))
const _2ba0dda2 = () => interopDefault(import('../pages/components/masonry.vue' /* webpackChunkName: "pages/components/masonry" */))
const _336a8305 = () => interopDefault(import('../pages/components/modals_dialogs.vue' /* webpackChunkName: "pages/components/modals_dialogs" */))
const _551fb9f6 = () => interopDefault(import('../pages/components/notifications.vue' /* webpackChunkName: "pages/components/notifications" */))
const _16f1b3a6 = () => interopDefault(import('../pages/components/overlay.vue' /* webpackChunkName: "pages/components/overlay" */))
const _25bbb3cd = () => interopDefault(import('../pages/components/pagination.vue' /* webpackChunkName: "pages/components/pagination" */))
const _b4ccd62e = () => interopDefault(import('../pages/components/progress_spinners.vue' /* webpackChunkName: "pages/components/progress_spinners" */))
const _79d0094c = () => interopDefault(import('../pages/components/scrollable.vue' /* webpackChunkName: "pages/components/scrollable" */))
const _d64701d8 = () => interopDefault(import('../pages/components/slider.vue' /* webpackChunkName: "pages/components/slider" */))
const _37d0d82a = () => interopDefault(import('../pages/components/sortable.vue' /* webpackChunkName: "pages/components/sortable" */))
const _753c7e36 = () => interopDefault(import('../pages/components/swipe_list.vue' /* webpackChunkName: "pages/components/swipe_list" */))
const _0b663ad0 = () => interopDefault(import('../pages/components/tables.vue' /* webpackChunkName: "pages/components/tables" */))
const _724bedf1 = () => interopDefault(import('../pages/components/tabs.vue' /* webpackChunkName: "pages/components/tabs" */))
const _3544e098 = () => interopDefault(import('../pages/components/timeline.vue' /* webpackChunkName: "pages/components/timeline" */))
const _7900dfd8 = () => interopDefault(import('../pages/components/toolbar.vue' /* webpackChunkName: "pages/components/toolbar" */))
const _c737e67a = () => interopDefault(import('../pages/components/tooltips.vue' /* webpackChunkName: "pages/components/tooltips" */))
const _16b78e1b = () => interopDefault(import('../pages/components/transitions.vue' /* webpackChunkName: "pages/components/transitions" */))
const _419a71e3 = () => interopDefault(import('../pages/components/width.vue' /* webpackChunkName: "pages/components/width" */))
const _8094faa8 = () => interopDefault(import('../pages/dashboard/v1.vue' /* webpackChunkName: "pages/dashboard/v1" */))
const _8078cba6 = () => interopDefault(import('../pages/dashboard/v2.vue' /* webpackChunkName: "pages/dashboard/v2" */))
const _bf9c7022 = () => interopDefault(import('../pages/forms/dynamic_fields.vue' /* webpackChunkName: "pages/forms/dynamic_fields" */))
const _e1e16920 = () => interopDefault(import('../pages/forms/regular_elements.vue' /* webpackChunkName: "pages/forms/regular_elements" */))
const _678648af = () => interopDefault(import('../pages/forms/validation.vue' /* webpackChunkName: "pages/forms/validation" */))
const _f94388be = () => interopDefault(import('../pages/forms/wizard.vue' /* webpackChunkName: "pages/forms/wizard" */))
const _2a57a412 = () => interopDefault(import('../pages/forms/wizard/step1.vue' /* webpackChunkName: "pages/forms/wizard/step1" */))
const _2a3b7510 = () => interopDefault(import('../pages/forms/wizard/step2.vue' /* webpackChunkName: "pages/forms/wizard/step2" */))
const _2a1f460e = () => interopDefault(import('../pages/forms/wizard/step3.vue' /* webpackChunkName: "pages/forms/wizard/step3" */))
const _e197984a = () => interopDefault(import('../pages/layout/boxed.vue' /* webpackChunkName: "pages/layout/boxed" */))
const _e768515a = () => interopDefault(import('../pages/layout/mini_sidebar.vue' /* webpackChunkName: "pages/layout/mini_sidebar" */))
const _bf87d756 = () => interopDefault(import('../pages/layout/offcanvas_sidebar.vue' /* webpackChunkName: "pages/layout/offcanvas_sidebar" */))
const _31194ae8 = () => interopDefault(import('../pages/layout/top_menu.vue' /* webpackChunkName: "pages/layout/top_menu" */))
const _19dccb3a = () => interopDefault(import('../pages/pages/blank.vue' /* webpackChunkName: "pages/pages/blank" */))
const _261bae4f = () => interopDefault(import('../pages/pages/blank_header_expanded.vue' /* webpackChunkName: "pages/pages/blank_header_expanded" */))
const _0ff64e99 = () => interopDefault(import('../pages/pages/chat.vue' /* webpackChunkName: "pages/pages/chat" */))
const _7b9c511e = () => interopDefault(import('../pages/pages/contact_list.vue' /* webpackChunkName: "pages/pages/contact_list" */))
const _45ac4739 = () => interopDefault(import('../pages/pages/contact_list_single.vue' /* webpackChunkName: "pages/pages/contact_list_single" */))
const _d3109d60 = () => interopDefault(import('../pages/pages/data_visualization.vue' /* webpackChunkName: "pages/pages/data_visualization" */))
const _b77de0be = () => interopDefault(import('../pages/pages/gallery.vue' /* webpackChunkName: "pages/pages/gallery" */))
const _fe7f404e = () => interopDefault(import('../pages/pages/help_faq.vue' /* webpackChunkName: "pages/pages/help_faq" */))
const _321eeaa7 = () => interopDefault(import('../pages/pages/invoices.vue' /* webpackChunkName: "pages/pages/invoices" */))
const _a876d02c = () => interopDefault(import('../pages/pages/invoices/index.vue' /* webpackChunkName: "pages/pages/invoices/index" */))
const _f77d3c90 = () => interopDefault(import('../pages/pages/invoices/new.vue' /* webpackChunkName: "pages/pages/invoices/new" */))
const _708b8cd2 = () => interopDefault(import('../pages/pages/invoices/_id.vue' /* webpackChunkName: "pages/pages/invoices/_id" */))
const _36dbb28a = () => interopDefault(import('../pages/pages/issues.vue' /* webpackChunkName: "pages/pages/issues" */))
const _7188b16e = () => interopDefault(import('../pages/pages/issues/details.vue' /* webpackChunkName: "pages/pages/issues/details" */))
const _76d2cfce = () => interopDefault(import('../pages/pages/issues/details/_id.vue' /* webpackChunkName: "pages/pages/issues/details/_id" */))
const _66faef22 = () => interopDefault(import('../pages/pages/issues/list.vue' /* webpackChunkName: "pages/pages/issues/list" */))
const _7e1ebffa = () => interopDefault(import('../pages/pages/mailbox.vue' /* webpackChunkName: "pages/pages/mailbox" */))
const _37104f74 = () => interopDefault(import('../pages/pages/mailbox/index.vue' /* webpackChunkName: "pages/pages/mailbox/index" */))
const _627bba06 = () => interopDefault(import('../pages/pages/mailbox/compose.vue' /* webpackChunkName: "pages/pages/mailbox/compose" */))
const _433fde26 = () => interopDefault(import('../pages/pages/mailbox/message/_id.vue' /* webpackChunkName: "pages/pages/mailbox/message/_id" */))
const _07d44d60 = () => interopDefault(import('../pages/pages/notes.vue' /* webpackChunkName: "pages/pages/notes" */))
const _797b27de = () => interopDefault(import('../pages/pages/poi_listing.vue' /* webpackChunkName: "pages/pages/poi_listing" */))
const _4ee3e9ff = () => interopDefault(import('../pages/pages/pricing_tables.vue' /* webpackChunkName: "pages/pages/pricing_tables" */))
const _edd2c538 = () => interopDefault(import('../pages/pages/settings.vue' /* webpackChunkName: "pages/pages/settings" */))
const _04a7c3a6 = () => interopDefault(import('../pages/pages/task_board.vue' /* webpackChunkName: "pages/pages/task_board" */))
const _515aecf6 = () => interopDefault(import('../pages/pages/user_profile.vue' /* webpackChunkName: "pages/pages/user_profile" */))
const _442ebcf6 = () => interopDefault(import('../pages/plugins/ajax.vue' /* webpackChunkName: "pages/plugins/ajax" */))
const _039205ba = () => interopDefault(import('../pages/plugins/calendar.vue' /* webpackChunkName: "pages/plugins/calendar" */))
const _4ebef036 = () => interopDefault(import('../pages/plugins/calendar_events.vue' /* webpackChunkName: "pages/plugins/calendar_events" */))
const _0013f1fa = () => interopDefault(import('../pages/plugins/charts.vue' /* webpackChunkName: "pages/plugins/charts" */))
const _3aa9ccac = () => interopDefault(import('../pages/plugins/code_editor.vue' /* webpackChunkName: "pages/plugins/code_editor" */))
const _e8d9d1b4 = () => interopDefault(import('../pages/plugins/data_grid.vue' /* webpackChunkName: "pages/plugins/data_grid" */))
const _c5884e98 = () => interopDefault(import('../pages/plugins/datatables.vue' /* webpackChunkName: "pages/plugins/datatables" */))
const _1c78167d = () => interopDefault(import('../pages/plugins/diff_tool.vue' /* webpackChunkName: "pages/plugins/diff_tool" */))
const _4d8767de = () => interopDefault(import('../pages/plugins/gantt_chart.vue' /* webpackChunkName: "pages/plugins/gantt_chart" */))
const _10d508f0 = () => interopDefault(import('../pages/plugins/google_maps.vue' /* webpackChunkName: "pages/plugins/google_maps" */))
const _9d9bd14a = () => interopDefault(import('../pages/plugins/idle_timeout.vue' /* webpackChunkName: "pages/plugins/idle_timeout" */))
const _c7b51cd8 = () => interopDefault(import('../pages/plugins/image_cropper.vue' /* webpackChunkName: "pages/plugins/image_cropper" */))
const _7989bba8 = () => interopDefault(import('../pages/plugins/push_notifications.vue' /* webpackChunkName: "pages/plugins/push_notifications" */))
const _842b0486 = () => interopDefault(import('../pages/plugins/tour.vue' /* webpackChunkName: "pages/plugins/tour" */))
const _40987403 = () => interopDefault(import('../pages/plugins/tree.vue' /* webpackChunkName: "pages/plugins/tree" */))
const _75de7884 = () => interopDefault(import('../pages/plugins/vector_maps.vue' /* webpackChunkName: "pages/plugins/vector_maps" */))
const _54a9e2ca = () => interopDefault(import('../pages/plugins/vue_good_table.vue' /* webpackChunkName: "pages/plugins/vue_good_table" */))
const _b33606a0 = () => interopDefault(import('../pages/forms/advanced_elements/checkbox_radio.vue' /* webpackChunkName: "pages/forms/advanced_elements/checkbox_radio" */))
const _fd2bc44a = () => interopDefault(import('../pages/forms/advanced_elements/color_picker.vue' /* webpackChunkName: "pages/forms/advanced_elements/color_picker" */))
const _6c1a7a44 = () => interopDefault(import('../pages/forms/advanced_elements/date_picker.vue' /* webpackChunkName: "pages/forms/advanced_elements/date_picker" */))
const _5c87bd20 = () => interopDefault(import('../pages/forms/advanced_elements/date_range_picker.vue' /* webpackChunkName: "pages/forms/advanced_elements/date_range_picker" */))
const _18b6ced6 = () => interopDefault(import('../pages/forms/advanced_elements/inputmask.vue' /* webpackChunkName: "pages/forms/advanced_elements/inputmask" */))
const _5a3efd14 = () => interopDefault(import('../pages/forms/advanced_elements/multiselect.vue' /* webpackChunkName: "pages/forms/advanced_elements/multiselect" */))
const _51395694 = () => interopDefault(import('../pages/forms/advanced_elements/range_slider.vue' /* webpackChunkName: "pages/forms/advanced_elements/range_slider" */))
const _1490b864 = () => interopDefault(import('../pages/forms/advanced_elements/rating.vue' /* webpackChunkName: "pages/forms/advanced_elements/rating" */))
const _93fd8156 = () => interopDefault(import('../pages/forms/advanced_elements/select2.vue' /* webpackChunkName: "pages/forms/advanced_elements/select2" */))
const _35496c53 = () => interopDefault(import('../pages/forms/advanced_elements/switches.vue' /* webpackChunkName: "pages/forms/advanced_elements/switches" */))
const _1dfaf342 = () => interopDefault(import('../pages/forms/advanced_elements/time_picker.vue' /* webpackChunkName: "pages/forms/advanced_elements/time_picker" */))
const _6e57d03c = () => interopDefault(import('../pages/forms/examples/advertising_evaluation_form.vue' /* webpackChunkName: "pages/forms/examples/advertising_evaluation_form" */))
const _0dc8caaa = () => interopDefault(import('../pages/forms/examples/booking_form.vue' /* webpackChunkName: "pages/forms/examples/booking_form" */))
const _a26972f8 = () => interopDefault(import('../pages/forms/examples/car_rental_form.vue' /* webpackChunkName: "pages/forms/examples/car_rental_form" */))
const _0b1fa50d = () => interopDefault(import('../pages/forms/examples/checkout_form.vue' /* webpackChunkName: "pages/forms/examples/checkout_form" */))
const _5d797ac0 = () => interopDefault(import('../pages/forms/examples/contact_forms.vue' /* webpackChunkName: "pages/forms/examples/contact_forms" */))
const _a9181a56 = () => interopDefault(import('../pages/forms/examples/job_application_form.vue' /* webpackChunkName: "pages/forms/examples/job_application_form" */))
const _631874bd = () => interopDefault(import('../pages/forms/examples/medical_history_form.vue' /* webpackChunkName: "pages/forms/examples/medical_history_form" */))
const _6085e20c = () => interopDefault(import('../pages/forms/examples/registration_form.vue' /* webpackChunkName: "pages/forms/examples/registration_form" */))
const _fa7fb304 = () => interopDefault(import('../pages/forms/examples/rental_application_form.vue' /* webpackChunkName: "pages/forms/examples/rental_application_form" */))
const _5805cae6 = () => interopDefault(import('../pages/forms/examples/transaction_feedback_form.vue' /* webpackChunkName: "pages/forms/examples/transaction_feedback_form" */))
const _3fc9cc4d = () => interopDefault(import('../pages/forms/wysiwyg/ckeditor.vue' /* webpackChunkName: "pages/forms/wysiwyg/ckeditor" */))
const _5b554286 = () => interopDefault(import('../pages/forms/wysiwyg/quill.vue' /* webpackChunkName: "pages/forms/wysiwyg/quill" */))
const _0a064628 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/account_auth",
    component: _d9f1d560,
    name: "account_auth"
  }, {
    path: "/login_page",
    component: _67a1770a,
    name: "login_page"
  }, {
    path: "/login_page_auth",
    component: _4fa8d19c,
    name: "login_page_auth"
  }, {
    path: "/wizard",
    component: _24ae3f7e,
    name: "wizard",
    children: [{
      path: "step1",
      component: _f90e4ad2,
      name: "wizard-step1"
    }, {
      path: "step2",
      component: _f8f21bd0,
      name: "wizard-step2"
    }, {
      path: "step3",
      component: _f8d5ecce,
      name: "wizard-step3"
    }]
  }, {
    path: "/components/accordion",
    component: _1c8bade5,
    name: "components-accordion"
  }, {
    path: "/components/alert",
    component: _24fbdb0e,
    name: "components-alert"
  }, {
    path: "/components/animations",
    component: _700441bc,
    name: "components-animations"
  }, {
    path: "/components/avatars",
    component: _257f4717,
    name: "components-avatars"
  }, {
    path: "/components/badge_label",
    component: _0b40eab5,
    name: "components-badge_label"
  }, {
    path: "/components/base",
    component: _40b3dfc4,
    name: "components-base"
  }, {
    path: "/components/breadcrumb",
    component: _30654fb6,
    name: "components-breadcrumb"
  }, {
    path: "/components/buttons",
    component: _b61abe44,
    name: "components-buttons"
  }, {
    path: "/components/cards",
    component: _371d1500,
    name: "components-cards"
  }, {
    path: "/components/color_palette",
    component: _1b9ab43c,
    name: "components-color_palette"
  }, {
    path: "/components/drop_dropdowns",
    component: _0d0ff3e5,
    name: "components-drop_dropdowns"
  }, {
    path: "/components/fab_buttons",
    component: _a1f3e5b4,
    name: "components-fab_buttons"
  }, {
    path: "/components/fancy_footer",
    component: _4f405dc4,
    name: "components-fancy_footer"
  }, {
    path: "/components/fancy_toolbar",
    component: _73a7a0bc,
    name: "components-fancy_toolbar"
  }, {
    path: "/components/filters",
    component: _4e748f50,
    name: "components-filters"
  }, {
    path: "/components/footer",
    component: _b0cc6264,
    name: "components-footer"
  }, {
    path: "/components/grid",
    component: _8b75bc8e,
    name: "components-grid"
  }, {
    path: "/components/height",
    component: _a879f74c,
    name: "components-height"
  }, {
    path: "/components/icons",
    component: _1a506592,
    name: "components-icons"
  }, {
    path: "/components/lists",
    component: _067baf9c,
    name: "components-lists"
  }, {
    path: "/components/masonry",
    component: _2ba0dda2,
    name: "components-masonry"
  }, {
    path: "/components/modals_dialogs",
    component: _336a8305,
    name: "components-modals_dialogs"
  }, {
    path: "/components/notifications",
    component: _551fb9f6,
    name: "components-notifications"
  }, {
    path: "/components/overlay",
    component: _16f1b3a6,
    name: "components-overlay"
  }, {
    path: "/components/pagination",
    component: _25bbb3cd,
    name: "components-pagination"
  }, {
    path: "/components/progress_spinners",
    component: _b4ccd62e,
    name: "components-progress_spinners"
  }, {
    path: "/components/scrollable",
    component: _79d0094c,
    name: "components-scrollable"
  }, {
    path: "/components/slider",
    component: _d64701d8,
    name: "components-slider"
  }, {
    path: "/components/sortable",
    component: _37d0d82a,
    name: "components-sortable"
  }, {
    path: "/components/swipe_list",
    component: _753c7e36,
    name: "components-swipe_list"
  }, {
    path: "/components/tables",
    component: _0b663ad0,
    name: "components-tables"
  }, {
    path: "/components/tabs",
    component: _724bedf1,
    name: "components-tabs"
  }, {
    path: "/components/timeline",
    component: _3544e098,
    name: "components-timeline"
  }, {
    path: "/components/toolbar",
    component: _7900dfd8,
    name: "components-toolbar"
  }, {
    path: "/components/tooltips",
    component: _c737e67a,
    name: "components-tooltips"
  }, {
    path: "/components/transitions",
    component: _16b78e1b,
    name: "components-transitions"
  }, {
    path: "/components/width",
    component: _419a71e3,
    name: "components-width"
  }, {
    path: "/dashboard/v1",
    component: _8094faa8,
    name: "dashboard-v1"
  }, {
    path: "/dashboard/v2",
    component: _8078cba6,
    name: "dashboard-v2"
  }, {
    path: "/forms/dynamic_fields",
    component: _bf9c7022,
    name: "forms-dynamic_fields"
  }, {
    path: "/forms/regular_elements",
    component: _e1e16920,
    name: "forms-regular_elements"
  }, {
    path: "/forms/validation",
    component: _678648af,
    name: "forms-validation"
  }, {
    path: "/forms/wizard",
    component: _f94388be,
    name: "forms-wizard",
    children: [{
      path: "step1",
      component: _2a57a412,
      name: "forms-wizard-step1"
    }, {
      path: "step2",
      component: _2a3b7510,
      name: "forms-wizard-step2"
    }, {
      path: "step3",
      component: _2a1f460e,
      name: "forms-wizard-step3"
    }]
  }, {
    path: "/layout/boxed",
    component: _e197984a,
    name: "layout-boxed"
  }, {
    path: "/layout/mini_sidebar",
    component: _e768515a,
    name: "layout-mini_sidebar"
  }, {
    path: "/layout/offcanvas_sidebar",
    component: _bf87d756,
    name: "layout-offcanvas_sidebar"
  }, {
    path: "/layout/top_menu",
    component: _31194ae8,
    name: "layout-top_menu"
  }, {
    path: "/pages/blank",
    component: _19dccb3a,
    name: "pages-blank"
  }, {
    path: "/pages/blank_header_expanded",
    component: _261bae4f,
    name: "pages-blank_header_expanded"
  }, {
    path: "/pages/chat",
    component: _0ff64e99,
    name: "pages-chat"
  }, {
    path: "/pages/contact_list",
    component: _7b9c511e,
    name: "pages-contact_list"
  }, {
    path: "/pages/contact_list_single",
    component: _45ac4739,
    name: "pages-contact_list_single"
  }, {
    path: "/pages/data_visualization",
    component: _d3109d60,
    name: "pages-data_visualization"
  }, {
    path: "/pages/gallery",
    component: _b77de0be,
    name: "pages-gallery"
  }, {
    path: "/pages/help_faq",
    component: _fe7f404e,
    name: "pages-help_faq"
  }, {
    path: "/pages/invoices",
    component: _321eeaa7,
    children: [{
      path: "",
      component: _a876d02c,
      name: "pages-invoices"
    }, {
      path: "new",
      component: _f77d3c90,
      name: "pages-invoices-new"
    }, {
      path: ":id",
      component: _708b8cd2,
      name: "pages-invoices-id"
    }]
  }, {
    path: "/pages/issues",
    component: _36dbb28a,
    name: "pages-issues",
    children: [{
      path: "details",
      component: _7188b16e,
      name: "pages-issues-details",
      children: [{
        path: ":id?",
        component: _76d2cfce,
        name: "pages-issues-details-id"
      }]
    }, {
      path: "list",
      component: _66faef22,
      name: "pages-issues-list"
    }]
  }, {
    path: "/pages/mailbox",
    component: _7e1ebffa,
    children: [{
      path: "",
      component: _37104f74,
      name: "pages-mailbox"
    }, {
      path: "compose",
      component: _627bba06,
      name: "pages-mailbox-compose"
    }, {
      path: "message/:id?",
      component: _433fde26,
      name: "pages-mailbox-message-id"
    }]
  }, {
    path: "/pages/notes",
    component: _07d44d60,
    name: "pages-notes"
  }, {
    path: "/pages/poi_listing",
    component: _797b27de,
    name: "pages-poi_listing"
  }, {
    path: "/pages/pricing_tables",
    component: _4ee3e9ff,
    name: "pages-pricing_tables"
  }, {
    path: "/pages/settings",
    component: _edd2c538,
    name: "pages-settings"
  }, {
    path: "/pages/task_board",
    component: _04a7c3a6,
    name: "pages-task_board"
  }, {
    path: "/pages/user_profile",
    component: _515aecf6,
    name: "pages-user_profile"
  }, {
    path: "/plugins/ajax",
    component: _442ebcf6,
    name: "plugins-ajax"
  }, {
    path: "/plugins/calendar",
    component: _039205ba,
    name: "plugins-calendar"
  }, {
    path: "/plugins/calendar_events",
    component: _4ebef036,
    name: "plugins-calendar_events"
  }, {
    path: "/plugins/charts",
    component: _0013f1fa,
    name: "plugins-charts"
  }, {
    path: "/plugins/code_editor",
    component: _3aa9ccac,
    name: "plugins-code_editor"
  }, {
    path: "/plugins/data_grid",
    component: _e8d9d1b4,
    name: "plugins-data_grid"
  }, {
    path: "/plugins/datatables",
    component: _c5884e98,
    name: "plugins-datatables"
  }, {
    path: "/plugins/diff_tool",
    component: _1c78167d,
    name: "plugins-diff_tool"
  }, {
    path: "/plugins/gantt_chart",
    component: _4d8767de,
    name: "plugins-gantt_chart"
  }, {
    path: "/plugins/google_maps",
    component: _10d508f0,
    name: "plugins-google_maps"
  }, {
    path: "/plugins/idle_timeout",
    component: _9d9bd14a,
    name: "plugins-idle_timeout"
  }, {
    path: "/plugins/image_cropper",
    component: _c7b51cd8,
    name: "plugins-image_cropper"
  }, {
    path: "/plugins/push_notifications",
    component: _7989bba8,
    name: "plugins-push_notifications"
  }, {
    path: "/plugins/tour",
    component: _842b0486,
    name: "plugins-tour"
  }, {
    path: "/plugins/tree",
    component: _40987403,
    name: "plugins-tree"
  }, {
    path: "/plugins/vector_maps",
    component: _75de7884,
    name: "plugins-vector_maps"
  }, {
    path: "/plugins/vue_good_table",
    component: _54a9e2ca,
    name: "plugins-vue_good_table"
  }, {
    path: "/forms/advanced_elements/checkbox_radio",
    component: _b33606a0,
    name: "forms-advanced_elements-checkbox_radio"
  }, {
    path: "/forms/advanced_elements/color_picker",
    component: _fd2bc44a,
    name: "forms-advanced_elements-color_picker"
  }, {
    path: "/forms/advanced_elements/date_picker",
    component: _6c1a7a44,
    name: "forms-advanced_elements-date_picker"
  }, {
    path: "/forms/advanced_elements/date_range_picker",
    component: _5c87bd20,
    name: "forms-advanced_elements-date_range_picker"
  }, {
    path: "/forms/advanced_elements/inputmask",
    component: _18b6ced6,
    name: "forms-advanced_elements-inputmask"
  }, {
    path: "/forms/advanced_elements/multiselect",
    component: _5a3efd14,
    name: "forms-advanced_elements-multiselect"
  }, {
    path: "/forms/advanced_elements/range_slider",
    component: _51395694,
    name: "forms-advanced_elements-range_slider"
  }, {
    path: "/forms/advanced_elements/rating",
    component: _1490b864,
    name: "forms-advanced_elements-rating"
  }, {
    path: "/forms/advanced_elements/select2",
    component: _93fd8156,
    name: "forms-advanced_elements-select2"
  }, {
    path: "/forms/advanced_elements/switches",
    component: _35496c53,
    name: "forms-advanced_elements-switches"
  }, {
    path: "/forms/advanced_elements/time_picker",
    component: _1dfaf342,
    name: "forms-advanced_elements-time_picker"
  }, {
    path: "/forms/examples/advertising_evaluation_form",
    component: _6e57d03c,
    name: "forms-examples-advertising_evaluation_form"
  }, {
    path: "/forms/examples/booking_form",
    component: _0dc8caaa,
    name: "forms-examples-booking_form"
  }, {
    path: "/forms/examples/car_rental_form",
    component: _a26972f8,
    name: "forms-examples-car_rental_form"
  }, {
    path: "/forms/examples/checkout_form",
    component: _0b1fa50d,
    name: "forms-examples-checkout_form"
  }, {
    path: "/forms/examples/contact_forms",
    component: _5d797ac0,
    name: "forms-examples-contact_forms"
  }, {
    path: "/forms/examples/job_application_form",
    component: _a9181a56,
    name: "forms-examples-job_application_form"
  }, {
    path: "/forms/examples/medical_history_form",
    component: _631874bd,
    name: "forms-examples-medical_history_form"
  }, {
    path: "/forms/examples/registration_form",
    component: _6085e20c,
    name: "forms-examples-registration_form"
  }, {
    path: "/forms/examples/rental_application_form",
    component: _fa7fb304,
    name: "forms-examples-rental_application_form"
  }, {
    path: "/forms/examples/transaction_feedback_form",
    component: _5805cae6,
    name: "forms-examples-transaction_feedback_form"
  }, {
    path: "/forms/wysiwyg/ckeditor",
    component: _3fc9cc4d,
    name: "forms-wysiwyg-ckeditor"
  }, {
    path: "/forms/wysiwyg/quill",
    component: _5b554286,
    name: "forms-wysiwyg-quill"
  }, {
    path: "/",
    component: _0a064628,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
