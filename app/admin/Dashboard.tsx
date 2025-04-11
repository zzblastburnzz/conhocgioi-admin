import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LayoutGrid, BookOpenCheck, BellRing, Megaphone, User2 } from "lucide-react";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();

  const modules = [
    {
      title: "Quản lý khóa học",
      icon: <LayoutGrid className="w-6 h-6" />,
      description: "Thêm, sửa bài học và kho dữ liệu.",
      href: "/admin/courses",
    },
    {
      title: "Bài viết cho phụ huynh",
      icon: <BookOpenCheck className="w-6 h-6" />,
      description: "Tạo và chỉnh sửa bài viết hữu ích.",
      href: "/admin/posts",
    },
    {
      title: "Thông báo & Marketing",
      icon: <Megaphone className="w-6 h-6" />,
      description: "Gửi thông báo, sự kiện, sticker thưởng.",
      href: "/admin/notifications",
    },
    {
      title: "Tiến độ người dùng",
      icon: <User2 className="w-6 h-6" />,
      description: "Xem hoạt động của phụ huynh và bé.",
      href: "/admin/users",
    },
    {
      title: "Push Notification",
      icon: <BellRing className="w-6 h-6" />,
      description: "Gửi thông báo đến thiết bị người dùng.",
      href: "/admin/notifications",
    },
  ];

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {modules.map((mod) => (
        <Card key={mod.title} className="hover:shadow-xl">
          <CardContent className="p-4 flex flex-col items-start">
            <div className="p-2 bg-blue-100 rounded-xl mb-2">{mod.icon}</div>
            <h3 className="text-lg font-semibold mb-1">{mod.title}</h3>
            <p className="text-sm text-gray-500 mb-4">{mod.description}</p>
            <Button onClick={() => router.push(mod.href)}>Đi đến</Button>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Dashboard;
