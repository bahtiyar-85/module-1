import './styles/entry-styles.css';
import { appStore } from "./js/appstore";
import { timerInit } from "./js/timer";
import { modalInit } from './js/modal';
import { modeChangeInit } from './js/mode';
import { pricingValueInit } from './js/pricing';
import { sidebarInit } from './js/sidebar';
import { testimonialInit } from './js/testimonials';

sidebarInit();
timerInit();
modalInit();
modeChangeInit();
pricingValueInit();
testimonialInit();
appStore();

