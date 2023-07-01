const btnDownloadName = document.querySelector('#btn-download-name');
const btnDownloadNumber = document.querySelector('#btn-download-number');

function downloadPdf(){
    const buttons = document.querySelector('.buttons')
    const span = document.querySelector('.closeBtn');
    const bgDraw = document.querySelector('.result');
    const footer = document.querySelector('footer')
    buttons.style.display = 'none';
    span.style.display = 'none';
    bgDraw.style.backgroundColor = 'rgb(4 20 62 / 100%)';
    footer.style.display = 'none';

    const content = document.querySelector('html');

    const options = {
        margin:       1,
        filename:     'resultado-sorteio.pdf',
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(options).from(content).save();
    setTimeout(() => {
        buttons.style.display = 'flex'
        span.style.display = 'flex';
        // bgDraw.style.backgroundColor = 'rgb(4 20 62 / 89%)';
        footer.style.display = 'block';

    }, 1)
}

btnDownloadName.addEventListener('click', downloadPdf);
btnDownloadNumber.addEventListener('click', downloadPdf);