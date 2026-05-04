"use client";

import InputFieldError from "@/components/shared/InputFieldError";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { IInputErrorState } from "@/lib/getInputFieldError";

type Props = {
  type?: "text" | "textarea";
  defaultValue?: string;
  state: IInputErrorState | null;
  name: string;
  id?: string;
  placeholder?: string;
  label?: string;
  rows?: number;
};

export const TextInput = ({
  state,
  defaultValue,
  type = "text",
  name,
  id,
  placeholder,
  label,
  rows,
}: Props) => {
  return (
    <Field>
      {label && <FieldLabel htmlFor={id}>{label}</FieldLabel>}
      {type === "text" ? (
        <Input
          name={name}
          id={id}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      ) : (
        <Textarea
          name={name}
          id={id}
          placeholder={placeholder}
          defaultValue={defaultValue}
          rows={rows}
        />
      )}
      <InputFieldError state={state as IInputErrorState} field={name} />
    </Field>
  );
};
