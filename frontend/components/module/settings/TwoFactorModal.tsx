"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const TwoFactorModal = ({ children }: Props) => {
  const [isEnabled, setIsEnabled] = React.useState(false);
  const [viaEmail, setViaEmail] = React.useState(true);
  const [rememberDevice, setRememberDevice] = React.useState(true);

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Two-Factor Authentication</DialogTitle>
          <DialogDescription>
            Add an extra security layer to your account. After entering your
            password, we&apos;ll ask for a verification code.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-5 py-2">
          <div className="flex items-start justify-between gap-3 rounded-lg border p-4">
            <div>
              <p className="font-medium text-sm">Enable 2FA</p>
              <p className="text-muted-foreground text-sm">
                Protect your account with one-time verification codes.
              </p>
            </div>
            <Checkbox
              checked={isEnabled}
              onCheckedChange={(value) => setIsEnabled(value === true)}
              aria-label="Enable two-factor authentication"
            />
          </div>

          <div className="space-y-3 rounded-lg border p-4">
            <p className="font-medium text-sm">Verification method</p>
            <label className="flex items-start gap-3 text-sm">
              <Checkbox
                checked={viaEmail}
                onCheckedChange={(value) => setViaEmail(value === true)}
                aria-label="Use email verification"
                disabled={!isEnabled}
              />
              <span>
                Email verification
                <span className="text-muted-foreground block">
                  Receive a one-time code in your email.
                </span>
              </span>
            </label>

            <label className="flex items-start gap-3 text-sm">
              <Checkbox
                checked={rememberDevice}
                onCheckedChange={(value) => setRememberDevice(value === true)}
                aria-label="Remember this device"
                disabled={!isEnabled}
              />
              <span>
                Remember this device for 30 days
                <span className="text-muted-foreground block">
                  Skip code verification on trusted devices.
                </span>
              </span>
            </label>
          </div>

          <div className="flex justify-end gap-2">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button>{isEnabled ? "Save Changes" : "Enable 2FA"}</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TwoFactorModal;
