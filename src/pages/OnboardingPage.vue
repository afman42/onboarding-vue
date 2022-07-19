<template>
    <div class="row">
        <div class="col-12" v-if="widthPhone">
            <swiper-list :allowTouchMove="false" :modules="modules" :slides-per-view="1" :space-between="50"
                @swiper="onSwiper" @slideChange="onSlideChange">
                <swiper-slide v-for="slide in dataSlides" class="flex-center" :key="slide.id">
                    <img :src="slide.image" style="width: 300px; height: 300px;margin-left: 20px;" />
                    <div class="slide-title">{{ slide.title }}</div>
                    <div class="slide-p">{{ slide.subtitle }}</div>
                </swiper-slide>
            </swiper-list>
            <div v-if="countSlide != dataSlides.length" class="row q-mt-sm">
                <div class="col-5 q-pl-md">
                    <q-btn color="primary" outline rounded class="full-width" label="Skip" @click="skip" />
                </div>
                <div class="col-1"></div>
                <div class="col-5 q-pr-md">
                    <q-btn color="primary" rounded label="Next" class="full-width" @click="goToNextSlide" />
                </div>
            </div>
            <div v-else class="row q-mt-sm">
                <div class="col q-px-sm">
                    <q-btn color="primary" @click="gettingStarted" rounded class="full-width" label="Get Started" />
                </div>
            </div>
        </div>
        <div class="col-12 q-mt-xl" style="display: flex; justify-content: center; align-items: center;" v-else>
            Especially for mobile phone
        </div>
    </div>
</template>
<script>
import { defineComponent, onMounted, ref } from 'vue'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useRouter } from 'vue-router';
import { storeData, getData } from '../utils'

const slides = [
    {
        id: '1',
        image: 'images/image1.png',
        title: 'Best Digital Solution',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: '2',
        image: 'images/image2.png',
        title: 'Achieve Your Goals',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: '3',
        image: 'images/image3.png',
        title: 'Increase Your Value',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
];
export default defineComponent({
    name: 'OnboardingPage',
    setup() {
        const countSlide = ref(0)
        const swiper = ref();
        const widthPhone = ref(true);
        const dataSlides = ref(slides);
        const router = useRouter();
        let dimension = window.innerWidth;
        const onSwiper = (s) => {
            swiper.value = s
        };
        const onSlideChange = (e) => {
            console.log('slide change');
            console.log(e);
        };

        const goToNextSlide = () => {
            countSlide.value += 1;
            swiper.value.slideNext()
        };

        const skip = () => {
            countSlide.value = dataSlides.value.length;
        };

        const gettingStarted = () => {
            router.push('/home');
            storeData('onboarding', 'tadaima');
        }
        onMounted(() => {
            if (getData('onboarding')) {
                router.push('/home');
            }
            if (dimension > 500) {
                widthPhone.value = false
                // alert('especially for mobile phone');
                return;
            }
        })
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, A11y],
            dataSlides,
            goToNextSlide,
            skip,
            countSlide,
            gettingStarted,
            widthPhone
        };
    },
})
</script>

<style>
.slide-title {
    font-size: 22px;
    margin-top: 10px;
    font-weight: bold;
    text-align: center;

}

.slide-p {
    font-size: 13px;
    max-width: '70%';
    text-align: center;
    padding-bottom: 50px;
}
</style>