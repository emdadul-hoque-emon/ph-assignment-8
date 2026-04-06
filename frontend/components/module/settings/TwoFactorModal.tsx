"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Field, FieldLabel } from "@/components/ui/field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { registerTwoFactor } from "@/services/auth/auth.service";
import { KeyRoundIcon, MailIcon, QrCodeIcon } from "lucide-react";
import React, { useActionState } from "react";

type Props = {
  children: React.ReactNode;
};

const TwoFactorModal = ({ children }: Props) => {
  const [state, action, isPending] = useActionState(registerTwoFactor, null);
  console.log(state);
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

        <form action={action}>
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
            <div className="opacity-50">
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
          <Button className="mt-4 w-full">
            {isPending ? "Loading..." : "Continue"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default TwoFactorModal;
