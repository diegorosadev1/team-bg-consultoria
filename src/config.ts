/**
 * Centralized Application Configuration
 * Contains contact information, links, and helper utilities.
 */

export const CONFIG = {
  trainerName: 'Bruno Gagliardi',
  instagramHandle: '@teambgfitness',
  instagramUrl: 'https://www.instagram.com/teambgfitness/',
  contactEmail: 'contato@teambgfitness.com',
  whatsappPhone: '5516992372668',
  whatsappPhoneDisplay: '(16) 99237-2668',
};

/**
 * Helper to generate an encoded WhatsApp URL with a preset message.
 * @param message The raw message to be encoded and sent.
 */
export function getWhatsAppUrl(message: string): string {
  const cleanMessage = message.replace(/\s+/g, ' '); // Clean redundant spacing/newlines gracefully
  return `https://api.whatsapp.com/send?phone=${CONFIG.whatsappPhone}&text=${encodeURIComponent(cleanMessage)}`;
}
