// dari google sheet
const scriptURL =
    'https://script.google.com/macros/s/AKfycbxhGHN-xqfVtb62D8ZMcuQJcHTvwqDtAWO5iOBNX8n_SzWT19gOgI6baEmb9dS7_c5Auw/exec';
const form = document.forms['hubungikamiform']
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');



form.addEventListener('submit', e => {
    e.preventDefault()
    // ketika tombol submit di klik
    // tampilkan tombol loading, hilangkan tombol kirim
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');

    fetch(scriptURL, {
            method: 'POST',
            body: new FormData(form)
        })
        .then(response => {
            // ketika data sukses dikirim
            // tampilkan tombol Kirim, hilangkan tombol loading
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            // Tampilkan Alert
            myAlert.classList.toggle('d-none');
            // Reset form
            form.reset();

            console.log('Success!', response)
        })
        .catch(error => console.error('Error!', error.message))
})
// dari google sheet akhir

// tombol mati script
hubungikamiform.addEventListener('input', () => {
    if (nama.value.length > 0 &
        email.value.length > 0 &
        pesan.value.length > 0) {
        contactBtn.removeAttribute('disabled');
    } else {
        contactBtn.setAttribute('disabled', 'disabled');
    }
})
// tombol mati script akhir