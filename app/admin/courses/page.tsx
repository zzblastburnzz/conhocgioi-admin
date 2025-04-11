"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Pencil, Trash2, PlusCircle } from "lucide-react";

const initialCourses = [
  { id: "math", title: "Toán học", lessons: 120 },
  { id: "alphabet", title: "Chữ cái", lessons: 35 },
  { id: "syllable", title: "Ghép vần", lessons: 52 },
];

const CourseManager = () => {
  const [courses, setCourses] = useState(initialCourses);
  const [newTitle, setNewTitle] = useState("");

  const handleAdd = () => {
    if (newTitle.trim()) {
      const newCourse = {
        id: newTitle.toLowerCase().replace(/ /g, "-"),
        title: newTitle,
        lessons: 0,
      };
      setCourses([newCourse, ...courses]);
      setNewTitle("");
    }
  };

  const handleDelete = (id: string) => {
    setCourses(courses.filter((c) => c.id !== id));
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Quản lý khóa học</h1>

      <div className="flex gap-2 mb-6">
        <Input
          placeholder="Tên khóa học mới..."
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <Button onClick={handleAdd}>
          <PlusCircle className="w-4 h-4 mr-2" /> Thêm
        </Button>
      </div>

      <div className="grid gap-4">
        {courses.map((course) => (
          <Card key={course.id}>
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold">{course.title}</h2>
                <p className="text-sm text-gray-500">{course.lessons} bài học</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="icon">
                  <Pencil className="w-4 h-4" />
                </Button>
                <Button variant="destructive" size="icon" onClick={() => handleDelete(course.id)}>
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

export default CourseManager;
