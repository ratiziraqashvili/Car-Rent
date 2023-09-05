import React from 'react';

type FooterLink = {
  title: string;
  links: string[];
};

const footerData: FooterLink[] = [
  {
    title: 'About',
    links: ['How it works', 'Featured', 'Partnership', 'Business Relation'],
  },
  {
    title: 'Company',
    links: ['Events', 'Blog', 'Podcast', 'Invite a friend'],
  },
  {
    title: 'Socials',
    links: ['Discord', 'Instagram', 'Twitter', 'Facebook'],
  },
];

function Footer() {
  return (
    <>
      <footer className='flex flex-col sm:flex-row flex-wrap gap-14 border-t-[1px] pt-10 pl-6 pb-16'>
        <div className='flex flex-col flex-1 sm:ml-10'>
          <img
            className='w-32 max-w-full pb-8'
            src='https://cars-showcase-ftmk.vercel.app/logo.svg'
            alt=''
          />
          <span className='font-[manrope] font-thin'>Carhub 2023</span>
          <span className='font-[manrope] font-thin'>All rights reserved ©</span>
        </div>
        <div className='flex flex-col sm:flex-row gap-24 mr-16'>
          {footerData.map((section) => (
            <div key={section.title} className='flex flex-col gap-6'>
              <h3 className='font-[manrope] text-black font-semibold'>{section.title}</h3>
              {section.links.map((link) => (
                <span key={link} className='font-[manrope] text-gray-600 cursor-pointer'>
                  {link}
                </span>
              ))}
            </div>
          ))}
        </div>
      </footer>
      <footer className='flex flex-col sm:flex-row border-t-[1px] pt-8 gap-5 pb-10'>
        <p className='font-[manrope] flex justify-center sm:justify-normal sm:ml-10 flex-1'>
          @2023 CarHub. All Rights Reserved
        </p>
        <div className='flex justify-evenly gap-10 sm:mr-10'>
          <span className='text-gray-600 font-[manrope]'>Privacy Policy</span>
          <span className='text-gray-600 font-[manrope]'>Terms of Use</span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
