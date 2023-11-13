const container = document.querySelector(".container");
const wrappers = document.querySelectorAll('.card')
const button = document.querySelector("button")
const card = document.querySelector("#card")

const bell = new Audio();
bell.src = "./sounds/bell.mp3";

const clips = ["./sounds/0.mp3", "./sounds/1.mp3", "./sounds/2.mp3"];
const audio = new Audio(clips);

button.addEventListener("click",()=>{
  card.style.display = 'none'
  container.style.display = 'flex'
  bell.play();
})

wrappers.forEach((wrapper, index) => {
  const wrapperAudio = new Audio(clips[index]);

  wrapper.addEventListener("mouseover", () => {
    wrapperAudio.currentTime = 0;
    wrapperAudio.play();
  });

  wrapper.addEventListener("mouseleave", () => {
    wrapperAudio.pause();
  });
});
