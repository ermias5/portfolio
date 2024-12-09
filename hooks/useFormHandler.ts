import { useState } from "react";
import {
  handleSubmitToAPI,
  prepareFormData,
} from "../app/dashboard/form-service";

export interface FormData {
  category: string;
  name: string;
  title: string;
  description: string;
  feedback: string;
  techStack: string;
  file: File | null;
}

export default function useFormHandler() {
  const [formData, setFormData] = useState<FormData>({
    category: "",
    name: "",
    title: "",
    description: "",
    feedback: "",
    techStack: "",
    file: null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prevData) => ({ ...prevData, file }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const preparedData = prepareFormData(formData);
      let storedData = await handleSubmitToAPI(preparedData);
      if (storedData !== undefined) {
        alert("Form submitted successfully!");
      }

      setFormData({
        category: "",
        name: "",
        title: "",
        description: "",
        feedback: "",
        techStack: "",
        file: null,
      });
    } catch (error) {
      console.error("Error while submitting form:", error);
      alert("An error occurred while submitting the form. Please try again.");
    }
  };
  return { formData, handleInputChange, handleSubmit, handleFileChange };
}
