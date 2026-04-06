import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Field, FieldContent, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ChevronLeftIcon, RefreshCcwIcon } from "lucide-react";
import React from "react";
import { toast } from "sonner";

type Props = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setRootOpen: React.Dispatch<React.SetStateAction<boolean>>;
  email?: string;
};

const EmailSetup = ({ open, setOpen, setRootOpen, email }: Props) => {
  const [otpOpen, setOtpOpen] = React.useState(false);

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                setOpen(false);
                setRootOpen(true);
              }}
            >
              <ChevronLeftIcon />
            </Button>
            <DialogTitle>Add Email Address</DialogTitle>
            <DialogDescription className="text-start">
              Enter your phone number and we'll send you a confirmation code
              next.
            </DialogDescription>
            <Field>
              <FieldLabel htmlFor="email" className="w-full">
                Email Address
              </FieldLabel>
              <FieldContent>
                <Input id="email" value={email} />
              </FieldContent>
            </Field>
          </DialogHeader>
          <Button
            onClick={() => {
              setOpen(false);
              setOtpOpen(true);
            }}
            className="mt-4"
          >
            Next
          </Button>
        </DialogContent>
      </Dialog>

      <EnterOtp
        otpOpen={otpOpen}
        setOtpOpen={setOtpOpen}
        setRootOpen={setOpen}
      />
    </div>
  );
};

const EnterOtp = ({
  otpOpen,
  setOtpOpen,
  setRootOpen,
}: {
  otpOpen: boolean;
  setOtpOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setRootOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [otp, setOtp] = React.useState("");
  const [countdown, setCountdown] = React.useState(60);

  React.useEffect(() => {
    if (!otpOpen) {
      return;
    }
    if (countdown <= 0) {
      return;
    }

    const timer = window.setTimeout(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, [countdown, otpOpen]);

  return (
    <div>
      <Dialog open={otpOpen} onOpenChange={setOtpOpen}>
        <DialogContent>
          <DialogHeader>
            <Button
              variant="outline"
              size="icon"
              onClick={() => {
                setOtpOpen(false);
                setRootOpen(true);
              }}
            >
              <ChevronLeftIcon />
            </Button>
            <DialogTitle>
              Check your email for your verification code
            </DialogTitle>
            <DialogDescription className="text-start">
              Enter the 6-digit code we sent to your email.
            </DialogDescription>
          </DialogHeader>

          <Field>
            <FieldLabel htmlFor="otp" className="w-full">
              Verification Code
            </FieldLabel>
            <FieldContent>
              <Input
                id="otp"
                value={otp}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, "").slice(0, 6);
                  setOtp(value);
                }}
                placeholder="Enter 6-digit code"
                inputMode="numeric"
                maxLength={6}
              />
            </FieldContent>
          </Field>

          <Button
            disabled={otp.length !== 6}
            onClick={() => {
              toast.success("Verification is ready to be connected.");
            }}
          >
            Verify
          </Button>

          <button
            type="button"
            disabled={countdown > 0}
            className="text-sm text-primary flex items-center gap-2 disabled:text-muted-foreground disabled:cursor-not-allowed"
            onClick={() => {
              setCountdown(60);
              toast.success("A new code has been sent.");
            }}
          >
            <RefreshCcwIcon size={14} />
            {countdown > 0 ? `Resend code in ${countdown}s` : "Resend code"}
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EmailSetup;
