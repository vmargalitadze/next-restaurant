"use client"
import { useState } from 'react';
import { useTransition } from 'react';

import { Button } from './ui/button';
import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from './ui/alert-dialog';



function DeleteDialog({ id, action} : {id:string, action:(id:string) => Promise< {success: boolean; message:string} > } ) {
    const [open, setOpen] = useState(false);
    const [isPending, startTransition] = useTransition();


    const handleDeleteClick = () => {
        startTransition(async () => {
          const res = await action(id);
    
          if (!res.success) {
      console.log('error');
      
          } else {
            setOpen(false);
          
          }
        });
      };
  return (
    <AlertDialog open={open} onOpenChange={setOpen} > 
        <AlertDialogTrigger asChild className='ml-2'>
        <Button size='sm' variant='default'  >Delete</Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>
                    Are you sure ?
                </AlertDialogTitle>
                <AlertDialogDescription>
                    Cant undone !!!
                </AlertDialogDescription>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <Button size='sm' disabled={isPending} onClick={handleDeleteClick} variant='default'> {isPending ? 'Deleting...' : 'Delete'} </Button>
                </AlertDialogFooter>
            </AlertDialogHeader>
        </AlertDialogContent>
     </AlertDialog>
  )
}

export default DeleteDialog