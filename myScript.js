const slider = document.querySelector(".slider");
const sliderImages = document.querySelectorAll(".slider span img");
const startButton = document.querySelector("#startButton");
const scrollSpeedFactor = 0.05; // 스크롤 속도 조절 (적절한 값으로 조정)


let isPaused = false;
let rotationAngle = 90;
let rotationSpeed = 0.5;
const acceleration = 0.2;
const damping = 0.6;
let isStopped = false;
let isPopupOpen = false;
let initialSliderAnimationState = "";
rotationSpeed = 0.5; // 회전 속도를 초기값으로 설정



function rotateSlider() {
    slider.style.transform = `rotateZ(${rotationAngle}deg)`;
}

function updateRotation(timestamp) {
    if (!isPaused && !isStopped && !isPopupOpen) {
        rotationSpeed += acceleration;
        rotationSpeed *= damping;
        rotationAngle += rotationSpeed;
        rotationAngle = (rotationAngle + 360) % 360;
        rotateSlider();
    }
    requestAnimationFrame(updateRotation);
}

requestAnimationFrame(updateRotation);

startButton.addEventListener("click", () => {
    if (!isStopped && !isPopupOpen) {
        isPaused = false;
        isStopped = false;
        startButton.style.display = "none";
        rotationSpeed = 0.5;
        requestAnimationFrame(updateRotation);
    }
    
});



sliderImages.forEach((img, index) => {
    const initialTransform = img.style.transform;

    img.addEventListener("click", () => {
        if (!isStopped) {
            isPaused = true;
            // 이미지가 클릭되면 회전을 멈춥니다.
            isStopped = true;
            rotationSpeed = 0; // 회전 속도를 0으로 설정하여 멈춤
            rotationAngle = 250 - (index * 20); // 이미지가 클릭한 위치로 회전 각도를 설정
            rotateSlider();
            
            // 이미지 크기와 Z축 앞으로 오게 설정 (클릭 이후 유지)
            img.style.transform = "scale(1.5) translateY(70px) translateZ(100px)";
        }
    });
    
    // 마우스 오버 이벤트를 처리하여 이미지 Z축 앞으로 오기
    img.addEventListener("mouseover", () => {
        if (!isStopped) {
            img.style.transform = "scale(1.3) translateY(70px) translateZ(100px)";
        }
    });

    // 마우스 아웃 이벤트를 처리하여 이미지 원래 크기와 위치로 돌아가기
    img.addEventListener("mouseout", () => {
        if (!isStopped) {
            img.style.transform = initialTransform;
        }
    });
});


function popup(index) {
  var popup = document.getElementById("popup");
  if (isPopupOpen) {
      return; // 이미 팝업이 열려 있으면 클릭 이벤트를 무시
  }
  popup.style.display = "block";
  isPopupOpen = true;
    isPopupOpen = true;
    initialSliderAnimationState = slider.style.animation;
    slider.style.animationPlayState = "paused";
    
    var popupTitle = document.getElementById("popupTitle");
    var popupContent = document.getElementById("popupContent");

    if (index === 1) {
        // 이미지를 추가하는 예제
        var img = document.createElement("img");
        img.src = "img/1_R.png"; // 이미지 파일 경로

        img.style.width = "700px"; // 이미지 너비 조절 (선택 사항)
        img.style.height = "851px"; // 이미지 높이 조절 (선택 사항)

      // 이미지 위치 조정 (오른쪽으로 이동)
      img.style.marginLeft = "900px"; // 오른쪽으로 50px 이동

        // 이미지를 팝업 내용으로 추가
        popupContent.innerHTML = ""; // 팝업 내용 초기화
        popupContent.appendChild(img); // 이미지를 팝업 내용으로 추가

    } 
    else if (index === 2) {
     // 이미지를 추가하는 예제
     var img = document.createElement("img");
     img.src = "img/2_p.png"; // 이미지 파일 경로

     img.style.width = "700px"; // 이미지 너비 조절 (선택 사항)
     img.style.height = "851px"; // 이미지 높이 조절 (선택 사항)

   // 이미지 위치 조정 (오른쪽으로 이동)
   img.style.marginLeft = "900px"; // 오른쪽으로 50px 이동

     // 이미지를 팝업 내용으로 추가
     popupContent.innerHTML = ""; // 팝업 내용 초기화
     popupContent.appendChild(img); // 이미지를 팝업 내용으로 추가
     
    }
    else if (index === 3) {
        // 이미지를 추가하는 예제
        var img = document.createElement("img");
        img.src = "img/3_T.png"; // 이미지 파일 경로
   
        img.style.width = "700px"; // 이미지 너비 조절 (선택 사항)
        img.style.height = "851px"; // 이미지 높이 조절 (선택 사항)
   
      // 이미지 위치 조정 (오른쪽으로 이동)
      img.style.marginLeft = "900px"; // 오른쪽으로 50px 이동
   
        // 이미지를 팝업 내용으로 추가
        popupContent.innerHTML = ""; // 팝업 내용 초기화
        popupContent.appendChild(img); // 이미지를 팝업 내용으로 추가
        
       }
       else if (index === 4) {
        // 이미지를 추가하는 예제
        var img = document.createElement("img");
        img.src = "img/4_A.png"; // 이미지 파일 경로
   
        img.style.width = "700px"; // 이미지 너비 조절 (선택 사항)
        img.style.height = "851px"; // 이미지 높이 조절 (선택 사항)
   
      // 이미지 위치 조정 (오른쪽으로 이동)
      img.style.marginLeft = "900px"; // 오른쪽으로 50px 이동
   
        // 이미지를 팝업 내용으로 추가
        popupContent.innerHTML = ""; // 팝업 내용 초기화
        popupContent.appendChild(img); // 이미지를 팝업 내용으로 추가
        
       }
       else if (index === 5) {
        // 이미지를 추가하는 예제
        var img = document.createElement("img");
        img.src = "img/5_T.png"; // 이미지 파일 경로
   
        img.style.width = "700px"; // 이미지 너비 조절 (선택 사항)
        img.style.height = "851px"; // 이미지 높이 조절 (선택 사항)
   
      // 이미지 위치 조정 (오른쪽으로 이동)
      img.style.marginLeft = "900px"; // 오른쪽으로 50px 이동
   
        // 이미지를 팝업 내용으로 추가
        popupContent.innerHTML = ""; // 팝업 내용 초기화
        popupContent.appendChild(img); // 이미지를 팝업 내용으로 추가
        
       }
       else if (index === 6) {
        // 이미지를 추가하는 예제
        var img = document.createElement("img");
        img.src = "img/6_p.png"; // 이미지 파일 경로
   
        img.style.width = "700px"; // 이미지 너비 조절 (선택 사항)
        img.style.height = "851px"; // 이미지 높이 조절 (선택 사항)
   
      // 이미지 위치 조정 (오른쪽으로 이동)
      img.style.marginLeft = "900px"; // 오른쪽으로 50px 이동
   
        // 이미지를 팝업 내용으로 추가
        popupContent.innerHTML = ""; // 팝업 내용 초기화
        popupContent.appendChild(img); // 이미지를 팝업 내용으로 추가
        
       }
       else if (index === 7) {
        // 이미지를 추가하는 예제
        var img = document.createElement("img");
        img.src = "img/7_P.png"; // 이미지 파일 경로
   
        img.style.width = "700px"; // 이미지 너비 조절 (선택 사항)
        img.style.height = "851px"; // 이미지 높이 조절 (선택 사항)
   
      // 이미지 위치 조정 (오른쪽으로 이동)
      img.style.marginLeft = "900px"; // 오른쪽으로 50px 이동
   
        // 이미지를 팝업 내용으로 추가
        popupContent.innerHTML = ""; // 팝업 내용 초기화
        popupContent.appendChild(img); // 이미지를 팝업 내용으로 추가
        
       }
       else if (index === 8) {
        // 이미지를 추가하는 예제
        var img = document.createElement("img");
        img.src = "img/8_o.png"; // 이미지 파일 경로
   
        img.style.width = "700px"; // 이미지 너비 조절 (선택 사항)
        img.style.height = "851px"; // 이미지 높이 조절 (선택 사항)
   
      // 이미지 위치 조정 (오른쪽으로 이동)
      img.style.marginLeft = "900px"; // 오른쪽으로 50px 이동
   
        // 이미지를 팝업 내용으로 추가
        popupContent.innerHTML = ""; // 팝업 내용 초기화
        popupContent.appendChild(img); // 이미지를 팝업 내용으로 추가
        
       }
       else if (index === 9) {
        // 이미지를 추가하는 예제
        var img = document.createElement("img");
        img.src = "img/9_o.png"; // 이미지 파일 경로
   
        img.style.width = "700px"; // 이미지 너비 조절 (선택 사항)
        img.style.height = "851px"; // 이미지 높이 조절 (선택 사항)
   
      // 이미지 위치 조정 (오른쪽으로 이동)
      img.style.marginLeft = "900px"; // 오른쪽으로 50px 이동
   
        // 이미지를 팝업 내용으로 추가
        popupContent.innerHTML = ""; // 팝업 내용 초기화
        popupContent.appendChild(img); // 이미지를 팝업 내용으로 추가
        
       }
       else if (index === 10) {
        // 이미지를 추가하는 예제
        var img = document.createElement("img");
        img.src = "img/10_T.png"; // 이미지 파일 경로
   
        img.style.width = "700px"; // 이미지 너비 조절 (선택 사항)
        img.style.height = "851px"; // 이미지 높이 조절 (선택 사항)
   
      // 이미지 위치 조정 (오른쪽으로 이동)
      img.style.marginLeft = "900px"; // 오른쪽으로 50px 이동
   
        // 이미지를 팝업 내용으로 추가
        popupContent.innerHTML = ""; // 팝업 내용 초기화
        popupContent.appendChild(img); // 이미지를 팝업 내용으로 추가
        
       }
       else if (index === 11) {
        // 이미지를 추가하는 예제
        var img = document.createElement("img");
        img.src = "img/11_o.png"; // 이미지 파일 경로
   
        img.style.width = "700px"; // 이미지 너비 조절 (선택 사항)
        img.style.height = "851px"; // 이미지 높이 조절 (선택 사항)
   
      // 이미지 위치 조정 (오른쪽으로 이동)
      img.style.marginLeft = "900px"; // 오른쪽으로 50px 이동
   
        // 이미지를 팝업 내용으로 추가
        popupContent.innerHTML = ""; // 팝업 내용 초기화
        popupContent.appendChild(img); // 이미지를 팝업 내용으로 추가
        
       }
       else if (index === 12) {
        // 이미지를 추가하는 예제
        var img = document.createElement("img");
        img.src = "img/12_e.png"; // 이미지 파일 경로
   
        img.style.width = "700px"; // 이미지 너비 조절 (선택 사항)
        img.style.height = "851px"; // 이미지 높이 조절 (선택 사항)
   
      // 이미지 위치 조정 (오른쪽으로 이동)
      img.style.marginLeft = "900px"; // 오른쪽으로 50px 이동
   
        // 이미지를 팝업 내용으로 추가
        popupContent.innerHTML = ""; // 팝업 내용 초기화
        popupContent.appendChild(img); // 이미지를 팝업 내용으로 추가
        
       }
       else if (index === 13) {
        // 이미지를 추가하는 예제
        var img = document.createElement("img");
        img.src = "img/13_T.png"; // 이미지 파일 경로
   
        img.style.width = "700px"; // 이미지 너비 조절 (선택 사항)
        img.style.height = "851px"; // 이미지 높이 조절 (선택 사항)
   
      // 이미지 위치 조정 (오른쪽으로 이동)
      img.style.marginLeft = "900px"; // 오른쪽으로 50px 이동
   
        // 이미지를 팝업 내용으로 추가
        popupContent.innerHTML = ""; // 팝업 내용 초기화
        popupContent.appendChild(img); // 이미지를 팝업 내용으로 추가
        
       }
       else if (index === 14) {
        // 이미지를 추가하는 예제
        var img = document.createElement("img");
        img.src = "img/14_e.png"; // 이미지 파일 경로
   
        img.style.width = "700px"; // 이미지 너비 조절 (선택 사항)
        img.style.height = "851px"; // 이미지 높이 조절 (선택 사항)
   
      // 이미지 위치 조정 (오른쪽으로 이동)
      img.style.marginLeft = "900px"; // 오른쪽으로 50px 이동
   
        // 이미지를 팝업 내용으로 추가
        popupContent.innerHTML = ""; // 팝업 내용 초기화
        popupContent.appendChild(img); // 이미지를 팝업 내용으로 추가
        
       }
       else if (index === 15) {
        // 이미지를 추가하는 예제
        var img = document.createElement("img");
        img.src = "img/15_n.png"; // 이미지 파일 경로
   
        img.style.width = "700px"; // 이미지 너비 조절 (선택 사항)
        img.style.height = "851px"; // 이미지 높이 조절 (선택 사항)
   
      // 이미지 위치 조정 (오른쪽으로 이동)
      img.style.marginLeft = "900px"; // 오른쪽으로 50px 이동
   
        // 이미지를 팝업 내용으로 추가
        popupContent.innerHTML = ""; // 팝업 내용 초기화
        popupContent.appendChild(img); // 이미지를 팝업 내용으로 추가
        
       }
       else if (index === 16) {
        // 이미지를 추가하는 예제
        var img = document.createElement("img");
        img.src = "img/16_T.png"; // 이미지 파일 경로
   
        img.style.width = "700px"; // 이미지 너비 조절 (선택 사항)
        img.style.height = "851px"; // 이미지 높이 조절 (선택 사항)
   
      // 이미지 위치 조정 (오른쪽으로 이동)
      img.style.marginLeft = "900px"; // 오른쪽으로 50px 이동
   
        // 이미지를 팝업 내용으로 추가
        popupContent.innerHTML = ""; // 팝업 내용 초기화
        popupContent.appendChild(img); // 이미지를 팝업 내용으로 추가
        
       }
       else if (index === 17) {
        // 이미지를 추가하는 예제
        var img = document.createElement("img");
        img.src = "img/17_a.png"; // 이미지 파일 경로
   
        img.style.width = "700px"; // 이미지 너비 조절 (선택 사항)
        img.style.height = "851px"; // 이미지 높이 조절 (선택 사항)
   
      // 이미지 위치 조정 (오른쪽으로 이동)
      img.style.marginLeft = "900px"; // 오른쪽으로 50px 이동
   
        // 이미지를 팝업 내용으로 추가
        popupContent.innerHTML = ""; // 팝업 내용 초기화
        popupContent.appendChild(img); // 이미지를 팝업 내용으로 추가
        
       }
       else if (index === 18) {
        // 이미지를 추가하는 예제
        var img = document.createElement("img");
        img.src = "img/18_i.png"; // 이미지 파일 경로
   
        img.style.width = "700px"; // 이미지 너비 조절 (선택 사항)
        img.style.height = "851px"; // 이미지 높이 조절 (선택 사항)
   
      // 이미지 위치 조정 (오른쪽으로 이동)
      img.style.marginLeft = "900px"; // 오른쪽으로 50px 이동
   
        // 이미지를 팝업 내용으로 추가
        popupContent.innerHTML = ""; // 팝업 내용 초기화
        popupContent.appendChild(img); // 이미지를 팝업 내용으로 추가
        
       }
}


// 팝업 닫기 버튼 이벤트 처리
document.getElementById('popupCloseButton').addEventListener('click', function() {
    closePopup();
});


function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = 'none';
    isPopupOpen = false;

    // Reset image sizes and positions
    sliderImages.forEach(img => {
        img.style.transform = "scale(1) translateY(0) translateZ(0)";
    });

    isPaused = false;

    // 이미지 크기가 원래대로 복원될 때까지 기다린 후 회전을 재개
    setTimeout(function() {
        isStopped = false;
    }, 100); // 200ms 지연 후 회전 재개 (300ms 또는 적절한 값으로 조정)
}



// 페이지 새로 고침 체크
if (performance.navigation.type === 1) {
    // 새로고침 시 main.html로 이동
    window.location.href = "start.html";
}


// Scroll event handler -> Rotate the slider when the mouse is over the image and the wheel is scrolled
slider.addEventListener("wheel", (event) => {
    // Use deltaY from the scroll event to change the rotation speed
    rotationSpeed += event.deltaY * scrollSpeedFactor;
    // Limit the rotation speed to a minimum and maximum value
    rotationSpeed = Math.min(Math.max(rotationSpeed, -50), 70); // Adjust the minimum and maximum values as needed
});