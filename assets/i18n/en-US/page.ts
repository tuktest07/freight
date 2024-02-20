export default {
  page: [
    {
      title: 'System Configuration',
      open: false,
      menuIcon: 'icon icon-console',
      children: [
        {
          title: 'Role', path: '', linkType: 'routerLink',
          menuIcon: 'icon icon-console'
        },
        {
          title: 'Menu', path: '', linkType: 'routerLink',
          menuIcon: 'icon icon-console'
        },
      ],
    },
    {
      title: 'Data Configuration',
      open: false,
      menuIcon: 'icon icon-console',
      children: [
        {
          title: 'Charge Type', path: '', linkType: 'routerLink',
          menuIcon: 'icon icon-console'
        },
        {
          title: 'Port', path: '', linkType: 'routerLink',
          menuIcon: 'icon icon-console'
        },
        {
          title: 'Unit', path: '', linkType: 'routerLink',
          menuIcon: 'icon icon-console'
        },
        {
          title: 'Department', path: '', linkType: 'routerLink',
          menuIcon: 'icon icon-console'
        },
        {
          title: 'User', path: '', linkType: 'routerLink',
          menuIcon: 'icon icon-console'
        },
      ],
    },
    {
      title: 'Sea Freight',
      open: true,
      // menuIcon: 'icon icon-console',
      icon: 'sea-boat.svg',
      children: [
        { title: 'Inbound', path: 'sea-freight/inbound', linkType: 'routerLink', link: '/pages/main/sea-freight/inbound', icon: 'inbound.svg' },
        { title: 'Outbound', path: 'sea-freight/outbound', linkType: 'routerLink', link: '/pages/main/sea-freight/outbound', icon: 'outbound.svg' },
      ],
    },
    {
      title: 'Air Freight',
      open: true,
      // menuIcon: 'icon icon-console',
      icon: 'air-freight.svg',
      children: [
        { title: 'Inbound', path: 'air-freight/inbound', linkType: 'routerLink', link: '/pages/main/air-freight/inbound', icon: 'inbound.svg' },
        { title: 'Outbound', path: 'air-freight/outbound', linkType: 'routerLink', link: '/pages/main/air-freight/outbound', icon: 'outbound.svg' },
      ],
    },
    {
      title: 'Custom Clearance',
      // menuIcon: 'icon icon-console',
      icon: 'custom.svg',
      open: true,
      children: [
        { title: 'Inbound', path: 'inbound', linkType: 'routerLink', link: '/pages/main/custom-clearance/inbound', icon: 'inbound.svg' },
        { title: 'Outbound', path: '', linkType: 'routerLink', link: '/pages/main/custom-clearance/outbound', icon: 'outbound.svg' },
      ],
    },
  ],
};
