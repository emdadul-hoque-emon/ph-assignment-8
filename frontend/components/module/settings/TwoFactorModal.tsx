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
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { KeyRoundIcon, MailIcon, QrCodeIcon } from "lucide-react";
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
          <DialogDescription className="text-start">
            Add an extra security layer to your account. After entering your
            password, we&apos;ll ask for a verification code.
          </DialogDescription>
        </DialogHeader>

        <main>
          <h1>Choose how to confirm that it's you</h1>
          <RadioGroup
            name="method"
            defaultValue="TOTP"
            className="border rounded-md gap-0 divide-y"
          >
            <div>
              <FieldLabel
                htmlFor="totp"
                className="border-none rounded-b-none! hover:bg-primary/5 has-data-[state=checked]:hover:bg-primary/5! has-data-[state=checked]:bg-transparent!"
              >
                <Field
                  orientation={"horizontal"}
                  className="flex gap-3 items-center p-3 h-full"
                >
                  <div className="flex items-start h-full pt-1">
                    <QrCodeIcon />
                  </div>
                  <div>
                    <h1>Authentication App </h1>
                    <p>
                      Get a code from an app, such as Duo Mobile or Google
                      Authenticator.
                    </p>
                  </div>
                  <RadioGroupItem
                    value="TOTP"
                    id="totp"
                    className="size-5"
                    circleSize={14}
                  />
                </Field>
              </FieldLabel>
            </div>
            <div>
              <FieldLabel
                htmlFor="email"
                className="border-none rounded-t-none! hover:bg-primary/5 has-data-[state=checked]:hover:bg-primary/5! has-data-[state=checked]:bg-transparent!"
              >
                <Field
                  orientation={"horizontal"}
                  className="flex gap-3 items-center p-3 h-full"
                >
                  <div className="flex items-start h-full pt-1">
                    <MailIcon />
                  </div>
                  <div className="flex-1">
                    <h1>Email</h1>
                    <p>Receive a one-time code via email.</p>
                  </div>
                  <RadioGroupItem
                    value="EMAIL"
                    id="email"
                    className="size-5"
                    circleSize={14}
                  />
                </Field>
              </FieldLabel>
            </div>
            <div>
              <FieldLabel
                htmlFor="pass_key"
                className="border-none rounded-t-none! hover:bg-primary/5 has-data-[state=checked]:hover:bg-primary/5! has-data-[state=checked]:bg-transparent! disabled:cursor-not-allowed! disabled:hover:bg-transparent!"
              >
                <Field
                  orientation={"horizontal"}
                  className="flex gap-3 items-center p-3 h-full"
                >
                  <div className="flex items-start h-full pt-1">
                    <KeyRoundIcon />
                  </div>
                  <div className="flex-1">
                    <h1>Pass Key</h1>
                    <p>Use a pass key to verify your identity.</p>
                  </div>
                  <RadioGroupItem
                    disabled
                    value="PASS_KEY"
                    id="pass_key"
                    className="size-5"
                    circleSize={14}
                  />
                </Field>
              </FieldLabel>
            </div>
          </RadioGroup>
        </main>

        <Button>Continue</Button>

        {/* <div className="space-y-5 py-2">
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
        </div> */}
      </DialogContent>
    </Dialog>
  );
};

export default TwoFactorModal;
