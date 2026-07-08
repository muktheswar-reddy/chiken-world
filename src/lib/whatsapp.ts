import type { BookingFormData } from '@/types';

const WHATSAPP_NUMBER = '9611419180';

export function buildWhatsAppMessage(data: BookingFormData): string {
  return `Hello CHIKEN WORLD,
I would like to reserve:

Product: ${data.productName}
Weight: ${data.weight}
Quantity: ${data.quantity}

My Name: ${data.customerName}
Phone Number: ${data.phoneNumber}

I will visit your store to collect my order.`;
}

export function openWhatsApp(data: BookingFormData): void {
  const message = buildWhatsAppMessage(data);
  const encoded = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
  window.open(url, '_blank');
}

export function openWhatsAppChat(): void {
  window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
}

export function openDirections(): void {
  window.open('https://maps.google.com/?q=CHIKEN+WORLD', '_blank');
}
