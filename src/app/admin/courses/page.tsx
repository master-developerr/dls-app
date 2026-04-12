import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Edit, Trash2 } from "lucide-react";

export default function AdminCourses() {
  const courses = [
    { id: 1, name: "NEET Target 2026", duration: "1 Year", mode: "Hybrid" },
    { id: 2, name: "JEE Main & Advanced", duration: "1 Year", mode: "Offline" },
    { id: 3, name: "Foundation Program", duration: "2 Years", mode: "Hybrid" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Course Management</h1>
          <p className="text-muted-foreground">Add and manage application programs.</p>
        </div>
        <Button className="bg-primary text-white hover:bg-primary/90">
          <Plus className="w-4 h-4 mr-2" /> Add Course
        </Button>
      </div>

      <Card className="bg-card border-border">
        <CardContent className="p-0">
          <div className="overflow-x-auto rounded-md">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted text-muted-foreground border-b border-border font-medium">
                <tr>
                  <th className="px-6 py-4 uppercase text-xs">Course Name</th>
                  <th className="px-6 py-4 uppercase text-xs">Duration</th>
                  <th className="px-6 py-4 uppercase text-xs">Mode</th>
                  <th className="px-6 py-4 uppercase text-xs text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {courses.map((course) => (
                  <tr key={course.id} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-foreground">{course.name}</td>
                    <td className="px-6 py-4 text-muted-foreground">{course.duration}</td>
                    <td className="px-6 py-4 text-muted-foreground">{course.mode}</td>
                    <td className="px-6 py-4 text-right flex justify-end gap-2">
                      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary"><Edit className="w-4 h-4" /></Button>
                      <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive"><Trash2 className="w-4 h-4" /></Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
