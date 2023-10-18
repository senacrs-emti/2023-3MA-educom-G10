export * from './classes';

export function getAlphabetLetterByIndex(index: number): string {
  return String.fromCharCode(97 + index);
}