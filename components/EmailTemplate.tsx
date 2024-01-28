import * as React from "react";

interface EmailTemplateProps {
  Name: string;
  Message: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  Name,
  Message,
}) => (
  <div>
    <h1>Message From, {Name}!</h1>
    <h2>Message</h2>
    <p>{Message}</p>
  </div>
);
