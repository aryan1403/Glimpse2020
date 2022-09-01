import './NavBar.css';
export default function NavBar() {
    return (
    <>
    <nav id='glimpseNav' class="navbar navbar-expand-lg">
  <div class="container-fluid">
    <a class="navbar-brand" href="/"><span id='navText'>Glimpse </span> 2020</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Shop
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/">Men's</a></li>
            <li><a class="dropdown-item" href="/">Women's</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="/">Party</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a id='navItemText' class="nav-link" href="/contact">Contact</a>
        </li>
      </ul>
      <button className='btn btn-sm'><img id='searchBtn'/></button>
      <button id='accountBtn' className='btn btn-sm'><img id='accountBtn'/></button>
      <button id='cartBtn' className='btn btn-sm'><img id='cartBtn'/></button>
    </div>
  </div>
</nav>
    </>);
}