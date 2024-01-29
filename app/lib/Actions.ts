'use server'
import { Resend } from "resend";
import { z } from "zod";
import { EmailTemplate } from "../ui/EmailTemplate";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);


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


  if (ValidateFields.success) {
    resend.emails
      .send({
        from: `${formData.get('name')}<notifications@ehtisham.dev>`,
        to: ["shaminterprise@gmail.com"],
        subject: formData.get('subject') ? formData.get('subject') as string : 'From website',
        text: formData.get('message') as string,
        react: EmailTemplate({ Name: formData.get('name') as string, Message: formData.get('message') as string, Gmail: formData.get('email') as string }),
      })
      .catch((Error) => {
        redirect('/Notification/FailedToSend')
        console.error(`Can't send Email ${Error}`)
      });

    revalidatePath('/Contact')
    redirect('/Notification/MessageSended')
  }
};
