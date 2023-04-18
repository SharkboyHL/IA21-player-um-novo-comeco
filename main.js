const containers = document.querySelectorAll("div.ia21-player")

containers.forEach(container => {
    const playPause = container.querySelector("button.play-pause")
    const video = container.querySelector("video")
    const timeline = container.querySelector(".dragbar.timeline")
    const timelineDrag = timeline.querySelector(".draggable")
    const timer = container.querySelector(".timer")
    
    playPause.addEventListener("click", () =>{
        if(video.paused){
            video.play()
            playPause.innerText = playPause.dataset.pauseIcon
            return
        }
        video.pause()
        playPause.innerText = playPause.dataset.playIcon
    })
    
    video.currentTime = 59
    
    video.addEventListener("timeupdate", () =>{
        const percent = video.currentTime / video.duration * 100
        timelineDrag.style.setProperty("--percent", `${percent}%`)
        let m = Math.floor(video.currentTime / 60)
        let h = m / 60
        let s = Math.floor(video.currentTime)
        timer.innerText = `${m % 60}:${s % 60}`
    })
})