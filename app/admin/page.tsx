'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Dashboard from './Dashboard';

export default function ProtectedDashboard() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('admin-auth') !== 'ok') {
      router.replace('/admin/login');
    }
  }, []);

  return <Dashboard />;
}
