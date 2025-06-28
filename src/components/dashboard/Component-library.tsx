"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Type,
  AlignLeft,
  MousePointer,
  ImageIcon,
  Square,
  Monitor,
  Search,
  Plus,
} from "lucide-react";
import { componentTemplates } from "@/lib/component-templates";
import type { ComponentTemplate } from "@/lib/types";

const iconMap = {
  Type,
  AlignLeft,
  MousePointer,
  ImageIcon,
  Square,
  Monitor,
} as const;

interface ComponentLibraryProps {
  onAddComponent: (template: ComponentTemplate) => void;
}

export function ComponentLibrary({ onAddComponent }: ComponentLibraryProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(componentTemplates.map((t) => t.category))),
  ];

  const filteredTemplates = componentTemplates.filter((template) => {
    const matchesSearch = template.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || template.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-80 border-r bg-muted/30 p-4 space-y-4">
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Components</h2>
        <div className="relative">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search components..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-8"
          />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex flex-wrap gap-1">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer text-xs"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </div>

      <div className="space-y-2 max-h-[calc(100vh-200px)] overflow-y-auto">
        {filteredTemplates.map((template) => {
          const IconComponent = iconMap[template.icon as keyof typeof iconMap];
          return (
            <Card
              key={template.type}
              className="cursor-pointer hover:shadow-md transition-shadow"
            >
              <CardContent className="p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <IconComponent className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{template.name}</span>
                  </div>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onAddComponent(template)}
                    className="h-6 w-6 p-0"
                  >
                    <Plus className="h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
