import { generateQRCode } from 'src/functions/generateQRCode';
import { saveQRCodeToDB } from 'src/functions/saveQRCode';

export const generateQRCodeMutation = async ({ input }) => {
  const { url } = input;
  const code = await generateQRCode(url);
  await saveQRCodeToDB(url, code);
  return { code };
};
