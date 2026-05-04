"use client";

import InputFieldError from "@/components/shared/InputFieldError";
import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import React from "react";

export const InputNumber = React.memo(
  ({
    id,
    label,
    placeholder,
    defaultValue,
    state,
  }: {
    id: string;
    label: string;
    placeholder?: string;
    defaultValue?: number;
    state: any;
  }) => (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <Input
        type="number"
        name={id}
        defaultValue={defaultValue}
        placeholder={placeholder}
      />
      <InputFieldError state={state} field={id} />
    </Field>
  ),
);

InputNumber.displayName = "InputNumber";
