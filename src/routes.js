import { lazy } from 'react'

// examples

const Colors = lazy(() => import('./views/theme/colors/Colors'))
const Typography = lazy(() => import('./views/theme/typography/Typography'))

const Accordion = lazy(() => import('./views/components/base/accordion/Accordion'))
const Breadcrumbs = lazy(() => import('./views/components/base/breadcrumbs/Breadcrumbs'))
const Cards = lazy(() => import('./views/components/base/cards/Cards'))
const Carousels = lazy(() => import('./views/components/base/carousels/Carousels'))
const Collapses = lazy(() => import('./views/components/base/collapses/Collapses'))
const ListGroups = lazy(() => import('./views/components/base/list-groups/ListGroups'))
const Navs = lazy(() => import('./views/components/base/navs/Navs'))
const Paginations = lazy(() => import('./views/components/base/paginations/Paginations'))
const Popovers = lazy(() => import('./views/components/base/popovers/Popovers'))
const Progress = lazy(() => import('./views/components/base/progress/Progress'))
const Spinners = lazy(() => import('./views/components/base/spinners/Spinners'))

const Users = lazy(() => import('./views/components/base/user/Users'))
const Drivers = lazy(() => import('./views/components/base/driver/Drivers'))
const Orders = lazy(() => import('./views/components/base/order/Orders'))
const Tooltips = lazy(() => import('./views/components/base/tooltips/Tooltips'))

const Buttons = lazy(() => import('./views/components/buttons/buttons/Buttons'))
const ButtonGroups = lazy(() => import('./views/components/buttons/button-groups/ButtonGroups'))
const Dropdowns = lazy(() => import('./views/components/buttons/dropdowns/Dropdowns'))

const ChecksRadios = lazy(() => import('./views/components/forms/checks-radios/ChecksRadios'))
const FloatingLabels = lazy(() => import('./views/components/forms/floating-labels/FloatingLabels'))
const FormControl = lazy(() => import('./views/components/forms/form-control/FormControl'))
const InputGroup = lazy(() => import('./views/components/forms/input-group/InputGroup'))
const Layout = lazy(() => import('./views/components/forms/layout/Layout'))
const Range = lazy(() => import('./views/components/forms/range/Range'))
const Select = lazy(() => import('./views/components/forms/select/Select'))
const Validation = lazy(() => import('./views/components/forms/validation/Validation'))

const CoreUIIcons = lazy(() => import('./views/components/icons/coreui-icons/CoreUIIcons'))
const Flags = lazy(() => import('./views/components/icons/flags/Flags'))
const Brands = lazy(() => import('./views/components/icons/brands/Brands'))

const Alerts = lazy(() => import('./views/components/notifications/alerts/Alerts'))
const Badges = lazy(() => import('./views/components/notifications/badges/Badges'))
const Modals = lazy(() => import('./views/components/notifications/modals/Modals'))
const Toasts = lazy(() => import('./views/components/notifications/toasts/Toasts'))

// const Login = lazy(() => import('./views/examples/pages/login/Login'))
// const Register = lazy(() => import('./views/examples/pages/register/Register'))
// const Page404 = lazy(() => import('./views/examples/pages/page404/Page404'))
// const Page500 = lazy(() => import('./views/examples/pages/page500/Page500'))

const Widgets = lazy(() => import('./views/components/widgets/Widgets'))

const Charts = lazy(() => import('./views/components/charts/Charts'))
const Dashboard = lazy(() => import('./views/dashboard/Dashboard'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', component: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress', name: 'Progress', component: Progress },
  { path: '/base/spinners', name: 'Spinners', component: Spinners },
  { path: '/base/driver', name: 'Drivers', component: Drivers },
  { path: '/base/user', name: 'Users', component: Users },
  { path: '/base/order', name: 'Orders', component: Orders },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/forms', name: 'Forms', component: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', component: FormControl },
  { path: '/forms/select', name: 'Select', component: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', component: ChecksRadios },
  { path: '/forms/range', name: 'Range', component: Range },
  { path: '/forms/input-group', name: 'Input Group', component: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', component: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', component: Layout },
  { path: '/forms/validation', name: 'Validation', component: Validation },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toasts', name: 'Toasts', component: Toasts },
  // { path: '/login', name: 'Login', component: Login },
  // { path: '/register', name: 'Register', component: Register },
  // { path: '/404', name: '404', component: Page404 },
  // { path: '/500', name: '500', component: Page500 },
  { path: '/widgets', name: 'Widgets', component: Widgets },
]

export default routes
