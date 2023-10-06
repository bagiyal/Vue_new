const Swal = require('sweetalert2');
function uploadVelidation(value,id,arr) {


    console.log("hyyy");
    var fileInput =
        document.getElementById(id);

    var filePath = fileInput.value;
    console.log(filePath);

    // Allowing file type
    var allowedExtensions =
        arr;

    if (!allowedExtensions.exec(filePath)) {
        Swal.fire({
            type: 'error',
            icon: 'error',
            title: 'Invalid File Format',
            showConfirmButton: true,
            timer: 3000

        })
        return false;
    }

            const myFile = document.getElementById(id).files[0];
    console.log(myFile);
            const fileSize = myFile.size / 1024 / 1024;
            if (fileSize > 5) {
                console.log("file size",fileSize)
                Swal.fire({
                    type: 'error',
                    icon: 'error',
                    title: 'File size exceeds 5 MB',
                    showConfirmButton: true,
                    timer: 3000

                })

            }


}

export default uploadVelidation;
