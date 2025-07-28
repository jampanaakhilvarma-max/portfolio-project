/// <reference types="vite/client" />

declare namespace JSX {
  interface IntrinsicElements {
    'n8nchatui-inpage': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
  }
}

declare global {
  interface Window {
    Chatbot: {
      init: (config: any) => void;
      initFull: (config: any) => void;
    };
  }
}
