const ResumeComponent = () => {
  return (
    <div className="my-4">
      <iframe
        src="/resume.pdf"
        title="resume"
        className="w-full h-full md:max-w-screen-lg md:mx-auto md:w-full md:min-h-screen rounded-md"
      ></iframe>
    </div>
  );
};

export default ResumeComponent;