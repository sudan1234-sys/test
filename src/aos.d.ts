declare module 'aos' {
  interface AosOptions {
    duration?: number;
    once?: boolean;
    offset?: number;
    easing?: string;
    delay?: number;
  }

  function init(options?: AosOptions): void;
  function refresh(): void;
  function refreshHard(): void;
}
