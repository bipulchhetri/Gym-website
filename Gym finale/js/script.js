function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value) / 100;

  if (isNaN(weight) || isNaN(height)) {
    document.getElementById("result").innerHTML =
      '<div class="alert alert-danger">Please enter valid values</div>';
    return;
  }

  const bmi = weight / (height * height).toFixed(2);
  let bmiCategory;
  if (bmi < 18.5) {
    bmiCategory = "Underweight";
  } else if (bmi < 24.9) {
    bmiCategory = "Normal Weight";
  } else if (bmi < 29.9) {
    bmiCategory = "Overweight";
  } else {
    bmiCategory = "Obese";
  }

  document.getElementById("result").innerHTML = `
    <div class="alert alert-success">
   ${bmi.toFixed(2)}<br>
 Category: ${bmiCategory}
    </div>`;
}
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  grabCursor: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// gallary
