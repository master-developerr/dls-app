import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Plus, Edit, Trash2 } from "lucide-react";

export default function AdminContent() {
  const testimonials = [
    { id: 1, name: "Sneha P", role: "Student (NEET)", content: "DLS transformed my prep strategy..." },
    { id: 2, name: "Ramesh K", role: "Parent", content: "The faculty is extremely dedicated..." },
  ];

  const results = [
    { id: 1, name: "Arjun K", exam: "NEET", rank: "AIR 45", year: 2025 },
    { id: 2, name: "Meenakshi S", exam: "JEE Adv", rank: "AIR 112", year: 2025 },
  ];

  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">Content Management</h1>
        <p className="text-muted-foreground">Manage testimonials and student results.</p>
      </div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-foreground">Manage Testimonials</h2>
          <Button variant="outline" size="sm" className="border-border text-foreground"><Plus className="w-4 h-4 mr-1" /> Add Testimonial</Button>
        </div>
        <Card className="bg-card border-border">
          <CardContent className="p-0">
            <div className="overflow-x-auto rounded-md">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-muted-foreground border-b border-border font-medium">
                  <tr>
                    <th className="px-6 py-4 uppercase text-xs">Name</th>
                    <th className="px-6 py-4 uppercase text-xs">Role</th>
                    <th className="px-6 py-4 uppercase text-xs">Content Snippet</th>
                    <th className="px-6 py-4 uppercase text-xs text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {testimonials.map((t) => (
                    <tr key={t.id} className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-foreground">{t.name}</td>
                      <td className="px-6 py-4 text-muted-foreground">{t.role}</td>
                      <td className="px-6 py-4 text-muted-foreground truncate max-w-xs">{t.content}</td>
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

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-foreground">Manage Results (Hall of Fame)</h2>
          <Button variant="outline" size="sm" className="border-border text-foreground"><Plus className="w-4 h-4 mr-1" /> Add Result</Button>
        </div>
        <Card className="bg-card border-border">
          <CardContent className="p-0">
            <div className="overflow-x-auto rounded-md">
              <table className="w-full text-sm text-left">
                <thead className="bg-muted text-muted-foreground border-b border-border font-medium">
                  <tr>
                    <th className="px-6 py-4 uppercase text-xs">Student Name</th>
                    <th className="px-6 py-4 uppercase text-xs">Exam</th>
                    <th className="px-6 py-4 uppercase text-xs">Rank</th>
                    <th className="px-6 py-4 uppercase text-xs">Year</th>
                    <th className="px-6 py-4 uppercase text-xs text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {results.map((r) => (
                    <tr key={r.id} className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4 font-semibold text-foreground">{r.name}</td>
                      <td className="px-6 py-4 text-primary font-medium">{r.exam}</td>
                      <td className="px-6 py-4 font-bold text-foreground">{r.rank}</td>
                      <td className="px-6 py-4 text-muted-foreground">{r.year}</td>
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
    </div>
  );
}
