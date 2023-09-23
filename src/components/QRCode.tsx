import { Card, Typography } from '@material-tailwind/react';
import React from 'react';

const QRCode = () => {
    return (
        <div className='container'>
            <Card>
                <Typography variant='h3' className='font-semibold'>
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