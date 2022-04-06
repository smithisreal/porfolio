import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
type cardProps = {
    imgUrl: string,
    text: string
}
export default function card({ imgUrl, text }: cardProps) {
    return (
        <Card className='mt-4' sx={{ maxWidth: 85, minHeight: 100 }}>
            <CardActionArea>
                <CardMedia
                    className='object-none h-20 bg-black'
                    component="img"
                    image={imgUrl}
                />
                <Box className='flex w-full items-center justify-center' >
                    <p className='font-atma font-medium' >
                        {text}
                    </p>
                </Box>
            </CardActionArea>
        </Card>
    )
}