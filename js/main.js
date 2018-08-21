function load() {
    fetch("http://localhost:5000/find")
        .then(res => res.json())
        .then(response => {
            console.log(response);

            var record = getElementById('record');
            record.innerText = response.response.length;

            var chapitas = document.getElementById('chapitas-list');
            var list = document.createElement('ul');

            chapitas.appendChild(list);

            response.response.forEach(element => {    
                var content = document.createElement('li');
                var link = document.createElement("a");
                var img = document.createElement('img');
                var seeMore = `
                <div class="look">
                    <img src="img/lupa.png" alt="ver chapita">
                </div>`;
                
                img.alt = element.brand;
                img.src = element.img;
                link.href = "detail.html?id=" + element.id;

                content.appendChild(link);
                link.appendChild(img);
                link.appendChild(seeMore);

                list.appendChild(content);
            });
        })
}

document.addEventListener("DOMContentLoaded", load);