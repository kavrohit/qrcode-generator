import { db } from 'src/lib/db';

export const qrCode = async ({ id }) => {
  const qrCode = await db.qRCode.findOne({ id });
  return qrCode;
};
