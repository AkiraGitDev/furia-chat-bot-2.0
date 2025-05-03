export const Colors = {
  primary: '#FFFFFF', // Branco FURIA
  secondary: '#000000', // Preto FURIA
  background: '#1A1A1A',
  text: '#FFFFFF',
  inactive: '#666666',
} as const;

export type ColorTypes = keyof typeof Colors;