const trailer = document.getElementById("trailer");

window.animateTrailer = (e, interacting) => {
    const x = e.clientX - trailer.offsetWidth / 2,
          y = e.clientY - trailer.offsetHeight / 2;

 
    const keyframes = {
        transform: `translate(${x}px, ${y}px) scale(${interacting ? 4 : 1})`

    }

    trailer.animate(keyframes, {
        duration: 300,
        fill: "forwards"
    });
    }

    window.onmousemove = e => {
        const interactable = e.target.closest("a, button, span"),
              interacting = interactable !== null;

        animateTrailer(e, interacting);
    }