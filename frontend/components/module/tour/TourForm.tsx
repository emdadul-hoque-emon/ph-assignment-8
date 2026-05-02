import InputFieldError from "@/components/shared/InputFieldError";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldContent,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { SearchableSelect } from "@/components/ui/searchable-select";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { IInputErrorState } from "@/lib/getInputFieldError";
import { unicodeToEmoji } from "@/lib/unicodeToEmoji";
import { createTour, updateTour } from "@/services/tour/tour.service";
import { Check, ChevronsUpDown, Loader2, Trash2, X } from "lucide-react";
import Image from "next/image";
import { useActionState, useEffect, useRef, useState } from "react";
import languages from "@/data/iso/languages.json";
import { toast } from "sonner";
import { ITour } from "@/interfaces/tour.interface";
import { TOUR_CATEGORIES } from "@/constants/user";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { se } from "date-fns/locale";
import { serverFetch } from "@/lib/server-fetch";

interface TourFormProps {
  tourData?: ITour;
  onSuccess?: () => void;
  onClose?: () => void;
}

interface Destination {
  city: string;
  country: string;
  id: string;
}

const TourForm = ({ tourData, onSuccess, onClose }: TourFormProps) => {
  const isEdit = !!tourData;
  const [category, setCategory] = useState(tourData?.category || "");
  const [tourImage, setTourImage] = useState<File | null>(null);
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(
    tourData?.language || "",
  );
  const [selectedDestination, setSelectedDestination] =
    useState<Destination | null>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const action = !isEdit ? createTour : updateTour;
  const [state, formAction, isPending] = useActionState(action, null);

  useEffect(() => {
    if (state?.success) {
      toast.success(state.message);
      if (formRef?.current) {
        formRef.current.reset();
      }

      if (fileInputRef?.current) {
        fileInputRef.current.value = "";
      }
      setTourImage(null);
      onSuccess?.();
      onClose?.();
    } else if (state && !state.success) {
      if (!state.errors || state.errors?.length === 0)
        toast.error(state.message);
      if (tourImage && fileInputRef.current) {
        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(tourImage);
        fileInputRef.current.files = dataTransfer.files;
      }
    }
  }, [state]);

  useEffect(() => {
    if (!tourImage) return;
    const url = URL.createObjectURL(tourImage);
    return () => URL.revokeObjectURL(url);
  }, [tourImage]);

  return (
    <div className="">
      <form action={formAction} className="space-y-6">
        {isEdit && tourData && (
          <input type="hidden" name="tourId" value={tourData._id} />
        )}
        <input type="hidden" name="category" value={category} />
        <input
          type="hidden"
          name="language"
          value={selectedLanguage as string}
        />
        <input
          type="hidden"
          name="destinationId"
          value={selectedDestination ? selectedDestination.id : ""}
        />

        {/* Basic Information */}
        <div className="space-y-4">
          <Field>
            <FieldLabel htmlFor="tour_name">Tour Name *</FieldLabel>
            <Input
              name="title"
              id="tour_name"
              placeholder="e.g. Historic City Walking Tour"
              defaultValue={
                state?.formData?.title || (isEdit ? tourData.title : undefined)
              }
            />
            <InputFieldError state={state as IInputErrorState} field="title" />
          </Field>

          <Field>
            <FieldLabel htmlFor="description">Description *</FieldLabel>
            <Textarea
              name="description"
              id="description"
              placeholder="Describe what makes this tour special..."
              rows={4}
              defaultValue={
                state?.formData?.description ||
                (isEdit ? tourData.description : undefined)
              }
            />
            <InputFieldError
              state={state as IInputErrorState}
              field="description"
            />
          </Field>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="maxGroupSize">Max Group Size *</FieldLabel>
              <Input
                name="maxGroupSize"
                id="maxGroupSize"
                type="number"
                placeholder="e.g. 10"
                min="1"
                defaultValue={
                  state?.formData?.maxGroupSize ||
                  (isEdit ? tourData.maxGroupSize : undefined)
                }
              />
              <InputFieldError
                state={state as IInputErrorState}
                field="maxGroupSize"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="priceFrom">Price From (USD) *</FieldLabel>
              <Input
                name="priceFrom"
                id="priceFrom"
                type="number"
                placeholder="89"
                min="0"
                defaultValue={
                  state?.formData?.priceFrom ||
                  (isEdit ? tourData.priceFrom : undefined)
                }
              />
              <InputFieldError
                state={state as IInputErrorState}
                field="priceFrom"
              />
            </Field>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field className="relative">
              <FieldLabel htmlFor="language">Language *</FieldLabel>
              <SearchableSelect
                id="language"
                options={languages
                  .map((c) => ({
                    value: c.name,
                    label: c.name,
                  }))
                  .sort((a, b) => a.value.localeCompare(b.value))}
                value={selectedLanguage as string}
                onValueChange={(v) => {
                  setSelectedLanguage(v);
                }}
              />
              <InputFieldError
                state={state as IInputErrorState}
                field="language"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="category">Category *</FieldLabel>
              <Select
                name="category"
                value={category}
                onValueChange={setCategory}
              >
                <SelectTrigger id="category" className="w-full">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {TOUR_CATEGORIES.map((category) => (
                    <SelectItem key={category.value} value={category.value}>
                      {category.label}
                    </SelectItem>
                  ))}
                  <SelectItem value="cultural">Cultural</SelectItem>
                  <SelectItem value="adventure">Adventure</SelectItem>
                  <SelectItem value="food">Food & Culinary</SelectItem>
                  <SelectItem value="leisure">Leisure</SelectItem>
                  <SelectItem value="nature">Nature</SelectItem>
                  <SelectItem value="history">History</SelectItem>
                </SelectContent>
              </Select>
              <InputFieldError
                state={state as IInputErrorState}
                field="category"
              />
            </Field>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Field>
              <FieldLabel htmlFor="durationDays">Duration Days *</FieldLabel>
              <Input
                name="durationDays"
                id="durationDays"
                type="number"
                placeholder="e.g. 1"
                min="1"
                defaultValue={
                  state?.formData?.durationDays ||
                  (isEdit ? tourData.durationDays : undefined)
                }
              />
              <InputFieldError
                state={state as IInputErrorState}
                field="durationDays"
              />
            </Field>
            <Field>
              <FieldLabel htmlFor="destinationId">Destination *</FieldLabel>
              <FieldContent>
                <DestionationsSelect
                  selectedOption={selectedDestination}
                  setSelectedOption={setSelectedDestination}
                />
              </FieldContent>
            </Field>
          </div>
        </div>

        {/* Tour Images */}
        <Field className="space-y-2 pt-4 gap-0">
          <FieldLabel
            htmlFor="tourImages"
            className="text-sm text-muted-foreground"
          >
            Upload images that represent your tour
          </FieldLabel>
          <InputFieldError state={state as IInputErrorState} field="image" />
          <Input
            type="file"
            accept="image/*"
            name="images"
            id="tourImages"
            placeholder="Tour banner"
            onChange={(e) => setTourImage(e.target.files?.[0] as File)}
            multiple
            max={3}
          />
          <div className="relative">
            {tourImage && (
              <div className="mt-2 flex items-center gap-2">
                <div className="h-30 w-full rounded-lg overflow-hidden">
                  <Image
                    src={URL.createObjectURL(tourImage)}
                    alt="Tour banner"
                    fill
                    className="object-cover"
                  />
                  <Button
                    type="button"
                    onClick={() => setTourImage(null)}
                    variant={"outline"}
                    size={"sm"}
                    className="absolute top-1 right-1 rounded-full size-6"
                  >
                    <X />
                  </Button>
                </div>
              </div>
            )}
          </div>
        </Field>

        {/* Additional Settings */}
        <div className="space-y-3 pt-4 border-t">
          <h3 className="font-semibold text-base">Additional Settings</h3>
          <FieldGroup className="space-y-2 gap-0">
            <Field orientation={"horizontal"}>
              <Checkbox
                id="active"
                name="isActive"
                className="rounded"
                defaultChecked={
                  state?.formData?.isActive ||
                  (isEdit ? tourData.isActive : false)
                }
              />
              <FieldLabel
                htmlFor="active"
                className="flex items-center gap-2 cursor-pointer"
              >
                <span className="text-sm">Active tour</span>
              </FieldLabel>
            </Field>
            <Field orientation={"horizontal"}>
              <Checkbox
                name="isFeatured"
                id="featured"
                className="rounded"
                defaultChecked={
                  state?.formData?.isFeatured ||
                  (isEdit ? tourData.isFeatured : false)
                }
              />
              <FieldLabel
                htmlFor="featured"
                className="flex items-center gap-2 cursor-pointer"
              >
                <span className="text-sm">Featured tour</span>
              </FieldLabel>
            </Field>
          </FieldGroup>
        </div>

        {/* Submit Buttons */}
        <div className="flex gap-3 pt-4 border-t">
          <Button
            type="submit"
            size="lg"
            className="flex-1"
            disabled={isPending}
          >
            {isPending && <Loader2 className="h-4 w-4 mr-2 animate-spin" />}
            {isEdit ? "Update Tour" : "Create Tour"}
          </Button>
        </div>
      </form>
    </div>
  );
};

const DestionationsSelect = ({
  selectedOption,
  setSelectedOption,
}: {
  selectedOption: Destination | null;
  setSelectedOption: React.Dispatch<React.SetStateAction<Destination | null>>;
}) => {
  const [openPopover, setOpenPopover] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [destionations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const fetchDestionations = async () => {
      try {
        setLoading(true);

        const response = await serverFetch.get("/v2/destinations");
        const data = await response.json();
        console.log(data);
        setDestinations(data.data);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchDestionations();
  }, [openPopover]);
  return (
    <Popover open={openPopover} onOpenChange={setOpenPopover} modal={true}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          // aria-expanded={open}
          className={cn("w-full justify-between")}
          // disabled={disabled}
        >
          <span className="truncate">
            {selectedOption
              ? `${selectedOption.city}, ${selectedOption.country}`
              : "Select a destination..."}
          </span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[--radix-popover-trigger-width] p-0"
        align="start"
        sideOffset={5}
        style={{ zIndex: 9999 }}
        onOpenAutoFocus={(e) => {
          e.preventDefault();
          inputRef.current?.focus();
        }}
      >
        <Command>
          <CommandInput
            ref={inputRef}
            placeholder={"Search destinations..."}
            value={searchQuery}
            onValueChange={setSearchQuery}
          />
          {loading ? (
            <CommandList className="max-h-75 overflow-y-auto">
              <CommandEmpty>Loading destinations...</CommandEmpty>
            </CommandList>
          ) : destionations.length === 0 ? (
            <CommandList className="max-h-75 overflow-y-auto">
              <CommandEmpty>No destinations found.</CommandEmpty>
            </CommandList>
          ) : (
            <CommandList className="max-h-75 overflow-y-auto">
              <CommandEmpty>{"No results found."}</CommandEmpty>
              <CommandGroup>
                {destionations.map((v, index) => (
                  <CommandItem
                    key={v.id}
                    value={v.id}
                    onSelect={(currentValue) => {
                      setSelectedOption(
                        destionations.find((d) => d.id === currentValue) ||
                          null,
                      );
                      setOpenPopover(false);
                    }}
                    className="cursor-pointer justify-start"
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        selectedOption?.id === v.id
                          ? "opacity-100"
                          : "opacity-0",
                      )}
                    />
                    {v.city}, {v.country}
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          )}
        </Command>
      </PopoverContent>
    </Popover>
  );
};

export default TourForm;
