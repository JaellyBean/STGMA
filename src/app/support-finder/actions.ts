"use server";

import { findSupportTool } from "@/ai/flows/find-support-tool";
import { z } from "zod";

const schema = z.object({
  feelings: z.string().min(10, { message: "Please describe your feelings in a bit more detail." }),
});

export type FormState = {
  message: string;
  suggestions?: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export async function getResourceSuggestions(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data);
  const parsed = schema.safeParse(formData);

  if (!parsed.success) {
    const issues = parsed.error.issues.map((issue) => issue.message);
    return {
      message: "We couldn't process your request. Please check the fields.",
      issues,
      fields: formData,
    };
  }

  try {
    const result = await findSupportTool({ feelings: parsed.data.feelings });
    return {
      message: "Here are some resources that might help.",
      suggestions: result.resourceSuggestions,
    };
  } catch (error) {
    return {
      message: "An error occurred while finding resources. Please try again later.",
    };
  }
}
