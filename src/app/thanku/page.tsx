"use client"

import { useEffect } from "react";


const ThankYou = () => {
  useEffect(() => {
    window.location.href = "mailto:thisisvenky.ynm@gmail.com";
  }, []);

  return (
    <div className="min-h-screen md:mx-60">
      <h1>Thank you for signing in!</h1>
      <p>If you are not redirected, <a href="mailto:thisisvenky.ynm@gmail.com">click here to send an email</a>.</p>
    </div>
  );
};

export default ThankYou;
