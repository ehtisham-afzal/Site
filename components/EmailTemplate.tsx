import * as React from "react";

interface EmailTemplateProps {
  Name: string;
  Message: string;
  Gmail: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  Name,
  Message,
  Gmail,
}) => (
  <div>
    <h1>From, {Name}!</h1>
    <h3>
      Gmail: <a href={`mailto:${Gmail}`}>{Gmail}</a>{" "}
    </h3>
    <p>{Message}</p>
  </div>
);
