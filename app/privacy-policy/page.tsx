import { bodysectio5, bodysection1, bodysection102, bodysection2, bodysection202, bodysection3, bodysection302, bodysection4, bodysection402, bodysection501, bodysection6, bodysection7, header1Details } from "@/data/privacypolicyPage";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "HMS Dev | Privacy Policy",
  description: "HMS System under development",
};

export default function PrivacyPolicy() {
  return (
    <>
      <div
        style={{
          maxWidth: "1220px" /* Adjust max-width as needed */,
          margin: "0 auto" /* Center the container */,
          padding: "40px" /* Add padding */,
        }}>
        <h1>{header1Details.title}</h1>
        <h4>
          Effective Date: <b>{header1Details.effectiveDate}</b>
        </h4>
        <p>{header1Details.description}</p>

        <h2>{bodysection1.title}</h2>
        <p>
          {bodysection1.subtitle}
          <br />
        </p>

        {bodysection1.content.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
        
        <p>
          {bodysection102.subtitle}
        </p>

        {bodysection102.content.map((item, index) => (
          <p key={index}>{item}</p>
        ))}

        <h2>{bodysection2.title}</h2>
        <p>
          {bodysection2.subtitle}
        </p>
        {bodysection2.content.map((item, index) => (
          <p key={index}>{item}</p>
        ))}

        <p>
          {bodysection202.subtitle}
          <br />
          {bodysection202.content}
        </p>

        <h2>{bodysection3.title}</h2>
        <p>
          {bodysection3.subtitle}
          <br />
          {bodysection3.content}
        </p>

        <p>
          {bodysection302.subtitle}
          <br />
          {bodysection302.content}
        </p>

        <h2>{bodysection4.title}</h2>
        <p>
          {bodysection4.subtitle}
          <br />
          {bodysection4.content}
        </p>

        <p>
          {bodysection402.subtitle}
          <br />
          {bodysection402.content}
        </p>

        <h2> {bodysectio5.title} </h2>

        {bodysectio5.content .map((item, index) => (
          <p key={index}>{item}</p>
        ))}

        <p>
          {bodysection501.content}
        </p>

        <h2>{bodysection6.Title}</h2>
        <p>
          {bodysection6.content}
        </p>

        <h2>{bodysection7.Title}</h2>
        <p>
          {bodysection7.content}
        </p>
      </div>
    </>
  );
}
