"use client";
import TourForm from "@/components/module/tour/TourForm";
import React from "react";

const CreateTourPage = () => {
  return (
    <div className="space-y-4 p-6 max-w-2xl mx-auto">
      <div>
        <h1 className="font-bold text-2xl">Create Tour</h1>
        <p>Add a new tour experience to the platform</p>
      </div>
      <TourForm />
    </div>
  );
};

export default CreateTourPage;
