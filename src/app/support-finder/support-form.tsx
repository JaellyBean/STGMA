"use client";

import { useFormState, useFormStatus } from 'react-dom';
import { getResourceSuggestions, type FormState } from './actions';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { useEffect, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} size="lg" className="w-full font-bold">
      {pending ? 'Finding Resources...' : 'Get Suggestions'}
    </Button>
  );
}

export function SupportForm() {
  const initialState: FormState = {
    message: '',
  };
  const [state, formAction] = useFormState(getResourceSuggestions, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && state.issues) {
      toast({
        title: "Error",
        description: state.message,
        variant: "destructive",
      });
    }
  }, [state, toast]);

  useEffect(() => {
    if (state.suggestions) {
      formRef.current?.reset();
    }
  }, [state.suggestions]);

  return (
    <div>
      <Card>
        <CardContent className="p-6">
          <form ref={formRef} action={formAction} className="space-y-4">
            <div>
              <Textarea
                name="feelings"
                placeholder="e.g., 'I've been feeling overwhelmed and stressed with work lately. It's hard to focus and I feel disconnected from friends...'"
                rows={6}
                className="text-base"
                defaultValue={state.fields?.feelings}
                aria-describedby="feelings-error"
              />
              {state.issues?.map((issue, index) => (
                <p key={index} id="feelings-error" className="pt-2 text-sm text-destructive">
                  {issue}
                </p>
              ))}
            </div>
            <SubmitButton />
          </form>
        </CardContent>
      </Card>

      {state.suggestions && (
        <div className="mt-8">
          <Alert>
            <AlertTitle className="font-headline text-xl">{state.message}</AlertTitle>
            <AlertDescription className="prose prose-sm mt-2 max-w-none text-foreground">
              <div dangerouslySetInnerHTML={{ __html: state.suggestions.replace(/\n/g, '<br />') }} />
            </AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
}
