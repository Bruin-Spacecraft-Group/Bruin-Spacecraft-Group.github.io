const options = {
  duration: 2,
};
let memberCount = new CountUp('memberCounter', 60, options);
let projectCount = new CountUp('projectCounter', 5, options);
let ageCount = new CountUp('ageCounter', 3, options);

console.log("HERE")
$(window).scroll(function() {
  var top = $(document).scrollTop()
  if (top > $("#counters").position().top - 500) {
    if(!memberCount.error) {
      memberCount.start();
    } else {
      console.error(memberCount.error);
    }
    if(!projectCount.error) {
      projectCount.start();
    } else {
      console.error(projectCount.error);
    }
    if(!ageCount.error) {
      ageCount.start();
    } else {
      console.error(ageCount.error);
    }
  }
})
