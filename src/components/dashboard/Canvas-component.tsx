"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Component } from "@/lib/types";
import { Trash2, Edit, Move } from "lucide-react";
import Image from "next/image";

interface CanvasComponentProps {
  component: Component;
  isSelected: boolean;
  onSelect: () => void;
  onDelete: () => void;
  onEdit: () => void;
  onDragStart: (e: React.DragEvent) => void;
}

export function CanvasComponent({
  component,
  isSelected,
  onSelect,
  onDelete,
  onEdit,
  onDragStart,
}: CanvasComponentProps) {
  const [isHovered, setIsHovered] = useState(false);

  const renderComponent = () => {
    switch (component.type) {
      //   case "header":
      //     const HeaderTag = component.props.size as keyof JSX.IntrinsicElements
      //     return (
      //       <HeaderTag className={`font-bold text-${component.props.align}`} style={{ color: component.props.color }}>
      //         {component.props.text}
      //       </HeaderTag>
      //     )

      case "text":
        return (
          <p
            className={`text-${component.props.size} text-${component.props.align}`}
            style={{ color: component.props.color }}
          >
            {component.props.text}
          </p>
        );

      case "button":
        return (
          <Button
            variant={component.props.variant}
            size={component.props.size}
            className="pointer-events-none"
          >
            {component.props.text}
          </Button>
        );

      case "image":
        return (
          <Image
            src={component.props.src || "/placeholder.svg"}
            alt={component.props.alt}
            width={component.props.width}
            height={component.props.height}
            className="rounded"
          />
        );

      case "container":
        return (
          <div
            className={`p-${component.props.padding} m-${component.props.margin} rounded-${component.props.borderRadius}`}
            style={{ backgroundColor: component.props.backgroundColor }}
          >
            <div className="text-center text-muted-foreground text-sm">
              Container - Drop components here
            </div>
          </div>
        );

      case "hero":
        return (
          <div
            className="relative p-12 text-center text-white rounded-lg"
            style={{
              backgroundImage: `url(${component.props.backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/40 rounded-lg" />
            <div className="relative z-10 space-y-4">
              <h1 className="text-4xl font-bold">{component.props.title}</h1>
              <p className="text-xl">{component.props.subtitle}</p>
              <Button size="lg" className="pointer-events-none">
                {component.props.buttonText}
              </Button>
            </div>
          </div>
        );

      default:
        return <div>Unknown component type</div>;
    }
  };

  return (
    <div
      className={`relative group ${isSelected ? "ring-2 ring-primary" : ""}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onSelect}
      draggable
      onDragStart={onDragStart}
    >
      {renderComponent()}

      {(isHovered || isSelected) && (
        <div className="absolute -top-2 -right-2 flex gap-1">
          <Button
            size="sm"
            variant="secondary"
            className="h-6 w-6 p-0 opacity-90"
            onClick={(e) => {
              e.stopPropagation();
              onEdit();
            }}
          >
            <Edit className="h-3 w-3" />
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="h-6 w-6 p-0 opacity-90 cursor-move"
          >
            <Move className="h-3 w-3" />
          </Button>
          <Button
            size="sm"
            variant="destructive"
            className="h-6 w-6 p-0 opacity-90"
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
          >
            <Trash2 className="h-3 w-3" />
          </Button>
        </div>
      )}
    </div>
  );
}
