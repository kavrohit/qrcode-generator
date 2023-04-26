import { scanQRCode } from 'src/functions/scanQRCode';

export const scanQRCodeMutation = async ({ input }) => {
  const { id } = input;
  const qrCode = await scanQRCode(id);
  if (!qrCode) {
    return { error: 'QR code not found' };
  }
  return { success: true };
};
