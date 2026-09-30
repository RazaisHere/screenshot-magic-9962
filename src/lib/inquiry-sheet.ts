/**
 * Web app URL from Deploy → Web app on scripts/inquiry-sheet.gs.
 * It looks like https://script.google.com/macros/s/.../exec
 */
export const INQUIRY_SHEET_URL = "https://script.google.com/macros/s/AKfycbwM6nwmDfvKqMyQVYo9zWUKyYurpJ1ghy5pu4unS3i9skwdFwK370Tjl_vbOgbWH0HU/exec";

export type InquiryPayload = {
  fullName: string;
  phone: string;
  visitDate: string;
  email: string;
  cityCountry: string;
  message?: string | undefined;
};

export async function submitInquiry(values: InquiryPayload) {
  if (!INQUIRY_SHEET_URL.startsWith("https://script.google.com/macros/s/")) {
    throw new Error("Inquiry sheet URL is not configured");
  }

  const visitDate = values.visitDate.trim();
  if (!/^\d{4}-\d{2}-\d{2}$/.test(visitDate)) {
    throw new Error("Please choose a visit date");
  }

  // The published web app writes column E from unitType and column F from message.
  // E is Expected visit date. F is Optional message.
  const response = await fetch(INQUIRY_SHEET_URL, {
    method: "POST",
    headers: { "Content-Type": "text/plain;charset=utf-8" },
    body: JSON.stringify({
      fullName: values.fullName.trim(),
      phone: values.phone.trim(),
      email: values.email.trim(),
      cityCountry: values.cityCountry.trim(),
      unitType: visitDate,
      message: (values.message ?? "").trim(),
    }),
  });

  const payload = (await response.json()) as { ok?: boolean };
  if (!response.ok || payload.ok === false) {
    throw new Error("Inquiry was not saved");
  }
}
