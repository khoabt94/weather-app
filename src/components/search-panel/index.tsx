import { FloatingLabelInput } from "@/components/input";
import { useHandleRouter } from "@/hooks/use-handle-router";
import { SearchSchema } from '@/schemas/search.schema';
import { Search, X } from 'lucide-react';
import { useRef } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';

type SearchPanelProps = {
  handleSearch: (_v: string) => void
}

export default function SearchPanel({ handleSearch }: SearchPanelProps) {
  const { query, pushQuery } = useHandleRouter()
  const inputRef = useRef<HTMLInputElement>(null)
  const form = useForm<yup.InferType<typeof SearchSchema>>({
    defaultValues: {
      city: query.city || ''
    }
  })




  const onSubmitSearch = ({ city }: yup.InferType<typeof SearchSchema>) => {
    pushQuery({ city })
    handleSearch(city)
  }

  return (
    <form className="flex md:gap-x-5 gap-x-3 h-[60px]" onSubmit={form.handleSubmit(onSubmitSearch)}>
      <Controller
        control={form.control}
        name='city'
        render={({ field }) => (
          <FloatingLabelInput
            label="City"
            {...field}
            ref={inputRef}
          />
        )}
      />
      <button
        type="submit"
        className="size-[60px] rounded-[20px] bg-primary dark:bg-dark flex items-center justify-center group shadow"
      >
        <Search color="white" strokeWidth={2} className="size-[28px] group-hover:scale-125 transition-all" />
      </button>
      <button
        type="button"
        className="size-[60px] rounded-[20px] bg-error flex items-center justify-center group shadow"
        onClick={() => {
          form.setValue('city', '')
          if (inputRef && inputRef.current) {
            inputRef.current.focus()
          }
        }
        }
      >
        <X color="white" strokeWidth={2} className="size-[28px] group-hover:scale-125 transition-all" />
      </button>
    </form>
  )
}
