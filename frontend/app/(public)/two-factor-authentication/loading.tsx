"use client";
import { Button } from "@/components/ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { Skeleton } from "@/components/ui/skeleton";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { RefreshCcw } from "lucide-react";

const loading = () => {
  return (
    <div>
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-surface"></div>
        <div className="absolute top-0 right-0 w-150 h-150 bg-primary/5 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-primary-container/5 rounded-full blur-[100px]"></div>
      </div>

      <main className="relative z-10 flex items-center justify-center px-6 py-10">
        <div className="w-full max-w-120 space-y-10">
          <div className="bg-surface-container-low rounded-4xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
            <div className="relative z-10 space-y-8">
              <div className="space-y-2">
                <h2 className="text-headline-sm font-bold text-on-surface">
                  Enter Security Code
                </h2>
                <p className="text-body-md text-on-surface-variant leading-relaxed">
                  We've sent a 6-digit verification code to your registered
                  email. Enter it below to secure your session.
                </p>
              </div>
              <div className="flex justify-center w-full">
                <InputOTP
                  containerClassName="w-full *:w-full"
                  maxLength={6}
                  name="otp"
                  pattern={REGEXP_ONLY_DIGITS}
                >
                  {Array.from({ length: 6 }).map((_, index) => (
                    <InputOTPGroup className="w-full" key={index}>
                      <InputOTPSlot index={index} />
                    </InputOTPGroup>
                  ))}
                </InputOTP>
              </div>
              <Button className="w-full py-4 text-lg hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 shadow-lg shadow-primary/20">
                Verify Identity
              </Button>

              <div className="pt-4 space-y-4 border-t border-outline-variant/10">
                <div className="flex items-center justify-between">
                  <button
                    type="button"
                    className="text-label-md font-bold text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2 cursor-pointer"
                  >
                    <RefreshCcw size={16} />
                    Resend Code
                  </button>
                  <Skeleton className="w-16 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default loading;
