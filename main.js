const tab1 = $('.tab-1');
const tab2 = $('.tab-2');
const tab3 = $('.tab-3');
const tab4 = $('.tab-4');

const content1 = $('.contents-container-1');
const content2 = $('.contents-container-2');
const content3 = $('.contents-container-3');
const content4 = $('.contents-container-4');

tab1.on('click', () => {
  tab1.addClass('visible');
  content1.removeClass('hidden');
  tab2.removeClass('visible');
  content2.addClass('hidden');
  tab3.removeClass('visible');
  content3.addClass('hidden');
  tab4.removeClass('visible');
  content4.addClass('hidden');
})

tab2.on('click', () => {
  tab2.addClass('visible');
  content2.removeClass('hidden');
  tab1.removeClass('visible');
  content1.addClass('hidden');
  tab3.removeClass('visible');
  content3.addClass('hidden');
  tab4.removeClass('visible');
  content4.addClass('hidden');
})

tab3.on('click', () => {
  tab3.addClass('visible');
  content3.removeClass('hidden');
  tab1.removeClass('visible');
  content1.addClass('hidden');
  tab2.removeClass('visible');
  content2.addClass('hidden');
  tab4.removeClass('visible');
  content4.addClass('hidden');
})

tab4.on('click', () => {
  tab4.addClass('visible');
  content4.removeClass('hidden');
  tab1.removeClass('visible');
  content1.addClass('hidden');
  tab2.removeClass('visible');
  content2.addClass('hidden');
  tab3.removeClass('visible');
  content3.addClass('hidden');
})