import React from 'react'
import Title from './Title'
import AboutImg from '../assets/images/aboutus.jpg'
import { MdLocalShipping } from 'react-icons/md'
import { RiCustomerService2Fill } from 'react-icons/ri'
import { FaDollarSign } from 'react-icons/fa'


const AboutUs = () => {
  return (
    <section className="section">
      <Title title="about us" />
      <div className="flex flex-col md:flex-row ">
        <div  className='justify-center mt-8'>
          <img
            src={AboutImg}
            alt="delicacy"
            className="h-96 w-96 rounded-full object-cover"
          />
        </div>

        <div >
          <h3 className="text-4xl py-2 text-center">A different level of satisfaction</h3>
          <p className="text-l py-2">
            Enjoy the best and different satisfaction. When it comes to customer
            satisfaction, we are the best.
          </p>
          <p className="text-l py-2">
            Whilst there may be competitors, we have proven to be the best. Our
            customer review says it all. lilsenfoods is here to stay!
          </p>
          
          <div className="flex gap-4 flex-wrap p-4 mt-2">
            <div
              className="bg-gray rounded-lg border-2 border-[rgba(0, 0, 0, 0.2)] flex items-center justify-center gap-4 py-3 px-4"
              style={{ flex: "1 1 17rem" }}
            >
              <MdLocalShipping className="text-2xl text-primary" />
              <span className="text-xl">swift delivery</span>
            </div>
            <div
              className="bg-gray rounded-lg border-2 border-[rgba(0, 0, 0, 0.2)] flex items-center justify-center gap-4 py-3 px-4"
              style={{ flex: "1 1 17rem" }}
            >
              <FaDollarSign className="text-2xl text-primary" />
              <span className="text-xl">easy payments</span>
            </div>
            <div
              className="bg-gray rounded-lg border-2 border-[rgba(0, 0, 0, 0.2)] flex items-center justify-center gap-4 py-3 px-4"
              style={{ flex: "1 1 17rem" }}
            >
              <RiCustomerService2Fill className="text-2xl text-primary" />
              <span className="text-xl">excellent delivery service</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs