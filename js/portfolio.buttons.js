const obj = {
    galleryItems: document.querySelectorAll('.gallery__box'),
    all: document.getElementById('all'),
    pages: document.getElementById('pages'),
    applications: document.getElementById('applications'),
    design: document.getElementById('design'),
    marketing: document.getElementById('marketing')
}

function filterGallery(category){
    obj.galleryItems.forEach(item=>{

if(item.id===category || category==='all'){
item.style.display = 'flex'

}
else{
    item.style.display='none'
}
    })
}
obj.all.addEventListener('click', ()=>filterGallery('all'))
obj.pages.addEventListener('click',()=>filterGallery('pages'))
obj.applications.addEventListener('click',()=>filterGallery('applications'))
obj.design.addEventListener('click', () => filterGallery('design')); 
obj.marketing.addEventListener('click', () => filterGallery('marketing')); 