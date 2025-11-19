import { Calendar, Video, FileCheck } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Calendar,
    title: "Book a Slot",
    description: "Choose your legal service and book an appointment at your convenient time. Easy online booking process."
  },
  {
    number: "02",
    icon: Video,
    title: "Consult via Video Call",
    description: "Connect with verified lawyers through secure video consultation. Discuss your case in detail from anywhere."
  },
  {
    number: "03",
    icon: FileCheck,
    title: "Get Follow-up or Documents",
    description: "Receive drafted documents, legal advice summary, or ongoing support for your case as needed."
  }
];

export function HowItWorksSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get legal help in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connection line - desktop only */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 -z-10"></div>

          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                {/* Number badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-indigo-600 to-purple-600 text-white mb-6 shadow-lg">
                  <span className="text-xl">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-indigo-50 to-purple-50 inline-flex">
                    <step.icon className="w-8 h-8 text-indigo-600" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
