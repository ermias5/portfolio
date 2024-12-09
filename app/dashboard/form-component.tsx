"use client";

import useFormHandler from "../../hooks/useFormHandler";

export default function FormComponent() {
  const { formData, handleInputChange, handleSubmit, handleFileChange } =
    useFormHandler();

  return (
    <form
      onSubmit={handleSubmit}
      className=" p-6 bg-gray-100 rounded-md shadow-md"
    >
      <label className="block mb-2">
        <span className="text-gray-700">Category</span>
        <select
          name="category"
          value={formData.category}
          onChange={handleInputChange}
          className="mt-1 block w-full h-[40px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          required
        >
          <option value="">Select a category</option>
          <option value="hero">Hero</option>
          <option value="aboutMe">About Me</option>
          <option value="services">Services</option>
          <option value="projects">Projects</option>
          <option value="testimonials">Testimonials</option>
          <option value="uploadCV">Upload your CV</option>
        </select>
      </label>
      {formData.category == "testimonials" && (
        <label className="block mb-2">
          <span className="text-gray-700">name</span>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className="mt-1 block w-full h-[25px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            required
          />
        </label>
      )}

      {["services", "projects", "testimonials"].includes(formData.category) && (
        <label className="block mb-2">
          <span className="text-gray-700">Title</span>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            className="mt-1 block w-full h-[25px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            required
          />
        </label>
      )}

      {["hero", "services", "projects"].includes(formData.category) && (
        <label className="block mb-2">
          <span className="text-gray-700">Description</span>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            className="mt-1 block w-full h-[70px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            required
          />
        </label>
      )}

      {formData.category == "testimonials" && (
        <label className="block mb-2">
          <span className="text-gray-700">feedback</span>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleInputChange}
            className="mt-1 block w-full h-[70px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            required
          />
        </label>
      )}

      {["aboutMe", "projects"].includes(formData.category) && (
        <label className="block mb-2">
          <span className="text-gray-700">Tech Stack (comma-separated)</span>
          <input
            type="text"
            name="techStack"
            value={formData.techStack}
            onChange={handleInputChange}
            className="mt-1 block w-full h-[50px] rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
            required
          />
        </label>
      )}

      {!["", "uploadCV"].includes(formData.category) && (
        <label className="block mb-4">
          <span className="text-gray-700">Upload Image</span>
          <input
            type="file"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            required
          />
        </label>
      )}

      {formData.category == "uploadCV" && (
        <label className="block mb-4">
          <span className="text-gray-700">Upload CV</span>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100"
            required
          />
        </label>
      )}

      <button
        type="submit"
        className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:opacity-20"
      >
        submit
      </button>
    </form>
  );
}
