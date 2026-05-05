import TripForm from "@/components/module/trip/TripForm";
import React from "react";

const page = () => {
  return (
    <div className="space-y-4 p-6 max-w-2xl h-[calc(100vh-81px)]  mx-auto">
      <div>
        <h1 className="font-bold text-2xl">Create Trip</h1>
        <p>Add a new trip to the platform</p>
      </div>
      <TripForm />
    </div>
  );
};

export default page;
