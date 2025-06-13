'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navigation = () => {
  const pathname = usePathname();

  const links = [
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/rekap', label: 'Rekap' },
  ];

  return (
    <nav className="flex gap-4 mb-6 border-b pb-2">
      {links.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`px-3 py-1 rounded-md ${
            pathname === href
              ? 'bg-blue-600 text-white'
              : 'text-blue-600 hover:bg-blue-100'
          }`}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
