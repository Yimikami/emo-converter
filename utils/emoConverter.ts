
export const classicEmoMap: Record<string, string> = {
  'a': '4',
  'A': '4',
  'e': 'é',
  'E': 'É',
  'ı': '1',
  'i': 'i',
  'I': '1',
  'İ': 'i',
  'o': '0',
  'O': '0',
  'ö': '0',
  'Ö': '0',
  'u': 'u',
  'U': 'u',
  'ü': 'ü',
  'Ü': 'ü',
  'b': 'ß',
  'B': 'ß',
  'c': 'ch',
  'C': 'ch',
  'ç': 'ch',
  'Ç': 'ch',
  'g': 'gh',
  'G': 'gh',
  'ğ': 'gh',
  'Ğ': 'gh',
  'k': 'qh',
  'K': 'qh',
  's': 'sh',
  'S': 'sh',
  'ş': 'sh',
  'Ş': 'sh',
  'v': 'vh',
  'V': 'vh',
  'y': 'yh',
  'Y': 'yh',
  'p': 'ph',
  'P': 'ph'
};

export function convertToClassicEmo(text: string): string {
  let result = '';
  
  // Custom replacements for specific sequences
  let processed = text;
  processed = processed.replace(/de /gi, 'dhé ');
  processed = processed.replace(/ki /gi, 'qhi ');
  
  for (let i = 0; i < processed.length; i++) {
    const char = processed[i];
    const replacement = classicEmoMap[char];
    
    // Add some random casing (skip for special chars like ß that might transform unexpectedly)
    let finalChar = replacement || char;
    if (finalChar !== 'ß' && Math.random() > 0.5) {
      finalChar = finalChar.toUpperCase();
    } else if (finalChar !== 'ß') {
      finalChar = finalChar.toLowerCase();
    }
    
    result += finalChar;
  }
  
  result = result.replace(/lar/gi, 'Lhar');
  result = result.replace(/ler/gi, 'Lhér');
  
  return result;
}
