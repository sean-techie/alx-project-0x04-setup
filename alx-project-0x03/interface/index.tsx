// For pages/index.tsx
export interface PageRouteProps {
  pageRoute: string;
}

// For components/common/Button.tsx
export interface ButtonProps {
  action: () => void;
  buttonLabel: string;
  buttonBackgroundColor: string;
}

// For components/layouts/Layout.tsx
export interface LayoutProps {
  children: React.ReactNode;
}
