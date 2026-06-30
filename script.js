const photos = document.querySelectorAll(".photo");

const centerX = window.innerWidth / 2;
const centerY = window.innerHeight / 2;

const radius = 260;

photos.forEach((photo, index) => {

    const angle = (Math.PI * 2 / photos.length) * index;

    photo.dataset.angle = angle;

});

function animate() {

    photos.forEach(photo => {

        let angle = parseFloat(photo.dataset.angle);

        angle += 0.003;

        photo.dataset.angle = angle;

        const x = centerX + Math.cos(angle) * radius;
        const y = centerY + Math.sin(angle) * radius;

        photo.style.left = (x - 65) + "px";
        photo.style.top = (y - 65) + "px";

    });

    requestAnimationFrame(animate);

}

animate();

const viewer = document.getElementById("viewer");
const bigImage = document.getElementById("bigImage");
const close = document.getElementById("close");

photos.forEach(photo => {

    photo.onclick = () => {

        bigImage.src = photo.src;

        viewer.style.display = "flex";

    };

});

close.onclick = () => {

    viewer.style.display = "none";

};

viewer.onclick = (e) => {

    if(e.target===viewer){

        viewer.style.display="none";

    }

};