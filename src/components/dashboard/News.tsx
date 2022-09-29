import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import pdp from '../../assets/images/pdp.jpg';
import Image from 'next/future/image';
import getNews from '../../api/getNews';

const News = () => {
    const [news, setNews] = useState<any>([]);

    useEffect(() => {
        const loadNews = async () => {
            const liveNews = await getNews("https://saurav.tech/NewsAPI/everything/cnn.json");
            setNews(liveNews);
        };

        loadNews();
    }, []);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
                {news.map((newsInfo: any) => {
                    return (
                        <>
                            <Grid key={newsInfo.title} className="h-[100px] mb-8" item xs={6} md={6}>
                                <div className=" flex items-center mt-6 h-[100px] max-h-[100px]">
                                    <img className='min-w-[100px] h-[100px]' src={newsInfo.urlToImage} />
                                    <div className="ml-4 max-h-[100px] max-w-sm">
                                        <h3 className=" text-[11px] text-[#21B8F9]">{newsInfo.title}</h3>
                                        <p className="text-[15px] max-h-12 overflow-hidden">
                                            {newsInfo.description}
                                        </p>
                                        <p className="text-[12px] font-light underline">Estimated reading: 4 min</p>
                                    </div>
                                </div>
                            </Grid>
                            
                        </>
                    );
                })}
            </Grid>
        </Box>
    );
};

export default News;
