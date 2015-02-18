<div home="clients">
    <div class="overlay"></div>

    <div class="home-header">
        Clients
    </div>

    <div class="home-sub-header">
        <p>{{get_field('clients_text')}}</p>
    </div>

    <div class="home-clients-gallery">
        <div class="container">

            <div class="home-clients-line"></div>
            @foreach($clients as $client)
                <div class="clearfix">
                    <div class="gallery pull-left"
                         style="background-image: url('{{{$client->image}}}')">
                        <div class="overlay">{{{$client->name}}}</div>
                    </div>

                    <div class="gallery-content">
                        <p class="home-clients-sub-title">{{{$client->subTitle}}}</p>

                        <p>{{{$client->description}}}</p>
                    </div>
                </div>
            @endforeach

        </div>

    </div>
</div>