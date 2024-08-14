"use client";

import React from "react";
import { useState } from "react";
function Generate() {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const generateImage = async () => {
    setLoading(true);
    try {
      setImageUrl(
        "https://images.pexels.com/photos/18884485/pexels-photo-18884485/free-photo-of-a-couple-standing-in-the-sea-and-hugging.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
      );
    } catch (error) {
      console.error("Error generating image:", error);
    } finally {
      setLoading(false);
    }
  };

  const downloadImage = () => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "generated-image.png"; // You can specify the filename here
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="text-center h-screen overflow-none flex-col">
      {imageUrl && (
        <div className="mt-6 flex  flex-col items-center">
          <img 
            src={imageUrl}
            alt="Generated"
            className="rounded-lg shadow-lg max-w-full h-96 mb-4"
          />
          <button
            onClick={downloadImage}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
          >
            Download Image
          </button>
        </div>
      )}
      
      {loading ? "Generating..." : "Generate Image"}
      <div className="bg-white  flex px-1 py-1 rounded-full border border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
        <input
          onChange={(e) => setPrompt(e.target.value)}
          type="text"
          placeholder="Search Something..."
          className="w-full outline-none bg-white pl-4 text-sm"
        />
        <button
          type="button"
          onClick={generateImage}
          className="bg-blue-600 hover:bg-blue-700 transition-all text-white text-sm rounded-full px-5 py-2.5"
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default Generate;
