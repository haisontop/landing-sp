import { Button, Footer, Header, SubHeader } from '@/components'
import contact_validation from '@/lib/ContactFormValidation';
import builder from '@builder.io/react';
import { useFormik } from 'formik';
import React from 'react'

export async function getStaticProps() {
  builder.init("bc22dc3b592c4fb7860d855ad1b2c528");

  const secondaryLinks = await builder.getAll("secondary-nav", {
    // You can use options for queries, sorting, and targeting here
    // https://github.com/BuilderIO/builder/blob/main/packages/core/docs/interfaces/GetContentOptions.md
  });

  return {
    props: {
      secondaryLinks: secondaryLinks || null,
    },
    revalidate: 5,
  };
}

const contact = [{type : "Phone", address : "(02) 1234 5678"}, {type : "Email", address : "hello@spillaneproperty.com.au"}, {type : "Address", address : " 4/103 Tudor St, Hamilton NSW"},]

export interface valueTypes {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const index = ({ secondaryLinks }: { secondaryLinks: any }) => {
  const formik = useFormik({
    initialValues : {
      name : "",
      email: "",
      phone: "",
      message: ""
    },
    onSubmit : onSubmit,
    validate : contact_validation
  })

  async function onSubmit(value:valueTypes) {
    console.log(value)
  }

  return (
    <div>
      <Header secondaryLinks={secondaryLinks} />
      <SubHeader text='Contact Us' />
      <main className="bg-sp-solid-gray-500 pb-[72px]">
          <div className='container mx-auto px-4 pt-8  lg:pt-10 grid lg:grid-cols-2 lg:gap-x-60'>
            <div className='flex flex-col justify-end'>
                <h1 className='text-4xl font-bold text-sp-solid-blue-800'>Spillane Property</h1>
                 <div className='rounded-2xl border border-sp-solid-gray-600 last:border-b-0 overflow-hidden mt-10 bg-white shadow-xl shadow-sp-solid-blue-700/10'>
                  {
                    contact.map((contact : {type :string, address : string}, index)=>(
                      <div key={index} className='p-7 lg:p-10 border-b border-sp-solid-gray-600'>
                          <h2 className=' text-lg text-sp-solid-gray-800'>{contact.type}</h2>
                          <h1 className='mt-2.5 text-lg lg:text-2xl font-bold text-sp-black underline'>{contact.address}</h1>
                      </div>
                    ))
                  }
                 </div>
                 <div className='border-t-2 border-sp-solid-gray-600 mt-20 py-9 flex flex-col gap-4 lg:gap-0 lg:flex-row justify-between items-center'>
                   <p className='text-lg text-sp-solid-gray-800 font-medium'>Looking for an agents details?</p>
                   <Button type='blue' label='Our Agents' className='font-medium' />
                 </div>
            </div>
            <div className=' rounded-2xl px-7 lg:px-16 pt-14 pb-10 bg-sp-pink border border-sp-solid-pink-600'>
                <h1 className='text-4xl font-bold text-sp-solid-blue-800'>General Enquires</h1>
                <form onSubmit={formik.handleSubmit} className='mt-10 text-sp-solid-gray-800'>
                    <label className='text-lg font-medium'>Your Name <sup className='text-sp-solid-pink-900'>*</sup></label>
                    <br />
                    {formik.errors.name && <p className="text-sm text-red-700 pt-2">{formik.errors.name}</p>}
                    <input {...formik.getFieldProps("name")} placeholder='John Doe' type="text" className='text-base p-4 border border-sp-solid-pink-600 rounded-lg mt-3 w-full lg:w-2/3' />
                    <div className='mt-8' />
                    <label className='text-lg font-medium'>Email Address <sup className='text-sp-solid-pink-900'>*</sup></label>
                    <br />
                    {formik.errors.email && <p className="text-sm text-red-700 pt-2">{formik.errors.email}</p>}
                    <input {...formik.getFieldProps("email")} placeholder='email@address.com.au' type="email" className='text-base p-4 border border-sp-solid-pink-600 rounded-lg mt-3 w-full lg:w-3/4' />
                    <div className='mt-8' />
                    <label className='text-lg font-medium'>Phone Number <sup className='text-sp-solid-pink-900'>*</sup></label>
                    <br />
                    {formik.errors.phone && <p className="text-sm text-red-700 pt-2">{formik.errors.phone}</p>}
                    <input {...formik.getFieldProps("phone")} placeholder='Your phone number' type="text" className='text-base p-4 border border-sp-solid-pink-600 rounded-lg mt-3 w-full lg:w-auto ' />
                    <div className='mt-8' />
                    <label className='text-lg font-medium'>Message</label>
                    <br />
                    {formik.errors.message && <p className="text-sm text-red-700 pt-2">{formik.errors.message}</p>}
                    <textarea {...formik.getFieldProps("message")} placeholder='Your message here' className='text-base p-4 border border-sp-solid-pink-600 rounded-lg mt-3 w-full h-[114px] ' />
                    <Button type='blue' label='Submit Enquiry' className='font-medium mt-9' />
                </form>
            </div>
          </div>
      </main>
      <Footer />
    </div>
  )
}

export default index