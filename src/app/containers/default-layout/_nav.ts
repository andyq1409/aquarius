import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/aqua/dashboard',
    iconComponent: { name: 'cil-speedometer' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Theme'
  },
  {
    name: 'Colors',
    url: '/aqua/theme/colors',
    iconComponent: { name: 'cil-drop' }
  },
  {
    name: 'Typography',
    url: '/aqua/theme/typography',
    linkProps: { fragment: 'someAnchor' },
    iconComponent: { name: 'cil-pencil' }
  },
  {
    name: 'Components',
    title: true
  },
  {
    name: 'Base',
    url: '/aqua/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Accordion',
        url: '/aqua/base/accordion'
      },
      {
        name: 'Breadcrumbs',
        url: '/aqua/base/breadcrumbs'
      },
      {
        name: 'Cards',
        url: '/aqua/base/cards'
      },
      {
        name: 'Carousel',
        url: '/aqua/base/carousel'
      },
      {
        name: 'Collapse',
        url: '/aqua/base/collapse'
      },
      {
        name: 'List Group',
        url: '/aqua/base/list-group'
      },
      {
        name: 'Navs & Tabs',
        url: '/aqua/base/navs'
      },
      {
        name: 'Pagination',
        url: '/aqua/base/pagination'
      },
      {
        name: 'Placeholder',
        url: '/aqua/base/placeholder'
      },
      {
        name: 'Popovers',
        url: '/aqua/base/popovers'
      },
      {
        name: 'Progress',
        url: '/aqua/base/progress'
      },
      {
        name: 'Spinners',
        url: '/aqua/base/spinners'
      },
      {
        name: 'Tables',
        url: '/aqua/base/tables'
      },
      {
        name: 'Tabs',
        url: '/aqua/base/tabs'
      },
      {
        name: 'Tooltips',
        url: '/aqua/base/tooltips'
      }
    ]
  },
  {
    name: 'Buttons',
    url: '/aqua/buttons',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Buttons',
        url: '/aqua/buttons/buttons'
      },
      {
        name: 'Button groups',
        url: '/aqua/buttons/button-groups'
      },
      {
        name: 'Dropdowns',
        url: '/aqua/buttons/dropdowns'
      },
    ]
  },
  {
    name: 'Forms',
    url: '/aqua/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Form Control',
        url: '/aqua/forms/form-control'
      },
      {
        name: 'Select',
        url: '/aqua/forms/select'
      },
      {
        name: 'Checks & Radios',
        url: '/aqua/forms/checks-radios'
      },
      {
        name: 'Range',
        url: '/aqua/forms/range'
      },
      {
        name: 'Input Group',
        url: '/aqua/forms/input-group'
      },
      {
        name: 'Floating Labels',
        url: '/aqua/forms/floating-labels'
      },
      {
        name: 'Layout',
        url: '/aqua/forms/layout'
      },
      {
        name: 'Validation',
        url: '/aqua/forms/validation'
      }
    ]
  },
  {
    name: 'Charts',
    url: '/aqua/charts',
    iconComponent: { name: 'cil-chart-pie' }
  },
  {
    name: 'Icons',
    iconComponent: { name: 'cil-star' },
    url: '/aqua/icons',
    children: [
      {
        name: 'CoreUI Free',
        url: '/aqua/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'FREE'
        }
      },
      {
        name: 'CoreUI Flags',
        url: '/aqua/icons/flags'
      },
      {
        name: 'CoreUI Brands',
        url: '/aqua/icons/brands'
      }
    ]
  },
  {
    name: 'Notifications',
    url: '/aqua/notifications',
    iconComponent: { name: 'cil-bell' },
    children: [
      {
        name: 'Alerts',
        url: '/aqua/notifications/alerts'
      },
      {
        name: 'Badges',
        url: '/aqua/notifications/badges'
      },
      {
        name: 'Modal',
        url: '/aqua/notifications/modal'
      },
      {
        name: 'Toast',
        url: '/aqua/notifications/toasts'
      }
    ]
  },
  {
    name: 'Widgets',
    url: '/aqua/widgets',
    iconComponent: { name: 'cil-calculator' },
    badge: {
      color: 'info',
      text: 'NEW'
    }
  },
  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login'
      },
      {
        name: 'Register',
        url: '/register'
      },
      {
        name: 'Error 404',
        url: '/404'
      },
      {
        name: 'Error 500',
        url: '/500'
      }
    ]
  },
];
