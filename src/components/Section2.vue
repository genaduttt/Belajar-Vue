<template>
    <section class="video-section py-4">
        <div class="container">
            <h2 class="text-center mb-4 text-bold" style="font-weight: bold; color: rgba(46, 127, 55, 0.967);">Video</h2>
            <div class="row">
                <div class="col-md-6 col-12 mb-3">
                    <div class="video-card p-3 d-flex flex-column flex-md-row align-items-center">
                        <video controls class="img-fluid me-md-3 mb-3 mb-md-0" style="max-width: 200px;">
                            <source src="../assets/Video1.mp4" type="video/mp4">
                            <track src="../subtitles-en.vtt" kind="subtitles" srclang="en" label="English">
                            <track src="../subtitles-id.vtt" kind="subtitles" srclang="id" label="Bahasa Indonesia">
                        </video>
                        <div>
                            <h5><b>Makanan Sehat</b></h5>
                            <p class="video-description">Makanan sehat merupakan makanan yang mengandung 4 sehat 5 sempurna, kaya akan...</p>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 mb-3">
                    <div class="video-card p-3 d-flex flex-column flex-md-row align-items-center">
                        <video controls class="img-fluid me-md-3 mb-3 mb-md-0" style="max-width: 200px;">
                            <source src="../assets/Video2.mp4" type="video/mp4">
                            <track src="../subtitles-en.vtt" kind="subtitles" srclang="en" label="English">
                            <track src="../subtitles-id.vtt" kind="subtitles" srclang="id" label="Bahasa Indonesia">
                        </video>
                        <div>
                            <h5><b>Jus Alami</b></h5>
                            <p class="video-description">Minum jus segar setiap hari untuk menjaga vitalitas dan meningkatkan daya tahan...</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>