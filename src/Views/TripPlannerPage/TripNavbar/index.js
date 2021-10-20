const TripNavBar = (props) => {
    return(
<header role="banner">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark navbar-fixed-top">
            <div class="container">
                <a class="navbar-brand" href="index.html">Top Ramen</a>
                <button class="navbar-toggler ml-auto" type="button" data-toggle="collapse"
                    data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarsExample05">
                    <ul class="navbar-nav ml-auto pl-lg-5 pl-0">
                        <li class="nav-item mx-auto">
                            <a class="nav-link active" href="/"><b>Home</b></a>
                        </li>
                        <li class="nav-item mx-auto">
                            <a class="nav-link" href="#details">Hotels</a>
                        </li>
                        <li class="nav-item mx-auto">
                            <a class="nav-link" href="#varieties">Places to Visit</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
    )
}

export default TripNavBar