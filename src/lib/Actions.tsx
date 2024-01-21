import { z } from "zod";

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
};
