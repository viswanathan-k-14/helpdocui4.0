<!-- Load various scripts that are required for this template to work properly -->
<script src="https://cdn.helpdocs.io/js/jquery.min.js?v=1565690126"></script>
<script src="https://cdn.helpdocs.io/js/tether.min.js?v=1565690126"></script>
<script src="https://cdn.helpdocs.io/js/bootstrap.min.js?v=1565690126"></script>
<script src="https://twitter.github.io/typeahead.js/js/handlebars.js"></script>
<script
      src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.5.3/jspdf.min.js"
      integrity="sha512-ToRWKKOvhBSS8EtqSflysM/S7v9bB9V0X3B1+E7xo7XZBEZCPL3VX5SFIp8zxY19r7Sz0svqQVbAOx+QcLQSAQ=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    ></script>
<link rel="stylesheet" href="https://cdn.helpdocs.io/css/bootstrap.min.css?v=1565690126">
<link rel="stylesheet" href="https://cdn.helpdocs.io/css/font-awesome.min.css?v=1565690126">

 <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
      integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />
<script>

    
  window.hd_util_params = {
    enable_pre_languages: 'pre',
    disable_legacy_search_timers: true,
    search_article_template: `
     <div class="row search-article-row">
      <div class="col-xs">
        <div id="search-article" class="search-article">
          <a class="search-article-link" data-article-id="\{\{article_id\}\}" href="\{\{relative_url\}\}">
            <h3 class="search-article-title">\{\{title\}\}</h3>
            <p class="search-article-description">\{\{description\}\}</p>
           </a>
          <hr>
        </div>
      </div>
    </div>
    `
  }; 
    
    Handlebars.registerHelper('get_length', function (obj) {
 return obj.length;
}); 
</script>
