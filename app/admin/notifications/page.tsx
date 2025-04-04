import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Send, Trash2 } from "lucide-react";

const initialNotifs = [
  { id: "1", title: "Chúc mừng năm mới!", message: "Tặng bạn sticker mới siêu dễ thương!" },
  { id: "2", title: "Cập nhật nội dung học", message: "Đã thêm 50 câu hỏi Toán mới cho bé!" },
];

const NotificationManager = () => {
  const [notifs, setNotifs] = useState(initialNotifs);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (title.trim() && message.trim()) {
      const newNotif = {
        id: Date.now().toString(),
        title,
        message,
      };
      setNotifs([newNotif, ...notifs]);
      setTitle("");
      setMessage("");
    }
  };

  const handleDelete = (id: string) => {
    setNotifs(notifs.filter((n) => n.id !== id));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Gửi thông báo & tin nhắn marketing</h1>

      <div className="grid gap-4 mb-6">
        <Input placeholder="Tiêu đề thông báo..." value={title} onChange={(e) => setTitle(e.target.value)} />
        <Textarea placeholder="Nội dung thông báo..." value={message} onChange={(e) => setMessage(e.target.value)} rows={4} />
        <Button onClick={handleSend}>
          <Send className="w-4 h-4 mr-2" /> Gửi thông báo
        </Button>
      </div>

      <div className="grid gap-4">
        {notifs.map((n) => (
          <Card key={n.id}>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-1">{n.title}</h2>
              <p className="text-sm text-gray-700 mb-2 whitespace-pre-wrap">{n.message}</p>
              <Button variant="destructive" size="icon" onClick={() => handleDelete(n.id)}>
                <Trash2 className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default NotificationManager;
