import React from "react";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

const ContactsCard = () => {
  return (
    <>
    <section className="bg-white shadow-2xl py-10 px-6 md:px-12 lg:px-20">
      <div className="max-w-8xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* General Enquiries Card */}
        <div className=" shadow-md rounded-lg p-6 bg-teal-100 mb-6">
          <h2 className="text-gray-900 items-center justify-center flex text-xl font-bold mb-2">
            General Enquiries
          </h2>
          <div className="mx-auto border-b-4 border-blue-500 w-1/2 mb-10"></div>
          <div className="flex items-center gap-4 mb-4">
            <div className="text-blue-600 text-3xl">
              <MdEmail />
            </div>
            <div>
              <h3 className="text-blue-600 text-sm font-semibold tracking-wide">
                EMAIL
              </h3>
              <p className="text-gray-800 text-base font-medium">
                info@eurofyre.co.uk
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-blue-600 text-3xl">
              <MdPhone />
            </div>
            <div>
              <h3 className="text-blue-600 text-sm font-semibold tracking-wide">
                TELEPHONE
              </h3>
              <p className="text-gray-800 text-base font-medium">
                +44 (0)1329 835024
              </p>
            </div>
          </div>
        </div>

        {/* Specific Enquiries Card */}
        <div className="shadow-md rounded-lg p-6 bg-teal-100 mb-6">
          <h2 className="text-gray-900 items-center justify-center flex text-xl font-bold mb-2">
            Specific Enquiries
          </h2>
          <div className="mx-auto border-b-4 border-blue-500 w-1/2 mb-10"></div>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="text-blue-600 text-3xl">
                <MdEmail />
              </div>
              <div>
                <h3 className="text-blue-600 text-sm font-semibold tracking-wide">
                  Sales
                </h3>
                <p className="text-gray-800 text-base font-medium">
                  sales@eurofyre.co.uk
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-blue-600 text-3xl">
                <MdEmail />
              </div>
              <div>
                <h3 className="text-blue-600 text-sm font-semibold tracking-wide">
                  Technical
                </h3>
                <p className="text-gray-800 text-base font-medium">
                  technical@eurofyre.co.uk
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-blue-600 text-3xl">
                <MdEmail />
              </div>
              <div>
                <h3 className="text-blue-600 text-sm font-semibold tracking-wide">
                  Marketing
                </h3>
                <p className="text-gray-800 text-base font-medium">
                  marketing@eurofyre.co.uk
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Location Card */}
        <div className="bg-teal-100 shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-gray-900 items-center justify-center flex text-xl font-bold mb-2">
            Location
          </h2>
          <div className="mx-auto border-b-4 border-blue-500 w-1/2 mb-10"></div>
          <div className="flex items-start gap-4">
            <div className="text-blue-600 text-3xl">
              <MdLocationOn />
            </div>
            <address className="not-italic text-gray-900 text-base font-medium leading-relaxed">
              Unit C1 Knowle Village Business Park
              <br />
              Mayles Lane
              <br />
              Wickham
              <br />
              Hampshire
              <br />
              PO17 5DY
              <br />
              United Kingdom
            </address>
          </div>
        </div>
      </div>
    </section>
    {/* Map Embed */}
      <div className="rounded-lg overflow-hidden shadow-md bg-white">
        <div className="text-center">
        <h2 className="text-4xl text-black font-bold mb-2">
          Find Us On Map
        </h2>
        <div className="mx-auto border-b-4 border-blue-500 w-1/4 mb-10"></div>
      </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.902123456789!2d90.3948859!3d23.7374601!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8eabd8931e1%3A0x65b3d31b26bf2e5!2sBangladesh%20National%20Museum!5e0!3m2!1sen!2sbd!4v1700000000000!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Revere Location Map"
        ></iframe>
      </div>
    </>
  );
};

export default ContactsCard;
