declare global {
  interface Window {
    __controlsTest?: {
      getYaw: () => number;
      getSpeed: () => number;
      setKeys: (codes: string[]) => void;
      getFace?: () => number;
    };
    __vs?: any;
    __hollow?: any;
  }
}

export {};
