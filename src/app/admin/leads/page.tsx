import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Download, Search, Filter } from "lucide-react";

export default function AdminLeads() {
  const leads = [
    { id: 1, name: "Arjun Kumar", phone: "+91 9876543210", course: "NEET Target", date: "Today, 10:30 AM", status: "New" },
    { id: 2, name: "Sarah John", phone: "+91 8765432109", course: "JEE Advanced", date: "Yesterday", status: "Contacted" },
    { id: 3, name: "Mohammed Ali", phone: "+91 7654321098", course: "Foundation", date: "Oct 15", status: "Enrolled" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Leads Management</h1>
          <p className="text-muted-foreground">Manage and track student inquiries.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white">
          <Download className="w-4 h-4 mr-2" /> Export CSV
        </Button>
      </div>

      <Card className="bg-card border-border">
        <CardContent className="p-4 sm:p-6 space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search students..." className="pl-10 bg-background border-border" />
            </div>
            <Button variant="outline" className="border-border text-foreground">
              <Filter className="w-4 h-4 mr-2" /> Filter
            </Button>
          </div>

          <div className="overflow-x-auto rounded-md border border-border">
            <table className="w-full text-sm text-left">
              <thead className="bg-muted text-muted-foreground border-b border-border font-medium">
                <tr>
                  <th className="px-6 py-4 uppercase text-xs">Name</th>
                  <th className="px-6 py-4 uppercase text-xs">Phone</th>
                  <th className="px-6 py-4 uppercase text-xs">Course</th>
                  <th className="px-6 py-4 uppercase text-xs">Date</th>
                  <th className="px-6 py-4 uppercase text-xs">Status</th>
                  <th className="px-6 py-4 uppercase text-xs text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {leads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-muted/50 transition-colors">
                    <td className="px-6 py-4 font-semibold text-foreground">{lead.name}</td>
                    <td className="px-6 py-4 text-muted-foreground">{lead.phone}</td>
                    <td className="px-6 py-4 text-muted-foreground">{lead.course}</td>
                    <td className="px-6 py-4 text-muted-foreground">{lead.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        lead.status === 'New' ? 'bg-green-500/10 text-green-500' :
                        lead.status === 'Contacted' ? 'bg-blue-500/10 text-blue-500' :
                        'bg-primary/10 text-primary'
                      }`}>
                        {lead.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <Button variant="ghost" size="sm" className="text-primary hover:text-primary hover:bg-primary/10">View</Button>
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
