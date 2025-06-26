export interface Component {
  id: string;
  type: string;
  name: string;
  icon: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  props: Record<string, any>;
  children?: Component[];
}

export interface ComponentTemplate {
  type: string;
  name: string;
  icon: string;
  category: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultProps: Record<string, any>;
}

export interface Page {
  id: string;
  name: string;
  components: Component[];
}
