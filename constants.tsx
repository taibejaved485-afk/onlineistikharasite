
import { NavItem } from './types';

export const MENU_DATA: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Blogs', href: '#blogs-section' },
  { label: 'Pregnancy', href: '#pregnancy-page' },
  {
    label: 'Islamic Taweez',
    href: '#taweez-page',
    children: [
      { label: 'Wazaif', href: '#taweez-wazaif' },
      { label: 'Mohabbat', href: '#taweez-mohabbat' },
      { label: 'Sehat', href: '#taweez-sehat' },
      { label: 'Jadu ka tor', href: '#taweez-jadu' },
      { label: 'Kamyabi', href: '#taweez-kamyabi' },
      { label: 'Rizq', href: '#taweez-rizq' },
      { label: 'Hamal', href: '#taweez-hamal' },
      { label: 'Amazing', href: '#taweez-amazing' },
    ]
  },
  {
    label: 'Talismans',
    href: '#talismans-page',
    children: [
      { label: 'Success', href: '#talisman-success' },
      { label: 'Love', href: '#talisman-love' },
      { label: 'Black Magic', href: '#talisman-magic' },
      { label: 'Karobar', href: '#talisman-business' },
      { label: 'Pregnancy', href: '#talisman-pregnancy' },
      { label: 'Pray Request', href: '#talisman-pray' },
      { label: 'Get Ism-e-Azam', href: '#talisman-ismeazam' },
      { label: 'Guidance', href: '#talisman-guidance' },
      { label: 'Istikhara Consultation', href: '#talisman-istikhara' },
    ]
  },
  { label: 'Spiritual Counseling', href: '#counseling-page' },
];
