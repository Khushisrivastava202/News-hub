import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div class="container">
  <footer class="py-3 my-4">
    <ul class="nav justify-content-center border-bottom pb-3 mb-3">
      <li class="nav-item"><Link to="/" class="nav-link px-2 text-body-secondary">Home</Link></li>
      <li class="nav-item"><a href="/categ" class="nav-link px-2 text-body-secondary">Categories</a></li>
      <li class="nav-item"><a href="https://www.ndtv.com/" class="nav-link px-2 text-body-secondary">NEWS</a></li>
      <li class="nav-item"><a href="/others" class="nav-link px-2 text-body-secondary">Others</a></li>
      <li class="nav-item"><a href="/about" class="nav-link px-2 text-body-secondary">About</a></li>
    </ul>
    <p class="text-center text-body-secondary">© 2024 News website, Inc</p>
  </footer>
</div>
  )
}

export default Footer
