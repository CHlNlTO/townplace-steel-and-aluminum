import { formType } from "@/components/component/ContactCard";

type sendContactFormType = (data: formType) => Promise<Response>;

export const sendContactForm: sendContactFormType = async (data: formType) => 
  fetch("/api/", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  }).then((res) => {
    if (!res.ok) {
      throw new Error("Failed to send message");
    }
    return res.json();
  });