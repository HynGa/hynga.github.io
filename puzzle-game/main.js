let items = ['gumball','darwin','anais','nicole','richard']; 

//random ảnh khi load trang
function randomPic() {
    for (let i = 1; i <= 9; i++) {
        let j = items[Math.floor(Math.random()*items.length)]; 
        document.getElementById(`image${i}`).src=`data/${j}/${j}_00${i}.jpg`;
    }
}

//click để chuyển ảnh tiếp theo
function changeImage(i) {
    let url = document.getElementById(`image${i}`).src;
    //console.log(`url trước khi click${url}`);
    for (let q = 0; q < items.length; q++) { 
        let z = url.search(items[q]);
            if (z > 0) {
                if (q != (items.length-1)) {
                j = items[q+1];             
                }
                else {
                    j = items[0];   
                }
                document.getElementById(`image${i}`).src=`data/${j}/${j}_00${i}.jpg`;
            }
    }
    checkImage(i);
    }


function checkImage(i) {
    let url = document.getElementById(`image${i}`).src;
    for (let q = 0; q < items.length; q++) { 
        let g = items[q];
        let z = url.search(items[q]);
            if (z > 0) {
                let images = document.querySelectorAll("img");
                let allContainGumball = true;
                for (let i = 0; i < images.length; i++) {
                if (!images[i].src.includes(`${g}`)) {
                    allContainGumball = false;
                    break;
                }
                }
                if (allContainGumball) {
                    document.getElementById('text').innerHTML = `Hoàn thành nhân vật ${g}`;
                    document.getElementById('container').style.boxShadow = 'red 4px 4px 9px';
                } else {
                    document.getElementById('text').innerHTML = `Tiếp tục trò chơi`;
                }
        }
    }
}