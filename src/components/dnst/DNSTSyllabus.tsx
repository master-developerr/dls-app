"use client";

import { useState } from "react";
import { BookOpen, Info, FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { DNST_SYLLABUS_CLASSES, DNSTSyllabusClass } from "@/lib/dnst-data";

export function DNSTSyllabus() {
  const [selectedClassId, setSelectedClassId] = useState<string>("class-1");

  const selectedClass =
    DNST_SYLLABUS_CLASSES.find((c) => c.classId === selectedClassId) ||
    DNST_SYLLABUS_CLASSES[0];

  return (
    <div className="bg-surface rounded-2xl border border-border p-6 md:p-8 shadow-xs">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-6 border-b border-border-light">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <BookOpen className="w-5 h-5 text-accent" />
            <h3 className="text-xl md:text-2xl font-serif font-semibold text-text-primary">
              Class-Wise Examination Syllabus
            </h3>
          </div>
          <p className="text-sm text-text-secondary">
            Select a class (Class I to Class XII) to view official examination topics and guidelines.
          </p>
        </div>
        <Badge variant="outline" className="border-accent/30 text-accent bg-accent-light/50 w-fit text-xs">
          Classes I – XII Available
        </Badge>
      </div>

      {/* Class Selector Scroll / Grid */}
      <div className="flex flex-wrap gap-2 mb-8">
        {DNST_SYLLABUS_CLASSES.map((item: DNSTSyllabusClass) => {
          const isSelected = item.classId === selectedClassId;
          return (
            <button
              key={item.classId}
              onClick={() => setSelectedClassId(item.classId)}
              className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all ${
                isSelected
                  ? "bg-accent text-accent-foreground shadow-xs font-semibold"
                  : "bg-surface-secondary text-text-primary hover:bg-surface-tertiary border border-border/60"
              }`}
            >
              {item.className}
            </button>
          );
        })}
      </div>

      {/* Selected Class Syllabus Display */}
      <div className="bg-background rounded-xl border border-border p-6 md:p-8 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border-light pb-4">
          <div className="flex items-center gap-3">
            <h4 className="text-xl font-serif font-bold text-text-primary">
              {selectedClass.className} Syllabus Overview
            </h4>
            <Badge className="bg-surface text-text-secondary border border-border text-xs">
              {selectedClass.category} Stage
            </Badge>
          </div>
        </div>

        {/* Syllabus Content / Placeholder State */}
        <div className="py-8 text-center space-y-3">
          <div className="w-12 h-12 rounded-full bg-accent-light text-accent flex items-center justify-center mx-auto">
            <FileText className="w-6 h-6" />
          </div>
          <p className="text-lg font-serif font-medium text-text-primary">
            {selectedClass.placeholderText}
          </p>
          <p className="text-sm text-text-muted max-w-md mx-auto">
            The detailed chapter-wise curriculum break-up and subject guidelines for {selectedClass.className} will be published shortly before the examination schedule.
          </p>
          <div className="inline-flex items-center gap-1.5 text-xs text-text-secondary bg-surface px-3 py-1.5 rounded-full border border-border-light mt-2">
            <Info className="w-3.5 h-3.5 text-accent" />
            <span>Structure ready for immediate update upon official release</span>
          </div>
        </div>
      </div>
    </div>
  );
}
