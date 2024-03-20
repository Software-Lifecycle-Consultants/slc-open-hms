/* Assign details to the banner section of Privacy Policy page */
export const bannerDetails = {
    title: "Privacy Policy",
    subtitle: "Our friendly team would love to hear from you."
  };

/* Assign header Details to the Privacy Policy page */
export const today = new Date();

export const header1Details = {
    title: "Privacy Policy",
    effectiveDate: today.toISOString().split('T')[0], // Format today's date as YYYY-MM-DD
    description:"This Privacy Policy outlines how SLC (“we,” “us,” or “our”) collects, uses, and safeguards the personal information of visitors (“you” or “your”) to our website. We are committed to protecting your privacy and complying with applicable data protection regulations, including the General Data Protection Regulation (GDPR) and other relevant laws. By accessing our website or using our services, you consent to the practices described in this Privacy Policy."
  };

/* Assign Details to the Privacy Policy page */
export const section1 = [
    {
      section1head: "1. Information We Collect",
      subsections1: [
        {
          title1: "1.1 Personal Information",
          content1: [
            "We may collect personal information directly from you when you interact with our website, subscribe to our newsletter, or use our 'Contact Us' form. The types of personal information we may collect include:",
            "- Contact information (such as name, email address, phone number)",
            "- Company information (such as company name, job title)",
            "- Communication preferences"
          ]
        },

        {
          title2: "1.2 Automatically Collected Information",
          content2: [
            "When you visit our website, we may automatically collect certain information about your device, browsing activities, and usage patterns, including:",
            "- IP address",
            "- Browser type and version",
            "- Operating system",
            "- Referral source",
            "- Pages visited and time spent on our website"
          ]
        }
      ]
    },
]

export const section2 = [
    {
      section2head: "2. Use of Information",
      content2: [
        {
          title1: "2.1 Providing and Improving Services",
          content1: [
            "We use the collected information to provide you with our software consultancy services and improve your experience with our website. This includes:",
            "- Responding to your inquiries and providing requested information",
            "- Sending newsletters and marketing communications (with your consent)",
            "- Analyzing website usage and improving our website's functionality and content",
            "- Enhancing our services and tailoring them to your needs",
            "- Managing and administering our business operations"
          ]
        },
        {
          title2: "2.2 Legal Compliance",
          content2: [
            "We may use your personal information to comply with legal obligations, enforce our terms and conditions, and protect our rights, property, or safety, as required by applicable laws and regulations."
          ]
        }
      ]
    },
]

export const section3 = [
    {
      section3head: "3. Data Retention and Security",
      content3: [
        {
          title1: "3.1 Data Retention",
          content1: [
            "We retain your personal information only as long as necessary for the purposes outlined in this Privacy Policy, or as required by law. We will securely delete or anonymize your personal information when it is no longer needed."
          ]
        },
        {
          title2: "3.2 Data Security",
          content2: [
            "We take appropriate technical and organizational measures to protect your personal information from unauthorized access, loss, misuse, alteration, or disclosure. However, please be aware that no security measures are foolproof, and we cannot guarantee the absolute security of your information."
          ]
        }
      ]
    },
]

export const section4 = [
    {
      section4Title: "4. Disclosure of Information",
      content4: [
        {
          title1: "4.1 Third-Party Service Providers",
          content1: [
            "We may engage trusted third-party service providers to assist us in delivering our services and managing our website. These providers are obligated to maintain the confidentiality and security of your personal information and may only use it in accordance with our instructions."
          ]
        },
        {
          title2: "4.2 Legal Requirements",
          content2: [
            "We may disclose your personal information if required to do so by law or if we believe that such action is necessary to (a) comply with a legal obligation, (b) protect and defend our rights or property, (c) prevent or investigate possible wrongdoing, or (d) protect the personal safety of users or the public."
          ]
        }
      ]
    },
]

export const section5 = [
    {
      section5Title: "5. Your Rights",
      content5: [
        {
          content1: [
            "You have certain rights regarding the personal information we hold about you. These rights may include:",
            "- The right to access and obtain a copy of your personal information",
            "- The right to rectify any inaccurate or incomplete personal information",
            "- The right to erase your personal information under certain circumstances",
            "- The right to restrict the processing of your personal information",
            "- The right to object to the processing of your personal information",
            "- The right to data portability"
          ]
        },
        {
          content2: [
            "To exercise your rights or make any privacy-related requests, please contact us using the information provided in the 'Contact Us' section below."
          ]
        }
      ]
    },
]

export const section6 = {
      section6Title: "6. International Data Transfers",
      content6:
            "Your personal information may be transferred to and processed in countries outside your jurisdiction, including countries that may have different data protection laws. We will take appropriate measures to ensure that any international transfers comply with applicable data protection laws."
    };

export const section7 = {
      section7Title: "7. Contact Us",
      content7: [
        {
          content1: [
            "If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us:",
            "Email: hello@softwareconsultant.org"
          ]
        }
      ]
    };

