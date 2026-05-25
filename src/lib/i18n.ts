import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      contact: {
        getInTouch: "Get in touch",
        wereHere: "We're here,",
        wheneverNeeded: "whenever you need us",
        subtitle: "Book an appointment, ask a question or reach our 24×7 emergency team — we'd love to help.",
        bookAppointment: "Book an appointment",
        formSubtitle: "Fill in the details and we'll connect with you on WhatsApp shortly.",
        consentText: "By submitting, you agree to be contacted by Medstar.",
        sendRequest: "Send Request",
        openingWhatsApp: "Thanks! Opening WhatsApp to confirm your request…",
        emergency247: "24×7 Emergency",
        callUs: "Call us",
        whatsapp: "WhatsApp",
        chatWithTeam: "Chat with our team",
        email: "Email",
        visitUs: "Visit us",
        fields: {
          fullName: "Full name",
          phone: "Phone",
          email: "Email",
          department: "Department",
          message: "Message",
        },
        placeholders: {
          fullName: "Your name",
          phone: "10-digit mobile",
          email: "you@example.com",
          department: "e.g. Cardiology",
          message: "Tell us briefly how we can help...",
        },
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
