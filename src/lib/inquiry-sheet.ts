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

  // Form fields, not JSON. The sheet script reads e.parameter when the body is not JSON,
  // which is how visitDate is stored in the Expected visit date column.
  const response = await fetch(INQUIRY_SHEET_URL, {
    method: "POST",
    body: new URLSearchParams({
      fullName: values.fullName.trim(),
      phone: values.phone.trim(),
      email: values.email.trim(),
      cityCountry: values.cityCountry.trim(),
      message: (values.message ?? "").trim(),
      visitDate,
    }),
  });

  const payload = (await response.json()) as { ok?: boolean };
  if (!response.ok || payload.ok === false) {
    throw new Error("Inquiry was not saved");
  }
}
