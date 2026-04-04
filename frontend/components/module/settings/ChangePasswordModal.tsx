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
import React from "react";

const ChangePasswordModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <Dialog>
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

        <form className="grid w-full gap-4 py-4">
          <div className="grid w-full items-center gap-2">
            <Field>
              <FieldLabel>Current Password</FieldLabel>
              <FieldContent>
                <input
                  type="password"
                  placeholder="Enter your current password"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </FieldContent>
            </Field>

            <Field>
              <FieldLabel>New Password</FieldLabel>
              <FieldContent>
                <input
                  type="password"
                  placeholder="Enter your new password"
                  className="w-full rounded-md border border-input bg-background px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </FieldContent>
            </Field>
          </div>
          <Button type="submit" className="ml-auto">
            Update Password
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ChangePasswordModal;
