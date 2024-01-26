import { Resend } from "resend";
import { z } from "zod";
import { toast } from "sonner";
import { EmailTemplate } from "../components/EmailTemplate";

// const resend = new Resend(process.env.RESEND_API_KEY);

// const SendMail = async () => {
//   return resend.emails
//     .send({
//       from: "Acme <onboarding@resend.dev>",
//       to: ["delivered@resend.dev"],
//       subject: "Hello world",
//       text: "From Ehtisham",
//       react: EmailTemplate({ firstName: "John" }),
//     })
//     .then(() => toast.success("Email are sended"))
//     .catch((Error) => toast.error(`Can't Send the message ${Error}`));
// };

console.log(process.env.RESEND_API_KEY)

export type State = {
  errors?: {
    email?: string[];
    name?: string[];
    subject?: string[];
    message?: string[];
  };
  message: string;
};

const FormSchema = z.object({
  email: z.string().email(),
  name: z
    .string()
    .min(3, { message: "Name must be greater than 3 charactors" }),
  subject: z.string().optional(),
  message: z.string().min(10, { message: "Please provide more information" }),
});

export const AuthinticatMessage = (
  prevState: State | undefined,
  formData: FormData
) => {
  const ValidateFields = FormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  });

  if (!ValidateFields.success) {
    return {
      error: ValidateFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Send Message.",
    };
  }
  // if (ValidateFields.success) {
  //   SendMail();
  // }
};
