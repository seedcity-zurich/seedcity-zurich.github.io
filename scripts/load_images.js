function loadImages() {
    let count = 0;
    let num_cols = 3;
    const xhttp = new XMLHttpRequest();

    // create divs
    const gallery = document.getElementById("gallery");
    gallery.classList.add("row");

    for (let i=0; i<num_cols; i++) {
        const row = document.createElement("div");
        row.setAttribute('id', 'row'+i);
        row.classList.add("column")
        gallery.appendChild(row);
    }

    // find images and load them
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            const fileList = this.responseText.split('\n'); // Split by lines
            let currentFolder = '';
            
            // preprocess image paths
            const filePaths = fileList
            .map(f => { // Build correct path for each file
                let filePath = '';
                
                if (f) {
                if (f[0] === '.') {
                    currentFolder = f.replace('.', '').replace(':', '/');
                }
                else if (f[f.length - 1] !== '/') {
                    filePath = `${currentFolder}${f}`;
                }
                }
                return filePath;
            })
            .filter(f => f); // Remove empty lines
            
            // put images in the DOM
            filePaths.map(f => {
            const img = document.createElement('IMG');
            img.src = f;
            img.onclick = function() {this.requestFullscreen()}; //make images fullscreenable
            
            document.getElementById("row"+count%num_cols).appendChild(img);
            count++;
            });
        }   
    };

    xhttp.open("GET", "images.txt", true);
    xhttp.send();
}

loadImages();