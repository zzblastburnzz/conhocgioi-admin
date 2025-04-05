"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Pencil, Trash2, PlusCircle } from "lucide-react";

const initialPosts = [
  { id: "1", title: "Làm sao giúp trẻ tập trung học?", content: "Giữ thời gian học ngắn, nhiều hình ảnh sinh động." },
  { id: "2", title: "Lịch sinh hoạt lý tưởng cho bé 5 tuổi", content: "Ngủ đủ 10 tiếng, chơi ngoài trời ít nhất 1 giờ." },
];

const PostManager = () => {
  const [posts, setPosts] = useState(initialPosts);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleAdd = () => {
    if (title.trim() && content.trim()) {
      const newPost = {
        id: Date.now().toString(),
        title,
        content,
      };
      setPosts([newPost, ...posts]);
      setTitle("");
      setContent("");
    }
  };

  const handleDelete = (id: string) => {
    setPosts(posts.filter((p) => p.id !== id));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Quản lý bài viết phụ huynh</h1>

      <div className="grid gap-4 mb-6">
        <Input placeholder="Tiêu đề bài viết..." value={title} onChange={(e) => setTitle(e.target.value)} />
        <Textarea placeholder="Nội dung bài viết..." value={content} onChange={(e) => setContent(e.target.value)} rows={4} />
        <Button onClick={handleAdd}>
          <PlusCircle className="w-4 h-4 mr-2" /> Thêm bài viết
        </Button>
      </div>

      <div className="grid gap-4">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardContent className="p-4">
              <h2 className="text-lg font-semibold mb-1">{post.title}</h2>
              <p className="text-sm text-gray-700 mb-2 whitespace-pre-wrap">{post.content}</p>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button variant="destructive" size="icon" onClick={() => handleDelete(post.id)}>
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PostManager;
