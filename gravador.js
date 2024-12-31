let mediaRecorder;

export async function startGrav() {
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      audio: true,
      video: true,
    });

    mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm' });

    let dados = [];

    mediaRecorder.ondataavailable = (e) => dados.push(e.data);

    mediaRecorder.onstop = function () {
      const blob = new Blob(dados, { type: 'video/webm' });
      const a = document.createElement('a');

      a.href = URL.createObjectURL(blob);
      a.download = 'video.webm';

      a.click();
    };
    mediaRecorder.start();
  } catch (error) {
    alert('Erro de gravação');
  }
}
export function stopGrav() {
  mediaRecorder.stop();
}
