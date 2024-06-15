import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _15cf4d52 = () => interopDefault(import('../pages/account_auth.vue' /* webpackChunkName: "pages/account_auth" */))
const _3f47e3ec = () => interopDefault(import('../pages/data_visualization.vue' /* webpackChunkName: "pages/data_visualization" */))
const _3f47d13a = () => interopDefault(import('../pages/data_visualization_v.vue' /* webpackChunkName: "pages/data_visualization_v" */))
const _2b3066de = () => interopDefault(import('../pages/data_visualization_v1.vue' /* webpackChunkName: "pages/data_visualization_v1" */))
const _2b3e7e5f = () => interopDefault(import('../pages/data_visualization_v2.vue' /* webpackChunkName: "pages/data_visualization_v2" */))
const _2b4c95e0 = () => interopDefault(import('../pages/data_visualization_v3.vue' /* webpackChunkName: "pages/data_visualization_v3" */))
const _2b5aad61 = () => interopDefault(import('../pages/data_visualization_v4.vue' /* webpackChunkName: "pages/data_visualization_v4" */))
const _2b68c4e2 = () => interopDefault(import('../pages/data_visualization_v5.vue' /* webpackChunkName: "pages/data_visualization_v5" */))
const _2d97d66c = () => interopDefault(import('../pages/data_visualization_v6 (form).vue' /* webpackChunkName: "pages/data_visualization_v6 (form)" */))
const _fa730d8a = () => interopDefault(import('../pages/data_visualization_v7 (form table).vue' /* webpackChunkName: "pages/data_visualization_v7 (form table)" */))
const _3438dfe2 = () => interopDefault(import('../pages/finetune.vue' /* webpackChunkName: "pages/finetune" */))
const _4000437c = () => interopDefault(import('../pages/login_page.vue' /* webpackChunkName: "pages/login_page" */))
const _f2378796 = () => interopDefault(import('../pages/login_page_auth.vue' /* webpackChunkName: "pages/login_page_auth" */))
const _123914f0 = () => interopDefault(import('../pages/wizard.vue' /* webpackChunkName: "pages/wizard" */))
const _34ebc2c4 = () => interopDefault(import('../pages/wizard/step1.vue' /* webpackChunkName: "pages/wizard/step1" */))
const _34cf93c2 = () => interopDefault(import('../pages/wizard/step2.vue' /* webpackChunkName: "pages/wizard/step2" */))
const _34b364c0 = () => interopDefault(import('../pages/wizard/step3.vue' /* webpackChunkName: "pages/wizard/step3" */))
const _18f7faec = () => interopDefault(import('../pages/components/accordion.vue' /* webpackChunkName: "pages/components/accordion" */))
const _c4980a00 = () => interopDefault(import('../pages/components/alert.vue' /* webpackChunkName: "pages/components/alert" */))
const _591b32fb = () => interopDefault(import('../pages/components/animations.vue' /* webpackChunkName: "pages/components/animations" */))
const _de4dac44 = () => interopDefault(import('../pages/components/avatars.vue' /* webpackChunkName: "pages/components/avatars" */))
const _c463dc08 = () => interopDefault(import('../pages/components/badge_label.vue' /* webpackChunkName: "pages/components/badge_label" */))
const _77ef4a5d = () => interopDefault(import('../pages/components/base.vue' /* webpackChunkName: "pages/components/base" */))
const _7cfab8e2 = () => interopDefault(import('../pages/components/breadcrumb.vue' /* webpackChunkName: "pages/components/breadcrumb" */))
const _104c83a5 = () => interopDefault(import('../pages/components/buttons.vue' /* webpackChunkName: "pages/components/buttons" */))
const _316204f2 = () => interopDefault(import('../pages/components/cards.vue' /* webpackChunkName: "pages/components/cards" */))
const _3f7b25c3 = () => interopDefault(import('../pages/components/color_palette.vue' /* webpackChunkName: "pages/components/color_palette" */))
const _653db33e = () => interopDefault(import('../pages/components/drop_dropdowns.vue' /* webpackChunkName: "pages/components/drop_dropdowns" */))
const _4193346d = () => interopDefault(import('../pages/components/fab_buttons.vue' /* webpackChunkName: "pages/components/fab_buttons" */))
const _0e581f5d = () => interopDefault(import('../pages/components/fancy_footer.vue' /* webpackChunkName: "pages/components/fancy_footer" */))
const _2be6bdae = () => interopDefault(import('../pages/components/fancy_toolbar.vue' /* webpackChunkName: "pages/components/fancy_toolbar" */))
const _441f9b1f = () => interopDefault(import('../pages/components/filters.vue' /* webpackChunkName: "pages/components/filters" */))
const _04b611b2 = () => interopDefault(import('../pages/components/footer.vue' /* webpackChunkName: "pages/components/footer" */))
const _1cfee75c = () => interopDefault(import('../pages/components/grid.vue' /* webpackChunkName: "pages/components/grid" */))
const _01ce2cb3 = () => interopDefault(import('../pages/components/height.vue' /* webpackChunkName: "pages/components/height" */))
const _b9ec9484 = () => interopDefault(import('../pages/components/icons.vue' /* webpackChunkName: "pages/components/icons" */))
const _a617de8e = () => interopDefault(import('../pages/components/lists.vue' /* webpackChunkName: "pages/components/lists" */))
const _d20a7f2e = () => interopDefault(import('../pages/components/masonry.vue' /* webpackChunkName: "pages/components/masonry" */))
const _e8cf7b44 = () => interopDefault(import('../pages/components/modals_dialogs.vue' /* webpackChunkName: "pages/components/modals_dialogs" */))
const _0d5ed6e8 = () => interopDefault(import('../pages/components/notifications.vue' /* webpackChunkName: "pages/components/notifications" */))
const _5fe108f4 = () => interopDefault(import('../pages/components/overlay.vue' /* webpackChunkName: "pages/components/overlay" */))
const _924df0b4 = () => interopDefault(import('../pages/components/pagination.vue' /* webpackChunkName: "pages/components/pagination" */))
const _1947eaf0 = () => interopDefault(import('../pages/components/progress_spinners.vue' /* webpackChunkName: "pages/components/progress_spinners" */))
const _54354f33 = () => interopDefault(import('../pages/components/scrollable.vue' /* webpackChunkName: "pages/components/scrollable" */))
const _2a30b126 = () => interopDefault(import('../pages/components/slider.vue' /* webpackChunkName: "pages/components/slider" */))
const _380bebf8 = () => interopDefault(import('../pages/components/sortable.vue' /* webpackChunkName: "pages/components/sortable" */))
const _0659d20f = () => interopDefault(import('../pages/components/swipe_list.vue' /* webpackChunkName: "pages/components/swipe_list" */))
const _50580af1 = () => interopDefault(import('../pages/components/tables.vue' /* webpackChunkName: "pages/components/tables" */))
const _acf14eec = () => interopDefault(import('../pages/components/tabs.vue' /* webpackChunkName: "pages/components/tabs" */))
const _357ff466 = () => interopDefault(import('../pages/components/timeline.vue' /* webpackChunkName: "pages/components/timeline" */))
const _374a7ac2 = () => interopDefault(import('../pages/components/toolbar.vue' /* webpackChunkName: "pages/components/toolbar" */))
const _c772fa48 = () => interopDefault(import('../pages/components/tooltips.vue' /* webpackChunkName: "pages/components/tooltips" */))
const _ad76953c = () => interopDefault(import('../pages/components/transitions.vue' /* webpackChunkName: "pages/components/transitions" */))
const _1c674b2c = () => interopDefault(import('../pages/components/width.vue' /* webpackChunkName: "pages/components/width" */))
const _21c6c6b3 = () => interopDefault(import('../pages/dashboard/v1.vue' /* webpackChunkName: "pages/dashboard/v1" */))
const _21d4de34 = () => interopDefault(import('../pages/dashboard/v2.vue' /* webpackChunkName: "pages/dashboard/v2" */))
const _c6c3d614 = () => interopDefault(import('../pages/forms/dynamic_fields.vue' /* webpackChunkName: "pages/forms/dynamic_fields" */))
const _219c72b7 = () => interopDefault(import('../pages/forms/regular_elements.vue' /* webpackChunkName: "pages/forms/regular_elements" */))
const _17b83136 = () => interopDefault(import('../pages/forms/validation.vue' /* webpackChunkName: "pages/forms/validation" */))
const _352100b0 = () => interopDefault(import('../pages/forms/wizard.vue' /* webpackChunkName: "pages/forms/wizard" */))
const _562e10be = () => interopDefault(import('../pages/forms/wizard/step1.vue' /* webpackChunkName: "pages/forms/wizard/step1" */))
const _563c283f = () => interopDefault(import('../pages/forms/wizard/step2.vue' /* webpackChunkName: "pages/forms/wizard/step2" */))
const _564a3fc0 = () => interopDefault(import('../pages/forms/wizard/step3.vue' /* webpackChunkName: "pages/forms/wizard/step3" */))
const _1d75103c = () => interopDefault(import('../pages/layout/boxed.vue' /* webpackChunkName: "pages/layout/boxed" */))
const _e7a36528 = () => interopDefault(import('../pages/layout/mini_sidebar.vue' /* webpackChunkName: "pages/layout/mini_sidebar" */))
const _77c6f448 = () => interopDefault(import('../pages/layout/offcanvas_sidebar.vue' /* webpackChunkName: "pages/layout/offcanvas_sidebar" */))
const _6854b581 = () => interopDefault(import('../pages/layout/top_menu.vue' /* webpackChunkName: "pages/layout/top_menu" */))
const _5954397c = () => interopDefault(import('../pages/pages/blank.vue' /* webpackChunkName: "pages/pages/blank" */))
const _29d6fb68 = () => interopDefault(import('../pages/pages/blank_header_expanded.vue' /* webpackChunkName: "pages/pages/blank_header_expanded" */))
const _23c6e860 = () => interopDefault(import('../pages/pages/chat.vue' /* webpackChunkName: "pages/pages/chat" */))
const _32139836 = () => interopDefault(import('../pages/pages/contact_list.vue' /* webpackChunkName: "pages/pages/contact_list" */))
const _c44bf2dc = () => interopDefault(import('../pages/pages/contact_list_single.vue' /* webpackChunkName: "pages/pages/contact_list_single" */))
const _8b4fba52 = () => interopDefault(import('../pages/pages/data_visualization.vue' /* webpackChunkName: "pages/pages/data_visualization" */))
const _f74f670c = () => interopDefault(import('../pages/pages/gallery.vue' /* webpackChunkName: "pages/pages/gallery" */))
const _b8de83c0 = () => interopDefault(import('../pages/pages/help_faq.vue' /* webpackChunkName: "pages/pages/help_faq" */))
const _54ef48ee = () => interopDefault(import('../pages/pages/invoices.vue' /* webpackChunkName: "pages/pages/invoices" */))
const _af9e361e = () => interopDefault(import('../pages/pages/invoices/index.vue' /* webpackChunkName: "pages/pages/invoices/index" */))
const _20c97702 = () => interopDefault(import('../pages/pages/invoices/new.vue' /* webpackChunkName: "pages/pages/invoices/new" */))
const _483520ce = () => interopDefault(import('../pages/pages/invoices/_id.vue' /* webpackChunkName: "pages/pages/invoices/_id" */))
const _46a36ac2 = () => interopDefault(import('../pages/pages/issues.vue' /* webpackChunkName: "pages/pages/issues" */))
const _6df4fe75 = () => interopDefault(import('../pages/pages/issues/details.vue' /* webpackChunkName: "pages/pages/issues/details" */))
const _2f11ecc0 = () => interopDefault(import('../pages/pages/issues/details/_id.vue' /* webpackChunkName: "pages/pages/issues/details/_id" */))
const _85f3d10a = () => interopDefault(import('../pages/pages/issues/list.vue' /* webpackChunkName: "pages/pages/issues/list" */))
const _bdf04648 = () => interopDefault(import('../pages/pages/mailbox.vue' /* webpackChunkName: "pages/pages/mailbox" */))
const _374b6342 = () => interopDefault(import('../pages/pages/mailbox/index.vue' /* webpackChunkName: "pages/pages/mailbox/index" */))
const _18cde442 = () => interopDefault(import('../pages/pages/mailbox/compose.vue' /* webpackChunkName: "pages/pages/mailbox/compose" */))
const _c924c502 = () => interopDefault(import('../pages/pages/mailbox/message/_id.vue' /* webpackChunkName: "pages/pages/mailbox/message/_id" */))
const _62587869 = () => interopDefault(import('../pages/pages/notes.vue' /* webpackChunkName: "pages/pages/notes" */))
const _60f35f92 = () => interopDefault(import('../pages/pages/poi_listing.vue' /* webpackChunkName: "pages/pages/poi_listing" */))
const _4b503706 = () => interopDefault(import('../pages/pages/pricing_tables.vue' /* webpackChunkName: "pages/pages/pricing_tables" */))
const _a83208aa = () => interopDefault(import('../pages/pages/settings.vue' /* webpackChunkName: "pages/pages/settings" */))
const _a443f298 = () => interopDefault(import('../pages/pages/task_board.vue' /* webpackChunkName: "pages/pages/task_board" */))
const _86966086 = () => interopDefault(import('../pages/pages/user_profile.vue' /* webpackChunkName: "pages/pages/user_profile" */))
const _3ff9e58c = () => interopDefault(import('../pages/plugins/ajax.vue' /* webpackChunkName: "pages/plugins/ajax" */))
const _a32e34ac = () => interopDefault(import('../pages/plugins/calendar.vue' /* webpackChunkName: "pages/plugins/calendar" */))
const _d08f6d04 = () => interopDefault(import('../pages/plugins/calendar_events.vue' /* webpackChunkName: "pages/plugins/calendar_events" */))
const _22e45041 = () => interopDefault(import('../pages/plugins/charts.vue' /* webpackChunkName: "pages/plugins/charts" */))
const _3ae4e07a = () => interopDefault(import('../pages/plugins/code_editor.vue' /* webpackChunkName: "pages/plugins/code_editor" */))
const _3cc38102 = () => interopDefault(import('../pages/plugins/data_grid.vue' /* webpackChunkName: "pages/plugins/data_grid" */))
const _0895bb7b = () => interopDefault(import('../pages/plugins/datatables.vue' /* webpackChunkName: "pages/plugins/datatables" */))
const _72833ed6 = () => interopDefault(import('../pages/plugins/diff_tool.vue' /* webpackChunkName: "pages/plugins/diff_tool" */))
const _4d69ddf7 = () => interopDefault(import('../pages/plugins/gantt_chart.vue' /* webpackChunkName: "pages/plugins/gantt_chart" */))
const _11101cbe = () => interopDefault(import('../pages/plugins/google_maps.vue' /* webpackChunkName: "pages/plugins/google_maps" */))
const _a4c3373c = () => interopDefault(import('../pages/plugins/idle_timeout.vue' /* webpackChunkName: "pages/plugins/idle_timeout" */))
const _2d42c56d = () => interopDefault(import('../pages/plugins/image_cropper.vue' /* webpackChunkName: "pages/plugins/image_cropper" */))
const _2713e76f = () => interopDefault(import('../pages/plugins/push_notifications.vue' /* webpackChunkName: "pages/plugins/push_notifications" */))
const _1ffbc1c4 = () => interopDefault(import('../pages/plugins/tour.vue' /* webpackChunkName: "pages/plugins/tour" */))
const _baac8fec = () => interopDefault(import('../pages/plugins/tree.vue' /* webpackChunkName: "pages/plugins/tree" */))
const _76198c52 = () => interopDefault(import('../pages/plugins/vector_maps.vue' /* webpackChunkName: "pages/plugins/vector_maps" */))
const _3191ebde = () => interopDefault(import('../pages/plugins/vue_good_table.vue' /* webpackChunkName: "pages/plugins/vue_good_table" */))
const _823e9412 = () => interopDefault(import('../pages/forms/advanced_elements/checkbox_radio.vue' /* webpackChunkName: "pages/forms/advanced_elements/checkbox_radio" */))
const _72417ce2 = () => interopDefault(import('../pages/forms/advanced_elements/color_picker.vue' /* webpackChunkName: "pages/forms/advanced_elements/color_picker" */))
const _1a803212 = () => interopDefault(import('../pages/forms/advanced_elements/date_picker.vue' /* webpackChunkName: "pages/forms/advanced_elements/date_picker" */))
const _fb34ab0e = () => interopDefault(import('../pages/forms/advanced_elements/date_range_picker.vue' /* webpackChunkName: "pages/forms/advanced_elements/date_range_picker" */))
const _696deeee = () => interopDefault(import('../pages/forms/advanced_elements/inputmask.vue' /* webpackChunkName: "pages/forms/advanced_elements/inputmask" */))
const _f9e7bda6 = () => interopDefault(import('../pages/forms/advanced_elements/multiselect.vue' /* webpackChunkName: "pages/forms/advanced_elements/multiselect" */))
const _4210b59b = () => interopDefault(import('../pages/forms/advanced_elements/range_slider.vue' /* webpackChunkName: "pages/forms/advanced_elements/range_slider" */))
const _37289415 = () => interopDefault(import('../pages/forms/advanced_elements/rating.vue' /* webpackChunkName: "pages/forms/advanced_elements/rating" */))
const _baa35024 = () => interopDefault(import('../pages/forms/advanced_elements/select2.vue' /* webpackChunkName: "pages/forms/advanced_elements/select2" */))
const _4381324c = () => interopDefault(import('../pages/forms/advanced_elements/switches.vue' /* webpackChunkName: "pages/forms/advanced_elements/switches" */))
const _19cfaa78 = () => interopDefault(import('../pages/forms/advanced_elements/time_picker.vue' /* webpackChunkName: "pages/forms/advanced_elements/time_picker" */))
const _04378e03 = () => interopDefault(import('../pages/forms/examples/advertising_evaluation_form.vue' /* webpackChunkName: "pages/forms/examples/advertising_evaluation_form" */))
const _118417c3 = () => interopDefault(import('../pages/forms/examples/booking_form.vue' /* webpackChunkName: "pages/forms/examples/booking_form" */))
const _1f87926a = () => interopDefault(import('../pages/forms/examples/car_rental_form.vue' /* webpackChunkName: "pages/forms/examples/car_rental_form" */))
const _7ecdfb14 = () => interopDefault(import('../pages/forms/examples/checkout_form.vue' /* webpackChunkName: "pages/forms/examples/checkout_form" */))
const _5db05e72 = () => interopDefault(import('../pages/forms/examples/contact_forms.vue' /* webpackChunkName: "pages/forms/examples/contact_forms" */))
const _577dd224 = () => interopDefault(import('../pages/forms/examples/job_application_form.vue' /* webpackChunkName: "pages/forms/examples/job_application_form" */))
const _e834ce54 = () => interopDefault(import('../pages/forms/examples/medical_history_form.vue' /* webpackChunkName: "pages/forms/examples/medical_history_form" */))
const _78b30981 = () => interopDefault(import('../pages/forms/examples/registration_form.vue' /* webpackChunkName: "pages/forms/examples/registration_form" */))
const _c9884076 = () => interopDefault(import('../pages/forms/examples/rental_application_form.vue' /* webpackChunkName: "pages/forms/examples/rental_application_form" */))
const _8720c3d8 = () => interopDefault(import('../pages/forms/examples/transaction_feedback_form.vue' /* webpackChunkName: "pages/forms/examples/transaction_feedback_form" */))
const _5b5218d8 = () => interopDefault(import('../pages/forms/wysiwyg/ckeditor.vue' /* webpackChunkName: "pages/forms/wysiwyg/ckeditor" */))
const _5b905654 = () => interopDefault(import('../pages/forms/wysiwyg/quill.vue' /* webpackChunkName: "pages/forms/wysiwyg/quill" */))
const _19f1fa76 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _15cf4d52,
    name: "account_auth"
  }, {
    path: "/data_visualization",
    component: _3f47e3ec,
    name: "data_visualization"
  }, {
    path: "/data_visualization_v",
    component: _3f47d13a,
    name: "data_visualization_v"
  }, {
    path: "/data_visualization_v1",
    component: _2b3066de,
    name: "data_visualization_v1"
  }, {
    path: "/data_visualization_v2",
    component: _2b3e7e5f,
    name: "data_visualization_v2"
  }, {
    path: "/data_visualization_v3",
    component: _2b4c95e0,
    name: "data_visualization_v3"
  }, {
    path: "/data_visualization_v4",
    component: _2b5aad61,
    name: "data_visualization_v4"
  }, {
    path: "/data_visualization_v5",
    component: _2b68c4e2,
    name: "data_visualization_v5"
  }, {
    path: "/data_visualization_v6%20(form)",
    component: _2d97d66c,
    name: "data_visualization_v6 (form)"
  }, {
    path: "/data_visualization_v7%20(form%20table)",
    component: _fa730d8a,
    name: "data_visualization_v7 (form table)"
  }, {
    path: "/finetune",
    component: _3438dfe2,
    name: "finetune"
  }, {
    path: "/login_page",
    component: _4000437c,
    name: "login_page"
  }, {
    path: "/login_page_auth",
    component: _f2378796,
    name: "login_page_auth"
  }, {
    path: "/wizard",
    component: _123914f0,
    name: "wizard",
    children: [{
      path: "step1",
      component: _34ebc2c4,
      name: "wizard-step1"
    }, {
      path: "step2",
      component: _34cf93c2,
      name: "wizard-step2"
    }, {
      path: "step3",
      component: _34b364c0,
      name: "wizard-step3"
    }]
  }, {
    path: "/components/accordion",
    component: _18f7faec,
    name: "components-accordion"
  }, {
    path: "/components/alert",
    component: _c4980a00,
    name: "components-alert"
  }, {
    path: "/components/animations",
    component: _591b32fb,
    name: "components-animations"
  }, {
    path: "/components/avatars",
    component: _de4dac44,
    name: "components-avatars"
  }, {
    path: "/components/badge_label",
    component: _c463dc08,
    name: "components-badge_label"
  }, {
    path: "/components/base",
    component: _77ef4a5d,
    name: "components-base"
  }, {
    path: "/components/breadcrumb",
    component: _7cfab8e2,
    name: "components-breadcrumb"
  }, {
    path: "/components/buttons",
    component: _104c83a5,
    name: "components-buttons"
  }, {
    path: "/components/cards",
    component: _316204f2,
    name: "components-cards"
  }, {
    path: "/components/color_palette",
    component: _3f7b25c3,
    name: "components-color_palette"
  }, {
    path: "/components/drop_dropdowns",
    component: _653db33e,
    name: "components-drop_dropdowns"
  }, {
    path: "/components/fab_buttons",
    component: _4193346d,
    name: "components-fab_buttons"
  }, {
    path: "/components/fancy_footer",
    component: _0e581f5d,
    name: "components-fancy_footer"
  }, {
    path: "/components/fancy_toolbar",
    component: _2be6bdae,
    name: "components-fancy_toolbar"
  }, {
    path: "/components/filters",
    component: _441f9b1f,
    name: "components-filters"
  }, {
    path: "/components/footer",
    component: _04b611b2,
    name: "components-footer"
  }, {
    path: "/components/grid",
    component: _1cfee75c,
    name: "components-grid"
  }, {
    path: "/components/height",
    component: _01ce2cb3,
    name: "components-height"
  }, {
    path: "/components/icons",
    component: _b9ec9484,
    name: "components-icons"
  }, {
    path: "/components/lists",
    component: _a617de8e,
    name: "components-lists"
  }, {
    path: "/components/masonry",
    component: _d20a7f2e,
    name: "components-masonry"
  }, {
    path: "/components/modals_dialogs",
    component: _e8cf7b44,
    name: "components-modals_dialogs"
  }, {
    path: "/components/notifications",
    component: _0d5ed6e8,
    name: "components-notifications"
  }, {
    path: "/components/overlay",
    component: _5fe108f4,
    name: "components-overlay"
  }, {
    path: "/components/pagination",
    component: _924df0b4,
    name: "components-pagination"
  }, {
    path: "/components/progress_spinners",
    component: _1947eaf0,
    name: "components-progress_spinners"
  }, {
    path: "/components/scrollable",
    component: _54354f33,
    name: "components-scrollable"
  }, {
    path: "/components/slider",
    component: _2a30b126,
    name: "components-slider"
  }, {
    path: "/components/sortable",
    component: _380bebf8,
    name: "components-sortable"
  }, {
    path: "/components/swipe_list",
    component: _0659d20f,
    name: "components-swipe_list"
  }, {
    path: "/components/tables",
    component: _50580af1,
    name: "components-tables"
  }, {
    path: "/components/tabs",
    component: _acf14eec,
    name: "components-tabs"
  }, {
    path: "/components/timeline",
    component: _357ff466,
    name: "components-timeline"
  }, {
    path: "/components/toolbar",
    component: _374a7ac2,
    name: "components-toolbar"
  }, {
    path: "/components/tooltips",
    component: _c772fa48,
    name: "components-tooltips"
  }, {
    path: "/components/transitions",
    component: _ad76953c,
    name: "components-transitions"
  }, {
    path: "/components/width",
    component: _1c674b2c,
    name: "components-width"
  }, {
    path: "/dashboard/v1",
    component: _21c6c6b3,
    name: "dashboard-v1"
  }, {
    path: "/dashboard/v2",
    component: _21d4de34,
    name: "dashboard-v2"
  }, {
    path: "/forms/dynamic_fields",
    component: _c6c3d614,
    name: "forms-dynamic_fields"
  }, {
    path: "/forms/regular_elements",
    component: _219c72b7,
    name: "forms-regular_elements"
  }, {
    path: "/forms/validation",
    component: _17b83136,
    name: "forms-validation"
  }, {
    path: "/forms/wizard",
    component: _352100b0,
    name: "forms-wizard",
    children: [{
      path: "step1",
      component: _562e10be,
      name: "forms-wizard-step1"
    }, {
      path: "step2",
      component: _563c283f,
      name: "forms-wizard-step2"
    }, {
      path: "step3",
      component: _564a3fc0,
      name: "forms-wizard-step3"
    }]
  }, {
    path: "/layout/boxed",
    component: _1d75103c,
    name: "layout-boxed"
  }, {
    path: "/layout/mini_sidebar",
    component: _e7a36528,
    name: "layout-mini_sidebar"
  }, {
    path: "/layout/offcanvas_sidebar",
    component: _77c6f448,
    name: "layout-offcanvas_sidebar"
  }, {
    path: "/layout/top_menu",
    component: _6854b581,
    name: "layout-top_menu"
  }, {
    path: "/pages/blank",
    component: _5954397c,
    name: "pages-blank"
  }, {
    path: "/pages/blank_header_expanded",
    component: _29d6fb68,
    name: "pages-blank_header_expanded"
  }, {
    path: "/pages/chat",
    component: _23c6e860,
    name: "pages-chat"
  }, {
    path: "/pages/contact_list",
    component: _32139836,
    name: "pages-contact_list"
  }, {
    path: "/pages/contact_list_single",
    component: _c44bf2dc,
    name: "pages-contact_list_single"
  }, {
    path: "/pages/data_visualization",
    component: _8b4fba52,
    name: "pages-data_visualization"
  }, {
    path: "/pages/gallery",
    component: _f74f670c,
    name: "pages-gallery"
  }, {
    path: "/pages/help_faq",
    component: _b8de83c0,
    name: "pages-help_faq"
  }, {
    path: "/pages/invoices",
    component: _54ef48ee,
    children: [{
      path: "",
      component: _af9e361e,
      name: "pages-invoices"
    }, {
      path: "new",
      component: _20c97702,
      name: "pages-invoices-new"
    }, {
      path: ":id",
      component: _483520ce,
      name: "pages-invoices-id"
    }]
  }, {
    path: "/pages/issues",
    component: _46a36ac2,
    name: "pages-issues",
    children: [{
      path: "details",
      component: _6df4fe75,
      name: "pages-issues-details",
      children: [{
        path: ":id?",
        component: _2f11ecc0,
        name: "pages-issues-details-id"
      }]
    }, {
      path: "list",
      component: _85f3d10a,
      name: "pages-issues-list"
    }]
  }, {
    path: "/pages/mailbox",
    component: _bdf04648,
    children: [{
      path: "",
      component: _374b6342,
      name: "pages-mailbox"
    }, {
      path: "compose",
      component: _18cde442,
      name: "pages-mailbox-compose"
    }, {
      path: "message/:id?",
      component: _c924c502,
      name: "pages-mailbox-message-id"
    }]
  }, {
    path: "/pages/notes",
    component: _62587869,
    name: "pages-notes"
  }, {
    path: "/pages/poi_listing",
    component: _60f35f92,
    name: "pages-poi_listing"
  }, {
    path: "/pages/pricing_tables",
    component: _4b503706,
    name: "pages-pricing_tables"
  }, {
    path: "/pages/settings",
    component: _a83208aa,
    name: "pages-settings"
  }, {
    path: "/pages/task_board",
    component: _a443f298,
    name: "pages-task_board"
  }, {
    path: "/pages/user_profile",
    component: _86966086,
    name: "pages-user_profile"
  }, {
    path: "/plugins/ajax",
    component: _3ff9e58c,
    name: "plugins-ajax"
  }, {
    path: "/plugins/calendar",
    component: _a32e34ac,
    name: "plugins-calendar"
  }, {
    path: "/plugins/calendar_events",
    component: _d08f6d04,
    name: "plugins-calendar_events"
  }, {
    path: "/plugins/charts",
    component: _22e45041,
    name: "plugins-charts"
  }, {
    path: "/plugins/code_editor",
    component: _3ae4e07a,
    name: "plugins-code_editor"
  }, {
    path: "/plugins/data_grid",
    component: _3cc38102,
    name: "plugins-data_grid"
  }, {
    path: "/plugins/datatables",
    component: _0895bb7b,
    name: "plugins-datatables"
  }, {
    path: "/plugins/diff_tool",
    component: _72833ed6,
    name: "plugins-diff_tool"
  }, {
    path: "/plugins/gantt_chart",
    component: _4d69ddf7,
    name: "plugins-gantt_chart"
  }, {
    path: "/plugins/google_maps",
    component: _11101cbe,
    name: "plugins-google_maps"
  }, {
    path: "/plugins/idle_timeout",
    component: _a4c3373c,
    name: "plugins-idle_timeout"
  }, {
    path: "/plugins/image_cropper",
    component: _2d42c56d,
    name: "plugins-image_cropper"
  }, {
    path: "/plugins/push_notifications",
    component: _2713e76f,
    name: "plugins-push_notifications"
  }, {
    path: "/plugins/tour",
    component: _1ffbc1c4,
    name: "plugins-tour"
  }, {
    path: "/plugins/tree",
    component: _baac8fec,
    name: "plugins-tree"
  }, {
    path: "/plugins/vector_maps",
    component: _76198c52,
    name: "plugins-vector_maps"
  }, {
    path: "/plugins/vue_good_table",
    component: _3191ebde,
    name: "plugins-vue_good_table"
  }, {
    path: "/forms/advanced_elements/checkbox_radio",
    component: _823e9412,
    name: "forms-advanced_elements-checkbox_radio"
  }, {
    path: "/forms/advanced_elements/color_picker",
    component: _72417ce2,
    name: "forms-advanced_elements-color_picker"
  }, {
    path: "/forms/advanced_elements/date_picker",
    component: _1a803212,
    name: "forms-advanced_elements-date_picker"
  }, {
    path: "/forms/advanced_elements/date_range_picker",
    component: _fb34ab0e,
    name: "forms-advanced_elements-date_range_picker"
  }, {
    path: "/forms/advanced_elements/inputmask",
    component: _696deeee,
    name: "forms-advanced_elements-inputmask"
  }, {
    path: "/forms/advanced_elements/multiselect",
    component: _f9e7bda6,
    name: "forms-advanced_elements-multiselect"
  }, {
    path: "/forms/advanced_elements/range_slider",
    component: _4210b59b,
    name: "forms-advanced_elements-range_slider"
  }, {
    path: "/forms/advanced_elements/rating",
    component: _37289415,
    name: "forms-advanced_elements-rating"
  }, {
    path: "/forms/advanced_elements/select2",
    component: _baa35024,
    name: "forms-advanced_elements-select2"
  }, {
    path: "/forms/advanced_elements/switches",
    component: _4381324c,
    name: "forms-advanced_elements-switches"
  }, {
    path: "/forms/advanced_elements/time_picker",
    component: _19cfaa78,
    name: "forms-advanced_elements-time_picker"
  }, {
    path: "/forms/examples/advertising_evaluation_form",
    component: _04378e03,
    name: "forms-examples-advertising_evaluation_form"
  }, {
    path: "/forms/examples/booking_form",
    component: _118417c3,
    name: "forms-examples-booking_form"
  }, {
    path: "/forms/examples/car_rental_form",
    component: _1f87926a,
    name: "forms-examples-car_rental_form"
  }, {
    path: "/forms/examples/checkout_form",
    component: _7ecdfb14,
    name: "forms-examples-checkout_form"
  }, {
    path: "/forms/examples/contact_forms",
    component: _5db05e72,
    name: "forms-examples-contact_forms"
  }, {
    path: "/forms/examples/job_application_form",
    component: _577dd224,
    name: "forms-examples-job_application_form"
  }, {
    path: "/forms/examples/medical_history_form",
    component: _e834ce54,
    name: "forms-examples-medical_history_form"
  }, {
    path: "/forms/examples/registration_form",
    component: _78b30981,
    name: "forms-examples-registration_form"
  }, {
    path: "/forms/examples/rental_application_form",
    component: _c9884076,
    name: "forms-examples-rental_application_form"
  }, {
    path: "/forms/examples/transaction_feedback_form",
    component: _8720c3d8,
    name: "forms-examples-transaction_feedback_form"
  }, {
    path: "/forms/wysiwyg/ckeditor",
    component: _5b5218d8,
    name: "forms-wysiwyg-ckeditor"
  }, {
    path: "/forms/wysiwyg/quill",
    component: _5b905654,
    name: "forms-wysiwyg-quill"
  }, {
    path: "/",
    component: _19f1fa76,
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
