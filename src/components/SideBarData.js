import React from 'react';
import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
    {
      title: 'Home',
      path: '/',
      icon: <FaIcons.FaHome />,
      cName: 'nav-text'
    },
    {
      title: 'About',
      path: '/about',
      icon: <FaIcons.FaInfoCircle />,
      cName: 'nav-text'
    },
    {
      title: 'Products',
      path: '/products',
      icon: <FaIcons.FaLaptop />,
      cName: 'nav-text'
    },
    {
      title: 'Cart',
      path: '/cart',
      icon: <FaIcons.FaCartPlus />,
      cName: 'nav-text'
    },
    {
      title: 'Contact',
      path: '/contact',
      icon: <FaIcons.FaAddressCard />,
      cName: 'nav-text'
      },
  ];