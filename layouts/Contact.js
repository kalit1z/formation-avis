import { markdownify } from "@lib/utils/textConverter";
import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";
import { FaEnvelope, FaMapMarkerAlt, FaUserAlt } from "react-icons/fa";
import ImageFallback from "./components/ImageFallback";

const Contact = ({ data }) => {
  const { frontmatter } = data;
  const { title, form_action, phone, mail, location } = frontmatter;

  return (
    <section className="section lg:mt-16">
      <div className="container">
        <div className="row relative pb-16">
          <ImageFallback
            className="-z-[1] object-cover object-top"
            src={"/images/map.svg"}
            fill="true"
            alt="map bg"
            priority={true}
          />
          <div className="lg:col-6">
            {markdownify(
              title,
              "h1",
              "h1 my-10 lg:my-11 lg:pt-11 text-center lg:text-left lg:text-[34px]"
            )}
          </div>
          <div className="contact-form-wrapper rounded border border-border p-6 dark:border-darkmode-border lg:col-6">
            <h2>
                Recevez votre     
              <span className="ml-1.5 inline-flex items-center text-primary">
                Devis
                <BsArrowRightShort />
              </span>
            </h2>
            <form className="contact-form mt-12" method="POST" action={form_action}>
      <div className="mb-6">
        <label className="mb-2 block font-secondary" htmlFor="name">
          Nom complet
          <small className="font-secondary text-sm text-primary">*</small>
        </label>
        <input
          className="form-input w-full"
          name="name"
          type="text"
          placeholder="Thomas Milano"
          required
        />
      </div>
      
      <div className="mb-6">
        <label className="mb-2 block font-secondary" htmlFor="email">
          Adresse e-mail
          <small className="font-secondary text-sm text-primary">*</small>
        </label>
        <input
          className="form-input w-full"
          name="email"
          type="email"
          placeholder="example@gmail.com"
          required
        />
      </div>
      
      <div className="mb-6">
        <label className="mb-2 block font-secondary" htmlFor="lawyerType">
          Type de formation recherché
          <small className="font-secondary text-sm text-primary">*</small>
        </label>
        <input
          className="form-input w-full"
          name="lawyerType"
          type="text"
          placeholder="Droit de la famille, Droit pénal, etc."
          required
        />
      </div>
      
      <div className="mb-6">
        <label className="mb-2 block font-secondary" htmlFor="description">
          Description du problème
          <small className="font-secondary text-sm text-primary">*</small>
        </label>
        <textarea
          className="form-textarea w-full"
          name="description"
          placeholder="Veuillez décrire votre situation..."
          rows="7"
          required
        />
      </div>
      
      <input
        className="btn btn-primary"
        type="submit"
        value="Envoyer"
      />
    </form>
          </div>
        </div>
        <div className="row">
          {phone && (
            <div className="md:col-6 lg:col-4">
              <Link
                href={`tel:${phone}`}
                className="my-4 flex h-[100px] items-center justify-center
             rounded border border-border p-4 text-primary dark:border-darkmode-border"
              >
                <FaUserAlt />
                <p className="ml-1.5 text-lg font-bold text-dark dark:text-darkmode-light">
                  {phone}
                </p>
              </Link>
            </div>
          )}
          {mail && (
            <div className="md:col-6 lg:col-4">
              <Link
                href={`mailto:${mail}`}
                className="my-4 flex h-[100px] items-center justify-center
             rounded border border-border p-4 text-primary dark:border-darkmode-border"
              >
                <FaEnvelope />
                <p className="ml-1.5 text-lg font-bold text-dark dark:text-darkmode-light">
                  {mail}
                </p>
              </Link>
            </div>
          )}
          {location && (
            <div className="md:col-6 lg:col-4">
              <span
                className="my-4 flex h-[100px] items-center justify-center
             rounded border border-border p-4 text-primary dark:border-darkmode-border"
              >
                <FaMapMarkerAlt />
                <p className="ml-1.5 text-lg font-bold text-dark dark:text-darkmode-light">
                  {location}
                </p>
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
