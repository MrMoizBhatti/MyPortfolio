import React from 'react';
import Section from '../UI/Section';
import ResumePreview from './ResumePreview';
import ResumeActions from './ResumeActions';

const ResumeSection = () => {
  // Replace with actual PDF URL
  const resumeUrl = '#';

  return (
    <Section
      id="resume"
      title="Resume"
      subtitle="Download my CV or view it online."
      className="py-16"
      backgroundClass="bg-blue-50"
    >
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white shadow-lg rounded-lg p-8 mb-8">
          <ResumePreview
            imageUrl="https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            altText="Resume preview"
          />

          <p className="text-gray-600 mb-8">
            My resume details my education, research experience, publications,
            technical skills, and professional achievements. Download a copy
            for your reference or view it online.
          </p>

          <ResumeActions resumeUrl={resumeUrl} />
        </div>

        <div className="text-gray-600">
          <p>Last updated: June 2025</p>
        </div>
      </div>
    </Section>
  );
};

export default ResumeSection;