const slider = document.getElementById("slider");
const sliderImages = document.querySelectorAll(".slider span img");
const startButton = document.querySelector("#startButton");
const maintitle = document.querySelector(".maintitle");


let isPaused = false;
let rotationAngle = 90; // Initial rotation angle
let rotationSpeed = 1; // Initial rotation speed
const acceleration = 0.2; // Acceleration
const damping = 0.6; // Damping factor
let isStopped = false;

let isSliderMoving = false;

let isAnimating = false;


let enlargedImages = new Set(); // Set to keep track of enlarged images


function rotateSlider() {
    slider.style.transform = `rotateZ(${rotationAngle}deg)`;
}

function updateRotation(timestamp) {
    if (!isPaused && !isStopped) {
        // Smoothly change the rotation speed
        rotationSpeed += acceleration;
        // Dampen the rotation speed
        rotationSpeed *= damping;
        // Update the rotation angle
        rotationAngle += rotationSpeed;
        // Keep the angle within the 0 to 360 degree range
        rotationAngle = (rotationAngle + 360) % 360;
        rotateSlider();
    }
    requestAnimationFrame(updateRotation);
}

requestAnimationFrame(updateRotation);

let scrollSpeedFactor = 0.1; // Scroll event speed adjustment constant
let zIndexCounter = 1;




// 시작 버튼 클릭 이벤트 처리
startButton.addEventListener("click", () => {
    if (!isSliderMoving) {
        isAnimating = true;

        // 시작 버튼을 왼쪽으로 이동하면서 투명도를 조절하는 애니메이션 적용
        startButton.style.animation = "buttonSlideLeft 0.7s forwards, buttonFadeOut 0.7s forwards";

        slider.style.animation = "slideLeft 0.7s linear forwards"; // 슬라이더 이동 애니메이션 적용

        // 애니메이션 종료 시 슬라이더 위치를 고정
        startButton.addEventListener("animationend", () => {
            isSliderMoving = true;
            slider.style.transform = "translateX(-330%) rotateZ(360deg)"; // 슬라이더 위치 고정

            // 초 후 sub.html로 이동
            setTimeout(() => {
                window.location.href = "index.html";
            }, 500); // 초 지연
        });
    }
});


// 시작 버튼 마우스 오버 및 아웃 애니메이션
startButton.addEventListener("mouseover", () => {
    if (!isAnimating) {
        startButton.style.animation = "buttonAnimation 0.5s infinite";
        startButton.textContent = "Start";
    }
});

startButton.addEventListener("mouseout", () => {
    if (!isAnimating) {
        startButton.style.animation = "none";
        startButton.textContent = "Hormone";
    }
});

