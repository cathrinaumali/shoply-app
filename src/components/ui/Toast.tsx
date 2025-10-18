"use client";

import { useEffect } from "react";
import { X, CheckCircle } from "lucide-react";

interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
}

export default function Toast({
  message,
  onClose,
  duration = 3000,
}: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed top-20 right-4 z-50 animate-slide-in">
      <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3 min-w-[300px]">
        <CheckCircle size={24} />
        <span className="flex-1 font-medium">{message}</span>
        <button
          onClick={onClose}
          className="hover:bg-green-600 rounded p-1 transition-colors"
          aria-label="Close notification"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
