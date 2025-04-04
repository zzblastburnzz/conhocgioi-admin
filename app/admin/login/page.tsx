import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const AdminLogin = () => {
  const [password, setPassword] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('admin-auth') === 'ok') {
      router.replace('/admin');
    }
  }, []);

  const handleLogin = () => {
    if (password === 'conhocgioi2024') {
      localStorage.setItem('admin-auth', 'ok');
      router.replace('/admin');
    } else {
      alert('Sai mật khẩu nha 😢');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4 text-center">🔐 Đăng nhập quản trị</h2>
        <Input
          placeholder="Nhập mật khẩu..."
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="mt-4 w-full" onClick={handleLogin}>
          Đăng nhập
        </Button>
      </div>
    </div>
  );
};

export default AdminLogin;
