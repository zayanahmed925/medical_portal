import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import PrimaryButton from '../../Shared/PrimaryButton/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section
            style={{
                background: `url(${appointment})`
            }}
            className='flex items-center justify-center'>
            <div className='flex-1 hidden lg:block'>
                <img src={doctor} className='mt-[-150px]' alt="" />
            </div>
            <div className='flex-1 '>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white font-bold my-8'>Make an appointment Today</h2>
                <p className='text-white my-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae iure fugit fugiat unde consectetur, cumque numquam, voluptate quasi facilis nemo, consequuntur vitae aliquam. Dolores soluta animi minima reiciendis, aliquid odit adipisci eos architecto, tempore minus provident sint consequuntur ipsam expedita.</p>
                <PrimaryButton>Get started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;