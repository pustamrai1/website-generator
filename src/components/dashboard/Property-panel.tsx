"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Component } from "@/lib/types";
import { X } from "lucide-react";

interface PropertyPanelProps {
  component: Component | null;
  onUpdateComponent: (component: Component) => void;
  onClose: () => void;
}

export function PropertyPanel({
  component,
  onUpdateComponent,
  onClose,
}: PropertyPanelProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [localProps, setLocalProps] = useState<Record<string, any>>({});

  useEffect(() => {
    if (component) {
      setLocalProps(component.props);
    }
  }, [component]);

  if (!component) return null;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handlePropChange = (key: string, value: any) => {
    const newProps = { ...localProps, [key]: value };
    setLocalProps(newProps);
    onUpdateComponent({ ...component, props: newProps });
  };

  const renderPropertyInputs = () => {
    switch (component.type) {
      case "header":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="text">Text</Label>
              <Input
                id="text"
                value={localProps.text || ""}
                onChange={(e) => handlePropChange("text", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="size">Size</Label>
              <Select
                value={localProps.size}
                onValueChange={(value) => handlePropChange("size", value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="h1">H1</SelectItem>
                  <SelectItem value="h2">H2</SelectItem>
                  <SelectItem value="h3">H3</SelectItem>
                  <SelectItem value="h4">H4</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="color">Color</Label>
              <Input
                id="color"
                type="color"
                value={localProps.color || "#000000"}
                onChange={(e) => handlePropChange("color", e.target.value)}
              />
            </div>
          </div>
        );

      case "text":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="text">Text</Label>
              <Textarea
                id="text"
                value={localProps.text || ""}
                onChange={(e) => handlePropChange("text", e.target.value)}
                rows={4}
              />
            </div>
            <div>
              <Label htmlFor="color">Color</Label>
              <Input
                id="color"
                type="color"
                value={localProps.color || "#666666"}
                onChange={(e) => handlePropChange("color", e.target.value)}
              />
            </div>
          </div>
        );

      case "button":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="text">Button Text</Label>
              <Input
                id="text"
                value={localProps.text || ""}
                onChange={(e) => handlePropChange("text", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="variant">Style</Label>
              <Select
                value={localProps.variant}
                onValueChange={(value) => handlePropChange("variant", value)}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="destructive">Destructive</SelectItem>
                  <SelectItem value="outline">Outline</SelectItem>
                  <SelectItem value="secondary">Secondary</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        );

      case "image":
        return (
          <div className="space-y-4">
            <div>
              <Label htmlFor="src">Image URL</Label>
              <Input
                id="src"
                value={localProps.src || ""}
                onChange={(e) => handlePropChange("src", e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="alt">Alt Text</Label>
              <Input
                id="alt"
                value={localProps.alt || ""}
                onChange={(e) => handlePropChange("alt", e.target.value)}
              />
            </div>
          </div>
        );

      default:
        return <div>No properties available for this component.</div>;
    }
  };

  return (
    <Card className="w-80 border-l">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
          Edit {component.name || component.type}
        </CardTitle>
        <Button
          variant="ghost"
          size="sm"
          onClick={onClose}
          className="h-6 w-6 p-0"
        >
          <X className="h-4 w-4" />
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">{renderPropertyInputs()}</CardContent>
    </Card>
  );
}
