import React from 'react';
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
    {
      title: 'Home',
      path: '/',
      icon: <FaIcons.FaHome />,
    },
    {
      title: 'About',
      path: '/about',
      icon: <FaIcons.FaInfoCircle />,
    },
    {
      title: 'Products',
      path: '/products',
      icon: <FaIcons.FaLaptop />,
    },
    {
      title: 'Cart',
      path: '/cart',
      icon: <FaIcons.FaCartPlus />,
    },
    {
      title: 'Contact',
      path: '/contact',
      icon: <FaIcons.FaAddressCard />,
      },
  ];