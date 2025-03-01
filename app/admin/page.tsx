/* eslint-disable @typescript-eslint/no-unused-vars */
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import React from 'react'
import { Metadata } from 'next'

import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table'
import Link from 'next/link'

import DeleteDialog from '@/components/DeleteDialog'
import { deleteBooking, getAllBooking } from '@/lib/actions'
import { FaArrowRight } from 'react-icons/fa'

export const metadata: Metadata = {
  title: 'Admin Orders',
}

async function Page({ searchParams }: { searchParams: Promise<{ page: string; query: string }> }) {
  const session = await auth()
  if (!session) redirect('/sign-in')

  const { page = '1', query: searchText } = await searchParams
  const orders = await getAllBooking({ page: Number(page) })

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Header Section */}
      <div className="relative h-[50vh] mt- flex flex-col items-center justify-center bg-cover bg-center bgimage text-white">
        <div className="text-center mt-[150px]">
          <h1 className="text-4xl font-bold mb-4">Admin Panel</h1>
          <div className=" relative mb-[150px] gap-x-5 uppercase inline-flex bg-orange m-0 text-[12px] px-[30px] h-[50px] rounded-md items-center">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <FaArrowRight />
            <span className="opacity-50">Orders</span>
          </div>
        </div>
      </div>

      {/* Orders Section */}
      <div className="container mx-auto px-4 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">Bookings</h2>
       
        </div>

        {/* Orders Table */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <Table className="w-full">
            <TableHeader className="bg-gray-200 text-gray-700">
              <TableRow>
                <TableHead className="py-3 px-6 text-left">Date</TableHead>
                <TableHead className="py-3 px-6 text-left">Persons</TableHead>
                <TableHead className="py-3 px-6 text-left">Full Name</TableHead>
                <TableHead className="py-3 px-6 text-left">Email</TableHead>
                <TableHead className="py-3 px-6 text-left">Phone</TableHead>
                <TableHead className="py-3 px-6 text-left">Time</TableHead>
                <TableHead className="py-3 px-6 text-left">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.data.map((order) => (
                <TableRow key={order.id} className="border-b hover:bg-gray-100 transition">
                  <TableCell className="py-3 px-6">{order.date}</TableCell>
                  <TableCell className="py-3 px-6">{order.persons}</TableCell>
                  <TableCell className="py-3 px-6">{order.fullName}</TableCell>
                  <TableCell className="py-3 px-6">{order.email}</TableCell>
                  <TableCell className="py-3 px-6">{order.phone}</TableCell>
                  <TableCell className="py-3 px-6">{order.time}</TableCell>
                  <TableCell className="py-3 px-6">
                    <DeleteDialog id={order.id} action={deleteBooking} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  )
}

export default Page
