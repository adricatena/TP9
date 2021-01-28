var encabezado = `
    <div>
    <h1>Cucina di Tati</h1>
    </div>
    `
var nav = `
    <a class="navbar-brand" href="index.html">Home</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link" href="about.html">Sobre nosotros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="productos.html">Nuestros productos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="register.html">Registro</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="sucursales.html">Sucursales</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contacto</a>
                    </li>
                </ul>
        </div>`
var pie = `
    <div>
    <a href="https://www.instagram.com/cucinaditati/" target="_blank"><i class="fab fa-instagram"></i></a>
    <a href="https://www.facebook.com/arai.moreyra.1" target="_blank"><i class="fab fa-facebook-f"></i></a>
    </div>
    <p>Derechos reservados @2021</p>`
document.getElementById("idHeader").innerHTML = encabezado;
document.getElementById("idNav").innerHTML = nav;
document.getElementById("idFooter").innerHTML = pie;

if (document.getElementById("idCarrousel")) {
    var producto = `
    <div class="col-12">
        <div id="demo" class="carousel slide pt-1" data-ride="carousel">
            <div class="carousel-inner">`;
    for (var i = 0; i < productos.length; i++) {
        producto += `<div class="carousel-item`;
        if (i == 0)
            producto += ` active">`;
        else
            producto += `">`;
        producto += `
            <img class="img-fluid rounded" src="${productos[i].src}" alt="${productos[i].alt}">
            <h4>${productos[i].titulo}</h4>
            </div>`;
    }
    producto += `
            </div>
            <a class="carousel-control-prev" href="#demo" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#demo" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
            </a>
        </div>
    </div>`;
    document.getElementById("idCarrousel").innerHTML = producto;
};
