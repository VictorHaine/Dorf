"use client"

import { useState } from "react"
import { InferModel } from "drizzle-orm"

import { fields } from "@/lib/db/schema"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { EditFieldForm } from "./edit-field-form"
import { ScrollArea } from "./ui/scroll-area"

type Field = InferModel<typeof fields, "select">

export const EditFieldSheet = ({
  children,
  formId,
  field,
}: {
  children: React.ReactNode
  formId: number
  field?: Field
}) => {
  const [open, setOpen] = useState(false)

  return (
    <Sheet onOpenChange={setOpen} open={open}>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className="space-y-8 h-full overflow-auto">
        <SheetHeader>
          <SheetTitle>Edit field</SheetTitle>
          <SheetDescription>
            Create or edit a field for your form.
          </SheetDescription>
        </SheetHeader>
        <EditFieldForm
          formId={formId}
          onSubmitted={() => setOpen(false)}
          field={field}
        />
      </SheetContent>
    </Sheet>
  )
}