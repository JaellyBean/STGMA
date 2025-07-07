// src/ai/flows/find-support-tool.ts
'use server';

/**
 * @fileOverview Provides personalized mental health resource suggestions based on user input.
 *
 * - findSupportTool - A function that suggests mental health resources based on user input.
 * - FindSupportToolInput - The input type for the findSupportTool function.
 * - FindSupportToolOutput - The return type for the findSupportTool function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const FindSupportToolInputSchema = z.object({
  feelings: z
    .string()
    .describe(
      'Description of current feelings and challenges. Be as descriptive as possible.'
    ),
});
export type FindSupportToolInput = z.infer<typeof FindSupportToolInputSchema>;

const FindSupportToolOutputSchema = z.object({
  resourceSuggestions: z
    .string()
    .describe(
      'A list of suggested resources (support groups, therapists, articles) relevant to the user input.'
    ),
});
export type FindSupportToolOutput = z.infer<typeof FindSupportToolOutputSchema>;

export async function findSupportTool(input: FindSupportToolInput): Promise<FindSupportToolOutput> {
  return findSupportToolFlow(input);
}

const prompt = ai.definePrompt({
  name: 'findSupportToolPrompt',
  input: {schema: FindSupportToolInputSchema},
  output: {schema: FindSupportToolOutputSchema},
  prompt: `You are a mental health expert providing resource suggestions.

  Based on the user's description of their current feelings and challenges, provide a list of relevant mental health resources such as support groups, therapists, and helpful articles.

  Feelings and challenges: {{{feelings}}} `,
});

const findSupportToolFlow = ai.defineFlow(
  {
    name: 'findSupportToolFlow',
    inputSchema: FindSupportToolInputSchema,
    outputSchema: FindSupportToolOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
