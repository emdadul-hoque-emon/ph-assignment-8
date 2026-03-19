"use client";
import React, { useActionState } from "react";
import {
  X,
  MapPin,
  Camera,
  Image,
  Edit,
  User,
  Globe,
  FileText,
  CheckCircle,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import { MultiSelect } from "@/components/ui/multi-select";
import { TOURIST_PREFERENCES } from "@/constants/user";
import InputFieldError from "@/components/shared/InputFieldError";
import { IInputErrorState } from "@/lib/getInputFieldError";
import { editTourist } from "@/services/tourist/tourist.service";
import { IUser } from "@/interfaces/user.interface";

const TravelerProfileModal = ({
  user,
  isEdit = true,
}: {
  user: IUser<null>;
  isEdit?: boolean;
}) => {
  const [interests, setInterests] = React.useState<
    { label: string; value: string }[]
  >([]);
  const [open, setOpen] = React.useState(false);
  const [state, isPending] = useActionState(
    editTourist.bind(null, user.id),
    null,
  );
  return (
    <Dialog>
      <DialogTrigger>
        <Button className="flex items-center gap-2">
          <Edit className="h-4 w-4" />
          Edit Profile
        </Button>
      </DialogTrigger>
      <DialogContent className=" max-h-[80vh] overflow-auto">
        <DialogHeader>
          <DialogTitle>
            {isEdit ? "Edit User Profile" : "Create User Profile"}
          </DialogTitle>
          <DialogDescription>
            {isEdit
              ? "Update your profile information at any time."
              : "Fill in the details to create your user profile."}
          </DialogDescription>
        </DialogHeader>
        <div className="overflow-y-auto p-6 space-y-8">
          <div className="flex flex-col items-center gap-4">
            <div className="relative group">
              <div className="size-32 rounded-full border-4 border-white dark:border-slate-800 shadow-lg overflow-hidden bg-slate-100">
                <img
                  alt="Profile avatar"
                  className="w-full h-full object-cover"
                  data-alt="Close up portrait of a smiling young man outdoors"
                  src={user.avatar || "/images/default_avatar.png"}
                />
              </div>
              <Button
                size="icon"
                className="absolute bottom-0 right-0 rounded-full border-2 border-white dark:border-slate-900 flex items-center justify-center hover:scale-110 transition-transform"
              >
                <Camera className="h-4 w-4" />
              </Button>
            </div>
            <div className="text-center">
              <h3 className="text-slate-900 dark:text-slate-100 font-semibold">
                Change Photo
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-xs">
                JPG, GIF or PNG. Max size of 2MB
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Field className="md:col-span-2 space-y-2">
              <FieldLabel className="flex items-center gap-2">
                <User className="h-5 w-5 opacity-70" />
                Full Name
              </FieldLabel>
              <Input
                placeholder="Enter your full name"
                type="text"
                defaultValue={user.name || undefined}
              />
            </Field>
            <Field className="space-y-2">
              <FieldLabel className="flex items-center gap-2">
                <MapPin className="h-5 w-5 opacity-70" />
                City
              </FieldLabel>
              <Input
                placeholder="City name"
                type="text"
                defaultValue={user.city || undefined}
              />
            </Field>
            <Field className="space-y-2">
              <FieldLabel className="flex items-center gap-2">
                <Globe className="h-5 w-5 opacity-70" />
                Country
              </FieldLabel>
              <Input
                placeholder="Country name"
                type="text"
                defaultValue={user.country || undefined}
              />
            </Field>
            <Field className="md:col-span-2 space-y-2">
              <FieldLabel className="flex items-center gap-2">
                <FileText className="h-5 w-5 opacity-70" />
                Bio/About Me
              </FieldLabel>
              <Textarea
                placeholder="Tell us about your travel style and favorite adventures..."
                rows={4}
                defaultValue={user.bio || undefined}
              />
            </Field>
            <div className="md:col-span-2 space-y-3">
              <Field className="space-y-1 gap-px w-1/2">
                <FieldLabel htmlFor="interests">Interests</FieldLabel>
                <FieldContent>
                  <MultiSelect
                    options={TOURIST_PREFERENCES}
                    onValueChange={(e) =>
                      setInterests(
                        e.map((i) => {
                          const interest = TOURIST_PREFERENCES.find(
                            (p) => p.value === i,
                          );
                          return {
                            label: interest?.label || "",
                            value: interest?.value || "",
                          };
                        }),
                      )
                    }
                    value={interests.map((i) => i.value)}
                    placeholder="Select interest..."
                    searchPlaceholder="Search interest..."
                    maxDisplayed={2}
                    id="interests"
                  />
                </FieldContent>
                <InputFieldError
                  state={state as IInputErrorState}
                  field="interests"
                />
              </Field>
            </div>
          </div>
        </div>
        <div className="px-6 py-4 bg-slate-50 dark:bg-slate-800/50 flex justify-between items-center text-xs text-slate-500 dark:text-slate-400">
          <p>Profile completion: 85%</p>
          <div className="flex items-center gap-1">
            <CheckCircle className="h-4 w-4 text-green-500" />
            <span>Verified TourBuddy Member</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default TravelerProfileModal;
