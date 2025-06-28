"use client";

import { useState, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Save,
  Eye,
  Smartphone,
  Monitor,
  Tablet,
  Undo,
  Redo,
  Settings,
} from "lucide-react";
import { ComponentLibrary } from "@/components/dashboard/Component-library";
// import { Canvas } from "@/components/canvas"
// import { PropertyPanel } from "@/components/property-panel"
import type { Component, ComponentTemplate, Page } from "@/lib/types";

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState<Page>({
    id: "1",
    name: "Home Page",
    components: [],
  });
  //   const [selectedComponent, setSelectedComponent] = useState<Component | null>(null)
  const [previewMode, setPreviewMode] = useState<
    "desktop" | "tablet" | "mobile"
  >("desktop");
  const [isPreview, setIsPreview] = useState(false);

  const generateId = () => Math.random().toString(36).substr(2, 9);

  const handleAddComponent = useCallback((template: ComponentTemplate) => {
    const newComponent: Component = {
      id: generateId(),
      type: template.type,
      name: template.name,
      icon: template.icon,
      props: { ...template.defaultProps },
    };

    setCurrentPage((prev) => ({
      ...prev,
      components: [...prev.components, newComponent],
    }));
  }, []);

  //   const handleSelectComponent = useCallback((component: Component | null) => {
  //     setSelectedComponent(component)
  //   }, [])

  //   const handleUpdateComponent = useCallback((updatedComponent: Component) => {
  //     setCurrentPage((prev) => ({
  //       ...prev,
  //       components: prev.components.map((comp) => (comp.id === updatedComponent.id ? updatedComponent : comp)),
  //     }))
  //     setSelectedComponent(updatedComponent)
  //   }, [])

  //   const handleDeleteComponent = useCallback((componentId: string) => {
  //     setCurrentPage((prev) => ({
  //       ...prev,
  //       components: prev.components.filter((comp) => comp.id !== componentId),
  //     }))
  //     setSelectedComponent(null)
  //   }, [])

  //   const handleReorderComponents = useCallback((components: Component[]) => {
  //     setCurrentPage((prev) => ({
  //       ...prev,
  //       components,
  //     }))
  //   }, [])

  //   const getPreviewWidth = () => {
  //     switch (previewMode) {
  //       case "mobile":
  //         return "max-w-sm"
  //       case "tablet":
  //         return "max-w-2xl"
  //       default:
  //         return "max-w-full"
  //     }
  //   }

  return (
    <div className="h-screen flex flex-col">
      {/* Top Toolbar */}
      <header className="border-b bg-white w-full py-2 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold">Web Builder</h1>
          <div className="flex items-center gap-2">
            <Input
              value={currentPage.name}
              onChange={(e) =>
                setCurrentPage((prev) => ({ ...prev, name: e.target.value }))
              }
              className="w-40"
            />
            <Badge variant="secondary">Draft</Badge>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex items-center border rounded-md">
            <Button
              variant={previewMode === "desktop" ? "default" : "ghost"}
              size="sm"
              onClick={() => setPreviewMode("desktop")}
              className="rounded-r-none"
            >
              <Monitor className="h-4 w-4" />
            </Button>
            <Button
              variant={previewMode === "tablet" ? "default" : "ghost"}
              size="sm"
              onClick={() => setPreviewMode("tablet")}
              className="rounded-none border-x"
            >
              <Tablet className="h-4 w-4" />
            </Button>
            <Button
              variant={previewMode === "mobile" ? "default" : "ghost"}
              size="sm"
              onClick={() => setPreviewMode("mobile")}
              className="rounded-l-none"
            >
              <Smartphone className="h-4 w-4" />
            </Button>
          </div>

          <Button variant="ghost" size="sm">
            <Undo className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Redo className="h-4 w-4" />
          </Button>
          <Button variant="ghost" size="sm">
            <Settings className="h-4 w-4" />
          </Button>

          <div className="h-4 w-px bg-border" />

          <Button
            variant={isPreview ? "default" : "outline"}
            size="sm"
            onClick={() => setIsPreview(!isPreview)}
          >
            <Eye className="h-4 w-4 mr-1" />
            Preview
          </Button>
          <Button size="sm">
            <Save className="h-4 w-4 mr-1" />
            Save
          </Button>
          <Button size="sm" className="bg-green-600 hover:bg-green-700">
            Publish
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {!isPreview && <ComponentLibrary onAddComponent={handleAddComponent} />}

        {/* <div className={`flex-1 ${getPreviewWidth()} mx-auto`}>
          <Canvas
            components={currentPage.components}
            selectedComponent={selectedComponent}
            onSelectComponent={handleSelectComponent}
            onUpdateComponent={handleUpdateComponent}
            onDeleteComponent={handleDeleteComponent}
            onReorderComponents={handleReorderComponents}
          />
        </div>

        {!isPreview && selectedComponent && (
          <PropertyPanel
            component={selectedComponent}
            onUpdateComponent={handleUpdateComponent}
            onClose={() => setSelectedComponent(null)}
          />
        )} */}
      </div>
    </div>
  );
}
