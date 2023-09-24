import { Card, Typography } from '@material-tailwind/react';
import React from 'react';
import QR_logo from '../assets/images/image-qr-code.png'

const QRCode = () => {
    return (
        <div className='container mx-auto'>
            <Card className='w-[300px] shadow-lg p-3 mx-auto text-center border border-neutral-700'>
                <img src={QR_logo} alt="QR code" className='rounded-md'/>
                <Typography variant='h5' className='font-bold'>
                    Improve your front-end skills by building projects
                </Typography>
                <Typography variant='paragraph'>
                    Scan the QR Code to visit Frontend Mentor and take your coding skills to the next level
                </Typography>
            </Card>
        </div>
    );
};

export default QRCode;