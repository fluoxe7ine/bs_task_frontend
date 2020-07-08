import { SetStateAction, Dispatch } from 'react';

export type Resolution = { width: number, height: number };
export type Listener = Dispatch<SetStateAction<Resolution>>;

export class ResizeProvider {
  private static instance: ResizeProvider;

  private listeners: Listener[];

  private constructor() {
    this.listeners = [];
    window.addEventListener('resize', this.onResize);
  }

  public static getInstance(): ResizeProvider {
    if (!ResizeProvider.instance) {
      ResizeProvider.instance = new ResizeProvider();
    }

    return ResizeProvider.instance;
  }

  addListener = (listener: Listener) => {
    if (!this.listeners.includes(listener)) {
      this.listeners.push(listener);
    }
  };

  onResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.listeners.forEach((listener) => {
      listener({ width, height });
    });
  };
}
