import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

class CustomCarousel extends HTMLElement {
  constructor() {
    super();
    this.carouselSettings;
    this.currentWidth;
    this.innerHTML;
    this.container;
    this.circleArrow = this.getAttribute('circleArrow') === 'true';
  }

  connectedCallback() {
    if (this.innerHTML.length > 0) {
      this.initCarousel();
    }
    else {
      const that = this;
      let checkHtmlLength = window.setInterval(() => {
        if (this.innerHTML.length > 0) {
          that.initCarousel();
          window.clearInterval(checkHtmlLength);
          checkHtmlLength = false
        }
      }, 500);
      window.setTimeout(() => {
        if (checkHtmlLength) {
          window.clearInterval(checkHtmlLength);
        }
      }, 5000)
    }
  }

  getCarouselSettings() {
    this.currentWidth = window.innerWidth;
    //default settings
    const defaultSettings = {
      slidesPerView: 1,
      spaceBetween: 15,
      speed: 1000,
      navigation: false
    }
    let carouselSettings = defaultSettings;
    //end of default settings 

    //handle breakpoint
    const { breakpoints, ...otherSettings } = this.carouselSettings;
    if (breakpoints) {
      this.breakpoints = Object.keys(breakpoints);
      this.breakpoints.forEach((breakpoint, index) => {
        if (this.currentWidth >= breakpoint) {
          if (breakpoints[breakpoint]) {
            this.breakpointSettings = breakpoints[breakpoint];
          }
          else {
            this.breakpointSettings = breakpoints[this.breakpoints[index - 1]];
          }

          const { pagination, navigation, ...otherResponsiveSettings } = this.breakpointSettings;
          this.carouselSettings = { ...otherSettings, ...otherResponsiveSettings, pagination, navigation };
        }
      })
    }
    if (this.carouselSettings && Object.keys(this.carouselSettings).length > 0) {
      const { navigation, pagination, progressPagination, ...otherSwiperSettings } = this.carouselSettings;
      carouselSettings = { ...otherSwiperSettings };
      if (navigation) {
        const parentSelector = this.closest('[data-parent]') ? this.closest('[data-parent]') : this;
        const navigationNext =  parentSelector.querySelector('.swiper-navigation--next');
        const navigationPrev = parentSelector.querySelector('.swiper-navigation--prev');
        carouselSettings = {
          ...carouselSettings, navigation: {
            nextEl: navigationNext,
            prevEl: navigationPrev,
          }
        }
      }
      if (pagination) {
        const parentSelector = this.closest('[data-parent]') ? this.closest('[data-parent]') : this;
        const swiperPagination = parentSelector.querySelector('.swiper-pagination');
        let pagination = {
          el: swiperPagination,
          clickable: true
        }
        if (progressPagination) {
          pagination = {
            el: swiperPagination,
            type: 'progressbar'
          }
        }

        carouselSettings = { ...carouselSettings, pagination }
      }
    }
    return carouselSettings;
  }

  initCarousel() {
    this.carouselSettings = JSON.parse(this.querySelector('[data-settings]')?.innerHTML || "{}");
    const parentSelector = this.closest('[data-parent]') ? this.closest('[data-parent]') : this;
    this.carouselContent = this.querySelector('[data-carousel-content]')?.innerHTML;
    this.placeholders = parentSelector.querySelector('[data-carousel-placeholder]')?.innerHTML;
    this.navigations = parentSelector.querySelector('[data-swiper-navigations]');
    this.currentWidth = window.innerWidth;
    const swiperNavigationElements = this.circleArrow
      ? `
        <div class="swiper-navigation swiper-navigation--next ${this.carouselSettings.overflowNagivation ? "swiper-navigation--overflow" : ''}">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle r="17.5" transform="matrix(-1 0 0 1 18 18)" stroke="blue"></circle>
            <path d="M14.5234 13.4961L9.81889 18.2006L14.5234 22.9052" stroke="blue"></path>
            <path d="M10.0234 18.2031L26.1825 18.2031" stroke="blue"></path>     
          </svg>
        </div>
        <div class="swiper-navigation swiper-navigation--prev swiper-button-disabled ${this.carouselSettings.overflowNagivation ? "swiper-navigation--overflow" : ''}">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style="">
            <circle cx="18" cy="18" r="17.5" stroke="blue"></circle>
            <path d="M21.4766 13.4961L26.1811 18.2006L21.4766 22.9052" stroke="blue"></path>
            <path d="M25.9766 18.2031L9.81747 18.2031" stroke="blue"></path>    
          </svg>
        </div>
      `
      : `
        <div class="swiper-navigation swiper-navigation--next ${this.carouselSettings.overflowNagivation ? "swiper-navigation--overflow" : ''}">
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 48 48" fill="none">
            <line y1="-2" x2="33" y2="-2" transform="matrix(-0.707107 0.707107 0.707107 0.707107 27.1191 3.78516)" stroke="#282FEE" stroke-width="4"/>
            <line y1="-2" x2="33" y2="-2" transform="matrix(-0.707107 -0.707107 -0.707107 0.707107 24.334 47.6719)" stroke="#282FEE" stroke-width="4"/>
          </svg>
        </div>
        <div class="swiper-navigation swiper-navigation--prev swiper-button-disabled ${this.carouselSettings.overflowNagivation ? "swiper-navigation--overflow" : ''}">
          <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 47 47" fill="none">
            <line y1="-2" x2="33" y2="-2" transform="matrix(0.707107 -0.707107 -0.707107 -0.707107 20.5479 43.8867)" stroke="#282FEE" stroke-width="4"/>
            <line y1="-2" x2="33" y2="-2" transform="matrix(0.707107 0.707107 0.707107 -0.707107 23.333 0)" stroke="#282FEE" stroke-width="4"/>
          </svg>
        </div>
      `;

    this.carouselContent ?
      this.innerHTML = `<div class="carousel__container swiper hide" data-swiper-container>
    <div class="swiper-wrapper">
    ${this.carouselContent}
    </div> </div>
    <div class="swiper-pagination"></div>
    ${this.carouselSettings['customNavigation'] ? '' :  this.navigations.innerHTML = swiperNavigationElements}
    ${this.placeholders ? this.placeholders : `<div class="carousel-placeholders"></div>`}`
      : this.carouselSettings['customNavigation'] ? '' : this.navigations.innerHTML = swiperNavigationElements;
    this.container = this.querySelector('[data-swiper-container]');
    const carouselSettings = this.getCarouselSettings();
    console.log(carouselSettings, "carousel settings");
    this.swiper = new Swiper(this.container, {
      on: {
        beforeInit: () => {
          const { navigation, pagination} = carouselSettings || {};
          const parentSelector = this.closest('[data-parent]') ? this.closest('[data-parent]') : this;
          if (!navigation) {
            parentSelector.querySelectorAll('.swiper-navigation').forEach(navigation => navigation.classList.add('swiper-navigation--hide'));
          }
          else {
            parentSelector.querySelector('.swiper-navigation--hide') && parentSelector.querySelectorAll('.swiper-navigation--hide').forEach(navigation => navigation.classList.remove("swiper-pagination--hide"));
          }

          if (!pagination) {
            parentSelector.querySelectorAll('.swiper-pagination').forEach(navigation => navigation.classList.add('swiper-pagination--hide'));
          }
          else {
            parentSelector.querySelector('.swiper-pagination--hide') && parentSelector.querySelectorAll('.swiper-pagination--hide').forEach(navigation => navigation.classList.remove("swiper-pagination--hide"));
          }
        },
        init: (swiper) => {
          // if (!!swiper.navigation) {
          //   swiper.navigation.destroy();
          // }
        },
        afterInit: () => {
          parentSelector.querySelector('.carousel__container').classList.remove('hide');
          parentSelector.querySelector('.carousel-placeholders')?.classList.add('hide');
        },
        slideChange: (swiper) => {
          const {onSlideChange} = carouselSettings;
          window[onSlideChange] && window[onSlideChange](swiper);
        }
      },
      modules: [Navigation, Pagination],
      ...carouselSettings
    });

    this.swiper.on('activeIndexChange', (current) => {
      parentSelector.querySelector('.swiper-pagination-bullet-active')?.classList.remove('swiper-pagination-bullet-active');
      parentSelector.querySelectorAll('.swiper-pagination-bullet')[current.activeIndex]?.classList.add('swiper-pagination-bullet-active');
    })
  }
}
export default CustomCarousel;
