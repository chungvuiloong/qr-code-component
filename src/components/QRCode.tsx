import { Card, Typography } from '@material-tailwind/react';
import React from 'react';
import QR_logo from '../assets/images/image-qr-code.png'

const QRCode = () => {
    return (
        <div className='container mx-auto'>
            <Card className='w-[300px] shadow-md p-3 mx-auto text-center border border-neutral-700 rounded-2xl flex gap-5'>
                <img src={QR_logo} alt="QR code" className='rounded-xl'/>
                <Typography variant='h5' color='black' className='mt-2 font-bold'>
                    Improve your front-end skills by building projects
                </Typography>
                <Typography variant='paragraph' className='mb-5'>
                    Scan the QR Code to visit Frontend Mentor and take your coding skills to the next level
                </Typography>
            </Card>
        </div>
    );
};

export default QRCode;