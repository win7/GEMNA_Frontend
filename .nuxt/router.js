import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5461786f = () => interopDefault(import('../pages/account_auth.vue' /* webpackChunkName: "pages/account_auth" */))
const _1a935104 = () => interopDefault(import('../pages/data_visualization.vue' /* webpackChunkName: "pages/data_visualization" */))
const _16809e7b = () => interopDefault(import('../pages/data_visualization_v.vue' /* webpackChunkName: "pages/data_visualization_v" */))
const _8cc67a74 = () => interopDefault(import('../pages/data_visualization_v1.vue' /* webpackChunkName: "pages/data_visualization_v1" */))
const _8caa4b72 = () => interopDefault(import('../pages/data_visualization_v2.vue' /* webpackChunkName: "pages/data_visualization_v2" */))
const _8c8e1c70 = () => interopDefault(import('../pages/data_visualization_v3.vue' /* webpackChunkName: "pages/data_visualization_v3" */))
const _8c71ed6e = () => interopDefault(import('../pages/data_visualization_v4.vue' /* webpackChunkName: "pages/data_visualization_v4" */))
const _8c55be6c = () => interopDefault(import('../pages/data_visualization_v5.vue' /* webpackChunkName: "pages/data_visualization_v5" */))
const _8f67f83c = () => interopDefault(import('../pages/data_visualization_v6 (form).vue' /* webpackChunkName: "pages/data_visualization_v6 (form)" */))
const _4b84b653 = () => interopDefault(import('../pages/data_visualization_v7 (form table).vue' /* webpackChunkName: "pages/data_visualization_v7 (form table)" */))
const _1207fb27 = () => interopDefault(import('../pages/finetune.vue' /* webpackChunkName: "pages/finetune" */))
const _d694394c = () => interopDefault(import('../pages/login_page.vue' /* webpackChunkName: "pages/login_page" */))
const _051da61d = () => interopDefault(import('../pages/login_page_auth.vue' /* webpackChunkName: "pages/login_page_auth" */))
const _4ed7c6a0 = () => interopDefault(import('../pages/wizard.vue' /* webpackChunkName: "pages/wizard" */))
const _44d33db6 = () => interopDefault(import('../pages/wizard/step1.vue' /* webpackChunkName: "pages/wizard/step1" */))
const _44e15537 = () => interopDefault(import('../pages/wizard/step2.vue' /* webpackChunkName: "pages/wizard/step2" */))
const _44ef6cb8 = () => interopDefault(import('../pages/wizard/step3.vue' /* webpackChunkName: "pages/wizard/step3" */))
const _4f1c8204 = () => interopDefault(import('../pages/components/accordion.vue' /* webpackChunkName: "pages/components/accordion" */))
const _32b063d0 = () => interopDefault(import('../pages/components/alert.vue' /* webpackChunkName: "pages/components/alert" */))
const _30f0e23a = () => interopDefault(import('../pages/components/animations.vue' /* webpackChunkName: "pages/components/animations" */))
const _6c2496f6 = () => interopDefault(import('../pages/components/avatars.vue' /* webpackChunkName: "pages/components/avatars" */))
const _462599d8 = () => interopDefault(import('../pages/components/badge_label.vue' /* webpackChunkName: "pages/components/badge_label" */))
const _13ae9776 = () => interopDefault(import('../pages/components/base.vue' /* webpackChunkName: "pages/components/base" */))
const _4feeff77 = () => interopDefault(import('../pages/components/breadcrumb.vue' /* webpackChunkName: "pages/components/breadcrumb" */))
const _28d01e86 = () => interopDefault(import('../pages/components/buttons.vue' /* webpackChunkName: "pages/components/buttons" */))
const _3042d09f = () => interopDefault(import('../pages/components/cards.vue' /* webpackChunkName: "pages/components/cards" */))
const _335660db = () => interopDefault(import('../pages/components/color_palette.vue' /* webpackChunkName: "pages/components/color_palette" */))
const _266c49b4 = () => interopDefault(import('../pages/components/drop_dropdowns.vue' /* webpackChunkName: "pages/components/drop_dropdowns" */))
const _fe9b54f6 = () => interopDefault(import('../pages/components/fab_buttons.vue' /* webpackChunkName: "pages/components/fab_buttons" */))
const _99c5bd76 = () => interopDefault(import('../pages/components/fancy_footer.vue' /* webpackChunkName: "pages/components/fancy_footer" */))
const _4430477e = () => interopDefault(import('../pages/components/fancy_toolbar.vue' /* webpackChunkName: "pages/components/fancy_toolbar" */))
const _1f6b0837 = () => interopDefault(import('../pages/components/filters.vue' /* webpackChunkName: "pages/components/filters" */))
const _59a8f1e2 = () => interopDefault(import('../pages/components/footer.vue' /* webpackChunkName: "pages/components/footer" */))
const _6fb9f63a = () => interopDefault(import('../pages/components/grid.vue' /* webpackChunkName: "pages/components/grid" */))
const _515686ca = () => interopDefault(import('../pages/components/height.vue' /* webpackChunkName: "pages/components/height" */))
const _2804ee54 = () => interopDefault(import('../pages/components/icons.vue' /* webpackChunkName: "pages/components/icons" */))
const _1430385e = () => interopDefault(import('../pages/components/lists.vue' /* webpackChunkName: "pages/components/lists" */))
const _72462d81 = () => interopDefault(import('../pages/components/masonry.vue' /* webpackChunkName: "pages/components/masonry" */))
const _13246a46 = () => interopDefault(import('../pages/components/modals_dialogs.vue' /* webpackChunkName: "pages/components/modals_dialogs" */))
const _25a860b8 = () => interopDefault(import('../pages/components/notifications.vue' /* webpackChunkName: "pages/components/notifications" */))
const _3b2c760c = () => interopDefault(import('../pages/components/overlay.vue' /* webpackChunkName: "pages/components/overlay" */))
const _4545638e = () => interopDefault(import('../pages/components/pagination.vue' /* webpackChunkName: "pages/components/pagination" */))
const _2f404bf0 = () => interopDefault(import('../pages/components/progress_spinners.vue' /* webpackChunkName: "pages/components/progress_spinners" */))
const _3abca9ca = () => interopDefault(import('../pages/components/scrollable.vue' /* webpackChunkName: "pages/components/scrollable" */))
const _7f239156 = () => interopDefault(import('../pages/components/slider.vue' /* webpackChunkName: "pages/components/slider" */))
const _721c3fec = () => interopDefault(import('../pages/components/sortable.vue' /* webpackChunkName: "pages/components/sortable" */))
const _d673a412 = () => interopDefault(import('../pages/components/swipe_list.vue' /* webpackChunkName: "pages/components/swipe_list" */))
const _25de9ad9 = () => interopDefault(import('../pages/components/tables.vue' /* webpackChunkName: "pages/components/tables" */))
const _27c0c272 = () => interopDefault(import('../pages/components/tabs.vue' /* webpackChunkName: "pages/components/tabs" */))
const _73623bb5 = () => interopDefault(import('../pages/components/timeline.vue' /* webpackChunkName: "pages/components/timeline" */))
const _80b3a092 = () => interopDefault(import('../pages/components/toolbar.vue' /* webpackChunkName: "pages/components/toolbar" */))
const _2a68b8c4 = () => interopDefault(import('../pages/components/tooltips.vue' /* webpackChunkName: "pages/components/tooltips" */))
const _2f38530c = () => interopDefault(import('../pages/components/transitions.vue' /* webpackChunkName: "pages/components/transitions" */))
const _3ac02d82 = () => interopDefault(import('../pages/components/width.vue' /* webpackChunkName: "pages/components/width" */))
const _fde0346a = () => interopDefault(import('../pages/dashboard/v1.vue' /* webpackChunkName: "pages/dashboard/v1" */))
const _fdc40568 = () => interopDefault(import('../pages/dashboard/v2.vue' /* webpackChunkName: "pages/dashboard/v2" */))
const _5a7ac7e4 = () => interopDefault(import('../pages/forms/dynamic_fields.vue' /* webpackChunkName: "pages/forms/dynamic_fields" */))
const _60bb93cf = () => interopDefault(import('../pages/forms/regular_elements.vue' /* webpackChunkName: "pages/forms/regular_elements" */))
const _60ac044e = () => interopDefault(import('../pages/forms/validation.vue' /* webpackChunkName: "pages/forms/validation" */))
const _44b89ec0 = () => interopDefault(import('../pages/forms/wizard.vue' /* webpackChunkName: "pages/forms/wizard" */))
const _31797dd6 = () => interopDefault(import('../pages/forms/wizard/step1.vue' /* webpackChunkName: "pages/forms/wizard/step1" */))
const _31879557 = () => interopDefault(import('../pages/forms/wizard/step2.vue' /* webpackChunkName: "pages/forms/wizard/step2" */))
const _3195acd8 = () => interopDefault(import('../pages/forms/wizard/step3.vue' /* webpackChunkName: "pages/forms/wizard/step3" */))
const _508e96fa = () => interopDefault(import('../pages/layout/boxed.vue' /* webpackChunkName: "pages/layout/boxed" */))
const _1a508354 = () => interopDefault(import('../pages/layout/mini_sidebar.vue' /* webpackChunkName: "pages/layout/mini_sidebar" */))
const _90107e18 = () => interopDefault(import('../pages/layout/offcanvas_sidebar.vue' /* webpackChunkName: "pages/layout/offcanvas_sidebar" */))
const _32e3c12e = () => interopDefault(import('../pages/layout/top_menu.vue' /* webpackChunkName: "pages/layout/top_menu" */))
const _3b5ed764 = () => interopDefault(import('../pages/pages/blank.vue' /* webpackChunkName: "pages/pages/blank" */))
const _020e6d60 = () => interopDefault(import('../pages/pages/blank_header_expanded.vue' /* webpackChunkName: "pages/pages/blank_header_expanded" */))
const _4f062510 = () => interopDefault(import('../pages/pages/chat.vue' /* webpackChunkName: "pages/pages/chat" */))
const _7b7cbe06 = () => interopDefault(import('../pages/pages/contact_list.vue' /* webpackChunkName: "pages/pages/contact_list" */))
const _25662e7a = () => interopDefault(import('../pages/pages/contact_list_single.vue' /* webpackChunkName: "pages/pages/contact_list_single" */))
const _a3994422 = () => interopDefault(import('../pages/pages/data_visualization.vue' /* webpackChunkName: "pages/pages/data_visualization" */))
const _0e331062 = () => interopDefault(import('../pages/pages/gallery.vue' /* webpackChunkName: "pages/pages/gallery" */))
const _550e7738 = () => interopDefault(import('../pages/pages/help_faq.vue' /* webpackChunkName: "pages/pages/help_faq" */))
const _066d0206 = () => interopDefault(import('../pages/pages/invoices.vue' /* webpackChunkName: "pages/pages/invoices" */))
const _435527ee = () => interopDefault(import('../pages/pages/invoices/index.vue' /* webpackChunkName: "pages/pages/invoices/index" */))
const _6a329cd2 = () => interopDefault(import('../pages/pages/invoices/new.vue' /* webpackChunkName: "pages/pages/invoices/new" */))
const _919e469e = () => interopDefault(import('../pages/pages/invoices/_id.vue' /* webpackChunkName: "pages/pages/invoices/_id" */))
const _b426ec4c = () => interopDefault(import('../pages/pages/issues.vue' /* webpackChunkName: "pages/pages/issues" */))
const _b7ccf4e6 = () => interopDefault(import('../pages/pages/issues/details.vue' /* webpackChunkName: "pages/pages/issues/details" */))
const _475b7690 = () => interopDefault(import('../pages/pages/issues/details/_id.vue' /* webpackChunkName: "pages/pages/issues/details/_id" */))
const _dae6b13a = () => interopDefault(import('../pages/pages/issues/list.vue' /* webpackChunkName: "pages/pages/issues/list" */))
const _2ae2a0c4 = () => interopDefault(import('../pages/pages/mailbox.vue' /* webpackChunkName: "pages/pages/mailbox" */))
const _727c8447 = () => interopDefault(import('../pages/pages/mailbox/index.vue' /* webpackChunkName: "pages/pages/mailbox/index" */))
const _fbf52c72 = () => interopDefault(import('../pages/pages/mailbox/compose.vue' /* webpackChunkName: "pages/pages/mailbox/compose" */))
const _22f9c567 = () => interopDefault(import('../pages/pages/mailbox/message/_id.vue' /* webpackChunkName: "pages/pages/mailbox/message/_id" */))
const _44631651 = () => interopDefault(import('../pages/pages/notes.vue' /* webpackChunkName: "pages/pages/notes" */))
const _b5e63fc2 = () => interopDefault(import('../pages/pages/poi_listing.vue' /* webpackChunkName: "pages/pages/poi_listing" */))
const _fd1683c4 = () => interopDefault(import('../pages/pages/pricing_tables.vue' /* webpackChunkName: "pages/pages/pricing_tables" */))
const _5d64b4c3 = () => interopDefault(import('../pages/pages/settings.vue' /* webpackChunkName: "pages/pages/settings" */))
const _125c4c68 = () => interopDefault(import('../pages/pages/task_board.vue' /* webpackChunkName: "pages/pages/task_board" */))
const _cfff8656 = () => interopDefault(import('../pages/pages/user_profile.vue' /* webpackChunkName: "pages/pages/user_profile" */))
const _c179f6b8 = () => interopDefault(import('../pages/plugins/ajax.vue' /* webpackChunkName: "pages/plugins/ajax" */))
const _11468e7c = () => interopDefault(import('../pages/plugins/calendar.vue' /* webpackChunkName: "pages/plugins/calendar" */))
const _3c7d4b66 = () => interopDefault(import('../pages/plugins/calendar_events.vue' /* webpackChunkName: "pages/plugins/calendar_events" */))
const _573bed4e = () => interopDefault(import('../pages/plugins/charts.vue' /* webpackChunkName: "pages/plugins/charts" */))
const _70afc5ab = () => interopDefault(import('../pages/plugins/code_editor.vue' /* webpackChunkName: "pages/plugins/code_editor" */))
const _91b66132 = () => interopDefault(import('../pages/plugins/data_grid.vue' /* webpackChunkName: "pages/plugins/data_grid" */))
const _383daeda = () => interopDefault(import('../pages/plugins/datatables.vue' /* webpackChunkName: "pages/plugins/datatables" */))
const _4809cebe = () => interopDefault(import('../pages/plugins/diff_tool.vue' /* webpackChunkName: "pages/plugins/diff_tool" */))
const _48e7d842 = () => interopDefault(import('../pages/plugins/gantt_chart.vue' /* webpackChunkName: "pages/plugins/gantt_chart" */))
const _f4cbb0ee = () => interopDefault(import('../pages/plugins/google_maps.vue' /* webpackChunkName: "pages/plugins/google_maps" */))
const _387a290c = () => interopDefault(import('../pages/plugins/idle_timeout.vue' /* webpackChunkName: "pages/plugins/idle_timeout" */))
const _88a1bd56 = () => interopDefault(import('../pages/plugins/image_cropper.vue' /* webpackChunkName: "pages/plugins/image_cropper" */))
const _dde686f2 = () => interopDefault(import('../pages/plugins/push_notifications.vue' /* webpackChunkName: "pages/plugins/push_notifications" */))
const _7f44e0dc = () => interopDefault(import('../pages/plugins/tour.vue' /* webpackChunkName: "pages/plugins/tour" */))
const _01f2d722 = () => interopDefault(import('../pages/plugins/tree.vue' /* webpackChunkName: "pages/plugins/tree" */))
const _53156fbf = () => interopDefault(import('../pages/plugins/vector_maps.vue' /* webpackChunkName: "pages/plugins/vector_maps" */))
const _26562b29 = () => interopDefault(import('../pages/plugins/vue_good_table.vue' /* webpackChunkName: "pages/plugins/vue_good_table" */))
const _558aa70f = () => interopDefault(import('../pages/forms/advanced_elements/checkbox_radio.vue' /* webpackChunkName: "pages/forms/advanced_elements/checkbox_radio" */))
const _0464d3fa = () => interopDefault(import('../pages/forms/advanced_elements/color_picker.vue' /* webpackChunkName: "pages/forms/advanced_elements/color_picker" */))
const _41c94cdf = () => interopDefault(import('../pages/forms/advanced_elements/date_picker.vue' /* webpackChunkName: "pages/forms/advanced_elements/date_picker" */))
const _6cb50261 = () => interopDefault(import('../pages/forms/advanced_elements/date_range_picker.vue' /* webpackChunkName: "pages/forms/advanced_elements/date_range_picker" */))
const _6fe7aed6 = () => interopDefault(import('../pages/forms/advanced_elements/inputmask.vue' /* webpackChunkName: "pages/forms/advanced_elements/inputmask" */))
const _5bd4f1d6 = () => interopDefault(import('../pages/forms/advanced_elements/multiselect.vue' /* webpackChunkName: "pages/forms/advanced_elements/multiselect" */))
const _5797e69a = () => interopDefault(import('../pages/forms/advanced_elements/range_slider.vue' /* webpackChunkName: "pages/forms/advanced_elements/range_slider" */))
const _bffdc5a6 = () => interopDefault(import('../pages/forms/advanced_elements/rating.vue' /* webpackChunkName: "pages/forms/advanced_elements/rating" */))
const _54e6f1d6 = () => interopDefault(import('../pages/forms/advanced_elements/select2.vue' /* webpackChunkName: "pages/forms/advanced_elements/select2" */))
const _731a09f2 = () => interopDefault(import('../pages/forms/advanced_elements/switches.vue' /* webpackChunkName: "pages/forms/advanced_elements/switches" */))
const _68d91060 = () => interopDefault(import('../pages/forms/advanced_elements/time_picker.vue' /* webpackChunkName: "pages/forms/advanced_elements/time_picker" */))
const _63d3331b = () => interopDefault(import('../pages/forms/examples/advertising_evaluation_form.vue' /* webpackChunkName: "pages/forms/examples/advertising_evaluation_form" */))
const _32b434aa = () => interopDefault(import('../pages/forms/examples/booking_form.vue' /* webpackChunkName: "pages/forms/examples/booking_form" */))
const _5914bfe3 = () => interopDefault(import('../pages/forms/examples/car_rental_form.vue' /* webpackChunkName: "pages/forms/examples/car_rental_form" */))
const _4de5ea2c = () => interopDefault(import('../pages/forms/examples/checkout_form.vue' /* webpackChunkName: "pages/forms/examples/checkout_form" */))
const _bf808042 = () => interopDefault(import('../pages/forms/examples/contact_forms.vue' /* webpackChunkName: "pages/forms/examples/contact_forms" */))
const _234a7cd6 = () => interopDefault(import('../pages/forms/examples/job_application_form.vue' /* webpackChunkName: "pages/forms/examples/job_application_form" */))
const _4a220284 = () => interopDefault(import('../pages/forms/examples/medical_history_form.vue' /* webpackChunkName: "pages/forms/examples/medical_history_form" */))
const _0d8dac99 = () => interopDefault(import('../pages/forms/examples/registration_form.vue' /* webpackChunkName: "pages/forms/examples/registration_form" */))
const _31e5d0dd = () => interopDefault(import('../pages/forms/examples/rental_application_form.vue' /* webpackChunkName: "pages/forms/examples/rental_application_form" */))
const _5061a92c = () => interopDefault(import('../pages/forms/examples/transaction_feedback_form.vue' /* webpackChunkName: "pages/forms/examples/transaction_feedback_form" */))
const _117614ac = () => interopDefault(import('../pages/forms/wysiwyg/ckeditor.vue' /* webpackChunkName: "pages/forms/wysiwyg/ckeditor" */))
const _605a0abe = () => interopDefault(import('../pages/forms/wysiwyg/quill.vue' /* webpackChunkName: "pages/forms/wysiwyg/quill" */))
const _61382ead = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _5461786f,
    name: "account_auth"
  }, {
    path: "/data_visualization",
    component: _1a935104,
    name: "data_visualization"
  }, {
    path: "/data_visualization_v",
    component: _16809e7b,
    name: "data_visualization_v"
  }, {
    path: "/data_visualization_v1",
    component: _8cc67a74,
    name: "data_visualization_v1"
  }, {
    path: "/data_visualization_v2",
    component: _8caa4b72,
    name: "data_visualization_v2"
  }, {
    path: "/data_visualization_v3",
    component: _8c8e1c70,
    name: "data_visualization_v3"
  }, {
    path: "/data_visualization_v4",
    component: _8c71ed6e,
    name: "data_visualization_v4"
  }, {
    path: "/data_visualization_v5",
    component: _8c55be6c,
    name: "data_visualization_v5"
  }, {
    path: "/data_visualization_v6%20(form)",
    component: _8f67f83c,
    name: "data_visualization_v6 (form)"
  }, {
    path: "/data_visualization_v7%20(form%20table)",
    component: _4b84b653,
    name: "data_visualization_v7 (form table)"
  }, {
    path: "/finetune",
    component: _1207fb27,
    name: "finetune"
  }, {
    path: "/login_page",
    component: _d694394c,
    name: "login_page"
  }, {
    path: "/login_page_auth",
    component: _051da61d,
    name: "login_page_auth"
  }, {
    path: "/wizard",
    component: _4ed7c6a0,
    name: "wizard",
    children: [{
      path: "step1",
      component: _44d33db6,
      name: "wizard-step1"
    }, {
      path: "step2",
      component: _44e15537,
      name: "wizard-step2"
    }, {
      path: "step3",
      component: _44ef6cb8,
      name: "wizard-step3"
    }]
  }, {
    path: "/components/accordion",
    component: _4f1c8204,
    name: "components-accordion"
  }, {
    path: "/components/alert",
    component: _32b063d0,
    name: "components-alert"
  }, {
    path: "/components/animations",
    component: _30f0e23a,
    name: "components-animations"
  }, {
    path: "/components/avatars",
    component: _6c2496f6,
    name: "components-avatars"
  }, {
    path: "/components/badge_label",
    component: _462599d8,
    name: "components-badge_label"
  }, {
    path: "/components/base",
    component: _13ae9776,
    name: "components-base"
  }, {
    path: "/components/breadcrumb",
    component: _4feeff77,
    name: "components-breadcrumb"
  }, {
    path: "/components/buttons",
    component: _28d01e86,
    name: "components-buttons"
  }, {
    path: "/components/cards",
    component: _3042d09f,
    name: "components-cards"
  }, {
    path: "/components/color_palette",
    component: _335660db,
    name: "components-color_palette"
  }, {
    path: "/components/drop_dropdowns",
    component: _266c49b4,
    name: "components-drop_dropdowns"
  }, {
    path: "/components/fab_buttons",
    component: _fe9b54f6,
    name: "components-fab_buttons"
  }, {
    path: "/components/fancy_footer",
    component: _99c5bd76,
    name: "components-fancy_footer"
  }, {
    path: "/components/fancy_toolbar",
    component: _4430477e,
    name: "components-fancy_toolbar"
  }, {
    path: "/components/filters",
    component: _1f6b0837,
    name: "components-filters"
  }, {
    path: "/components/footer",
    component: _59a8f1e2,
    name: "components-footer"
  }, {
    path: "/components/grid",
    component: _6fb9f63a,
    name: "components-grid"
  }, {
    path: "/components/height",
    component: _515686ca,
    name: "components-height"
  }, {
    path: "/components/icons",
    component: _2804ee54,
    name: "components-icons"
  }, {
    path: "/components/lists",
    component: _1430385e,
    name: "components-lists"
  }, {
    path: "/components/masonry",
    component: _72462d81,
    name: "components-masonry"
  }, {
    path: "/components/modals_dialogs",
    component: _13246a46,
    name: "components-modals_dialogs"
  }, {
    path: "/components/notifications",
    component: _25a860b8,
    name: "components-notifications"
  }, {
    path: "/components/overlay",
    component: _3b2c760c,
    name: "components-overlay"
  }, {
    path: "/components/pagination",
    component: _4545638e,
    name: "components-pagination"
  }, {
    path: "/components/progress_spinners",
    component: _2f404bf0,
    name: "components-progress_spinners"
  }, {
    path: "/components/scrollable",
    component: _3abca9ca,
    name: "components-scrollable"
  }, {
    path: "/components/slider",
    component: _7f239156,
    name: "components-slider"
  }, {
    path: "/components/sortable",
    component: _721c3fec,
    name: "components-sortable"
  }, {
    path: "/components/swipe_list",
    component: _d673a412,
    name: "components-swipe_list"
  }, {
    path: "/components/tables",
    component: _25de9ad9,
    name: "components-tables"
  }, {
    path: "/components/tabs",
    component: _27c0c272,
    name: "components-tabs"
  }, {
    path: "/components/timeline",
    component: _73623bb5,
    name: "components-timeline"
  }, {
    path: "/components/toolbar",
    component: _80b3a092,
    name: "components-toolbar"
  }, {
    path: "/components/tooltips",
    component: _2a68b8c4,
    name: "components-tooltips"
  }, {
    path: "/components/transitions",
    component: _2f38530c,
    name: "components-transitions"
  }, {
    path: "/components/width",
    component: _3ac02d82,
    name: "components-width"
  }, {
    path: "/dashboard/v1",
    component: _fde0346a,
    name: "dashboard-v1"
  }, {
    path: "/dashboard/v2",
    component: _fdc40568,
    name: "dashboard-v2"
  }, {
    path: "/forms/dynamic_fields",
    component: _5a7ac7e4,
    name: "forms-dynamic_fields"
  }, {
    path: "/forms/regular_elements",
    component: _60bb93cf,
    name: "forms-regular_elements"
  }, {
    path: "/forms/validation",
    component: _60ac044e,
    name: "forms-validation"
  }, {
    path: "/forms/wizard",
    component: _44b89ec0,
    name: "forms-wizard",
    children: [{
      path: "step1",
      component: _31797dd6,
      name: "forms-wizard-step1"
    }, {
      path: "step2",
      component: _31879557,
      name: "forms-wizard-step2"
    }, {
      path: "step3",
      component: _3195acd8,
      name: "forms-wizard-step3"
    }]
  }, {
    path: "/layout/boxed",
    component: _508e96fa,
    name: "layout-boxed"
  }, {
    path: "/layout/mini_sidebar",
    component: _1a508354,
    name: "layout-mini_sidebar"
  }, {
    path: "/layout/offcanvas_sidebar",
    component: _90107e18,
    name: "layout-offcanvas_sidebar"
  }, {
    path: "/layout/top_menu",
    component: _32e3c12e,
    name: "layout-top_menu"
  }, {
    path: "/pages/blank",
    component: _3b5ed764,
    name: "pages-blank"
  }, {
    path: "/pages/blank_header_expanded",
    component: _020e6d60,
    name: "pages-blank_header_expanded"
  }, {
    path: "/pages/chat",
    component: _4f062510,
    name: "pages-chat"
  }, {
    path: "/pages/contact_list",
    component: _7b7cbe06,
    name: "pages-contact_list"
  }, {
    path: "/pages/contact_list_single",
    component: _25662e7a,
    name: "pages-contact_list_single"
  }, {
    path: "/pages/data_visualization",
    component: _a3994422,
    name: "pages-data_visualization"
  }, {
    path: "/pages/gallery",
    component: _0e331062,
    name: "pages-gallery"
  }, {
    path: "/pages/help_faq",
    component: _550e7738,
    name: "pages-help_faq"
  }, {
    path: "/pages/invoices",
    component: _066d0206,
    children: [{
      path: "",
      component: _435527ee,
      name: "pages-invoices"
    }, {
      path: "new",
      component: _6a329cd2,
      name: "pages-invoices-new"
    }, {
      path: ":id",
      component: _919e469e,
      name: "pages-invoices-id"
    }]
  }, {
    path: "/pages/issues",
    component: _b426ec4c,
    name: "pages-issues",
    children: [{
      path: "details",
      component: _b7ccf4e6,
      name: "pages-issues-details",
      children: [{
        path: ":id?",
        component: _475b7690,
        name: "pages-issues-details-id"
      }]
    }, {
      path: "list",
      component: _dae6b13a,
      name: "pages-issues-list"
    }]
  }, {
    path: "/pages/mailbox",
    component: _2ae2a0c4,
    children: [{
      path: "",
      component: _727c8447,
      name: "pages-mailbox"
    }, {
      path: "compose",
      component: _fbf52c72,
      name: "pages-mailbox-compose"
    }, {
      path: "message/:id?",
      component: _22f9c567,
      name: "pages-mailbox-message-id"
    }]
  }, {
    path: "/pages/notes",
    component: _44631651,
    name: "pages-notes"
  }, {
    path: "/pages/poi_listing",
    component: _b5e63fc2,
    name: "pages-poi_listing"
  }, {
    path: "/pages/pricing_tables",
    component: _fd1683c4,
    name: "pages-pricing_tables"
  }, {
    path: "/pages/settings",
    component: _5d64b4c3,
    name: "pages-settings"
  }, {
    path: "/pages/task_board",
    component: _125c4c68,
    name: "pages-task_board"
  }, {
    path: "/pages/user_profile",
    component: _cfff8656,
    name: "pages-user_profile"
  }, {
    path: "/plugins/ajax",
    component: _c179f6b8,
    name: "plugins-ajax"
  }, {
    path: "/plugins/calendar",
    component: _11468e7c,
    name: "plugins-calendar"
  }, {
    path: "/plugins/calendar_events",
    component: _3c7d4b66,
    name: "plugins-calendar_events"
  }, {
    path: "/plugins/charts",
    component: _573bed4e,
    name: "plugins-charts"
  }, {
    path: "/plugins/code_editor",
    component: _70afc5ab,
    name: "plugins-code_editor"
  }, {
    path: "/plugins/data_grid",
    component: _91b66132,
    name: "plugins-data_grid"
  }, {
    path: "/plugins/datatables",
    component: _383daeda,
    name: "plugins-datatables"
  }, {
    path: "/plugins/diff_tool",
    component: _4809cebe,
    name: "plugins-diff_tool"
  }, {
    path: "/plugins/gantt_chart",
    component: _48e7d842,
    name: "plugins-gantt_chart"
  }, {
    path: "/plugins/google_maps",
    component: _f4cbb0ee,
    name: "plugins-google_maps"
  }, {
    path: "/plugins/idle_timeout",
    component: _387a290c,
    name: "plugins-idle_timeout"
  }, {
    path: "/plugins/image_cropper",
    component: _88a1bd56,
    name: "plugins-image_cropper"
  }, {
    path: "/plugins/push_notifications",
    component: _dde686f2,
    name: "plugins-push_notifications"
  }, {
    path: "/plugins/tour",
    component: _7f44e0dc,
    name: "plugins-tour"
  }, {
    path: "/plugins/tree",
    component: _01f2d722,
    name: "plugins-tree"
  }, {
    path: "/plugins/vector_maps",
    component: _53156fbf,
    name: "plugins-vector_maps"
  }, {
    path: "/plugins/vue_good_table",
    component: _26562b29,
    name: "plugins-vue_good_table"
  }, {
    path: "/forms/advanced_elements/checkbox_radio",
    component: _558aa70f,
    name: "forms-advanced_elements-checkbox_radio"
  }, {
    path: "/forms/advanced_elements/color_picker",
    component: _0464d3fa,
    name: "forms-advanced_elements-color_picker"
  }, {
    path: "/forms/advanced_elements/date_picker",
    component: _41c94cdf,
    name: "forms-advanced_elements-date_picker"
  }, {
    path: "/forms/advanced_elements/date_range_picker",
    component: _6cb50261,
    name: "forms-advanced_elements-date_range_picker"
  }, {
    path: "/forms/advanced_elements/inputmask",
    component: _6fe7aed6,
    name: "forms-advanced_elements-inputmask"
  }, {
    path: "/forms/advanced_elements/multiselect",
    component: _5bd4f1d6,
    name: "forms-advanced_elements-multiselect"
  }, {
    path: "/forms/advanced_elements/range_slider",
    component: _5797e69a,
    name: "forms-advanced_elements-range_slider"
  }, {
    path: "/forms/advanced_elements/rating",
    component: _bffdc5a6,
    name: "forms-advanced_elements-rating"
  }, {
    path: "/forms/advanced_elements/select2",
    component: _54e6f1d6,
    name: "forms-advanced_elements-select2"
  }, {
    path: "/forms/advanced_elements/switches",
    component: _731a09f2,
    name: "forms-advanced_elements-switches"
  }, {
    path: "/forms/advanced_elements/time_picker",
    component: _68d91060,
    name: "forms-advanced_elements-time_picker"
  }, {
    path: "/forms/examples/advertising_evaluation_form",
    component: _63d3331b,
    name: "forms-examples-advertising_evaluation_form"
  }, {
    path: "/forms/examples/booking_form",
    component: _32b434aa,
    name: "forms-examples-booking_form"
  }, {
    path: "/forms/examples/car_rental_form",
    component: _5914bfe3,
    name: "forms-examples-car_rental_form"
  }, {
    path: "/forms/examples/checkout_form",
    component: _4de5ea2c,
    name: "forms-examples-checkout_form"
  }, {
    path: "/forms/examples/contact_forms",
    component: _bf808042,
    name: "forms-examples-contact_forms"
  }, {
    path: "/forms/examples/job_application_form",
    component: _234a7cd6,
    name: "forms-examples-job_application_form"
  }, {
    path: "/forms/examples/medical_history_form",
    component: _4a220284,
    name: "forms-examples-medical_history_form"
  }, {
    path: "/forms/examples/registration_form",
    component: _0d8dac99,
    name: "forms-examples-registration_form"
  }, {
    path: "/forms/examples/rental_application_form",
    component: _31e5d0dd,
    name: "forms-examples-rental_application_form"
  }, {
    path: "/forms/examples/transaction_feedback_form",
    component: _5061a92c,
    name: "forms-examples-transaction_feedback_form"
  }, {
    path: "/forms/wysiwyg/ckeditor",
    component: _117614ac,
    name: "forms-wysiwyg-ckeditor"
  }, {
    path: "/forms/wysiwyg/quill",
    component: _605a0abe,
    name: "forms-wysiwyg-quill"
  }, {
    path: "/",
    component: _61382ead,
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
