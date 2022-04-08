import React from 'react';
import Title from '../../../shared/components/animation/withAnimationHoveText';
import Box from '@mui/material/Box';
import { FrontEndList } from '../mock/dataFrontEndList';
import { BackEndList } from '../mock/dataBackEndlist';
import { OtherList } from '../mock/dataOtherList';
import {FormatMessage} from '../../change_lang/change'
import CardLsit from '../components/cardList'
export default function skill() {
    return (
        <Box className="pl-28 max-h-full">
            <Title noUseLeave={false} noUseEnter={true} text={FormatMessage('skill.title')} />
            <div className='flex justify-between pl-16'>
                <div className='w-3/4 border-r-2'>
                    <div className='justify-center flex'>
                        <h1 className='text-white font-atma font-semibold'>
                            Front End
                        </h1>
                    </div>
                    <CardLsit listCard={FrontEndList} />
                </div>
                <div className='w-3/4 border-r-2'>
                    <div className='justify-center flex'>
                        <h1 className='text-white font-atma font-semibold'>
                            Back End
                        </h1>
                    </div>
                    <CardLsit listCard={BackEndList} />
                </div>
                <div className='w-3/4'>
                    <div className='justify-center flex'>
                        <h1 className='text-white font-atma font-semibold'>
                            Other
                        </h1>
                    </div>
                    <CardLsit listCard={OtherList} />
                </div>
            </div>
        </Box>
    )
}
