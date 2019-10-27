$('#button').click(function fetchBooks(){

    const searchText = $('input').val();

const xhr = new XMLHttpRequest();

xhr.open('GET',
 `https://content.guardianapis.com/search?q=${searchText}&api-key=226fe7d3-7c13-4e3d-8d63-8e50f8ce0aa1&show-elements=all&show-fields=all`, true, );

xhr.onload= function() {
   if(this.status === 200) {
        const response = JSON.parse(this.responseText);
           
            response.response.results.forEach(function(newsSearch){ 

                const output =
                `<div class="card mb-3" style="max-width: 1000px;">
                <div class="row no-gutters">
                  <div class="col-md-4">
                    <img src="${newsSearch.fields.thumbnail}" class="card-img" alt="news-thumbnail" style="height: 100%;">
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">${newsSearch.webTitle}</h5>
                      <p class="card-text">Written By: ${newsSearch.fields.byline}</p>
                      <p class="card-text"><small class="text-muted">Last updated: ${newsSearch.fields.lastModified}</small></p>
                      <a href="${newsSearch.webUrl}" class="btn btn-primary">Read More</a>
                    </div>
                  </div>
                </div>
              </div>
                
                 `;

                $('.newsResults').append(output);
                
            });
        
        }
        else {
            window.alert("There's an error. Please try again")
        }
        
    }
xhr.send();

});