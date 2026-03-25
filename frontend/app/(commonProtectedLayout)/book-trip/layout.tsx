import { Footer } from "@/components/shared/footer";
import React from "react";

const BookTripLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default BookTripLayout;
