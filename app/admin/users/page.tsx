import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const sampleUsers = [
  {
    id: "u001",
    parent: "0901123456",
    children: [
      { name: "Bé An", totalLessons: 30, completed: 28 },
      { name: "Bé Bo", totalLessons: 20, completed: 15 },
    ],
  },
  {
    id: "u002",
    parent: "0909988776",
    children: [
      { name: "Bé Minh", totalLessons: 40, completed: 40 },
    ],
  },
];

const UserProgressManager = () => {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Tiến độ học tập người dùng</h1>

      <div className="grid gap-4">
        {sampleUsers.map((user) => (
          <Card key={user.id}>
            <CardContent className="p-4">
              <h2 className="font-semibold text-lg mb-2">📱 Phụ huynh: {user.parent}</h2>
              {user.children.map((child, index) => (
                <div key={index} className="ml-4 mb-2">
                  <p className="text-sm">
                    👧 {child.name} – Hoàn thành {child.completed}/{child.totalLessons} bài học
                  </p>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-green-500"
                      style={{ width: `${(child.completed / child.totalLessons) * 100}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default UserProgressManager;
