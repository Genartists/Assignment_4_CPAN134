// JavaScript to handle the image modal
document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item img');
    const modalImage = document.getElementById('modalImage');

    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            modalImage.src = this.src;
            const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
            imageModal.show();
        });
    });
});

