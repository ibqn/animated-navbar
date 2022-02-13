import('jquery').then(async ($) => {
  // your code that uses jQuery

  $(document).ready(() => {
    // Your code here.
  })

  $(window).on('scroll', () => {
    console.log('scroll')
    if ($(window).scrollTop()) {
      $('nav').addClass('black')
    } else {
      $('nav').removeClass('black')
    }
  })
})
