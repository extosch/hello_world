// Utility function: replaces all digits with '*' in a given string
export function replaceDigits(input: string): string {
  // Replace every Unicode digit with '*'
  return input.replace(/\d/g, '*')
}
