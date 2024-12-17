"use client";

import { Control } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import InputMask from "react-input-mask";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  name: string;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  dateFormat?: string;
  showTimeSelect?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (field: any) => React.ReactNode;
  type?: string;
  min?: number;
  max?: number;
  step?: number;
  className?: string;
  mask?: string;
}

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  INPUT_MASK = "inputMask",
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  const { fieldType, ...restProps } = props;

  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <FormControl>
          <Input
            {...field}
            placeholder={restProps.placeholder}
            disabled={restProps.disabled}
            type={restProps.type}
            className={restProps.className}
          />
        </FormControl>
      );

    case FormFieldType.INPUT_MASK:
      return (
        <FormControl>
          <InputMask {...field} {...restProps} mask={restProps.mask}>
            {(inputProps) => (
              <Input
                {...inputProps}
                className={cn(inputProps.className, restProps.className)}
              />
            )}
          </InputMask>
        </FormControl>
      );

    case FormFieldType.TEXTAREA:
      return (
        <FormControl>
          <Textarea
            {...field}
            placeholder={restProps.placeholder}
            disabled={restProps.disabled}
            className={restProps.className}
          />
        </FormControl>
      );

    default:
      return null;
  }
};

export function FormInput(props: CustomProps) {
  const { control, name, label } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel className="capitalize">{label}</FormLabel>}

          <RenderField field={field} props={props} />

          <FormMessage className="text-red-400" />
        </FormItem>
      )}
    />
  );
}
