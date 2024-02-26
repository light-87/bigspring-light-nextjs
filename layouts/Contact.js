// import config from "@config/config.json";
// import { markdownify } from "@lib/utils/textConverter";

// const Contact = ({ data }) => {
//   const { frontmatter } = data;
//   const { title, info } = frontmatter;
//   const { contact_form_action } = config.params;

//   return (
//     <section className="section">
//       <div className="container">
//         {markdownify(title, "h1", "text-center font-normal")}
//         <div className="section row pb-0">
//           <div className="col-12 md:col-6 lg:col-7">
//             <form
//               className="contact-form"
//               method="POST"
//               action={contact_form_action}
//             >
//               <div className="mb-3">
//                 <input
//                   className="form-input w-full rounded"
//                   name="name"
//                   type="text"
//                   placeholder="Name"
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   className="form-input w-full rounded"
//                   name="email"
//                   type="email"
//                   placeholder="Your email"
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <input
//                   className="form-input w-full rounded"
//                   name="subject"
//                   type="text"
//                   placeholder="Subject"
//                   required
//                 />
//               </div>
//               <div className="mb-3">
//                 <textarea
//                   className="form-textarea w-full rounded-md"
//                   rows="7"
//                   placeholder="Your message"
//                 />
//               </div>
//               <button type="submit" className="btn btn-primary">
//                 Send Now
//               </button>
//             </form>
//           </div>
//           <div className="content col-12 md:col-6 lg:col-5">
//             {markdownify(info.title, "h4")}
//             {markdownify(info.description, "p", "mt-4")}
//             <ul className="contact-list mt-5">
//               {info.contacts.map((contact, index) => (
//                 <li key={index}>
//                   {markdownify(contact, "strong", "text-dark")}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;


import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, info } = frontmatter;

  // Add your WhatsApp phone number in full international format without spaces or '+' sign
  const phoneNumber = "917020143332"; // Example phone number

  // Use the phone number to generate the WhatsApp URL
  const whatsappUrl = `https://wa.me/qr/SAJCKCWR2AK5F1`;

  // Provide the path to your QR code image. You need to generate this QR code separately.
  const qrCodeImagePath = "/images/whatsapp-qr-code.jpg"; // Update with the correct path

  return (
    <section className="section">
      <div className="container">
        {markdownify(title, "h1", "text-center font-normal")}
        <div className="section row pb-0">
          <div className="content col-12 md:col-6 lg:col-5">
            {markdownify(info.title, "h4")}
            {markdownify(info.description, "p", "mt-4")}
            <ul className="contact-list mt-5">
              {info.contacts.map((contact, index) => (
                <li key={index}>
                  {markdownify(contact, "strong", "text-dark")}
                </li>
              ))}
            </ul>
          </div>
          {/* QR Code for WhatsApp */}
          <div className="col-12 md:col-6 lg:col-7 text-md-right">
            <div className="whatsapp-qr-code">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
                <img src={qrCodeImagePath} alt="WhatsApp QR Code" className="img-fluid" />
              </a>
              <p className="whatsapp-instruction">Scan to start a WhatsApp chat with us</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
