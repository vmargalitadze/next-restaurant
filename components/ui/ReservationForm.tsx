'use client';
import React, {   useTransition } from 'react';
import { format } from 'date-fns';
import { ArrowRight, Calendar as CalendarIcon, Loader } from 'lucide-react';
import { Button } from './button';
import { Calendar } from './calendar';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';

import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from './select';
import { useForm, SubmitHandler, ControllerRenderProps } from 'react-hook-form';
import { bookingSchema } from '@/lib/validator';
import { Input } from './input';
import { zodResolver } from '@hookform/resolvers/zod';
import { createBooking } from '@/lib/actions';

const bookingDefault: z.infer<typeof bookingSchema> = {
  fullName: '',
  email: '',
  phone: '',
  persons: 1,
  date: '',
  time: '',
};

function ReservationForm() {


  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: bookingDefault,
  });

  const generateTimes = () => {
    const times = [];
    for (let hour = 10; hour <= 24; hour++) {
      for (const minute of [0, 30]) {
        const actualHour = hour === 24 ? 0 : hour;
        const ampm = actualHour < 12 ? 'AM' : 'PM';
        const displayHour = actualHour % 12 === 0 ? 12 : actualHour % 12;
        const displayMinute = minute.toString().padStart(2, '0');
        times.push(`${displayHour}:${displayMinute} ${ampm}`);
      }
    }
    return times;
  };

  const timeOptions = generateTimes();

  const onSubmit: SubmitHandler<z.infer<typeof bookingSchema>> = async (values) => {
    if (!values.date) {
      console.error("Please select a date");
      return;
    }
  
    const formattedDate = format(new Date(values.date), "yyyy-MM-dd"); // Convert Date object to string
  
    console.log("Submitting form:", { ...values, date: formattedDate });
  
    startTransition(async () => {
      const res = await createBooking({ ...values, date: formattedDate });
  
      if (!res.success) {
        console.log(res.message);
        return;
      }
  
      router.push("/");
    });
  };
  

  return (
    <Form {...form}>
      <form method="post" onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-y-10">
        <div className="grid gap-[30px]">
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
            <div>
            <FormField
          control={form.control}
          name="fullName"
          render={({ field } : {field: ControllerRenderProps<z.infer<typeof bookingSchema >, 'fullName'  >  } ) => (
            <FormItem className='w-full text-white'>
              <FormLabel>Full ame</FormLabel>
              <FormControl>
                <Input placeholder="Enter full name" {...field} />
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />
              
            </div>
            <div>
            <FormField
          control={form.control}
          name="email"
          render={({ field } : {field: ControllerRenderProps<z.infer<typeof bookingSchema >, 'email'  >  } ) => (
            <FormItem className='w-full text-white'>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter Email" {...field} />
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />
           
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
            <div>
            <FormField
          control={form.control}
          name="phone"
          render={({ field } : {field: ControllerRenderProps<z.infer<typeof bookingSchema >, 'phone'  >  } ) => (
            <FormItem className='w-full text-white'>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input placeholder="Enter Phone" {...field} />
              </FormControl>
            
              <FormMessage />
            </FormItem>
          )}
        />

            
            </div>



            <div>
            <FormField
  control={form.control}
  name="persons"
  render={({ field }) => (
    <FormItem className="w-full text-white">
      <FormLabel>Persons</FormLabel>
      <FormControl>
        <Select onValueChange={(value) => field.onChange(Number(value))} value={field.value?.toString()}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="How many people" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Choose</SelectLabel>
              {[1, 2, 3, 4, 5].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
          <FormField
  control={form.control}
  name="date"
  render={({ field }) => (
    <FormItem className="w-full text-white">
      <FormLabel>Date</FormLabel>
      <FormControl>
        <Popover>
          <PopoverTrigger asChild>
            <div className="flex h-[62px] items-center whitespace-nowrap border-white/10 border bg-white/5 px-6 py-2 text-base text-white shadow-sm ring-offset-background placeholder:text-white/80 focus:outline-none focus:ring-1 focus:ring-orange disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 w-full">
              <CalendarIcon className="mr-2 h-4 w-4" />
              {field.value ? format(new Date(field.value), "PPP") : <span>Pick A Date</span>}
            </div>
          </PopoverTrigger>
          <PopoverContent className="w-auto ">
            <Calendar
              fromDate={new Date()}
              mode="single"
              selected={field.value ? new Date(field.value) : undefined}
              onSelect={(selectedDate) => field.onChange(selectedDate?.toISOString())}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>





  

  <FormField
    control={form.control}
    name="time"
    render={({ field }) => (
      <FormItem className="w-full text-white">
        <FormLabel>Time</FormLabel>
        <FormControl>
          <Select onValueChange={(value) => field.onChange(value)} value={field.value}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select A time" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Available Times</SelectLabel>
                {timeOptions.map((time, index) => (
                  <SelectItem key={index} value={time}>
                    {time}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </FormControl>
        <FormMessage />
      </FormItem>
    )}
  />
</div>
        </div>

        <Button disabled={isPending} className="uppercase w-full">
          {isPending ? <Loader className="w-4 h-4 animate-spin" /> : <ArrowRight className="w-4 h-4" />}
          Book a table
        </Button>
      </form>
    </Form>
  );
}

export default ReservationForm;
