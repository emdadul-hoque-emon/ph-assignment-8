"use client";
import InputFieldError from "@/components/shared/InputFieldError";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import { IInputErrorState } from "@/lib/getInputFieldError";
import { changePassword } from "@/services/auth/auth.service";
import { RefreshCcw } from "lucide-react";
import React, { useActionState, useEffect } from "react";
import { toast } from "sonner";

const ChangePasswordModal = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);

  const [state, changePasswordAction, isPending] = useActionState(
    changePassword,
    null,
  );

  useEffect(() => {
    if (state && state?.success) {
      setOpen(false);
      toast.success(state.message);
    } else if (state && !state.success && !state?.errors?.length) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Change Password</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          Enter your current password and a new password to update your account
          credentials. Make sure to choose a strong password that you haven't
          used before.
        </DialogDescription>

        <form action={changePasswordAction} className="grid w-full gap-4 py-4">
          <div className="grid w-full items-center gap-2">
            <Field>
              <FieldLabel>Current Password</FieldLabel>
              <FieldContent>
                <input
                  type="password"
                  name="currentPassword"
                  placeholder="Enter your current password"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </FieldContent>
              <InputFieldError
                state={state as IInputErrorState}
                field="currentPassword"
              />
            </Field>

            <Field>
              <FieldLabel>New Password</FieldLabel>
              <FieldContent>
                <input
                  type="password"
                  name="newPassword"
                  placeholder="Enter your new password"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </FieldContent>
              <InputFieldError
                state={state as IInputErrorState}
                field="newPassword"
              />
            </Field>

            <Field>
              <FieldLabel>Confirm New Password</FieldLabel>
              <FieldContent>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm your new password"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </FieldContent>
              <InputFieldError
                state={state as IInputErrorState}
                field="confirmPassword"
              />
            </Field>
          </div>
          <Button
            disabled={isPending}
            type="submit"
            className={`${isPending ? "cursor-not-allowed" : ""} ml-auto`}
          >
            {isPending && <RefreshCcw className="animate-spin" size={18} />}
            {isPending ? "Updating..." : "Update Password"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePasswordModal;
