import React from 'react';

interface StepperProps {
  currentStep: number;
}

const steps = [
  { id: 1, title: 'Personal Information', shortTitle: 'Personal' },
  { id: 2, title: 'Professional Details', shortTitle: 'Professional' },
  { id: 3, title: 'Additional Information', shortTitle: 'Additional' },
];

export const Stepper: React.FC<StepperProps> = ({ currentStep }) => {
  return (
    <div className="w-full max-w-2xl mx-auto mb-12">
      {/* Stepper Container */}
      <div className="flex items-center justify-center">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            {/* Step Circle */}
            <div className="flex flex-col items-center">
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold text-sm transition-all duration-300 ${
                  currentStep >= step.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                    : 'bg-gray-200 text-gray-600'
                }`}
              >
                {step.id}
              </div>
              {/* Step Label */}
              <span
                className={`mt-3 text-xs font-medium text-center transition-colors duration-300 ${
                  currentStep >= step.id ? 'text-blue-600' : 'text-gray-500'
                }`}
              >
                {step.shortTitle}
              </span>
            </div>

            {/* Connecting Line (only between steps, not after the last one) */}
            {index < steps.length - 1 && (
              <div
                className={`flex-1 h-0.5 mx-4 transition-colors duration-300 ${
                  currentStep > step.id ? 'bg-blue-600' : 'bg-gray-200'
                }`}
              />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* Current Step Title */}
      <div className="text-center mt-6">
        <h2 className="text-xl font-semibold text-gray-900">
          {steps.find(step => step.id === currentStep)?.title}
        </h2>
      </div>
    </div>
  );
};

export default Stepper;
