// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import 'jest-styled-components';

const originalWarn = console.warn;

beforeAll(() => {
  jest.spyOn(console, 'warn').mockImplementation((msg?: any, ...args: any[]) => {
    if (typeof msg === 'string' && msg.includes('React Router Future Flag Warning')) {
      return;
    }

    originalWarn(msg, ...args);
  });
});

afterAll(() => {
  (console.warn as jest.Mock | undefined)?.mockRestore?.();
});
