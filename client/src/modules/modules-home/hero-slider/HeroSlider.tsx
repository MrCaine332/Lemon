import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay, Navigation, Pagination, Thumbs} from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useAppDispatch, useAppSelector} from "@app/hooks/store";
import {HeroSlide} from "@modules/modules-home/hero-slider/components/hero-slide";
import {useQuery} from "@tanstack/react-query";
import {homeActions} from "@app/store/slices/home-slice";
import {Section} from "@components/ui/section";
import {getTodaySelection} from "@app/http/recipe-api-calls";

export const HeroSlider = () => {
	const dispatch = useAppDispatch()
	const sliderRecipes = useAppSelector(state => state.home.sliderRecipes)

	useQuery({
		queryKey: ["today"],
		retry: 0,
		queryFn: () => getTodaySelection(),
		onSuccess: (response) => {
			dispatch(homeActions.setSliderRecipes(response.data))
		}
	})

	return (
		<Section noPadding={true}>
			<Swiper
				loop={true}
				autoplay={{
					delay: 5000,
				}}
				slidesPerView={1}
				modules={[Navigation, Thumbs, Autoplay, Pagination]}
				// navigation={true}
				pagination={true}
			>
				{ sliderRecipes?.map((item, index: number) => (
					<SwiperSlide key={index}>
						<HeroSlide recipe={item} />
					</SwiperSlide>
				))}
			</Swiper>
		</Section>
	);
};

