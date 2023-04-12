import React from "react"
import {
  WhatsAppIcon,
  SupportTicket,
  Faqs,
  FolowUs,
} from "../components/svgIcons/svgIcons"

const amentiesDataList = [
  {
    imagePath: "../../images/amenties-01.png",
    description: "Amenities",
  },
  {
    imagePath: "../../images/amenties-02.png",
    description: "Raise a request",
  },
  {
    imagePath: "../../images/amenties-03.png",
    description: "AutoPay",
  },
  {
    imagePath: "../../images/amenities-04.png",
    description: "Statement of account",
  },
  {
    imagePath: "../../images/amenities-05.png",
    description: "Payments",
  },
  {
    imagePath: "../../images/amenities-06.png",
    description: "Appointment",
  },
  {
    imagePath: "../../images/amenities-07.png",
    description: "Book home service",
  },
]

const letsHelpData = [
  {
    icon: <WhatsAppIcon />,
    heading: "via WhatsApp",
    description: "Connect with us on WhatsApp instantly to solve your queries.",
    btnText: "Connect Now",
    showSocialIcon: false,
  },
  {
    icon: <SupportTicket />,
    heading: "Support ticket",
    description:
      "Raise a support ticket and our team will get back to you within 12 hours.",
    btnText: "Raise a support ticket",
    showSocialIcon: false,
  },
  {
    icon: <Faqs />,
    heading: "FAQ’s",
    description: "Here are frequently asked questions. Might help you as well.",
    btnText: "View FAQ’s",
    showSocialIcon: false,
  },
  {
    icon: <FolowUs />,
    heading: "Follow us",
    description: "Keep in touch with us on Our social channels.",
    // btnText: "Connect Now",
    showSocialIcon: true,
  },
]

const myPropertiesSlider = [
  {
    propId: "VRD/SD221/XR720B",
    location: "DAMAC Hills 2",
  },
  {
    propId: "VRD/SD221/XR720B",
    location: "DAMAC Hills 2",
  },
  {
    propId: "VRD/SD221/XR720B",
    location: "DAMAC Hills 2",
  },
  {
    propId: "VRD/SD221/XR720B",
    location: "DAMAC Hills 2",
  },
  {
    propId: "VRD/SD221/XR720B",
    location: "DAMAC Hills 2",
  },
]

export { amentiesDataList, letsHelpData, myPropertiesSlider }
