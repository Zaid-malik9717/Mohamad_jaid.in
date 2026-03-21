"use client";
import { Mail, Phone } from "lucide-react";
import toast from "react-hot-toast";

interface ContactButtonsProps {
  email: string;
  phone: string;
}

export default function ContactButtons({ email, phone }: ContactButtonsProps) {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigator.clipboard.writeText(email);
    toast.success("Email copied to clipboard!");
    window.location.href = `mailto:${email}`;
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-20 w-full">
      <a
        href={`mailto:${email}`}
        onClick={handleEmailClick}
        className="btn-primary flex items-center gap-4 px-8 py-4 rounded-2xl w-full sm:w-auto text-lg"
      >
        <Mail size={20} /> Email Me
      </a>
      <a
        href={`tel:${phone}`}
        className="btn-ghost flex items-center justify-center gap-4 px-8 py-4 rounded-2xl w-full sm:w-auto text-lg"
      >
        <Phone size={20} /> {phone}
      </a>
    </div>
  );
}
