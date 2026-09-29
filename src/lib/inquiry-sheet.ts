/**
 * Web app URL from Deploy → Web app on scripts/inquiry-sheet.gs.
 * It looks like https://script.google.com/macros/s/.../exec
 */
export const INQUIRY_SHEET_URL = "https://script.google.com/macros/s/AKfycbwM6nwmDfvKqMyQVYo9zWUKyYurpJ1ghy5pu4unS3i9skwdFwK370Tjl_vbOgbWH0HU/exec";

export type InquiryPayload = {
  fullName: string;
  phone: string;
  email: string;
  cityCountry: string;
  unitType: string;
  message?: string | undefined;
};

export async function submitInquiry(values: InquiryPayload) {
  if (!INQUIRY_SHEET_URL.startsWith("https://script.google.com/macros/s/")) {
    throw new Error("Inquiry sheet URL is not configured");
  }

  const response = await fetch(INQUIRY_SHEET_URL, {
    method: "POST",
    body: JSON.stringify({
      fullName: values.fullName,
      phone: values.phone,
      email: values.email,
      cityCountry: values.cityCountry,
      unitType: values.unitType,
      message: values.message ?? "",
    }),
  });

  const payload = (await response.json()) as { ok?: boolean };
  if (!response.ok || payload.ok === false) {
    throw new Error("Inquiry was not saved");
  }
}
