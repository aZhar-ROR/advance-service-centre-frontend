import axios from "axios";

export async function submitContactForm(
  formData,
  endpoint = `/api/send-message`
) {
  try {
    await axios.post(endpoint, formData);
    return {
      success: true,
      message: "Message Sent Successfully! Our team will contact you shortly.",
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to send message. Try again later.",
    };
  }
}