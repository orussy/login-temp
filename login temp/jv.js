const eyeBlinkUpper = document.querySelectorAll(".eye-blink-upper");
        const eyeBlinkLower = document.querySelectorAll(".eye-blink-lower");
        const passwordInput = document.querySelector(".password");
        passwordInput.addEventListener("focus", function () {
          eyeBlinkUpper[0].style.transform = "translateY(-60%)";
          eyeBlinkUpper[1].style.transform = "translateY(-60%)";
          eyeBlinkLower[0].style.transform = "translateY(60%)";
          eyeBlinkLower[1].style.transform = "translateY(60%)";
        });
        passwordInput.addEventListener("focusout", function () {
          eyeBlinkUpper[0].style.transform = "translateY(-100%)";
          eyeBlinkUpper[1].style.transform = "translateY(-100%)";
          eyeBlinkLower[0].style.transform = "translateY(100%)";
          eyeBlinkLower[1].style.transform = "translateY(100%)";
        });