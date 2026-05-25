import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      contact: {
        getInTouch: "Get in touch",
        wereHere: "We're here,",
        wheneverNeeded: "whenever you need us",
        subtitle:
          "Book an appointment, ask a question or reach our 24×7 emergency team — we'd love to help.",
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
      about: {
        aboutUs: "About Us",
        title: "A hospital built on",
        titleGradient: "trust & technology",
        description:
          "Medstar Multispeciality Hospital and ICU is a modern healthcare institution in Mulund West, Mumbai. We blend advanced clinical expertise with warm, personalised care — for every age, every stage, every story.",
        imgAltSpecialist: "Medstar specialist",
        visionTitle: "Our Vision",
        visionBody:
          "To be Mumbai's most trusted neighbourhood multispeciality hospital — accessible, expert and deeply compassionate.",
        missionTitle: "Our Mission",
        missionBody:
          "Deliver patient-first healthcare with modern technology, ethical practice and genuine human care, every single day.",
        promiseTitle: "Our Promise",
        promiseBody:
          "Transparent pricing, cashless insurance, and clinical excellence you and your family can rely on.",
        whoWeAre: "Who We Are",
        compassionateCare: "Compassionate care,",
        closeToHome: "close to home",
        whoWeAreBody1:
          "Medstar Multispeciality Hospital and ICU is a modern healthcare center located in Mulund West, Mumbai, dedicated to providing compassionate, reliable, and advanced medical care. With a patient-first approach and a commitment to excellence, Medstar offers comprehensive multispeciality services including Orthopaedics, Oncology, Cardiology, Neurology, Ophthalmology, General Surgery, ICU and Emergency Care, and many more.",
        whoWeAreBody2:
          "Equipped with experienced medical professionals, advanced technology, and well-designed critical care facilities, the hospital focuses on delivering trusted healthcare solutions with warmth, comfort, and professionalism. At Medstar, the vision is to create a healthier community through quality treatment, personalized attention, and accessible healthcare for every patient.",
        imgAltCare: "Medstar Hospital patient care",
        careTitle: "Care, when you need it most.",
        careSubtitle:
          "Whether it's a routine consultation or a critical emergency — we're ready to help.",
        bookAppointment: "Book Appointment",
        viewServices: "View Services",
        icuTitle: "Our ICU Service",
        icuHeading: "Built by clinicians, for patients.",
        icuBody1:
          "Medstar Multispeciality Hospital and ICU offers advanced critical care services through its modern 10-bed Intensive Care Unit, designed to provide comprehensive treatment and continuous monitoring for critically ill patients. Equipped with advanced ventilator support systems, cardiac monitors, emergency response equipment, and modern ICU infrastructure, our facility ensures immediate and effective medical attention at all times.",
        icuBody2:
          "Our dedicated team of experienced critical care specialists, doctors, nurses, and support staff work round-the-clock to deliver compassionate, patient-focused care while maintaining the highest standards of safety, hygiene, and medical excellence. The ICU is designed to handle a wide range of emergency and critical medical conditions with rapid response and personalized treatment plans tailored to each patient’s needs.",
        icuBody3:
          "At Medstar, we understand that critical care is not only about advanced technology but also about emotional support, trust, and compassionate healthcare. Our ICU environment is maintained to provide comfort, cleanliness, and reassurance for both patients and their families during challenging times. With 24×7 emergency support, advanced monitoring systems, and a commitment to excellence, Medstar Multispeciality Hospital and ICU continues to provide reliable, life-saving critical care services for the Mulund community and beyond.",
        imgAltIcu: "ICU service at Medstar",
        icuLabelPatientFirst: "Patient-first",
        icuLabelEthical: "Ethical practice",
        icuLabelExpert: "Expert clinicians",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
