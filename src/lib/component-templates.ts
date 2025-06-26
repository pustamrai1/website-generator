import type { ComponentTemplate } from "./types";

export const componentTemplates: ComponentTemplate[] = [
  {
    type: "header",
    name: "Header",
    icon: "Type",
    category: "Layout",
    defaultProps: {
      text: "Your Header Text",
      size: "h1",
      align: "left",
      color: "#000000",
    },
  },
  {
    type: "text",
    name: "Text Block",
    icon: "AlignLeft",
    category: "Content",
    defaultProps: {
      text: "Edit this text...",
      size: "base",
      align: "left",
      color: "#666666",
    },
  },
  {
    type: "button",
    name: "Button",
    icon: "MousePointer",
    category: "Interactive",
    defaultProps: {
      text: "Click Me",
      variant: "default",
      size: "md",
      href: "#",
    },
  },
  {
    type: "image",
    name: "Image",
    icon: "ImageIcon",
    category: "Media",
    defaultProps: {
      src: "/placeholder.svg?height=200&width=300",
      alt: "Placeholder image",
      width: 300,
      height: 200,
    },
  },
  {
    type: "container",
    name: "Container",
    icon: "Square",
    category: "Layout",
    defaultProps: {
      padding: "4",
      margin: "2",
      backgroundColor: "#f8f9fa",
      borderRadius: "8",
    },
  },
  {
    type: "hero",
    name: "Hero Section",
    icon: "Monitor",
    category: "Sections",
    defaultProps: {
      title: "Welcome to Our Website",
      subtitle: "Create amazing experiences with our platform",
      buttonText: "Get Started",
      backgroundImage: "/placeholder.svg?height=400&width=800",
    },
  },
];
