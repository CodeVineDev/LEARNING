const { createFFmpeg, fetchFile } = FFmpeg;
const ffmpeg = createFFmpeg({ log: true });

document.getElementById('convertButton').addEventListener('click', async () => {
    const videoFile = document.getElementById('videoFile').files[0];
    const audioFormat = document.getElementById('audioFormat').value;
    const progressElement = document.getElementById('progress');
    const downloadLink = document.getElementById('downloadLink');

    if (!videoFile) {
        alert('Please select a video file.');
        return;
    }

    try {
        // Load FFmpeg.wasm
        if (!ffmpeg.isLoaded()) {
            progressElement.textContent = 'Loading FFmpeg...';
            await ffmpeg.load();
        }

        // Write the video file to FFmpeg's virtual file system
        progressElement.textContent = 'Reading video file...';
        ffmpeg.FS('writeFile', 'input.mp4', await fetchFile(videoFile));

        // Run the FFmpeg command to convert video to audio
        progressElement.textContent = 'Converting to audio...';
        await ffmpeg.run('-i', 'input.mp4', `output.${audioFormat}`);

        // Read the result from FFmpeg's virtual file system
        progressElement.textContent = 'Conversion completed.';
        const data = ffmpeg.FS('readFile', `output.${audioFormat}`);
        const audioBlob = new Blob([data.buffer], { type: `audio/${audioFormat}` });
        const audioUrl = URL.createObjectURL(audioBlob);

        // Provide the download link for the converted audio file
        downloadLink.href = audioUrl;
        downloadLink.download = `output.${audioFormat}`;
        downloadLink.style.display = 'block';
        downloadLink.textContent = 'Download Audio';
    } catch (error) {
        progressElement.textContent = `Error: ${error.message}`;
    }
});
