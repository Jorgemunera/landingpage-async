const API='https://youtube-v31.p.rapidapi.com/search?channelId=UCY2ogSxB2beBNBRMKU_dXzA&part=snippet%2Cid&order=date&maxResults=9'

const content=null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'dcaf6bb5b9msh847872814984cdfp17cc6djsnbad4367f3d0f',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    const response= await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

(async ()=>{
    try{
        const posts= await fetchData(API);
        let view= `
        ${posts.items.map(post=>`
        <div class="group relative">
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${post.snippet.thumbnails.high.url}" alt="${post.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${post.snippet.title}
            </h3>
          </div>
        </div>
        `).slice(1,9).join(' ')}
        `;
        content.innerHTML = view;
    }catch(error){
        console.log(error)
    }
})();